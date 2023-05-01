'use client'
import { DocumentData } from 'firebase/firestore';
import { useReducer, useState, useRef } from 'react';
import { useContext } from 'react';
import CheckBoxContext from '../context/CheckBoxContext';

type Props = {
    message: DocumentData;
    messageId: number;
    messageArrayLength: number
};

function Message({ message, messageId, messageArrayLength }: Props) {
    const [showCheckBox, setShowCheckBox] = useState(false);
    const [checkBoxStatus, setCheckBoxStatus] = useState(false)
    const isChatGPT = message.user.name === "ChatGPT";
    const checkBoxCtx = useContext(CheckBoxContext);
    const checkBoxRef = useRef(null);

    const handleMouseEnter = () => {
        if(checkBoxCtx.checkedId) return
        setShowCheckBox(true);
    }
    const handleMouseLeave = () => {
        !(checkBoxCtx.checkedId == messageId) && setShowCheckBox(false);
    }

    const handleImageClick = () => {
        if(checkBoxCtx.checkedId == messageId){
            checkBoxRef.current.click();
        }
        else if(showCheckBox){
            checkBoxRef.current.click();
        }
        return;
    }

    const handleCheckBoxClick = () => {
        // if()
        if(!checkBoxRef.current.checked){
            console.log('setting to null')
            // checkBoxRef.current.click();
            checkBoxCtx.setClicked(null);
        }
        else{
            console.log('setting to messageId: ' + messageId)
            // checkBoxRef.current.click()
            checkBoxCtx.setClicked(messageId)
        }
    }

    return (
        <>
        <div className={`py-5 text-white ${isChatGPT && "bg-[#434654]"}`} 
             onMouseLeave={handleMouseLeave}
        >
            <div className="flex space-x-5 px-10 max-w-2xl mx-auto">
                <div className="flex flex-col shrink-0">
                    <img src={message.user.avatar} 
                         alt="" 
                         onClick={ e => handleImageClick()}
                         className="h-8 w-8 rounded-sm" 
                         onMouseEnter={handleMouseEnter}
                    />
                    <div>
                        {
                            
                            messageArrayLength != messageId+1 && (
                                <input type="checkbox" 
                                    ref={checkBoxRef}
                                    onClick={ e => handleCheckBoxClick()}
                                    className={`${!showCheckBox && 'opacity-0 '}w-4 h-4 
                                                         text-[#202123] bg-gray-100 border-pink-400 rounded 
                                                         transition opacity duration-500 outline-none`}
                            />)}
                    </div> 

                </div>
                <p className="pt-1 text-sm mr-4">
                    {message.text}
                </p>
            </div>
        </div>
        </>
    )
}

export default Message
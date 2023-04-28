import { DocumentData } from 'firebase/firestore';

type Props = {
    message: DocumentData;
};

function Message({ message }: Props) {
    const isChatGPT = message.user.name === "ChatGPT";

    return (
        <div className={`py-5 text-white ${isChatGPT && "bg-[#434654]"}`}>
            <div className="flex space-x-5 px-10 max-w-2xl mx-auto">
                <div className="flex flex-col shrink-0">
                    <img src={message.user.avatar} alt="" className="h-8 w-8 rounded-sm" />
                    <div>
                        <input type="checkbox" className='w-4 h-4 text-[#202123] bg-gray-100 border-pink-400 rounded focus:'/>
                    </div> 

                </div>
                <p className="pt-1 text-sm mr-4">
                    {message.text}
                </p>
            </div>
        </div>
    )
}

export default Message
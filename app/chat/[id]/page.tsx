'use client'

import Chat from "../../../components/Chat";
import ChatInput from "../../../components/ChatInput";
import CheckBoxContext from '../../../context/CheckBoxContext';
import { useState } from "react";

type Props = {
  params: {
    id: string
  }
}

function ChatPage({params: {id}} : Props) {
  const [checkedById, setCheckedById] = useState(null);

  const handleCheckBoxClick = (messageId) => {
    setCheckedById(messageId);
  }    
  
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <CheckBoxContext.Provider
        value={{
          checkedId: checkedById,
          setClicked: handleCheckBoxClick
      }}
    >
        <Chat chatId={id}/>
        <ChatInput chatId={id}/>
      </CheckBoxContext.Provider>
    </div>
  )
}

export default ChatPage
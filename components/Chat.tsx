"use client"

import { collection, orderBy, query } from 'firebase/firestore';
import {useSession} from 'next-auth/react';
import { useCollection } from 'react-firebase-hooks/firestore';
import { db } from '../firebase';
import Message from './Message';
import { ArrowDownCircleIcon } from '@heroicons/react/24/outline';

type Props = {
    chatId: string;
};

function Chat({chatId}:Props){
    const {data: session} = useSession();
    
    const [messages] = useCollection(session && query(
        collection(db, "users", session?.user?.email!, "chats", chatId, "messages"),
        orderBy("createdAt", "asc")
    ));

    const length = messages ? Object.values(messages).length : null;

    return (
        <div className="flex-1 overflow-y-auto overflow-x-hidden">
            {messages?.empty && (
                <>
                <p className="mt-10 text-center text-white">
                    Start by typing your prompt below!
                </p>
                <ArrowDownCircleIcon className="h-10 w-10 mx-auto mt-5 text-white animate-bounce" />
                </>
            )}
            {messages?.docs.map( (message, index, length) => (
                <Message key={message.id} messageId={index} message={message.data()} messageArrayLength={length.length} />
                // messageArrayLength is simply used in keeping the checkbox from appearing on the last element
            ))}
        </div>
    )
}

export default Chat;
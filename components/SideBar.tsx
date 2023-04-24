'use client'
import {collection, query, orderBy} from 'firebase/firestore'
import {useCollection} from "react-firebase-hooks/firestore"
import {useSession, signOut} from "next-auth/react"
import {db} from '../firebase'
import NewChat from './NewChat'
import ChatRow from './ChatRow'
import ModelSelection from './ModelSelection'

function SideBar() {
  const {data: session} = useSession();
  const [chats, loading, error] = useCollection(
    session && query(
      collection(db, 'users', session?.user?.email!, 'chats'),
      orderBy('createdAt', 'asc')
    )
  );
console.log(chats);
  return (
    <div className="p-2 flex flex-col h-screen">
        <div className="flex-1">
          {loading && (
            <div className="animate-pulse
              text-center text-white">
              <p>Loading Chats...</p>
            </div>
          )}
            <div>
                <NewChat />
                <div className="hidden sm:inline">
                    <ModelSelection />
                </div>
                {chats?.docs.map(chat => {
                  return <ChatRow key={chat.id} id={chat.id} />
                })}
            </div>
        </div>
        {session && <img  onClick={()=>signOut()}
                          className="h-12 w-12 rounded-full cursor-pointer mx-auto mb-2 hover:opacity-50"
                          src={session?.user?.image!} alt="Profile Picture" />}
    </div>
  )
}

export default SideBar

//WYSBD, why is Toast not working, and no messages are added to DB... not sure if I'm getting a res from gpt or not
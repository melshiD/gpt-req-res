import '../styles/globals.css'
import SideBar from '../components/SideBar'
import SessionProvider from '../components/SessionProvider'
import { getServerSession } from 'next-auth'
import { authOptions } from '../pages/api/auth/[...nextauth]'
import Login from '../components/Login'
import ClientProvider from '../components/ClientProvider'

export const metadata = {
  title: 'ChatGPT Portal',
  description: 'Generated by Next.js and David Melsheimer',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions)
  console.log(session)
  return (
    <html lang="en">
      <body>
        <SessionProvider session={session}>
          {!session ? (
            <Login />
          ) : (
            <div className='flex'>
              {/*sidebar*/}
              <div className="bg-[#202123] max-w-xs h-screen overflow-y-auto md:min-w-[18rem]">
                <SideBar />
              </div>
              <ClientProvider />

                <div className="bg-[#343541] flex-1">
                  {children}
                </div>
            </div>
          )}
        </SessionProvider>
      </body>
    </html>
  )
}
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { verify } from 'jsonwebtoken';

function EditorNavbar() {
    const router = useRouter()
    function handleLogout() {
        localStorage.removeItem('jwtToken')
        router.push('/login')
    }

    // const [user, setUser] = useState(null)
    // const [userType, setUserType] = useState(null)
    // let secret = 's%28^45&&mdn'
    // useEffect(() => {
    //   let jwt = localStorage.getItem('jwtToken')

    //   if (jwt == undefined) {
    //     router.push('/login')
    //   }
    //   try {
    //     let logged = verify(jwt, secret);
    //     setUser(logged.user)
    //     setUserType(logged.type)
    //   } catch (e) {
    //     router.push('/login')
    //   }
    // }, [secret])

    return (
        <div className='p-2 bg-[#6f6af8] rounded-[25px] h-[98vh] min-h-[800px] w-[95px] mx-2 my-[1vh] grid'>
            <Link href='/'>
                <div>
                    <Image src='/logoIcon.png' width={'80px'} height={'60px'} className='block text-center' />
                </div>
            </Link>
            <div className='mt-2'>
                <Link href='/'>
                    <div className='my-3 h-20 cursor-pointer hover:bg-[#5953ff] p-4 rounded-2xl flex items-center'>
                        <img src="home.png" className='w-8 mx-auto' />
                    </div>
                </Link>
                <div className='my-3 h-20 cursor-pointer hover:bg-[#5953ff] p-4 rounded-2xl flex items-center'>
                    <img src="email.png" className='w-10 ml-[1px] mx-auto' />
                </div>
                {/* {userType != 'editor' ?
          ()
          : null} */}
                <Link href='/contacts'>
                    <div className='my-3 h-20 cursor-pointer hover:bg-[#5953ff] p-4 rounded-2xl flex items-center'>
                        <img src="contactBook.png" className='w-9 ml-[7px] mx-auto' />
                    </div>
                </Link>
                <div className='my-3 h-20 cursor-pointer hover:bg-[#5953ff] p-4 rounded-2xl flex items-center'>
                    <img src="setting.png" className='w-9 mx-auto' />
                </div>
            </div>
            <div className='mt-auto' onClick={handleLogout}>
                <div className='my-3 h-20 cursor-pointer hover:bg-[#5953ff] p-4 rounded-2xl flex items-center'>
                    <img src="log-out.png" className='w-8 ml-3 mx-auto' />
                </div>
            </div>
        </div >
    )
}

export default EditorNavbar
import Head from 'next/head'
import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { NextResponse } from 'next/server';
import { verify } from 'jsonwebtoken';
import { useRouter } from 'next/router'




function test() {
    const [user, setUser] = useState(null)
    const [userType, setUserType] = useState(null)
    const router = useRouter();
    let secret = 's%28^45&&mdn'
    useEffect(() => {
        let jwt = localStorage.getItem('jwtToken')

        if (jwt == undefined) {
            router.push('/login')
        }
        try {
            let logged = verify(jwt, secret);
            setUser(logged.user)
            setUserType(logged.type)
        } catch (e) {
            router.push('/login')
        }
    }, [secret])


    return (
        <div className='bg-[#f8f9fb]'>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
            </Head>
            <div className='flex justify-between font-[Poppins]'>
                <div className=''>
                    <Navbar />
                </div>
                <div className='w-full mt-8 mx-6'>
                    <div className='text-4xl font-semibold'>
                        <h2>Good morning, {user}!</h2>
                    </div>
                    <div className='grid grid-cols-4 gap-6 w-full mx-auto mt-12'>
                        <div className='bg-white col-span-1 h-40 rounded-3xl shadow-[0_3px_4px_0_rgba(0,0,0,0.05)]'></div>
                        <div className='bg-white col-span-1 h-40 rounded-3xl shadow-[0_3px_4px_0_rgba(0,0,0,0.05)]'></div>
                        <div className='bg-white col-span-1 h-40 rounded-3xl shadow-[0_3px_4px_0_rgba(0,0,0,0.05)]'></div>
                        <div className='bg-white col-span-1 h-40 rounded-3xl shadow-[0_3px_4px_0_rgba(0,0,0,0.05)]'></div>
                    </div>
                </div>
                <div className=''>
                    <Sidebar />
                </div>
            </div>
        </div>
    )
}

export default test

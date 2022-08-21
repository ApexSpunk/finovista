import React, { useState, useEffect } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router';
import { verify } from 'jsonwebtoken';


function login() {
    const router = useRouter()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    let secret = 's%28^45&&mdn'
    useEffect(() => {
        let jwt = localStorage.getItem('jwtToken')

        if (jwt == undefined) {
            router.push('/login')
        }
        try {
            let logged = verify(jwt, secret);
            if(logged){
                router.push('/')
            }
        } catch (e) {
            router.push('/login')
        }
    }, [secret])

    const handleChange = (e) => {
        if (e.target.name == 'email') {
            setEmail(e.target.value)
        } else if (e.target.name == 'password') {
            setPassword(e.target.value)
        }
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        const data = { email, password }
        let res = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        let response = await res.json()
        if (response.success) {
            setEmail('')
            setPassword('')
            toast.success('Login Successfull!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            localStorage.setItem('jwtToken', response.jwtToken)
            setTimeout(() => {
                router.push('/')
            }, 1500);
        } else {
            toast.success('Invalid Credentials!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    }
    return (
        <><ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover />
            <div className='grid grid-cols-3 h-[100vh] '>
                <div className='col-span-1 shadow-2xl flex items-center justify-center px-[15%]'>
                    <div className='w-full'>
                        <div>
                            <img src="img/finovista.png" alt="" className='w-48 mx-auto' />
                        </div>
                        <div>
                            <h2 className='text-3xl font-semibold my-10 text-center text-gray-600'>Welcome Back!</h2>
                        </div>
                        <div>
                            <form onSubmit={handleSubmit} method="POST">
                                <div className='mt-4'>
                                    <label className='font-semibold text-gray-600'>Email</label>
                                    <input type="email" onChange={handleChange} id='email' name='email' className='p-3 w-full border rounded-md text-lg outline-[#928fff] placeholder:text-gray-300' placeholder='Enter Your Email' />
                                </div>
                                <div className='mt-4'>
                                    <label className='font-semibold text-gray-600'>Password</label>
                                    <input type="password" onChange={handleChange} id='password' name='password' className='p-3 w-full border rounded-md text-lg outline-[#928fff] placeholder:text-gray-300' placeholder='Enter Your Password' />
                                </div>
                                <div>
                                    <button className='px-12 w-full py-2 bg-[#6f6af8] my-6 text-white font-semibold rounded-xl text-lg'>LOGIN</button>
                                </div>
                            </form>
                        </div>
                        <div className='my-4'>
                            <p className='text-md font-semibold text-center'><a href="#" className=' text-blue-600'>I forgot my password</a></p>
                        </div>
                        <div>
                            <p className='text-md font-semibold text-center'>Don't have an account? <a href="/signup" className=' text-blue-600'>Sign Up</a></p>
                        </div>
                    </div>

                </div>
                <div className='col-span-2  '>
                    <img src="img\amy-hirschi-szrJ3wjzOMg-unsplash.jpg" alt="" className='object-cover w-full h-[100vh] z-10' />
                </div>
            </div></>
    )
}

export default login
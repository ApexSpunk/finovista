import React, { useState, useEffect } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router'
import { verify } from 'jsonwebtoken';


function signup() {
    // let router = useRouter()
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

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
            if (logged.user != 'super') {
                router.push('/login')
            }
        } catch (e) {
            router.push('/login')
        }
    }, [secret])


    const handleChange = (e) => {
        if (e.target.name == 'name') {
            setName(e.target.value)
        } else if (e.target.name == 'email') {
            setEmail(e.target.value)
        } else if (e.target.name == 'password') {
            setPassword(e.target.value)
        } else if (e.target.name == 'userType') {
            setUserType(e.target.value)
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const data = { name, email, password, userType }
        let res = await fetch('/api/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        let response = await res.json()
        if (response.success) {
            setName('')
            setEmail('')
            setPassword('')
            setUserType('')
            toast.success('Your account has been created!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            // setTimeout(() => {
            //     router.push('http://localhost:3000/login')
            // }, 1500);
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
            pauseOnHover /><div className='grid grid-cols-3 h-[100vh] '>
                <div className='col-span-1 shadow-2xl flex items-center justify-center px-[15%]'>
                    <div>
                        <div>
                            <img src="img/finovista.png" alt="" className='w-48 mx-auto' />
                        </div>
                        <div>
                            <h2 className='text-3xl font-semibold my-10 text-center text-gray-600'>Create an account</h2>
                        </div>
                        <div>
                            <form onSubmit={handleSubmit} method="POST">
                                <div className='mt-4'>
                                    <label className='font-semibold text-gray-600'>Name</label>
                                    <input type="text" onChange={handleChange} id='name' name='name' className='p-3 w-full border rounded-md text-lg outline-[#928fff] placeholder:text-gray-300' placeholder='Enter Your Name' required />
                                </div>
                                <div className='mt-4'>
                                    <label className='font-semibold text-gray-600'>Email</label>
                                    <input type="email" onChange={handleChange} id='email' name='email' className='p-3 w-full border rounded-md text-lg outline-[#928fff] placeholder:text-gray-300' placeholder='Enter Your Email' required />
                                </div>
                                <div className='mt-4'>
                                    <label className='font-semibold text-gray-600'>Password</label>
                                    <input type="password" onChange={handleChange} id='password' name='password' className='p-3 w-full border rounded-md text-lg outline-[#928fff] placeholder:text-gray-300' placeholder='Enter Your Password' required />
                                </div>
                                <div className='mt-4'>
                                    <label className='font-semibold text-gray-600'>User Type</label>
                                    <select type="text" onChange={handleChange} id='userType' name='userType' className='p-3 w-full border rounded-md text-lg outline-[#928fff] placeholder:text-gray-300' placeholder='Enter Your Password' required>
                                        <option value=''>Select User</option>
                                        <option value='super'>Super Admin</option>
                                        <option value='admin'>Admin</option>
                                        <option value='editor'>Editor</option>
                                    </select>
                                </div>
                                <div>
                                    <button className='px-12 w-full py-2 bg-[#6f6af8] my-6 text-white font-semibold rounded-xl text-lg'>SIGNUP</button>
                                </div>
                            </form>
                        </div>
                        <div>
                            <p className='text-center text-sm mb-6'>By clicking the “Sign up” button, you are creating a Finovista account and therefore you agree to Finovista Company’s Terms of Use and Privacy Policy.</p>
                        </div>
                        <div>
                            <p className='text-md font-semibold text-center'>Already have an account?<a href="/login" className=' text-blue-600'>Log in</a></p>
                        </div>
                    </div>

                </div>
                <div className='col-span-2  '>
                    <img src="img\alesia-kazantceva-XLm6-fPwK5Q-unsplash.jpg" alt="" className='object-cover w-full h-[100vh] z-10' />
                </div>
            </div></>
    )
}

export default signup
import { Box, Button, Input, InputGroup, Text } from '@chakra-ui/react'
import { data } from 'autoprefixer'
import { useSession } from 'next-auth/react'
import Head from 'next/head'
import React from 'react'
import { useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Navbar from '../../components/admin/Navbar'
import Topbar from '../../components/admin/Topbar'

function setting() {
    const {data:session} = useSession()
    const [data, setData] = React.useState({
        name: '',
        email: '',
        password: '',
        role: '',
    })
    useEffect(() => {
        if (session) {
            setData({ ...data,id:session.user.id, name: session.user.name, email: session.user.email, role: session.user.role })
        }
    }, [session])
    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const response = fetch('/api/users', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        if(response){
            toast.success('profile updated successfully', {
                position: 'top-center',
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
        }
        setData({ ...data, password: '' })
    }
  return (
    <div>
            <Head>
                <title>Finovista Dashboard</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <main className="bg-gray-100 dark:bg-gray-800 rounded-2xl h-screen overflow-hidden relative">
                <div className="flex items-start justify-between">
                    <div className="h-screen hidden lg:block my-4 ml-4 shadow-lg relative w-80">
                        <div className="bg-white h-full rounded-2xl dark:bg-gray-700">
                            <div className="flex items-center justify-center pt-6">
                                <img src="/img/finovista.png" alt="" className="w-40" />
                            </div>
                            <Navbar />
                        </div>
                    </div>
                    <div className="flex flex-col w-full pl-0 md:p-4 md:space-y-4">
                        <Topbar />
                        <ToastContainer />
                        <div className="overflow-auto h-screen pb-24 pt-2 pr-2 pl-2 md:pt-0 md:pr-0 md:pl-0">
                            <div className="grid">
                                <div className="w-full">
                                    <div className="mb-4">
                                        <div className="shadow-lg rounded-2xl p-4 bg-white dark:bg-gray-700">
                                            <Box className="flex items-center justify-between titleContent">
                                                <Text fontSize='xl' fontWeight='500'>User Setting</Text>
                                            </Box>
                                            <div className="grid">
                                            <Box mt='4'>
                                                <InputGroup className="mb-4">
                                                    <Input type="text" placeholder="name" name='name' value={data.name} onChange={handleChange} />
                                                </InputGroup>
                                                <InputGroup className="mb-4">
                                                    <Input type="text" placeholder="email" name='email' value={data.email} onChange={handleChange} />
                                                </InputGroup>
                                                <InputGroup className="mb-4">
                                                    <Input type="text" placeholder="password" name='password' value={data.password} onChange={handleChange} />
                                                </InputGroup>
                                                <Button className="w-full" colorScheme="blue" onClick={handleSubmit}>Save</Button>
                                            </Box>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
  )
}

setting.auth = { role: "admin" }

export default setting

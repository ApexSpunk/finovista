import React, { useState } from "react";
import Navbar from "../../components/admin/Navbar";
import Topbar from "../../components/admin/Topbar";
import Head from "next/head";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { Box, Input, InputGroup, Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, Text, useDisclosure, Table, Thead, Tr, Th, Tbody, Td } from "@chakra-ui/react";
import { useEffect } from "react";

function index() {
    const [userData, setUserData] = useState({ type: "Add", name: "", email: "", password: "", role: "" });
    const [users, setUsers] = useState([]);
    const { isOpen, onOpen, onClose } = useDisclosure()
    const handleChanges = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };
    const addUser = () => {
        axios.post("/api/users", userData).then((res) => {
            if (res.data.success) {
                toast.success("User added successfully", {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }
        });
        setUsers([...users, userData]);
        onClose();
    };
    const updateUser = () => {
        axios.put("/api/users", userData).then((res) => {
            if (res.data.success) {
                toast.success("User updated successfully", {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }
        });
        setUsers(users.map((user) => (user._id === userData.id ? userData : user)));
        onClose();
    };
    const deleteUser = (id) => {
        axios.delete("/api/users", { data: { id } }).then((res) => {
            if (res.data.success) {
                toast.success("User deleted successfully", {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }
        });
        setUsers(users.filter((user) => user._id !== id));
    };
    const getUsers = () => {
        axios.get("/api/users").then((res) => {
            setUsers(res.data.users);
        });
    };
    useEffect(() => {
        getUsers();
    }, []);
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
                                                <Text fontSize='xl' fontWeight='500'>Users</Text>
                                                <Button onClick={() => {
                                                    onOpen()
                                                    setUserData({ type: "Add", name: "", email: "", password: "", role: "" })
                                                }}>Add User</Button>
                                            </Box>
                                            <div className="grid">
                                                <Table variant="simple" mt='4'>
                                                    <Thead>
                                                        <Tr>
                                                            <Th>Name</Th>
                                                            <Th>Email</Th>
                                                            <Th>Role</Th>
                                                            <Th>Actions</Th>
                                                        </Tr>
                                                    </Thead>
                                                    <Tbody>
                                                        {users.map((user) => (
                                                            <Tr key={user._id}>
                                                                <Td>{user.name}</Td>
                                                                <Td>{user.email}</Td>
                                                                <Td>{user.role}</Td>
                                                                <Td>
                                                                    <Button colorScheme="blue" size="sm" onClick={() => {
                                                                        onOpen()
                                                                        setUserData({ id: user._id, type: "Edit", name: user.name, email: user.email, password: user.password, role: user.role })
                                                                    }}>
                                                                        Edit
                                                                    </Button>
                                                                </Td>
                                                            </Tr>
                                                        ))}
                                                    </Tbody>
                                                </Table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>{userData.type} {userData.name}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <InputGroup className="mt-4">
                            <Input type="text" placeholder="Name" onChange={handleChanges} name="name" value={userData.name} />
                        </InputGroup>
                        <InputGroup className="mt-4">
                            <Input type="email" placeholder="Email" onChange={handleChanges} name="email" value={userData.email} />
                        </InputGroup>
                        <InputGroup className="mt-4">
                            <Input type="password" placeholder="Password" onChange={handleChanges} name="password" value={userData.password} />
                        </InputGroup>
                        <Select name="role" mt='4' value={userData.role} onChange={handleChanges}>
                            <option value="user">User</option>
                            <option value="editor">Editor</option>
                            <option value="admin">Admin</option>
                        </Select>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='gray' mr={3} onClick={onClose}>
                            Close
                        </Button>
                        {
                            userData.type == "Edit" && <Button colorScheme='red' mr={3} onClick={() => {
                                deleteUser(userData.id)
                                onClose()
                            }}>
                                Delete
                            </Button>
                        }
                        <Button colorScheme='blue' onClick={userData.type == "Add" ? addUser : updateUser}>{userData.type == "Add" ? 'Save' : "update"} User</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </div>
    );
}

index.auth = { role: "admin" }

export default index;


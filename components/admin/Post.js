import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Head from "next/head";
import Navbar from "../admin/Navbar";
import Topbar from "../admin/Topbar";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEdit } from "@fortawesome/free-solid-svg-icons";
import { useSession } from "next-auth/react";
import { useDispatch, useSelector } from "react-redux";
import { deletePost, getPosts } from "../../redux/post/actions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
import { DELETE_POST_RESET } from "../../redux/post/actionTypes";
import { AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Button, Flex, Heading, Table, Tbody, Td, Text, Th, Thead, Tr, useDisclosure } from "@chakra-ui/react";

function Post({ api, getData, type, link }) {

    const { deletePost: { loading, error, success } } = useSelector(state => state.post)
    const { posts: { data: posts, loading: postsLoading, error: postsError } } = useSelector(state => state.post)
    const router = useRouter()
    const { route } = router.query
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = React.useRef()
    const [page, setPage] = useState(1)
    const [postId, setPostId] = useState(null)

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPosts(api, getData, 10, page))
    }, [page, route])

    useEffect(() => {
        if (success) {
            dispatch(getPosts(api, getData, 10, page))
            toast.success("Post deleted successfully");
            dispatch({ type: DELETE_POST_RESET })
        }
    }, [success]);

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
                <ToastContainer position="top-center" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
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
                        <div className="overflow-auto h-screen pb-24 pt-2 pr-2 pl-2 md:pt-0 md:pr-0 md:pl-0">
                            <div className="grid ">
                                <div className="w-full">
                                    <div className="mb-4">
                                        <div className="shadow-lg rounded-2xl p-4 bg-white dark:bg-gray-700">
                                            <div className="grid">
                                                {/* <Home /> */}
                                                <div className="flex items-center justify-between titleContent">
                                                    <Text fontSize='2xl' fontWeight='semibold'>All {type}</Text>
                                                    <div className="flex items-center gap-4">
                                                        <Link href="/admin/category">
                                                            Category
                                                        </Link>
                                                        <Link href={`./${route}/add`}>Add</Link>
                                                    </div>
                                                </div>
                                                {postsLoading ? (
                                                    <h3>Loading...</h3>
                                                ) : (
                                                    <Table variant='simple' className="table-auto w-full mt-4 border-collapse contentTable">
                                                        <Thead className="bg-gray-100 dark:bg-gray-700">
                                                            <Tr className="text-left">
                                                                <Th className="px-4 py-2">Name</Th>
                                                                <Th className="px-4 py-2 text-center w-[90px]">
                                                                    Actions
                                                                </Th>
                                                                <Th className="px-4 py-2 text-center w-[150px]" >
                                                                    Delete
                                                                </Th>
                                                            </Tr>
                                                        </Thead>
                                                        <Tbody className="text-gray-700 dark:text-gray-200">
                                                            {posts.map((post) => (
                                                                <Tr key={post._id}>
                                                                    <Td>
                                                                        <Text fontWeight='500'>
                                                                            <Link href={`../${link}/${post.slug}`}>
                                                                                {post.title}
                                                                            </Link>
                                                                        </Text>
                                                                    </Td>
                                                                    <Td>
                                                                        <Flex className="justify-center" gap={4}>
                                                                            <Link href={`../${link}/${post.slug}`}>
                                                                                <FontAwesomeIcon
                                                                                    icon={faEye}
                                                                                    height="20px"
                                                                                    className="cursor-pointer hover:text-blue-600 transform hover:scale-110"
                                                                                />
                                                                            </Link>
                                                                            <Link
                                                                                href={`/admin/${route}/edit/${post.slug}`}
                                                                            >
                                                                                <FontAwesomeIcon
                                                                                    icon={faEdit}
                                                                                    height="20px"
                                                                                    className="cursor-pointer hover:text-blue-600 transform hover:scale-110"
                                                                                />
                                                                            </Link>
                                                                        </Flex>
                                                                    </Td>
                                                                    <Td className="px-4 py-2 text-center">
                                                                        <Button size='sm' colorScheme='red' onClick={() => {
                                                                            onOpen()
                                                                            setPostId(post._id)
                                                                        }} className="px-4 py-[4px] bg-red-500 text-white rounded-md border-none cursor-pointer m-auto text-[16px]"
                                                                        >
                                                                            Delete
                                                                        </Button>
                                                                    </Td>
                                                                </Tr>
                                                            ))}
                                                        </Tbody>
                                                    </Table>
                                                )}
                                                <div className="flex items-center justify-center mt-4">
                                                    <Button size='md' colorScheme='blue' onClick={() => setPage(page - 1)} disabled={page === 1} className="bg-blue-500 text-white px-4 py-2 border-none rounded-md mt-4">
                                                        Prev
                                                    </Button>
                                                    <p className="text-center w-12 h-2">{page}</p>
                                                    <Button size='md' colorScheme='blue' onClick={() => setPage(page + 1)} className="bg-blue-500 text-white px-4 py-2 border-none rounded-md mt-4">Next</Button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <AlertDialog
                isOpen={isOpen}
                leastDestructiveRef={cancelRef}
                onClose={onClose}
            >
                <AlertDialogOverlay>
                    <AlertDialogContent>
                        <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                            Delete {type.slice(0, -1)}
                        </AlertDialogHeader>

                        <AlertDialogBody>
                            Are you sure? You can't undo this action afterwards.
                        </AlertDialogBody>

                        <AlertDialogFooter>
                            <Button ref={cancelRef} onClick={() => {
                                setPostId(null)
                                onClose()
                            }}>
                                Cancel
                            </Button>
                            <Button colorScheme='red' onClick={() => {
                                dispatch(deletePost(api, postId))
                                setPostId(null)
                                onClose()
                            }} ml={3}>
                                Delete
                            </Button>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialogOverlay>
            </AlertDialog>
        </div>
    );
}
Post.auth = { role: "admin" }
export default Post;

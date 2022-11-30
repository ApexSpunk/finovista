import Head from 'next/head'
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic';
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import AddMedia from '../../../../components/Media/AddMedia';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
const ReactDOMServer = require('react-dom/server');
const HtmlToReactParser = require('html-to-react').Parser;
import config from '../../../../components/Editor/config';
import { Button } from '@chakra-ui/react';



const htmlToReactParser = new HtmlToReactParser();



const importJodit = () => import('jodit-react');

const JoditEditor = dynamic(importJodit, {
    ssr: false,
});

function editevent() {


    const { data: session, status } = useSession()
    const router = useRouter();
    const editor = null
    const [content, setContent] = useState('')
    const [optionClass, setOptionClass] = useState('')
    const [registrationFormList, setregistrationFormList] = useState([])
    const [required, setRequired] = useState(false)
    const [reqList, setReqList] = useState([])
    const [eventid, setEventid] = useState('')
    const [eventTitle, setEventTitle] = useState('')
    const [location, setLocation] = useState('')
    const [fromDate, setFromDate] = useState('')
    const [toDate, setToDate] = useState('')
    const [fromTime, setFromTime] = useState('')
    const [toTime, setToTime] = useState('')
    const [thumbnail, setThumbnail] = useState('https://reactnativecode.com/wp-content/uploads/2018/02/Default_Image_Thumbnail.png')
    const [eventType, setEventType] = useState('')
    const [eventMode, setEventMode] = useState('')
    const [slug, setSlug] = useState('')
    const [showModal, setShowModal] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [image, setImage] = useState(null);
    const [optionsArr, setOptionsArr] = useState(['sal', 'firstName', 'lastName', 'email', 'secondEmail', 'phone', 'tel', 'designation', 'organizationName', 'organizationType', 'sector', 'subSector', 'subSector2', 'country', 'state', 'city', 'website', 'organizationProfile', 'remark1', 'remark2', 'remark3'])
    const [registrationType, setRegistrationType] = useState(null)
    const [formLink, setFormLink] = useState(null)
    const [isCopied, setIsCopied] = useState(false);
    const [embedVideo, setEmbedVideo] = useState("");
    const [whatsNew, setWhatsNew] = useState([]);
    const toastConfig = {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    }

    const fetchWhatsNew = async () => {
        if (router.isReady) {
            const { id } = router.query;
            if (!id) return null;
            const res = await fetch('/api/singleWhatsnew?slug=' + "/events" + "/" + id);
            const whatsNew = await res.json();
            whatsNew.whatsnew.length > 0 ? setWhatsNew(whatsNew.whatsnew[0]) : setWhatsNew({ _id: "", title: "", link: "", image: "" });
        }
    };

    const addWhatsNew = async () => {
        const res = await fetch('/api/whatsnew', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title: eventTitle,
                link: "/events/" + slug,
                image: thumbnail,
                created: Date.now(),
                category: "Event"
            }),
        });
        const whatsNew = await res.json();
        setWhatsNew(whatsNew.whatsnew);
        toast.success("Whats New Added Successfully", toastConfig);
    };

    const removeWhatsNew = async () => {
        const res = await fetch('/api/whatsnew', {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ id: whatsNew._id }),
        });
        setWhatsNew({ _id: "", title: "", link: "", image: "" });
        toast.warning("Whats New Removed Successfully", toastConfig);
    };

    function updateFields(value) {
        let fieldsArr = registrationFormList
        fieldsArr.push(value)
        setregistrationFormList(fieldsArr)
    }



    const copyToClipboard = (text, e) => {
        navigator.clipboard.writeText(text);
    };


    const fetchEvent = async () => {
        setLoading(true)
        if (router.isReady) {
            const { id } = router.query;
            if (!id) return null;
            try {
                const res = await fetch(`/api/singleEvent?slug=${id}`)
                const data = await res.json()
                setEventid(data.events[0]._id)
                setEventTitle(data.events[0].title)
                setLocation(data.events[0].location)
                setFromDate(data.events[0].fromDate)
                setToDate(data.events[0].toDate)
                setFromTime(data.events[0].fromTime)
                setToTime(data.events[0].toTime)
                setThumbnail(data.events[0].thumbnail)
                setEventType(data.events[0].type)
                setEventMode(data.events[0].mode)
                setSlug(data.events[0].slug)
                setContent(data.events[0].content)
                setOptionsArr(data.events[0].formElements)
                setOptionClass('optionSel')
                setRegistrationType(data.events[0].registrationType)
                setFormLink(data.events[0].formLink)
                setLoading(false)
            }
            catch (err) {
                setError(true)
                setLoading(true)
                console.log(err)
            }
        }


    }




    useEffect(() => {
        fetchEvent()
        fetchWhatsNew()
    }, [router.isReady])


    function handleClick() {
        setShowModal(!showModal)
    }

    async function publishEvent() {
        const reactElement = htmlToReactParser.parse(content);
        const reactHtml = ReactDOMServer.renderToStaticMarkup(reactElement);
        try {
            const eventData = { id: eventid, eventTitle, pageContent: reactHtml, location, fromDate, toDate, fromTime, toTime, thumbnail, eventType, eventMode, slug, isCompleted: false, formElements: optionsArr, registrationType, formLink }
            let response = await fetch(`../../../api/events`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(eventData)
            })
            let responseData = await response.json()
            toast.success(`Event ${eventTitle} Updated`, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } catch (error) {
            toast.error(`Slug Already Exist Please Check The URL`, {
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



    const uploadThumbnail = (event) => {
        if (event.target.files && event.target.files[0]) {
            const i = event.target.files[0];
            setImage(i);
        }
    };

    const uploadToServer = async (event) => {
        const body = new FormData();
        body.append("file", image);
        const response = await fetch("/api/imageUpload", {
            method: "POST",
            body
        });
        let ress = await response.json();
        setThumbnail(ress.data.Location)
    };

    const deleteEvent = async () => {
        try {
            let response = await fetch(`../../../api/events`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ id: eventid })
            })
            let responseData = await response.json()
            toast.success(`Event ${eventTitle} Deleted`, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            router.push('/admin/events')
        } catch (error) {
            console.log(error)
        }
    }





    function handleTitleInput(eventTitle) {
        setEventTitle(eventTitle)
        eventTitle = eventTitle.split(" ");
        eventTitle = eventTitle.join("-").toLowerCase();
        setSlug(eventTitle);
    }



    if (status === "loading") {
        return <p>Loading...</p>
    }

    if (status === "unauthenticated") {
        return <p>Access Denied</p>
    }


    return (
        <div>
            <div className='bg-[#f8f9fb]'>
                <Head>
                    <title>Create Next App</title>
                    <link rel="icon" href="/favicon.ico" />
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                </Head>
                <div className="bg-gray-100">
                    <ToastContainer
                        position="top-center"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover />
                    <div className='grid grid-cols-12 gap-6 font-[Poppins] pt-8 w-[95%] mx-auto'>
                        <div className='col-span-9'>
                            <div>
                                <input type="text" value={eventTitle} onChange={(eve) => { setEventTitle(eve.target.value) }} className='font-[Poppins] w-full p-2 rounded-lg border text-xl box-border' placeholder='Event Title' onBlur={(cou) => { handleTitleInput(cou.target.value) }} />
                                <div className='flex justify-between'>
                                    <h4 className='font-[500] my-4'>Permalink: &nbsp;<a href="#">{slug}</a></h4>
                                    <button className='border-0 rounded-3xl uppercase text-md bg-blue-700 text-white font-semibold cursor-pointer my-2 w-40 p-3' onClick={handleClick}>Add Media</button>
                                </div>
                            </div>
                            <JoditEditor
                                ref={editor}
                                value={content}
                                tabIndex={500}
                                config={config}
                                onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                                onChange={newContent => { }}
                            />
                        </div>
                        <div className='col-span-3'>
                            <div className='bg-white p-4 rounded-xl'>
                                <div>
                                    <h4>Publish</h4>
                                    <hr />
                                </div>
                                <div className='grid mt-4 text-center'>
                                    <p className='py-2'>status: {"published"}</p>
                                    <p className='py-2'>visibility: {"public"}</p>
                                    {/* Delete Post Button with fontAwseome Icon*/}
                                    <button onClick={deleteEvent} className='rdBtn flex justify-center content-center gap-2'><FontAwesomeIcon icon={faTrashAlt} height='20px' /> Delete</button>

                                </div>
                                <div className='grid mt-4 grid-cols-2 gap-2'>
                                    <button className='previewBtn w-full' onClick={publishEvent}>Update Event</button>
                                    <Link href='/admin/events'><button className='redBtn w-full'>Cancel</button></Link>
                                </div>
                            </div>
                            <div className='bg-white p-4 mt-4 rounded-xl'>
                                <div>
                                    <h4>Event Details</h4>
                                    <hr />
                                </div>
                                <div className='grid mt-4'>
                                    <div>
                                        <label className='text-sm text-gray-600'>Event Location</label>
                                        <input type="text" name="location" value={location} onChange={(loc) => setLocation(loc.target.value)} placeholder="Event Location" id="location" className='p-[6px] w-full rounded-md border pl-3 text-lg' />
                                    </div>
                                    <div className='grid grid-cols-2 gap-2'>
                                        <div>
                                            <label className='text-sm text-gray-600'>From Date</label>
                                            <input type="date" value={fromDate} onChange={(loc) => setFromDate(loc.target.value)} className='p-[6px] w-full rounded-md border pl-3 text-lg' />                                        </div>
                                        <div>
                                            <label className='text-sm text-gray-600'>To Date</label>
                                            <input type="date" value={toDate} onChange={(loc) => setToDate(loc.target.value)} className='p-[6px] w-full rounded-md border pl-3 text-lg' />                                        </div>
                                    </div>
                                    <div className='grid grid-cols-2 gap-2'>
                                        <div>
                                            <label className='text-sm text-gray-600'>From Time</label>
                                            <input type="time" value={fromTime} onChange={(loc) => setFromTime(loc.target.value)} className='p-[6px] w-full rounded-md border pl-3 text-lg' />                                        </div>
                                        <div>
                                            <label className='text-sm text-gray-600'>To Time</label>
                                            <input type="time" value={toTime} onChange={(loc) => setToTime(loc.target.value)} className='p-[6px] w-full rounded-md border pl-3 text-lg' />                                        </div>
                                    </div>
                                    <div>
                                        <label className='text-sm text-gray-600 '>Event Type</label>
                                        <select name="" id="" value={eventType} onChange={(loc) => setEventType(loc.target.value)} className='p-2 rounded-md border border-gray-300 w-full bg-transparent text-lg'>
                                            <option value="">Select Type</option>
                                            <option value="internal">Internal</option>
                                            <option value="external">External</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className='text-sm text-gray-600' >Select Mode</label>
                                        <select name="" id="" value={eventMode} onChange={(loc) => setEventMode(loc.target.value)} className='p-2 rounded-md border border-gray-300 w-full bg-transparent text-lg'>
                                            <option value="">Select Mode</option>
                                            <option value="in-person">In-person</option>
                                            <option value="hybrid">Hybrid</option>
                                            <option value="virtual">Virtual</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className='bg-white p-4 mt-4 rounded-xl'>
                                <div>
                                    <h4>Registration Type</h4>
                                    {registrationType}
                                    <select name="" id="" onChange={(loc) => setRegistrationType(loc.target.value)} className='p-2 my-3 rounded-md border border-gray-300 w-full bg-transparent text-lg' value={registrationType}>
                                        <option value="Google">Google</option>
                                        <option value="FinoMail">FinoMail</option>
                                    </select>
                                </div>
                                {
                                    registrationType === "Google" ? <div>
                                        <h4>Registration Form Link</h4>
                                        <input className="mt-4 mb-2 p-[6px] w-full rounded-md border pl-3 text-lg" placeholder='Google Form Link' onChange={(e) => { setFormLink(e.target.value) }} value={formLink} />
                                    </div> : <div>
                                        <h4>Registration Form List</h4>
                                        <div>
                                            <div className={'flex flex-wrap optionList mt-4 ' + optionClass} id={optionClass}>
                                                {optionsArr.map((option, k) => {
                                                    return <>{option[option.length - 1] == "*" ? <div key={k} className='reqOption bg-red-400 m-1 w-fit rounded-3xl pl-2  text-white'>{option}
                                                    </div> : <div key={k} className=' bg-blue-400 m-1 w-fit rounded-3xl pl-2  text-white'>{option}
                                                        <button className='border-none bg-transparent rounded-3xl text-white bg-blue-400 h-8 w-8 font-bold text-md hover:bg-blue-600 cursor-pointer'
                                                            onClick={() => {
                                                                let newArr = [...optionsArr]
                                                                newArr.splice(k, 1)
                                                                setOptionsArr(newArr)
                                                            }}
                                                        >X</button></div>
                                                    }</>
                                                })}
                                                <check className='w-full flex'>
                                                    <div className=' bg-blue-400 m-1 w-fit rounded-3xl  text-white block'>
                                                        <button className='border-none bg-transparent rounded-3xl text-white bg-red-500 text-2xl h-8 w-8 hover:bg-red-600 cursor-pointer'
                                                            onClick={() => { setOptionsArr(['sal', 'firstName', 'lastName', 'email', 'secondEmail', 'phone', 'tel', 'designation', 'organizationName', 'organizationType', 'sector', 'subSector', 'subSector2', 'country', 'state', 'city', 'website', 'organizationProfile', 'remark1', 'remark2', 'remark3']); setOptionClass('') }}
                                                        >&#8634;</button></div>
                                                    <div className=' bg-blue-400 m-1 w-fit rounded-3xl  text-white block'>
                                                        <button className='border-none bg-transparent rounded-3xl text-white bg-green-500 text-2xl h-8 w-8 hover:bg-green-600 cursor-pointer '
                                                            onClick={() => { setOptionClass('optionSel'); setRequired(true); setReqList(optionsArr) }}
                                                        >&#10004;</button></div>
                                                </check>
                                            </div>
                                        </div>
                                    </div>
                                }
                            </div>
                            {required ? <div className='bg-white p-4 mt-4 rounded-xl'>
                                <div>
                                    <h4>Required Form List</h4>
                                    <div>
                                        <div className={'flex flex-wrap optionList mt-4 '}>
                                            {reqList.map((option, k) => {
                                                return <>{option[option.length - 1] == "*" ? null : <div key={k} className=' bg-blue-400 m-1 w-fit rounded-3xl pl-2  text-white'>{option}
                                                    <button className='border-none bg-transparent rounded-3xl text-white bg-blue-400 h-8 w-8 font-bold text-md hover:bg-blue-600 cursor-pointer'
                                                        onClick={() => {
                                                            let newArr = [...reqList]
                                                            newArr[k] = newArr[k] + '*'

                                                            setOptionsArr(newArr)
                                                            setReqList(newArr)
                                                        }}
                                                    >X</button></div>
                                                }</>
                                            })}
                                            <check className='w-full flex'>
                                                <div className=' bg-blue-400 m-1 w-fit rounded-3xl  text-white block'>
                                                    <button className='border-none bg-transparent rounded-3xl text-white bg-green-500 text-2xl h-8 w-8 hover:bg-green-600 cursor-pointer '
                                                        onClick={() => { setRequired(false); setReqList(optionsArr) }}
                                                    >&#10004;</button></div>
                                            </check>
                                        </div>
                                    </div>
                                </div>
                            </div> : ''}
                            <div className='bg-white p-4 mt-4 rounded-xl'>
                                <div>
                                    <h4>Embed Video</h4>
                                    <div>
                                        <input className="mt-4 mb-2 p-[6px] w-full rounded-md border pl-3 text-lg" placeholder='Video Link' onChange={(e) => { setEmbedVideo(e.target.value) }} value={embedVideo} />
                                        <button
                                            disabled={embedVideo === '' ? true : false}
                                            className=" border-0 rounded-3xl uppercase text-md bg-blue-700 text-white font-semibold cursor-pointer my-2 w-full p-3 disabled:opacity-30 disabled:cursor-not-allowed"
                                            type="submit" onClick={() => {
                                                copyToClipboard(`<div class="responsiveFrame"><iframe class="responsive-iframe" src="${embedVideo}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""><br /></iframe></div>`)
                                                setIsCopied(true)
                                                setTimeout(() => {
                                                    setIsCopied(false)
                                                    setEmbedVideo('')
                                                }, 2000);
                                            }}><span>{isCopied ? 'Copied!' : 'Copy'}</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white p-4 mt-4 rounded-xl">
                                <div>
                                    <h4>Whats New</h4>
                                    <div>
                                        {
                                            whatsNew._id == "" ? (
                                                <Button onClick={
                                                    () => {
                                                        addWhatsNew();
                                                    }
                                                } className="bg-blue-500 w-full order cursor-pointer border-[#e9ecef] border-none rounded-lg my-4 px-4 py-3 font-[500] text-white">Add</Button>
                                            ) : (
                                                <Button onClick={() => {
                                                    removeWhatsNew();
                                                }} className="bg-red-500 w-full border cursor-pointer border-[#e9ecef] border-none rounded-lg my-4 px-4 py-3 font-[500] text-white">Remove</Button>

                                            )
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className='bg-white p-4 mt-4 rounded-xl'>
                                <div>
                                    <h4>Add Thumbnail</h4>
                                    <div>
                                        <img src={thumbnail} alt="" className='w-full' />
                                        <input name="myImage" onChange={uploadThumbnail} className="text-md bg-blue-100 file:uppercase file:font-semibold rounded-3xl my-2 text-grey-500 file:mr-5 file:py-2 file:px-6 file:rounded-full file:border-0 file:text-sm file:bg-blue-500 file:text-white hover:file:cursor-pointer hover:file:bg-amber-50 hover:file:text-amber-700 w-full" type="file" accept="image/*" />
                                        <button
                                            className=" border-0 rounded-3xl uppercase text-md bg-blue-700 text-white font-semibold cursor-pointer my-2 w-full p-3"
                                            type="submit"
                                            onClick={uploadToServer}
                                        >Upload Image</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <AddMedia handleClick={handleClick} showModal={showModal} />
        </div>
    )
}

export default editevent

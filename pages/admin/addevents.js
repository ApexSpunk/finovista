import Head from 'next/head'
import React, { useState, useRef, useMemo, useEffect, useRouter } from 'react';
import dynamic from 'next/dynamic';
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { Router } from 'next/router';


const importJodit = () => import('jodit-react');

const JoditEditor = dynamic(importJodit, {
    ssr: false,
});

function texteditor() {
    const editor = null
    const [content, setContent] = useState('')
    // const [permalink, setPermalink] = useState(null)
    const [optionClass, setOptionClass] = useState('')
    const [registrationFormList, setregistrationFormList] = useState([])
    function handleClick() {
        console.log(content)
    }

    function updateFields(value) {
        let fieldsArr = registrationFormList
        fieldsArr.push(value)
        setregistrationFormList(fieldsArr)
    }



    let config = {
        zIndex: 0,
        readonly: false,
        activeButtonsInReadOnly: ['source', 'fullsize', 'print', 'about'],
        toolbarButtonSize: 'middle',
        theme: 'default',
        enableDragAndDropFileToEditor: true,
        saveModeInCookie: false,
        spellcheck: true,
        editorCssClass: false,
        triggerChangeEvent: true,
        height: '1200px',
        direction: 'ltr',
        language: 'en',
        debugLanguage: false,
        i18n: 'en',
        tabIndex: -1,
        toolbar: true,
        enter: 'P',
        useSplitMode: false,
        colorPickerDefaultTab: 'background',
        imageDefaultWidth: 100,
        // removeButtons: ['source', 'fullsize', 'about', 'outdent', 'indent', 'video', 'print', 'table', 'fontsize', 'superscript', 'subscript', 'file', 'cut', 'selectall'],
        // disablePlugins: ['paste', 'stat'],
        events: {},
        textIcons: false,
        uploader: {
            insertImageAsBase64URI: true

        },
        placeholder: '',
        showXPathInStatusbar: false
    };

    const [eventTitle, setEventTitle] = useState('')
    const [location, setLocation] = useState('')
    const [fromDate, setFromDate] = useState('')
    const [toDate, setToDate] = useState('')
    const [fromTime, setFromTime] = useState('')
    const [toTime, setToTime] = useState('')
    const [thumbnail, setThumbnail] = useState('')
    const [eventType, setEventType] = useState('')
    const [eventMode, setEventMode] = useState('')
    const [slug, setSlug] = useState('')


    async function publishEvent() {
        try {
            const eventData = { eventTitle, pageContent: content, location, fromDate, toDate, fromTime, toTime, thumbnail, eventType, eventMode, slug, isCompleted: false, formElements: optionsArr }
            let response = await fetch(`../api/events`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(eventData)
            })
            let responseData = await response.json()
            toast.success(`Event ${eventTitle} Published`, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } catch (error) {
            console.log(error)
        }
    }




    function handleTitleInput(eventTitle) {
        eventTitle = eventTitle.split(" ");
        eventTitle = eventTitle.join("-").toLowerCase();
        setSlug(eventTitle);
        setEventTitle(eventTitle)
    }


    const [optionsArr, setOptionsArr] = useState(['sal', 'firstName', 'lastName', 'email', 'secondEmail', 'phone', 'tel', 'designation', 'organizationName', 'organizationType', 'sector', 'subSector', 'subSector2', 'country', 'state', 'city', 'website', 'organizationProfile', 'remark1', 'remark2', 'remark3'])

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
                                <input type="text" className='font-[Poppins] w-full p-2 rounded-lg border text-xl box-border' placeholder='Event Title' onBlur={(cou) => { handleTitleInput(cou.target.value) }} />
                                <h4 className='font-[500] my-2'>Permalink: &nbsp;<a href="#">{slug}</a></h4>
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
                                    <button className='previewBtn' onClick={publishEvent}>Publish Event</button>
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
                                        <input type="text" name="location" onChange={(loc) => setLocation(loc.target.value)} placeholder="Event Location" id="location" className='p-[6px] w-full rounded-md border pl-3 text-lg' />
                                    </div>
                                    <div className='grid grid-cols-2 gap-2'>
                                        <div>
                                            <label className='text-sm text-gray-600'>From Date</label>
                                            <input type="date" onChange={(loc) => setFromDate(loc.target.value)} className='p-[6px] w-full rounded-md border pl-3 text-lg' />                                        </div>
                                        <div>
                                            <label className='text-sm text-gray-600'>To Date</label>
                                            <input type="date" onChange={(loc) => setToDate(loc.target.value)} className='p-[6px] w-full rounded-md border pl-3 text-lg' />                                        </div>
                                    </div>
                                    <div className='grid grid-cols-2 gap-2'>
                                        <div>
                                            <label className='text-sm text-gray-600'>From Time</label>
                                            <input type="time" onChange={(loc) => setFromTime(loc.target.value)} className='p-[6px] w-full rounded-md border pl-3 text-lg' />                                        </div>
                                        <div>
                                            <label className='text-sm text-gray-600'>To Time</label>
                                            <input type="time" onChange={(loc) => setToTime(loc.target.value)} className='p-[6px] w-full rounded-md border pl-3 text-lg' />                                        </div>
                                    </div>
                                    <div>
                                        <label className='text-sm text-gray-600 '>Event Type</label>
                                        <select name="" id="" onChange={(loc) => setEventType(loc.target.value)} className='p-2 rounded-md border border-gray-300 w-full bg-transparent text-lg'>
                                            <option value="">Select Type</option>
                                            <option value="internal">Internal</option>
                                            <option value="external">External</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className='text-sm text-gray-600' >Select Mode</label>
                                        <select name="" id="" onChange={(loc) => setEventMode(loc.target.value)} className='p-2 rounded-md border border-gray-300 w-full bg-transparent text-lg'>
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
                                    <h4>Registration Form List</h4>
                                    <div>
                                        <div className={'flex flex-wrap optionList mt-4 ' + optionClass} id={optionClass}>
                                            {optionsArr.map((option, k) => {
                                                return <div key={k} className=' bg-blue-400 m-1 w-fit rounded-3xl pl-2  text-white'>{option}
                                                    <button className='border-none bg-transparent rounded-3xl text-white bg-blue-400 h-8 w-8 font-bold text-md hover:bg-blue-600 cursor-pointer'
                                                        onClick={() => {
                                                            let newArr = [...optionsArr]
                                                            newArr.splice(k, 1)
                                                            setOptionsArr(newArr)
                                                            console.log(optionsArr)
                                                        }}
                                                    >X</button></div>
                                            })}
                                            <check className='w-full flex'>
                                                <div className=' bg-blue-400 m-1 w-fit rounded-3xl  text-white block'>
                                                    <button className='border-none bg-transparent rounded-3xl text-white bg-red-500 text-2xl h-8 w-8 hover:bg-red-600 cursor-pointer'
                                                        onClick={() => { setOptionsArr(['sal', 'firstName', 'lastName', 'email', 'secondEmail', 'phone', 'tel', 'designation', 'organizationName', 'organizationType', 'sector', 'subSector', 'subSector2', 'country', 'state', 'city', 'website', 'organizationProfile', 'remark1', 'remark2', 'remark3']); setOptionClass('') }}
                                                    >&#8634;</button></div>
                                                <div className=' bg-blue-400 m-1 w-fit rounded-3xl  text-white block'>
                                                    <button className='border-none bg-transparent rounded-3xl text-white bg-green-500 text-2xl h-8 w-8 hover:bg-green-600 cursor-pointer '
                                                        onClick={() => { setOptionClass('optionSel') }}
                                                    >&#10004;</button></div>
                                            </check>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button onClick={handleClick}>hi</button>
                </div>
            </div>
        </div>
    );

}

export default texteditor

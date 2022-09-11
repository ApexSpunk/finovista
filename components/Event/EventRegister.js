import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faCalendarAlt, faPlus, faClock } from '@fortawesome/free-solid-svg-icons'
import FormElements from './FormElements'
import { title } from 'process'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function EventRegister(props) {

    const { event, Register, handleRegistor } = props

    const { title, content, fromDate, toDate, fromTime, toTime, location, thumbnail, type, mode, isCompleted, formElements } = event




    return (
        <>
            <div className='eventPostDetails my-12' >
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
                <div>
                    <div className='eventPostDetailsData'>
                        <div className="eventPost__content__left__bottom">
                            <h2>Event Title</h2>
                            <div className="flex gap-2">
                                <FontAwesomeIcon icon={faCalendarAlt} className="w-3" />
                                <p>30 Oct 2021 - 31 Oct 2021</p>
                            </div>
                            <div className="flex gap-2">
                                <FontAwesomeIcon icon={faClock} className="w-3" />
                                <p>11:20AM - 12:30PM</p>
                            </div>
                            <div className="flex gap-2">
                                <FontAwesomeIcon icon={faLocationDot} className="w-3" />
                                <p>Location</p>
                            </div>
                        </div>
                    </div>
                    <div className='eventDateTime w-[300px]'>
                        <div>
                            <h2 className='text-center'>Register Now</h2>
                            <div className="w-24 h-[3px] bg-gray-500 mb-8 mt-2 mx-auto"><div className="w-12 h-[3px] bg-[#2067ff]"></div></div>
                            <div className='flex gap-2 text-blue-600 font-semibold bg-blue-100 rounded-md p-3 mb-4 cursor-pointer hover:bg-blue-200 duration-700 content-center'>
                                <FontAwesomeIcon icon={faPlus} className="w-3 my-auto" />
                                <p>Add To Calender</p>
                            </div>
                            <div>
                                <div className="flex gap-2">
                                    <FontAwesomeIcon icon={faCalendarAlt} className="w-3" />
                                    <p>30 Oct 2021 - 31 Oct 2021</p>
                                </div>
                                <div className="flex gap-2">
                                    <FontAwesomeIcon icon={faLocationDot} className="w-3" />
                                    <p>Location</p>
                                </div>
                            </div>
                            <button className='border-none p-3 mt-4 w-full bg-blue-600 text-lg text-white rounded-lg cursor-pointer hover:bg-blue-800 duration-700' onClick={handleRegistor}>Register</button>
                            <p className='text-sm text-center mt-2 text-gray-400'>Register Now</p>
                        </div>
                    </div>
                </div>

            </div>
            {
                Register && <FormElements handleRegistor={handleRegistor} formElements={formElements} name={title} toast={toast} ToastContainer={ToastContainer} />
            }
        </>
    )
}

export default EventRegister

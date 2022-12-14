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
    const [fromYear, fromMonth, fromDay] = fromDate.split("-");
    const [toYear, toMonth, toDay] = toDate.split("-")
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']




    return (
        <>
            <div className='eventPostDetails grid-cols-2 my-12' >
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
                <div className='grid grid-cols-2 gap-[5%] mx-auto justify-center'>
                    <div className='eventPostDetailsData hidden col-span-1 md:grid'>
                        <div className="eventPost__content__left__bottom">
                            <h2>Event Title</h2>
                            <div className="flex gap-2">
                                <FontAwesomeIcon icon={faCalendarAlt} className="w-3" />
                                <p>{fromDay} {fromDate[0] == 0 ? months[fromMonth[fromMonth.length - 1]-1] : months[fromMonth-1]} {fromYear} to {toDay} {toDate[0] == 0 ? months[toMonth[toMonth.length - 1]-1] : months[toMonth-1]} {toYear}</p>
                            </div>
                            <div className="flex gap-2">
                                <FontAwesomeIcon icon={faClock} className="w-3" />
                                <p>{fromTime} - {toTime}</p>
                            </div>
                            <div className="flex gap-2">
                                <FontAwesomeIcon icon={faLocationDot} className="w-3" />
                                <p>{location}</p>
                            </div>
                        </div>
                    </div>
                    <div className='eventDateTime col-span-2 md:col-span-1 w-full'>
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
                                    <p>{fromDay} {fromDate[0] == 0 ? months[fromMonth[fromMonth.length - 1]-1] : months[fromMonth-1]} {fromYear} to {toDay} {toDate[0] == 0 ? months[toMonth[toMonth.length - 1]-1] : months[toMonth-1]} {toYear}</p>
                                </div>
                                <div className="flex gap-2">
                                    <FontAwesomeIcon icon={faLocationDot} className="w-3" />
                                    <p>{location}</p>
                                </div>
                            </div>
                            <button className='border-none p-3 mt-4 w-full bg-blue-600 text-lg text-white rounded-lg cursor-pointer hover:bg-blue-800 duration-700' onClick={handleRegistor}>Register</button>
                            <p className='text-sm text-center mt-2 text-gray-400'>Register Now</p>
                        </div>
                    </div>
                </div>

            </div>
            {
                Register && <FormElements handleRegistor={handleRegistor} formElements={formElements} name={title} toast={toast} ToastContainer={ToastContainer} title={title} />
            }
        </>
    )
}

export default EventRegister

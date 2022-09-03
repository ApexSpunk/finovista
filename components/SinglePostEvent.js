import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faCalendarAlt, faPlus, faClock } from '@fortawesome/free-solid-svg-icons'

function SinlePostEvent(props) {
    const { title } = props
    return (
        <div className="eventPost">
            <div className="eventPost__banner">
                <img src="https://finovista.com/wp-content/uploads/2020/05/MDP.png" alt="" />
                <div className="eventPost__banner__content">
                    <h1>{title}</h1>
                    <div className="flex gap-2">
                        <FontAwesomeIcon icon={faCalendarAlt} className="w-3" />
                        <p>30 Oct 2021 - 31 Oct 2021</p>
                    </div>
                    <div className="flex gap-2">
                        <FontAwesomeIcon icon={faLocationDot} className="w-3" />
                        <p>Location</p>
                    </div>
                </div>
            </div>
            <div className="eventPost__content">
                <div className="eventPost__content__left">
                    <div className="eventPost__content__left__top">
                        <h2>Event Description</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Voluptates, quibusdam. Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Voluptates, quibusdam. Lorem ipsum dolor sit
                            amet consectetur adipisicing elit. Voluptates, quibusdam.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Voluptates, quibusdam. Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Voluptates, quibusdam. Lorem ipsum dolor sit
                            amet consectetur adipisicing elit. Voluptates, quibusdam.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Voluptates, quibusdam. Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Voluptates, quibusdam. Lorem ipsum dolor sit
                            amet consectetur adipisicing elit. Voluptates, quibusdam.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                    </div>
                    <div className='eventPostDetails' >
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
                                    <div class="w-24 h-[3px] bg-gray-500 mb-8 mt-2 mx-auto"><div class="w-12 h-[3px] bg-[#2067ff]"></div></div>
                                    <div className='flex gap-2 text-blue-600 font-semibold bg-blue-100 rounded-md p-3 mb-4'>
                                        <FontAwesomeIcon icon={faPlus} className="w-3" />
                                        <p>Add To Calander</p>
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
                                    <button className='border-none p-3 mt-4 w-full bg-blue-600 text-lg text-white rounded-lg'>Register</button>
                                    <p className='text-sm text-center mt-2 text-gray-400'>Register Now</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default SinlePostEvent
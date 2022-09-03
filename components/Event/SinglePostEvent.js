import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faCalendarAlt, faPlus, faClock } from '@fortawesome/free-solid-svg-icons'
import EventRegister from './EventRegister'

function SinlePostEvent(props) {
    const { title } = props
    return (
        <div className="eventPost">
            <div className="eventPost__banner">
                <img src="https://finovista.com/wp-content/uploads/2021/05/WhatsApp-Image-2021-05-31-at-3.55.23-PM.jpeg" alt="" />
                <div className="eventPost__banner__content px-[5%]">
                    <div className='grid content-center'>
                        <div className="flex gap-2">
                            <FontAwesomeIcon icon={faCalendarAlt} className="w-3" />
                            <p>30 Oct 2021 - 31 Oct 2021</p>
                        </div>
                        <div className="flex gap-2">
                            <FontAwesomeIcon icon={faLocationDot} className="w-3" />
                            <p>Location</p>
                        </div>
                    </div>
                    <div>
                        <button className='border-none p-3 mt-4 w-44 bg-blue-600 text-lg text-white rounded-lg cursor-pointer hover:bg-blue-800 font-semibold duration-700'>Register</button>
                    </div>
                </div>
            </div>
            <div className='eventTitle mt-8'>
                <h1>{title}</h1>
                <div class="w-24 h-[4px] bg-gray-500 mb-8 mt-2"><div class="w-12 h-[4px] bg-[#2067ff]"></div></div>
            </div>
            <div className="eventPost__content">
                <div className="eventPost__content__left">
                    <div className="eventPost__content__left__top">
                        <div>
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
                        </div>
                        <br />
                        <div>
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
                        </div>
                        <br />
                        <img src="https://finovista.com/wp-content/uploads/2022/08/WhatsApp-Image-2022-08-25-at-12.47.57-PM.jpeg" alt="" width='100%' />
                        <br />
                        <div>
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
                        </div>
                    </div>
                    <EventRegister />
                </div>
            </div>
        </div>

    )
}

export default SinlePostEvent
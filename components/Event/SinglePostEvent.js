import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faCalendarAlt, faPlus, faClock } from '@fortawesome/free-solid-svg-icons'
import EventRegister from './EventRegister'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Parser from 'html-react-parser';
import SingleEventSkeleton from './SingleEventSkeleton'

function SinlePostEvent(props) {

    const [event, setEvent] = useState({})
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    const router = useRouter()
    const { slug } = router.query

    const [eventSlug, setEventSlug] = useState(slug)
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [fromDate, setFromDate] = useState('')
    const [toDate, setToDate] = useState('')
    const [fromTime, setFromTime] = useState('')
    const [toTime, setToTime] = useState('')
    const [location, setLocation] = useState('')
    const [thumbnail, setThumbnail] = useState('')
    const [type, setType] = useState('')
    const [mode, setMode] = useState('')
    const [isCompleted, setIsCompleted] = useState('')
    const [formElements, setFormElements] = useState([])
    
    const [fromYear, fromMonth, fromDay] = fromDate.split("-");
    const [toYear, toMonth, toDay] = toDate.split("-")
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']



    const fetchEvent = async () => {
        setLoading(true)
        if (router.isReady) {
            const { slug } = router.query;
            if (!slug) return null;
            try {
                const res = await fetch(`/api/singleEvent?slug=${slug}`)
                const data = await res.json()
                setEvent(data.events[0])
                setTitle(data.events[0].title)
                setContent(data.events[0].content)
                setFromDate(data.events[0].fromDate)
                setToDate(data.events[0].toDate)
                setFromTime(data.events[0].fromTime)
                setToTime(data.events[0].toTime)
                setLocation(data.events[0].location)
                setThumbnail(data.events[0].thumbnail)
                setType(data.events[0].type)
                setMode(data.events[0].mode)
                setIsCompleted(data.events[0].isCompleted)
                setFormElements(data.events[0].formElements)
                setLoading(false)
            }
            catch (err) {
                setError(true)
                setLoading(true)
            }
        }


    }




    useEffect(() => {
        fetchEvent()
    }, [router.isReady])

    const [Register, setRegister] = useState(false)

    const handleRegistor = () => {
        setRegister(!Register)
    }



    return (
        <>
            {
                loading ? <div className='singleEventSkeleton'>
                    <SingleEventSkeleton />

                </div> : error ? <div className='error'>{error}</div> : (
                    <div className="eventPost">
                        <div className="eventPost__banner">
                            <img src={thumbnail} alt="" />
                            <div className="eventPost__banner__content px-[5%]">
                                <div className='grid content-center'>
                                    <div className="flex gap-2">
                                        <FontAwesomeIcon icon={faCalendarAlt} className="w-3" />
                                        <p>{fromDay} {fromDate[0] == 0 ? months[fromMonth[fromMonth.length - 1]-1] : months[fromMonth-1]} {fromYear} to {toDay} {toDate[0] == 0 ? months[toMonth[toMonth.length - 1]-1] : months[toMonth-1]} {toYear}</p>
                                    </div>
                                    <div className="flex gap-2">
                                        <FontAwesomeIcon icon={faLocationDot} className="w-3" />
                                        <p>{location}</p>
                                    </div>
                                </div>
                                <div>
                                    <button className='border-none p-3 mt-4 w-44 bg-blue-600 text-lg text-white rounded-lg cursor-pointer hover:bg-blue-800 font-semibold duration-700' onClick={handleRegistor}>Register</button>
                                </div>
                            </div>
                        </div>
                        <div className='eventTitle mt-8'>
                            <h1>{title}</h1>
                            <div className="w-24 h-[4px] bg-gray-500 mb-8 mt-2"><div className="w-12 h-[4px] bg-[#2067ff]"></div></div>
                        </div>
                        <div className="eventPost__content">
                            <div className="eventPost__content__left">
                                <div className="eventPost__content__left__top">

                                    {content && Parser(content)}

                                </div>
                                <EventRegister event={event} Register={Register} handleRegistor={handleRegistor} />
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    )
}



// const { title, content, location, fromDate, toDate, fromTime, toTime, thumbnail, type, mode, created, isCompleted, slug, formElements } = singleEvent()
// return (


// )
// }

export default SinlePostEvent
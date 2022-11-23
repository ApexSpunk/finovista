import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import Router from 'next/router'


function SingleEvent(props) {
    const { event } = props
    const { fromDate, toDate } = event
    const [fromYear, fromMonth, fromDay] = fromDate.split("-");
    const [toYear, toMonth, toDay] = toDate.split("-")
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

    const handleClick = () => {
        Router.push(`/events/${event.slug}`)

    }
    return (
        <div onClick={handleClick}>
            <div>
                <div className='eventDate'>
                    <h2>{fromDay}</h2>
                    <p>{fromDate[0] == 0 ? months[fromMonth[fromMonth.length - 1] - 1] : months[fromMonth - 1]}</p>
                    <p>{fromYear}</p>
                    <span>To</span>
                    <h2>{toDay}</h2>
                    <p>{toDate[0] == 0 ? months[toMonth[toMonth.length - 1] - 1] : months[toMonth - 1]}</p>
                    <p>{toYear}</p>
                </div>
            </div>
            <div>
                <img src={event.thumbnail} alt="" className='max-h-[230px]' />
                <div>
                    <h4>{event.title.substring(0, 60)}...</h4>
                    <div className='flex gap-2'>
                        <FontAwesomeIcon icon={faLocationDot} className='w-3' />
                        <p>{event.location}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleEvent
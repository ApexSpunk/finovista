import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import Router from 'next/router'


function SingleEvent(props) {
    const { event } = props
    const handleClick = () => {
        Router.push(`/events/${event.slug}`)
    }
    return (
        <div onClick={handleClick}>
            <div>
                <div className='eventDate'>
                    <h2>30</h2>
                    <p>Oct</p>
                    <p>2018</p>
                    <span>To</span>
                    <h2>31</h2>
                    <p>Oct</p>
                    <p>2018</p>
                </div>
            </div>
            <div>
                <img src={event.thumbnail} alt="" />
                <div>
                    <h4>{event.title}</h4>
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
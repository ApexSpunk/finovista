import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import Router from 'next/router'

function SingleEvent(props) {
    const { title, fromDate, toDate, image, location } = props
    const handleClick = () => {
        Router.push(`/events/${title}`)
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
                <img src={image} alt="" />
                <div>
                    <h4>{title}</h4>
                    <div className='flex gap-2'>
                        <FontAwesomeIcon icon={faLocationDot} className='w-3' />
                        <p>{location}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleEvent
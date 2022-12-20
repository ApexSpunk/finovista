import React from 'react'
import { useEffect, useState } from 'react'
import SingleEvent from './SingleEvent'
import EventSkeloton from './EventSkeloton'

function Event() {

  const [events, setEvents] = useState([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(9)

  useEffect(() => {
    setLoading(true)
    const getEvents = async () => {
      try {
        const response = await fetch(`/api/events?page=${page}&limit=${limit}`)
        let ress = await response.json()
        const resData = ress.events
        setEvents([...events, ...resData])
        setLoading(false)
      } catch (error) {
        setLoading(false)
      }
    }
    getEvents()
  }, [page])

 



  return (
    <div>
      <div className='mb-32'>
        <div className="text-center mt-12" >
          <div>
            <h4>Upcoming Events</h4>
            <h1 className='my-3'>These are our <span className='text-[#2067ff]'>Upcoming Events</span></h1>
            <div className="w-44 h-[3px] bg-[#2067ff] mx-auto mb-12"></div>
          </div>
        </div>

        {
          loading ? <div className='skeleton'>
            <EventSkeloton />
            <EventSkeloton />
            <EventSkeloton />
            <EventSkeloton />
            <EventSkeloton />
            <EventSkeloton />
            <EventSkeloton />
            <EventSkeloton />
            <EventSkeloton />
          </div> : (
            <>
              <div className='allEvents'>
                {/* check todays event date and show on top */}
                {
                  events.map((event) => (
                    new Date(event.fromDate).toDateString() === new Date().toDateString() && <SingleEvent key={event._id} event={event} />
                  ))
                }
                {
                  events.map((event) => (
                    new Date(event.fromDate) > new Date() && <SingleEvent key={event._id} event={event} />
                  ))
                }
                
                
              </div>
            </>
          )
        }
      </div>
      <div className=' bg-gray-100 pt-6 pb-16'>
        <div className="text-center mt-12" >
          <div>
            <h4>Past Events</h4>
            <h1 className='my-3'>We had some <span className='text-[#2067ff]'>Past Events</span></h1>
            <div className="w-44 h-[3px] bg-[#2067ff] mx-auto mb-12"></div>
          </div>
        </div>
        <div className='allEvents' id='pastEvents'>
          {events.map((event) => (
            event.fromDate < new Date().toISOString() && <SingleEvent key={event._id} event={event} />
          ))}
        </div>
        <div className='text-center'>
          <button className='bg-[#2067ff] cur border-none text-white px-6 py-2 rounded-lg mt-6 mb-12' onClick={() => { setPage(page + 1); setLimit(9) }}>Load More</button>
        </div>
      </div>
    </div>
  )
}

export default Event
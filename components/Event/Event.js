import React from 'react'
import { useEffect, useState } from 'react'
import SingleEvent from './SingleEvent'
import EventSkeloton from './EventSkeloton'

function Event() {

  // Fetch all events from the database

  const [events, setEvents] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    const getEvents = async () => {
      try {
        const response = await fetch('/api/events')
        let ress = await response.json()
        setEvents(ress.events)
        setLoading(false)
      } catch (error) {
        console.log(error)
        setLoading(false)
      }
    }
    getEvents()
  }, [])


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
            <div className='allEvents'>
             { events.map((event) => (
              <SingleEvent key={event._id} event={event} />
              ))}
            </div>
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
          {/* <SingleEvent title={'Cyber Week 2019'} fromDate={'30/08/2022'} toDate={'31/08/2022'} image={'https://finovista.com/wp-content/uploads/2020/05/MDP.png'} location={'Tel Aviv University, Israel'} />
          <SingleEvent title={'Cyber Week 2019'} fromDate={'30/08/2022'} toDate={'31/08/2022'} image={'https://finovista.com/wp-content/uploads/2020/05/MDP.png'} location={'Tel Aviv University, Israel'} />
          <SingleEvent title={'Cyber Week 2019'} fromDate={'30/08/2022'} toDate={'31/08/2022'} image={'https://finovista.com/wp-content/uploads/2020/05/MDP.png'} location={'Tel Aviv University, Israel'} />
          <SingleEvent title={'Cyber Week 2019'} fromDate={'30/08/2022'} toDate={'31/08/2022'} image={'https://finovista.com/wp-content/uploads/2020/05/MDP.png'} location={'Tel Aviv University, Israel'} />
          <SingleEvent title={'Cyber Week 2019'} fromDate={'30/08/2022'} toDate={'31/08/2022'} image={'https://finovista.com/wp-content/uploads/2020/05/MDP.png'} location={'Tel Aviv University, Israel'} />
          <SingleEvent title={'Cyber Week 2019'} fromDate={'30/08/2022'} toDate={'31/08/2022'} image={'https://finovista.com/wp-content/uploads/2020/05/MDP.png'} location={'Tel Aviv University, Israel'} />
          <SingleEvent title={'Cyber Week 2019'} fromDate={'30/08/2022'} toDate={'31/08/2022'} image={'https://finovista.com/wp-content/uploads/2020/05/MDP.png'} location={'Tel Aviv University, Israel'} />
          <SingleEvent title={'Cyber Week 2019'} fromDate={'30/08/2022'} toDate={'31/08/2022'} image={'https://finovista.com/wp-content/uploads/2020/05/MDP.png'} location={'Tel Aviv University, Israel'} />
          <SingleEvent title={'Cyber Week 2019'} fromDate={'30/08/2022'} toDate={'31/08/2022'} image={'https://finovista.com/wp-content/uploads/2020/05/MDP.png'} location={'Tel Aviv University, Israel'} />
          <SingleEvent title={'Cyber Week 2019'} fromDate={'30/08/2022'} toDate={'31/08/2022'} image={'https://finovista.com/wp-content/uploads/2020/05/MDP.png'} location={'Tel Aviv University, Israel'} />
          <SingleEvent title={'Cyber Week 2019'} fromDate={'30/08/2022'} toDate={'31/08/2022'} image={'https://finovista.com/wp-content/uploads/2020/05/MDP.png'} location={'Tel Aviv University, Israel'} />
          <SingleEvent title={'Cyber Week 2019'} fromDate={'30/08/2022'} toDate={'31/08/2022'} image={'https://finovista.com/wp-content/uploads/2020/05/MDP.png'} location={'Tel Aviv University, Israel'} /> */}
        </div>
      </div>
    </div>
  )
}

export default Event
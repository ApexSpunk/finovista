import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function index() {

  const [events, setEvents] = useState([])
  const [loading, setLoading] = useState(true)

  // fetch all the events froma api

  const fetchEvents = async () => {
    setLoading(true)
    try {
      const res = await fetch('../../api/events')
      const events = await res.json()
      setEvents(events.events)
      setLoading(false)
      console.log(events)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchEvents()
  }, [])

  // delete an event

  const deleteEvent = async (id) => {
    try {
      const res = await fetch('../../api/events', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id }),
      })
      const data = await res.json()
      console.log(data)
      fetchEvents()
    } catch (error) {
      console.log(error)
    }
  }




  return (
    <div>
      <h1>All Events</h1>
      {
        loading ? <h3>Loading...</h3> : <>
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {
                events.map(event => (
                  <tr key={event._id}>
                    <td>{event.title}</td>
                    <td><a href={`/admin/events/edit/${event.slug}`}>Edit</a></td>
                    <td><button onClick={() => deleteEvent(event._id)}>Delete</button></td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </>
      }
    </div>
  )
}

export default index

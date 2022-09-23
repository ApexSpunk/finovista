import { error } from 'console';
import React from 'react'
import connectDB from '../../middleware/mongoose';
import Event from '../../models/Event'



const handler = async (req, res) => {

    if ((req.method == 'GET')) {
        let events = await Event.find()
        res.status(200).json({ events })
    }

    if (req.method == 'POST') {
        const { eventTitle, pageContent, location, fromDate, toDate, fromTime, toTime, thumbnail, eventType, eventMode, isCompleted, slug, formElements } = req.body
        let e = new Event({ title: eventTitle, content: pageContent, location, fromDate, toDate, fromTime, toTime, thumbnail, type: eventType, mode: eventMode, created: Date.now(), isCompleted, slug, formElements })

        await e.save()

        res.status(200).json({ success: e })
    }

    if (req.method == 'DELETE') {
        const { id } = req.body
        await Event.findByIdAndDelete(id)
        res.status(200).json({ success: true })
    }

    if (req.method == 'PUT') {
        const { id, eventTitle, pageContent, location, fromDate, toDate, fromTime, toTime, thumbnail, eventType, eventMode, isCompleted, slug, formElements } = req.body
        await Event.findByIdAndUpdate(id, { title: eventTitle, content: pageContent, location, fromDate, toDate, fromTime, toTime, thumbnail, type: eventType, mode: eventMode, isCompleted, slug, formElements })
        res.status(200).json({ success: true })
    }
}
export default connectDB(handler)
import { error } from 'console';
import React from 'react'
import connectDB from '../../middleware/mongoose';
import Event from '../../models/Event'


const handler = async (req, res) => {

    if ((req.method == 'GET')) {
        let contacts = await Event.find()
        res.status(200).json({ contacts })
    }

    if (req.method == 'POST') {
        const { title, content, location, fromDate, toDate, fromTime, toTime, thumbnail, type, mode, created, isCompleted, slug } = req.body
        let e = new Event({ title, content, location, fromDate, toDate, fromTime, toTime, thumbnail, type, mode, created, isCompleted, slug })

        await e.save()

        res.status(200).json({ success: e })
    }
}
export default connectDB(handler)
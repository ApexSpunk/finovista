import { getSession } from 'next-auth/react';
import React from 'react'
import connectDB from '../../middleware/mongoose';
import Event from '../../models/Event'


const handler = async (req, res) => {


    if ((req.method == 'GET')) {
        const { slug } = req.query
        let events = await Event.find({ slug })
        res.status(200).json({ events })
    }

    const session = await getSession({ req });

    if (!session) {
        res.status(401).json({ message: "Not authenticated" });
        return;
    }

    if (req.method == 'POST') {
        console.log(req.body)
        const { eventTitle, pageContent, location, fromDate, toDate, fromTime, toTime, thumbnail, eventType, eventMode, isCompleted, slug, formElements, registrationType, formLink } = req.body
        let e = new Event({ title: eventTitle, content: pageContent, location, fromDate, toDate, fromTime, toTime, thumbnail, type: eventType, mode: eventMode, created: Date.now(), isCompleted, slug, formElements, registrationType, formLink })

        await e.save()

        res.status(200).json({ success: e })
    }
}
export default connectDB(handler)
import { getToken } from 'next-auth/jwt';
import connectDB from '../../middleware/mongoose';
import Event from '../../models/Event'



const handler = async (req, res) => {

    const token = await getToken({ req })
    if (token) {

        if ((req.method == 'GET')) {
            let events = await Event.find()
            res.status(200).json({ events })
        }

        if (req.method == 'POST') {
            console.log(res.body)
            const { eventTitle, pageContent, location, fromDate, toDate, fromTime, toTime, thumbnail, eventType, eventMode, isCompleted, slug, formElements, registrationType, formLink } = req.body
            let e = new Event({ title: eventTitle, content: pageContent, location, fromDate, toDate, fromTime, toTime, thumbnail, type: eventType, mode: eventMode, created: Date.now(), isCompleted, slug, formElements, registrationType, formLink })

            await e.save()

            res.status(200).json({ success: e })
        }

        if (req.method == 'DELETE') {
            const { id } = req.body
            await Event.findByIdAndDelete(id)
            res.status(200).json({ success: true })
        }

        if (req.method == 'PUT') {
            const { id, eventTitle, pageContent, location, fromDate, toDate, fromTime, toTime, thumbnail, eventType, eventMode, isCompleted, slug, formElements, registrationType, formLink } = req.body
            await Event.findByIdAndUpdate(id, { title: eventTitle, content: pageContent, location, fromDate, toDate, fromTime, toTime, thumbnail, type: eventType, mode: eventMode, isCompleted, slug, formElements, registrationType, formLink })
            res.status(200).json({ success: true })
        }
    } else {
        if ((req.method == 'GET')) {
            let events = await Event.find()
            res.status(200).json({ events })
        } else {
            res.status(401).json({ message: "Not authenticated" });
        }
    }
}
export default connectDB(handler)
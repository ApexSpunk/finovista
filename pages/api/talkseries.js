import { getToken } from "next-auth/jwt";
import connectDB from "../../middleware/mongoose";
import TalkSeries from "../../models/TalkSeries";

const handler = async (req, res) => {
    const token = await getToken({ req })
    if (token) {

        if (req.method == "GET") {
            let { page, limit } = req.query
            if (!page) page = 1
            if (!limit) limit = 10
            let talkseries = await TalkSeries.find().sort({ created: "desc" }).skip((page - 1) * limit).limit(limit * 1)
            res.status(200).json({ talkseries });
        }

        if (req.method == "POST") {
            let { title, link, image, category } = req.body;
            let talkseries = new TalkSeries({
                title,
                link,
                image,
                created: new Date(),
                category
            });
            await talkseries.save();
            res.status(200).json({ success: true, message: "TalkSeries created", talkseries });
        }

        if (req.method == "DELETE") {
            const { id } = req.body;
            await TalkSeries.findByIdAndDelete(id);
            res.status(200).json({ success: true, message: "TalkSeries deleted" });
        }

        if (req.method == "PUT") {
            const { id, title, link, image } = req.body;
            const talkseries = await TalkSeries.findByIdAndUpdate(id, { title, link }, { new: true });
            res.status(200).json({ success: true, talkseries });
        }
    } else {
        if (req.method == "GET") {
            let { page, limit } = req.query
            if (!page) page = 1
            if (!limit) limit = 10
            let talkseries = await TalkSeries.find().sort({ created: "desc" }).skip((page - 1) * limit).limit(limit * 1)
            res.status(200).json({ talkseries });
        } else {
            res.status(401).json({ message: "Not authenticated" });
        }
    }
};
export default connectDB(handler);

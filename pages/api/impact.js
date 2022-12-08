import { getToken } from "next-auth/jwt";
import connectDB from "../../middleware/mongoose";
import Impact from "../../models/Impact";

const handler = async (req, res) => {
    const token = await getToken({ req })
    if (token) {

        if (req.method == "GET") {
            let { page, limit } = req.query
            if (!page) page = 1
            if (!limit) limit = 10
            let impact = await Impact.find().sort({ created: "desc" }).skip((page - 1) * limit).limit(limit * 1)
            res.status(200).json({ impact });
        }

        if (req.method == "POST") {
            let { title, link, image, category } = req.body;
            let impact = new Impact({
                title,
                link,
                image,
                created: new Date(),
                category
            });
            await impact.save();
            res.status(200).json({ success: true, message: "Impact created", impact });
        }

        if (req.method == "DELETE") {
            const { id } = req.body;
            await Impact.findByIdAndDelete(id);
            res.status(200).json({ success: true, message: "Impact deleted" });
        }

        if (req.method == "PUT") {
            const { id, title, link, image } = req.body;
            const impact = await Impact.findByIdAndUpdate(id, { title, link }, { new: true });
            res.status(200).json({ success: true, impact });
        }
    } else {
        if (req.method == "GET") {
            let { page, limit } = req.query
            if (!page) page = 1
            if (!limit) limit = 10
            let impact = await Impact.find().sort({ created: "desc" }).skip((page - 1) * limit).limit(limit * 1)
            res.status(200).json({ impact });
        } else {
            res.status(401).json({ message: "Not authenticated" });
        }
    }
};
export default connectDB(handler);

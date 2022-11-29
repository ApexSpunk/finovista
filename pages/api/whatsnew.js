import { getToken } from "next-auth/jwt";
import connectDB from "../../middleware/mongoose";
import WhatsNew from "../../models/WhatsNew";

const handler = async (req, res) => {
    const token = await getToken({ req })
    if (token) {

        if (req.method == "GET") {
            let { page, limit } = req.query
            if (!page) page = 1
            if (!limit) limit = 10
            let whatsnew = await WhatsNew.find().sort({ created: "desc" }).skip((page - 1) * limit).limit(limit * 1)
            res.status(200).json({ whatsnew });
        }

        if (req.method == "POST") {
            let { title, link, image, category } = req.body;
            let whatsnew = new WhatsNew({
                title,
                link,
                image,
                created: new Date(),
                category
            });
            await whatsnew.save();
            res.status(200).json({ success: true, message: "Whats new created", whatsnew });
        }

        if (req.method == "DELETE") {
            const { id } = req.body;
            await WhatsNew.findByIdAndDelete(id);
            res.status(200).json({ success: true, message: "Whats new deleted" });
        }

        if (req.method == "PUT") {
            const { id, title, link, image } = req.body;
            const whatsnew = await WhatsNew.findByIdAndUpdate(id, { title, link }, { new: true });
            res.status(200).json({ success: true, whatsnew });
        }
    } else {
        if (req.method == "GET") {
            let { page, limit } = req.query
            if (!page) page = 1
            if (!limit) limit = 10
            let whatsnew = await WhatsNew.find().sort({ created: "desc" }).skip((page - 1) * limit).limit(limit * 1)
            res.status(200).json({ whatsnew });
        } else {
            res.status(401).json({ message: "Not authenticated" });
        }
    }
};
export default connectDB(handler);

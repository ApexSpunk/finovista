import { getToken } from "next-auth/jwt";
import connectDB from "../../middleware/mongoose";
import NewsMedia from "../../models/NewsMedia";

const handler = async (req, res) => {
    const token = await getToken({ req })
    if (token) {

        if (req.method == "GET") {
            let newsmedia = await NewsMedia.find().sort({ created: "desc" })
            res.status(200).json({ newsmedia });
        }

        if (req.method == "POST") {
            let { title, image, link } = req.body;
            let newsmedia = new NewsMedia({
                title,
                image,
                link,
                created: new Date(),
            });
            await newsmedia.save();
            res.status(200).json({ success: true, message: "NewsMedia created", newsmedia });
        }

        if (req.method == "DELETE") {
            const { id } = req.body;
            await NewsMedia.findByIdAndDelete(id);
            res.status(200).json({ success: true });
        }

        if (req.method == "PUT") {
            const { id, title, image, link } = req.body;
            const newsmedia = await NewsMedia.findByIdAndUpdate(id, { title, image, link }, { new: true });
            res.status(200).json({ success: true, newsmedia });
        }
    } else {
        if (req.method == "GET") {
            let newsmedia = await NewsMedia.find().sort({ created: "desc" })
            res.status(200).json({ newsmedia });
        } else {
            res.status(401).json({ message: "Not authenticated" });
        }
    }
};
export default connectDB(handler);

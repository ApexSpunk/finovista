import { getToken } from "next-auth/jwt";
import connectDB from "../../../middleware/mongoose";
import Industry from "../../../models/Industry";

const handler = async (req, res) => {
    const token = await getToken({ req })
    if (token) {
        if (req.method == "GET") {
            const { slug } = req.query;
            let industry = await Industry.findOne({ slug });
            res.status(200).json({ industry });
        }

        if (req.method == "POST") {
            const { postTitle, pageContent, thumbnail, slug } = req.body;
            let e = new Industry({
                title: industryTitle,
                content: pageContent,
                thumbnail,
                created: Date.now(),
                slug,
            });

            await e.save();

            res.status(200).json({ success: e });
        }
    } else {
        if (req.method == "GET") {
            const { slug } = req.query;
            let industry = await Industry.findOne({ slug });
            res.status(200).json({ industry });
        } else {
            res.status(401).json({ message: "Not authenticated" });
        }
    }
};
export default connectDB(handler);

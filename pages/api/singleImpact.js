import { getToken } from "next-auth/jwt";
import connectDB from "../../middleware/mongoose";
import WhatsNew from "../../models/WhatsNew";

const handler = async (req, res) => {
    const token = await getToken({ req })
    if (token) {
        if (req.method == "GET") {
            const { slug } = req.query;
            let whatsnew = await WhatsNew.find({ link:slug });
            res.status(200).json({ whatsnew });
        }

        if (req.method == "POST") {
            const { programTitle, pageContent, thumbnail, slug } = req.body;
            let e = new WhatsNew({
                title: programTitle,
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
            let whatsnew = await WhatsNew.find({ slug });
            res.status(200).json({ whatsnew });
        } else {
            res.status(401).json({ message: "Not authenticated" });
        }
    }
};
export default connectDB(handler);

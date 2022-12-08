import { getToken } from "next-auth/jwt";
import connectDB from "../../middleware/mongoose";
import Impact from "../../models/Impact";

const handler = async (req, res) => {
    const token = await getToken({ req })
    if (token) {
        if (req.method == "GET") {
            const { slug } = req.query;
            let impact = await Impact.find({ link:slug });
            res.status(200).json({ impact });
        }

        if (req.method == "POST") {
            const { programTitle, pageContent, thumbnail, slug } = req.body;
            let e = new Impact({
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
            let impact = await Impact.find({ slug });
            res.status(200).json({ impact });
        } else {
            res.status(401).json({ message: "Not authenticated" });
        }
    }
};
export default connectDB(handler);

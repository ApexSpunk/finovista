import { getToken } from "next-auth/jwt";
import connectDB from "../../middleware/mongoose";
import TalkSeries from "../../models/TalkSeries";

const handler = async (req, res) => {
    const token = await getToken({ req })
    if (token) {
        if (req.method == "GET") {
            const { slug } = req.query;
            let talkseries = await TalkSeries.find({ link:slug });
            res.status(200).json({ talkseries });
        }

        if (req.method == "POST") {
            const { programTitle, pageContent, thumbnail, slug } = req.body;
            let e = new TalkSeries({
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
            let talkseries = await TalkSeries.find({ slug });
            res.status(200).json({ talkseries });
        } else {
            res.status(401).json({ message: "Not authenticated" });
        }
    }
};
export default connectDB(handler);

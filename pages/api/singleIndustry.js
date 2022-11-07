import { getSession } from "next-auth/react";
import connectDB from "../../middleware/mongoose";
import Industry from "../../models/Industry";

const handler = async (req, res) => {
    const session = await getSession({ req })
    if (session) {
        if (req.method == "GET") {
            const { slug } = req.query;
            let industries = await Industry.find({ slug });
            res.status(200).json({ industries });
        }

        if (req.method == "POST") {
            const { industryTitle, pageContent, thumbnail, slug } = req.body;
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
            let industries = await Industry.find({ slug });
            res.status(200).json({ industries });
        } else {
            res.status(401).json({ message: "Not authenticated" });
        }
    }
};
export default connectDB(handler);

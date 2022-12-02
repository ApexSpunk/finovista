import { getToken } from "next-auth/jwt";
import connectDB from "../../../middleware/mongoose";
import Post from "../../../models/Post";

const handler = async (req, res) => {

    const token = await getToken({ req })
    if (token) {

        if (req.method == "GET") {
            
            const { slug } = req.query;
            let post = await Post.findOne({ slug });
            res.status(200).json({ post });
        }

        if (req.method == "POST") {
            const { postTitle, pageContent, thumbnail, slug } = req.body;
            let e = new Program({
                title: postTitle,
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
            let post = await Post.findOne({ slug });
            res.status(200).json({ post });
        } else {
            res.status(401).json({ message: "Not authenticated" });
        }
    }
};
export default connectDB(handler);

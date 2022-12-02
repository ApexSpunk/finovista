import connectDB from "../../../middleware/mongoose";
import Post from "../../../models/Post";

const handler = async (req, res) => {
    if (req.method == "GET") {
        const { slug } = req.query;
        let post = await Post.findOne({ slug });
        res.status(200).json({ post });
    } else {
        res.status(405).json({ message: "Method not allowed" });
    }
};
export default connectDB(handler);

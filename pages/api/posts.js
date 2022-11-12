import { getToken } from "next-auth/jwt";
import connectDB from "../../middleware/mongoose";
import Post from "../../models/Post";

const handler = async (req, res) => {

  const token = await getToken({ req })
  if (token) {

    if (req.method == "GET") {
      let { limit } = req.query;
      console.log(limit)
      if (!limit) {
        limit = 10;
      }
      let posts = await Post.find().limit(parseInt(limit));
      res.status(200).json({ posts });
    }

    if (req.method == "POST") {
      const { title, content, thumbnail, slug, category } = req.body;
      let e = new Post({
        title: title,
        content: content,
        thumbnail,
        created: Date.now(),
        slug,
        category,
      });

      await e.save();

      res.status(200).json({ post: e });
    }

    if (req.method == "DELETE") {
      const { id } = req.body;
      await Post.findByIdAndDelete(id);
      res.status(200).json({ success: true });
    }

    if (req.method == "PUT") {
      const { id, title, content, thumbnail, slug, category } = req.body;
      await Post.findByIdAndUpdate(id, {
        title: title,
        content: content,
        thumbnail,
        slug,
        category,
      });
      res.status(200).json({ success: true });
    }
  } else {
    if (req.method == "GET") {
      let { limit } = req.query;
      if (!limit) {
        limit = 10;
      }
      let posts = await Post.find().limit(parseInt(limit));
      res.status(200).json({ posts });
    } else {
      res.status(401).json({ message: "Not authenticated" });
    }
  }
};
export default connectDB(handler);

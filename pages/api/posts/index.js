import { getToken } from "next-auth/jwt";
import connectDB from "../../../middleware/mongoose";
import Post from "../../../models/Post";

const handler = async (req, res) => {

  const token = await getToken({ req })
  if (token) {

    if (req.method == "GET") {
      try {
        let { page, limit } = req.query
        if (!page) page = 1
        if (!limit) limit = 10
        let posts = await Post.find().sort({ created: "desc" }).skip((page - 1) * limit).limit(limit * 1)
        res.status(200).json({ posts });
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    }

    if (req.method == "POST") {
      const { title, content, thumbnail, slug, category } = req.body;
      try {
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
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    }

    if (req.method == "DELETE") {
      try {
        const { id } = req.body;
        await Post.findByIdAndDelete(id);
        res.status(200).json({ success: true });
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    }

    if (req.method == "PUT") {
      try {
        const { id, title, content, thumbnail, slug, category } = req.body;
        await Post.findByIdAndUpdate(id, {
          title: title,
          content: content,
          thumbnail,
          slug,
          category,
        });
        res.status(200).json({ success: true });
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    }
  } else {
    if (req.method == "GET") {
      try {
        let { page, limit } = req.query
        if (!page) page = 1
        if (!limit) limit = 10
        let posts = await Post.find().sort({ created: "desc" }).skip((page - 1) * limit).limit(limit * 1)
        res.status(200).json({ posts });
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    } else {
      res.status(401).json({ message: "Not authenticated" });
    }
  }
};
export default connectDB(handler);

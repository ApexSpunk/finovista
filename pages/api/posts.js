import { getSession } from "next-auth/react";
import connectDB from "../../middleware/mongoose";
import Post from "../../models/Post";

const handler = async (req, res) => {

  const session = await getSession({ req })
  if (session) {

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
      const { postTitle, pageContent, thumbnail, slug, category } = req.body;
      let e = new Post({
        title: postTitle,
        content: pageContent,
        thumbnail,
        created: Date.now(),
        slug,
        category,
      });

      await e.save();

      res.status(200).json({ success: e });
    }

    if (req.method == "DELETE") {
      const { id } = req.body;
      await Post.findByIdAndDelete(id);
      res.status(200).json({ success: true });
    }

    if (req.method == "PUT") {
      const { id, postTitle, pageContent, thumbnail, slug, category } = req.body;
      await Post.findByIdAndUpdate(id, {
        title: postTitle,
        content: pageContent,
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

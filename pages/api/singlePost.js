import { getSession } from "next-auth/react";
import connectDB from "../../middleware/mongoose";
import Post from "../../models/Post";

const handler = async (req, res) => {

  const session = await getSession({ req })
  if (session) {

    if (req.method == "GET") {
      const { slug } = req.query;
      let posts = await Post.find({ slug });
      res.status(200).json({ posts });
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
      let posts = await Post.find({ slug });
      res.status(200).json({ posts });
    } else {
      res.status(401).json({ message: "Not authenticated" });
    }
  }
};
export default connectDB(handler);

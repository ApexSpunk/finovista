import connectDB from "../../middleware/mongoose";
import Post from "../../models/Post";

const handler = async (req, res) => {
  if (req.method == "GET") {
    let posts = await Post.find();
    res.status(200).json({ posts });
  }

  if (req.method == "POST") {
    const { postTitle, pageContent, thumbnail, slug } = req.body;
    let e = new Post({
      title: postTitle,
      content: pageContent,
      thumbnail,
      created: Date.now(),
      slug,
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
    const { id, postTitle, pageContent, thumbnail, slug } = req.body;
    await Post.findByIdAndUpdate(id, {
      title: postTitle,
      content: pageContent,
      thumbnail,
      slug,
    });
    res.status(200).json({ success: true });
  }
};
export default connectDB(handler);

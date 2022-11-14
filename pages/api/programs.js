import { getToken } from "next-auth/jwt";
import connectDB from "../../middleware/mongoose";
import Program from "../../models/Program";

const handler = async (req, res) => {
  const token = await getToken({ req })
  if (token) {

    if (req.method == "GET") {
      let { page, limit } = req.query
      if (!page) page = 1
      if (!limit) limit = 10
      let programs = await Program.find().sort({ createdAt: "desc" }).skip((page - 1) * limit).limit(limit * 1)
      res.status(200).json({ programs });
    }

    if (req.method == "POST") {
      const { programTitle, pageContent, thumbnail, slug, category } = req.body;
      let e = new Program({
        title: programTitle,
        content: pageContent,
        thumbnail,
        created: Date.now(),
        slug,
        category
      });

      await e.save();

      res.status(200).json({ success: e });
    }

    if (req.method == "DELETE") {
      const { id } = req.body;
      await Program.findByIdAndDelete(id);
      res.status(200).json({ success: true });
    }

    if (req.method == "PUT") {
      const {
        id,
        programTitle,
        pageContent,
        thumbnail,
        slug,
        category
      } = req.body;
      await Program.findByIdAndUpdate(id, {
        title: programTitle,
        content: pageContent,
        thumbnail,
        slug,
        category
      });
      res.status(200).json({ success: true });
    }
  } else {
    if (req.method == "GET") {
      let { page, limit } = req.query
      if (!page) page = 1
      if (!limit) limit = 10
      let programs = await Program.find().sort({ createdAt: "desc" }).skip((page - 1) * limit).limit(limit * 1)
      res.status(200).json({ programs });
    } else {
      res.status(401).json({ message: "Not authenticated" });
    }
  }
};
export default connectDB(handler);

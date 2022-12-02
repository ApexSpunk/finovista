import { getToken } from "next-auth/jwt";
import connectDB from "../../../middleware/mongoose";
import Industry from "../../../models/Industry";

const handler = async (req, res) => {
  const token = await getToken({ req })
  if (token) {

    if (req.method == "GET") {
      let industries = await Industry.find().sort({ created: "desc" })
      res.status(200).json({ industries });
    }

    if (req.method == "POST") {
      const { title, content, thumbnail, slug, category } = req.body;
      let e = new Industry({
        title,
        content,
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
      await Industry.findByIdAndDelete(id);
      res.status(200).json({ success: true });
    }

    if (req.method == "PUT") {
      const {
        id,
        title,
        content,
        thumbnail,
        slug,
        category
      } = req.body;
      await Industry.findByIdAndUpdate(id, {
        title,
        content,
        thumbnail,
        slug,
        category
      });
      res.status(200).json({ success: true });
    }
  } else {
    if (req.method == "GET") {
      let industries = await Industry.find().sort({ created: "desc" })
      res.status(200).json({ industries });
    } else {
      res.status(401).json({ message: "Not authenticated" });
    }
  }
};
export default connectDB(handler);

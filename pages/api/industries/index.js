import { getToken } from "next-auth/jwt";
import connectDB from "../../../middleware/mongoose";
import Industry from "../../../models/Industry";

const handler = async (req, res) => {
  const token = await getToken({ req })
  console.log(token)
  if (token) {

    if (req.method == "GET") {
      try {
        let industries = await Industry.find().sort({ created: "desc" })
        res.status(200).json({ industries });
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    }

    if (req.method == "POST") {
      try {
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
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    }

    if (req.method == "DELETE") {
      try {
        const { id } = req.body;
        await Industry.findByIdAndDelete(id);
        res.status(200).json({ success: true });
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    }

    if (req.method == "PUT") {
      try {
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
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    }
  } else {
    if (req.method == "GET") {
      try {
        let industries = await Industry.find().sort({ created: "desc" })
        res.status(200).json({ industries });
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    } else {
      res.status(401).json({ message: "Not authenticated" });
    }
  }
};
export default connectDB(handler);

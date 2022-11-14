import { getToken } from "next-auth/jwt";
import connectDB from "../../middleware/mongoose";
import Industry from "../../models/Industry";

const handler = async (req, res) => {
  const token = await getToken({ req })
  if (token) {

    if (req.method == "GET") {
      let Industries = await Industry.find().sort({ created: "desc" })
      res.status(200).json({ Industries });
    }

    if (req.method == "POST") {
      const { industryTitle, pageContent, thumbnail, slug, category } = req.body;
      let e = new Industry({
        title: industryTitle,
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
      await Industry.findByIdAndDelete(id);
      res.status(200).json({ success: true });
    }

    if (req.method == "PUT") {
      const {
        id,
        industryTitle,
        pageContent,
        thumbnail,
        slug,
        category
      } = req.body;
      await Industry.findByIdAndUpdate(id, {
        title: industryTitle,
        content: pageContent,
        thumbnail,
        slug,
        category
      });
      res.status(200).json({ success: true });
    }
  } else {
    if (req.method == "GET") {
      let Industries = await Industry.find().sort({ created: "desc" })
      res.status(200).json({ Industries });
    } else {
      res.status(401).json({ message: "Not authenticated" });
    }
  }
};
export default connectDB(handler);

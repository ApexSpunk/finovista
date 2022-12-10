import { getToken } from "next-auth/jwt";
import connectDB from "../../../middleware/mongoose";
import Service from "../../../models/Service";

const handler = async (req, res) => {
  const token = await getToken({ req })
  if (token) {

    if (req.method == "GET") {
      try {
        let { page, limit } = req.query
        if (!page) page = 1
        if (!limit) limit = 10
        let services = await Service.find().sort({ created: "desc" }).skip((page - 1) * limit).limit(limit * 1)
        res.status(200).json({ services });
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    }

    if (req.method == "POST") {
      try {
        const { title, content, thumbnail, slug, category } = req.body;
        let e = new Service({
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
        await Service.findByIdAndDelete(id);
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
        await Service.findByIdAndUpdate(id, {
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
        let { page, limit } = req.query
        if (!page) page = 1
        if (!limit) limit = 10
        let services = await Service.find().sort({ created: "desc" }).skip((page - 1) * limit).limit(limit * 1)
        res.status(200).json({ services });
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    } else {
      res.status(401).json({ message: "Not authenticated" });
    }
  }
};
export default connectDB(handler);

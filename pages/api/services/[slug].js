import { getToken } from "next-auth/jwt";
import connectDB from "../../../middleware/mongoose";
import Service from  "../../../models/Service";

const handler = async (req, res) => {
  const token = await getToken({ req })
  if (token) {
    if (req.method == "GET") {
      const { slug } = req.query;
      let service = await Service.findOne({ slug });
      res.status(200).json({ service });
    }

    if (req.method == "POST") {
      const { serviceTitle, pageContent, thumbnail, slug } = req.body;
      let e = new Service({
        title: serviceTitle,
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
      let service = await Service.findOne({ slug });
      res.status(200).json({ service });
    } else {
      res.status(401).json({ message: "Not authenticated" });
    }
  }
};
export default connectDB(handler);

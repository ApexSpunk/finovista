import { getSession } from "next-auth/react";
import connectDB from "../../middleware/mongoose";
import Service from "../../models/Service";

const handler = async (req, res) => {
  const session = await getSession({ req })
  if (session) {

    if (req.method == "GET") {
      let services = await Service.find();
      res.status(200).json({ services });
    }

    if (req.method == "POST") {
      const { serviceTitle, pageContent, thumbnail, slug, category } = req.body;
      let e = new Service({
        title: serviceTitle,
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
      await Service.findByIdAndDelete(id);
      res.status(200).json({ success: true });
    }

    if (req.method == "PUT") {
      const {
        id,
        serviceTitle,
        pageContent,
        thumbnail,
        slug,
        category
      } = req.body;
      await Service.findByIdAndUpdate(id, {
        title: serviceTitle,
        content: pageContent,
        thumbnail,
        slug,
        category
      });
      res.status(200).json({ success: true });
    }
  } else {
    if (req.method == "GET") {
      let services = await Service.find();
      res.status(200).json({ services });
    } else {
      res.status(401).json({ message: "Not authenticated" });
    }
  }
};
export default connectDB(handler);

import { getSession } from "next-auth/react";
import connectDB from "../../middleware/mongoose";
import Service from "../../models/Service";

const handler = async (req, res) => {
  const session = await getSession({ req })
  if (session) {
    if (req.method == "GET") {
      const { slug } = req.query;
      let services = await Service.find({ slug });
      res.status(200).json({ services });
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
      let services = await Service.find({ slug });
      res.status(200).json({ services });
    } else {
      res.status(401).json({ message: "Not authenticated" });
    }
  }
};
export default connectDB(handler);

import { getSession } from "next-auth/react";
import connectDB from "../../middleware/mongoose";
import Program from "../../models/Program";

const handler = async (req, res) => {
  const session = await getSession({ req })
  if (session) {
    if (req.method == "GET") {
      const { slug } = req.query;
      let programs = await Program.find({ slug });
      res.status(200).json({ programs });
    }

    if (req.method == "POST") {
      const { programTitle, pageContent, thumbnail, slug } = req.body;
      let e = new Program({
        title: programTitle,
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
      let programs = await Program.find({ slug });
      res.status(200).json({ programs });
    } else {
      res.status(401).json({ message: "Not authenticated" });
    }
  }
};
export default connectDB(handler);

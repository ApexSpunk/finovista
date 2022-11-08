import { getToken } from "next-auth/jwt";
import connectDB from "../../middleware/mongoose";
import Category from "../../models/Category";

const handler = async (req, res) => {

  const token = await getToken({ req })
  if (token) {
    if (req.method == "GET") {
      let category = await Category.find();
      res.status(200).json({ category });
    }

    if (req.method == "POST") {
      const { category, slug, categoryColor } = req.body;
      let e = new Category({
        category,
        slug,
        categoryColor
      });
      await e.save();
      res.status(200).json({ success: e });
    }

    if (req.method == "DELETE") {
      const { id } = req.body;
      await Category.findByIdAndDelete(id);
      res.status(200).json({ success: true });
    }

    if (req.method == "PUT") {
      const { id, category, slug, categoryColor } = req.body;
      await Category.findByIdAndUpdate(id, {
        category,
        slug,
        categoryColor,
      });

      res.status(200).json({ success: true });
    }
  } else {
    if (req.method == "GET") {
      let category = await Category.find();
      res.status(200).json({ category });
    } else {
      res.status(401).json({ message: "Not authenticated" });
    }
  }
  res.end()
};
export default connectDB(handler);

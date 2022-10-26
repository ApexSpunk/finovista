import { getSession } from "next-auth/react";
import connectDB from "../../middleware/mongoose";
import Category from "../../models/Category";

const handler = async (req, res) => {

  if (req.method == "GET") {
    let category = await Category.find();
    res.status(200).json({ category });
  }

  const session = await getSession({ req });

  if (!session) {
    res.status(401).json({ message: "Not authenticated" });
    return;
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
};
export default connectDB(handler);

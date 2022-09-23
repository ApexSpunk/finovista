import connectDB from "../../middleware/mongoose";
import ProgramCategory from "../../models/ProgramCategory";

const handler = async (req, res) => {
  if (req.method == "GET") {
    let category = await ProgramCategory.find();
    res.status(200).json({ category });
  }

  if (req.method == "POST") {
    const { category, slug, categoryColor } = req.body;
    let e = new ProgramCategory({
      category,
      slug,
      categoryColor,
    });
    await e.save();
    res.status(200).json({ success: e });
  }

  if (req.method == "DELETE") {
    const { id } = req.body;
    await ProgramCategory.findByIdAndDelete(id);
    res.status(200).json({ success: true });
  }

  if (req.method == "PUT") {
    const { id, category, slug, categoryColor } = req.body;
    await ProgramCategory.findByIdAndUpdate(id, {
      category,
      slug,
      categoryColor,
    });

    res.status(200).json({ success: true });
  }
};
export default connectDB(handler);

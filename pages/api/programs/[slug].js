import connectDB from "../../../middleware/mongoose";
import Program from "../../../models/Program";

const handler = async (req, res) => {
  if (req.method == "GET") {
    const { slug } = req.query;
    let program = await Program.findOne({ slug });
    res.status(200).json({ program });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
};
export default connectDB(handler);

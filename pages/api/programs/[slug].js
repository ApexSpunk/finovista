import connectDB from "../../../middleware/mongoose";
import Program from "../../../models/Program";

const handler = async (req, res) => {
  if (req.method == "GET") {
    try {
      const { slug } = req.query;
      let program = await Program.findOne({ slug });
      if (!program) {
        res.status(404).json({ message: "Program not found" });
      }
      res.status(200).json({ program });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
};
export default connectDB(handler);

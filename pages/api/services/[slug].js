import connectDB from "../../../middleware/mongoose";
import Service from "../../../models/Service";

const handler = async (req, res) => {
  if (req.method == "GET") {
    const { slug } = req.query;
    let service = await Service.findOne({ slug });
    res.status(200).json({ service });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
};
export default connectDB(handler);

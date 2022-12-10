import connectDB from "../../../middleware/mongoose";
import Service from "../../../models/Service";

const handler = async (req, res) => {
  if (req.method == "GET") {
    try {
      const { slug } = req.query;
      let service = await Service.findOne({ slug });
      if (!service) {
        res.status(404).json({ message: "Service not found" });
      }
      res.status(200).json({ service });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
};
export default connectDB(handler);

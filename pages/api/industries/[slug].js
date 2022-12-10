import connectDB from "../../../middleware/mongoose";
import Industry from "../../../models/Industry";

const handler = async (req, res) => {
    if (req.method == "GET") {
        try {
            const { slug } = req.query;
            let industry = await Industry.findOne({ slug });
            if (!industry) {
                res.status(404).json({ message: "Industry not found" });
            }
            res.status(200).json({ industry });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    } else {
        res.status(405).json({ message: "Method not allowed" });
    }
}
export default connectDB(handler);

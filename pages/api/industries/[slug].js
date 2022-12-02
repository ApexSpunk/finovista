import connectDB from "../../../middleware/mongoose";
import Industry from "../../../models/Industry";

const handler = async (req, res) => {
    if (req.method == "GET") {
        const { slug } = req.query;
        let industry = await Industry.findOne({ slug });
        res.status(200).json({ industry });
    } else {
        res.status(405).json({ message: "Method not allowed" });
    }
}
export default connectDB(handler);

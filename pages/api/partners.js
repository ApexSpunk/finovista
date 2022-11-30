import { getToken } from "next-auth/jwt";
import connectDB from "../../middleware/mongoose";
import Partner from "../../models/Partner";

const handler = async (req, res) => {
    const token = await getToken({ req })
    if (token) {

        if (req.method == "GET") {
            let partners = await Partner.find().sort({ created: "desc" })
            res.status(200).json({ partners });
        }

        if (req.method == "POST") {
            let { name, logo, link } = req.body;
            let partner = new Partner({
                name,
                logo,
                link,
                created: new Date(),
            });
            await partner.save();
            res.status(200).json({ success: true, message: "Partner created", partner });
        }

        if (req.method == "DELETE") {
            const { id } = req.body;
            await Partner.findByIdAndDelete(id);
            res.status(200).json({ success: true });
        }

        if (req.method == "PUT") {
            const { id, name, logo, link } = req.body;
            const partner = await Partner.findByIdAndUpdate(id, { name, logo, link }, { new: true });
            res.status(200).json({ success: true, partner });
        }
    } else {
        if (req.method == "GET") {
            let partners = await Partner.find().sort({ created: "desc" })
            res.status(200).json({ partners });
        } else {
            res.status(401).json({ message: "Not authenticated" });
        }
    }
};
export default connectDB(handler);

import { getToken } from "next-auth/jwt";
import connectDB from "../../middleware/mongoose";
import Banner from "../../models/Banner";

const handler = async (req, res) => {
    const token = await getToken({ req })
    if (token) {

        if (req.method == "GET") {
            let banners = await Banner.find().sort({ created: "desc" })
            res.status(200).json({ banners });
        }

        if (req.method == "POST") {
            let { name, logo, link } = req.body;
            let banner = new Banner({
                name,
                logo,
                link,
                created: new Date(),
            });
            await banner.save();
            res.status(200).json({ success: true, message: "Banner created", banner });
        }

        if (req.method == "DELETE") {
            const { id } = req.body;
            await Banner.findByIdAndDelete(id);
            res.status(200).json({ success: true });
        }

        if (req.method == "PUT") {
            const { id, name, logo, link } = req.body;
            const banner = await Banner.findByIdAndUpdate(id, { name, logo, link }, { new: true });
            res.status(200).json({ success: true, banner });
        }
    } else {
        if (req.method == "GET") {
            let banners = await Banner.find().sort({ created: "desc" })
            res.status(200).json({ banners });
        } else {
            res.status(401).json({ message: "Not authenticated" });
        }
    }
};
export default connectDB(handler);

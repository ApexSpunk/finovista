import connectDB from '../../middleware/mongoose';
import Image from '../../models/Image'


const handler = async (req, res) => {
    if ((req.method == 'GET')) {
        let images = await Image.find().limit(8).sort({ $natural: -1 })
        res.status(200).json({ images })
    } else {
        res.status(401).json({ message: "Method not allowed" });
    }
}
export default connectDB(handler)
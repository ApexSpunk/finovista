
const mongoose = require('mongoose');

const ImageSchema = new mongoose.Schema({
    Bucket: String,
    Key: String,
    Name: String,
    Location: String,
    ETag: String,
}, { timeStamp: true })
mongoose.models = {}
export default mongoose.model("Image", ImageSchema);
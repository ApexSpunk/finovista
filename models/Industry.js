const mongoose = require("mongoose");

const IndustrySchema = new mongoose.Schema(
  {
    title: String,
    content: Object,
    thumbnail: String,
    created: Date,
    category: String,
    slug: { type: String, required: true, unique: true },
  },
  { timeStamp: true }
);
mongoose.models = {};
export default mongoose.model("Industry", IndustrySchema);

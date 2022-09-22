const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    title: String,
    content: Object,
    thumbnail: String,
    created: Date,
    slug: { type: String, required: true, unique: true },
  },
  { timeStamp: true }
);
mongoose.models = {};
export default mongoose.model("Post", postSchema);

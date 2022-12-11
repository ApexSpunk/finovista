const mongoose = require("mongoose");

const ProgramSchema = new mongoose.Schema(
  {
    title: String,
    content: Object,
    thumbnail: String,
    created: Date,
    category: String,
    slug: { type: String, required: true, unique: true },
    author: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timeStamp: true }
);
mongoose.models = {};
export default mongoose.model("Program", ProgramSchema);

const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema(
  {
    category: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    categoryColor: { type: String, required: true },
  },
  { timeStamp: true }
);
mongoose.models = {};
export default mongoose.model("EventCategory", CategorySchema);

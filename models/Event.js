const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema(
  {
    title: String,
    content: Object,
    location: String,
    fromDate: String,
    toDate: String,
    fromTime: String,
    toTime: String,
    thumbnail: String,
    type: String,
    mode: String,
    created: Date,
    isCompleted: String,
    slug: { type: String, required: true, unique: true },
    formElements: Array,
  },
  { timeStamp: true }
);
mongoose.models = {};
export default mongoose.model("Event", EventSchema);

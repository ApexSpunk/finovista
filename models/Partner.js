const mongoose = require("mongoose");

const PartnerSchema = new mongoose.Schema(
    {
        name: String,
        logo: String,
        link: String,
        created: Date,
        author: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    },
    { timeStamp: true }
);

mongoose.models = {};
export default mongoose.model("Partner", PartnerSchema);
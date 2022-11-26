const mongoose = require("mongoose");

const PartnerSchema = new mongoose.Schema(
    {
        name: String,
        logo: String,
        link: String,
        created: Date,
    },
    { timeStamp: true }
);

mongoose.models = {};
export default mongoose.model("Partner", PartnerSchema);
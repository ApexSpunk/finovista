
const mongoose = require('mongoose');

const MailSchema = new mongoose.Schema({
    sal: String,
    firstName: String,
    lastName: String,
    email: { type: String, required: true, unique: true },
    secondEmail: String,
    phone: String,
    tel: String,
    designation: String,
    organizationName: String,
    organizationType: String,
    sector: String,
    subSector: String,
    subSector2: String,
    country: String,
    state: String,
    city: String,
    website: String,
    organizationProfile: String,
    remark1: String,
    remark2: String,
    remark3: String,
    addedBy: String,
    status:String,
    date:String
}, { timeStamp: true })
mongoose.models = {}
export default mongoose.model("Mail", MailSchema);
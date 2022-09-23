
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    // name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    // userType: { type: String, required: true }
}, { timeStamp: true })
mongoose.models = {}
export default mongoose.model("User", UserSchema);
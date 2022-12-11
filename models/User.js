
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['user', 'editor', 'admin'], default: 'user' },
}, { timeStamp: true })
mongoose.models = {}
export default mongoose.model("User", UserSchema);
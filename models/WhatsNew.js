const mongoose = require('mongoose');

const WhatsNewSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    created: {
        type: Date,
        default: Date.now
    },
    category: {
        type: String,
        required: true
    },
    author: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

mongoose.models = {}
module.exports = mongoose.model('WhatsNew', WhatsNewSchema);
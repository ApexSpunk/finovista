const mongoose = require('mongoose');

const NewsMediaSchema = new mongoose.Schema({
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
    author: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

mongoose.models = {}
module.exports = mongoose.model('NewsMedia', NewsMediaSchema);
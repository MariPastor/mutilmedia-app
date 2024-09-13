const mongoose = require('mongoose');

const ContentSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    type: {
        type: String, // Type of content (e.g. 'image', 'video', 'text')
        required: true
    },
    url: {
        type: String,  // URL of the content (or text in case of documents)
        required: true
    },
    credits: {
        type: String, // Username of the creator
        required: true
    },
    theme: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Theme',
        required: true
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: false
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Content', ContentSchema);

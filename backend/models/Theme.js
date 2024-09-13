const mongoose = require('mongoose');

const ThemeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    allowedContents: {
        type: Object, // Defines what types of content are allowed (e.g. { images: true, videos: true, texts: false })
        required: true
    }
});

module.exports = mongoose.model('Theme', ThemeSchema);

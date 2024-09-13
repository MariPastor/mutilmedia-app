const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    allowedUsers: {
        type: Object, // Defines who can read/write
        required: true
    },
    image: {
        type: String, // URL or path to the cover image
        required: true
    }
});

module.exports = mongoose.model('Category', CategorySchema);

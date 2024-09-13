const { validationResult } = require('express-validator');
const Content = require('../models/Content');

// Create new content
exports.createContent = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const { title, category, theme, contentType, url, credits, author } = req.body;

        const newContent = new Content({
            title,
            category,
            theme,
            contentType,
            url,
            credits,
            author
        });

        await newContent.save();
        res.status(201).json({ message: 'Content created successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error creating content', error });
    }
};

// Get all content
exports.getAllContent = async (req, res) => {
    try {
        const contents = await Content.find();
        res.json(contents);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving content', error });
    }
};

//  Get content by category or theme
exports.getContentByCategoryOrTheme = async (req, res) => {
    try {
        const { category, theme } = req.query;
        const query = {};

        if (category) query.category = category;
        if (theme) query.theme = theme;

        const contents = await Content.find(query);
        res.json(contents);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving content', error });
    }
};
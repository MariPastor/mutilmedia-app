const { validationResult } = require('express-validator');
const Theme = require('../models/Theme');

// Create new theme
exports.createTheme = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const { name, allowedContents } = req.body;

        // Check if the theme already exists
        const existingTheme = await Theme.findOne({ name });
        if (existingTheme) {
            return res.status(400).json({ message: 'Theme already exists' });
        }

        const newTheme = new Theme({
            name,
            allowedContents
        });

        await newTheme.save();
        res.status(201).json({ message: 'Theme created successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error creating theme', error });
    }
};

// Get all themes
exports.getThemes = async (req, res) => {
    try {
        const themes = await Theme.find();
        res.json(themes);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving themes', error });
    }
};
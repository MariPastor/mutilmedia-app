const express = require('express');
const { check, validationResult } = require('express-validator');
const auth = require('../middleware/auth');
const { createTheme, getThemes } = require('../controllers/themeController');

const router = express.Router();

// Create new theme (admin only)
router.post('/', [
    auth,
    check('name', 'Theme name is required').not().isEmpty(),
    check('permissions', 'Permissions must be specified').isObject()
], createTheme);

// Get all themes
router.get('/', getThemes);

module.exports = router;
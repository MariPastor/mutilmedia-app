const express = require('express');
const { check, validationResult } = require('express-validator');
const auth = require('../middleware/auth');
const { createContent, getAllContent, getContentByCategoryOrTheme } = require('../controllers/contentController');

const router = express.Router();

// Create new content (admin or creator)
router.post('/', [
    auth,
    check('title', 'Title is required').not().isEmpty(),
    check('type', 'Content type is required').not().isEmpty(),
    check('url', 'Content URL or text is required').not().isEmpty(),
    check('credits', 'Credits (username) is required').not().isEmpty(),
    check('theme', 'Theme is required').not().isEmpty()
], createContent);

// Get all content
router.get('/', getAllContent);

// Get content by category or theme
router.get('/search', getContentByCategoryOrTheme);

module.exports = router;
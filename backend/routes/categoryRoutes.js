const express = require('express');
const { check, validationResult } = require('express-validator');
const auth = require('../middleware/auth');
const { createCategory, getCategories } = require('../controllers/categoryController');

const router = express.Router();

// Create new category (admin only)
router.post('/', [
    auth,
    check('name', 'Category name is required').not().isEmpty(),
    check('allowedUsers', 'Allowed users must be specified').isObject()
], createCategory);

// Get all categories
router.get('/', getCategories);

module.exports = router;
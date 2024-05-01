const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profileController');
const authenticateToken = require('../middlewares/authenticateToken');

router.get('/:username', authenticateToken, profileController.getProfile);

module.exports = router;
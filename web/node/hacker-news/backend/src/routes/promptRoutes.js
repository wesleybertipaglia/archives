const express = require('express');
const router = express.Router();
const promptController = require('../controllers/promptController');
const authenticateToken = require('../middlewares/authenticateToken');

router.get('/', authenticateToken, promptController.getAllPrompts);
router.get('/:id', authenticateToken, promptController.getPromptById);
router.post('/', authenticateToken, promptController.createPrompt);
router.put('/:id', authenticateToken, promptController.updatePrompt);
router.delete('/:id', authenticateToken, promptController.deletePrompt);

module.exports = router;
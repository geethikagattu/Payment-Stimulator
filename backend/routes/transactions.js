const express = require('express');
const router = express.Router();
const transactionController = require('../controllers/transactionController');
const auth = require('../middleware/auth');

router.post('/', auth, transactionController.createTransaction);
router.get('/history', auth, transactionController.getTransactionHistory);

module.exports = router;
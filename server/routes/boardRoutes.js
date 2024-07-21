const express = require('express');
const { createBoard } = require('../controllers/boardController');

const router = express.Router();

router.route('/boards').post(createBoard); 

module.exports = router;
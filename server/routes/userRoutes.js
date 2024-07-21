const express = require('express');
const { signup, createEmail } = require('../controllers/userController');
const router = express.Router();


router.route('/user/create').post(createEmail);
router.route('/user/signup').post(signup);

module.exports = router;
const express = require('express');
const Count = require('../controllers/count');
const UserCtrl = require('../controllers/user');
const router = express.Router();

router.post('/fizzbuzzCount', UserCtrl.authMiddleware, Count.fizzbuzzCount);

module.exports = router;
const path = require('path');
const express = require('express');
const router = express.Router();

router.get('/users', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/app/users.html'));
});

module.exports = router;
const path = require('path');
const express = require('express');
const router = express.Router();

router.get('/nodered/mqtt', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/app/mqtt.html'));
});

router.get('/nodered/users', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/app/users.html'));
});

module.exports = router;
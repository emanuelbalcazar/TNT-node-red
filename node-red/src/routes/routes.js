const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/nodered/index', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/mqtt.html'));
});

// mosquitto authentication...
router.post('/auth', (req, res) => {
    res.status(200).send("ok");
});

router.post('/superuser', (req, res) => {
    res.status(200).send("ok");
});

router.post('/acl', (req, res) => {
    res.status(200).send("ok");
});

module.exports = router;
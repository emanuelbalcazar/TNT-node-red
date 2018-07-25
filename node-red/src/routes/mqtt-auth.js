const express = require('express');
const path = require('path');
const router = express.Router();

const OK = 200;
const FORBIDDEN = 403;

// mosquitto authentication...
router.post('/auth', (req, res) => {
    console.log('MQTT AUTH');
    res.sendStatus(OK);
});

router.post('/superuser', (req, res) => {
    console.log('MQTT SUPERUSER');
    res.sendStatus(OK);
});

router.post('/acl', (req, res) => {
    console.log('MQTT ACL');
    res.sendStatus(OK);
});

module.exports = router;
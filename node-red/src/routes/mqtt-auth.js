const express = require('express');
const path = require('path');
const router = express.Router();

const OK = 200;
const FORBIDDEN = 403;

// mosquitto authentication...
router.post('/auth', (req, res) => {
    res.sendStatus(OK);
});

router.post('/superuser', (req, res) => {
    res.sendStatus(OK);
});

router.post('/acl', (req, res) => {
    res.sendStatus(OK);
});

module.exports = router;
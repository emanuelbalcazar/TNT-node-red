// router.js - application route module.
const express = require('express');
const router = express.Router();
const Flow = require('../models/flow');

router.get('/info', (req, res) => {
    res.send({ name: "storage api", version: 1.0 });
});

// get flows from database.
router.get('/getFlows', (req, res) => {
    res.send({ data: "emanuel" });
});

router.post('/saveFlows', (req, res) => {
    Flow.create(req.body, function (error, saved) {
        res.send({ error: error, response: saved });
    })
});

module.exports = router;
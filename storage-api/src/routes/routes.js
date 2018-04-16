// router.js - application route module.
const express = require('express');
const router = express.Router();
const Flow = require('../models/flow');

// service information path.
router.get('/info', (req, res) => {
    res.send({ name: "storage api", version: "1.0", date: "april 2018" });
});

// get flows from database.
router.get('/getFlows', (req, res) => {
    Flow.find({}, function (err, all) {
        res.send({ error: err, response: all });
    })
});

// save all flows in database.
router.post('/saveFlows', (req, res) => {
    Flow.create(req.body, function (err, saved) {
        res.send({ error: err, response: saved });
    })
});

module.exports = router;
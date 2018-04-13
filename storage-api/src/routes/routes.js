// router.js - application route module.
const express = require('express');
const async = require('async');
const router = express.Router();
const Flow = require('../models/flow');

// get flows from database.
router.get('/getFlows', (req, res) => {
    res.send({ data: "emanuel" });
});

router.post('/saveFlows', (req, res) => {
    async.map(req.body, function (flow, callback) {
        Flow.create(flow, function (error, saved) {
            callback(error, saved);
        })
    }, function (error, result) {
        if (error)
            return res.status(500).send({ error: error });

        return res.send({ response: result });
    });
});

module.exports = router;
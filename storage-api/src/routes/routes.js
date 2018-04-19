// router.js - application route module.
const express = require('express');
const router = express.Router();
const Flow = require('../models/flow');

// service information path.
router.get('/info', (req, res) => {
    let info = { name: "storage api", version: "1.0", date: "april 2018" };
    defaultCallback(res, false, info);
});

// get the last saved flows.
router.get('/getFlows', (req, res) => {
    Flow.find({}).sort({ version: -1 }).limit(1).exec(function (err, all) {
        defaultCallback(res, err, all);
    });
});

// save all flows in database.
router.post('/saveFlows', (req, res) => {
    Flow.create(req.body, function (err, saved) {
        defaultCallback(res, err, saved);
    });
});

function defaultCallback(res, error, result) {
    if (error)
        return res.status(500).send({ error: error });

    return res.send(result);
}

module.exports = router;
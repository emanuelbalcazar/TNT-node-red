// router.js - application route module.
const express = require('express');
const router = express.Router();
const connection = require('mongoose').connection;

// service information path.
router.get('/info', (req, res) => {
    let info = { name: "storage api", version: "1.0", date: "april 2018" };
    defaultCallback(res, false, info);
});

// get the last saved flows.
router.get('/getFlows/:collection', (req, res) => {
    connection.db.collection(req.params.collection, (err, collection) => {
        collection.find({}).sort({ version: -1 }).limit(1).toArray((err, data) => {
            defaultCallback(res, err, data);
        });
    });
});

// save all flows in database.
router.post('/saveFlows/:collection', (req, res) => {
    connection.db.collection(req.params.collection, (err, collection) => {
        collection.insert(req.body, (err, data) => {
            defaultCallback(res, err, data);
        });
    });
});

function defaultCallback(res, error, result) {
    if (error)
        return res.status(500).send({ error: error });

    return res.send(result);
}

module.exports = router;
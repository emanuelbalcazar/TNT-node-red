const express = require('express');
const router = express.Router();
const mqtt = require('../database/mqtt');
const Project = require('../models/project');

router.get('/projects', (req, res) => {
    Project.find({}, (err, all) => {
        defaultCallback(res, err, all);
    });
});

router.post('/projects', (req, res) => {
    Project.create(req.body, (err, created) => {
        mqtt.publish('/projects/create', JSON.stringify(req.body), (err, granted) => {
            defaultCallback(res, err, granted);
        });
    });
});

router.put('/projects', (req, res) => {
    Project.findByIdAndUpdate(req.body._id, req.body, { new: false }, (err, updated) => {
        defaultCallback(res, err, req.body);
    });
});

router.delete('/projects', (req, res) => {
    Project.remove({ _id: req.body._id }, (err, deleted) => {
        mqtt.publish('/projects/remove', JSON.stringify(req.body), (err, granted) => {
            defaultCallback(res, err, granted);
        });
    });
});

function defaultCallback(res, error, result) {
    if (error)
        return res.status(500).send(error);

    return res.send(result);
}

module.exports = router;
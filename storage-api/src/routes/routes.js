// router.js - application route module.
var express = require('express');
var router = express.Router();

// service information path.
router.get('/getFlows', (req, res) => {
    res.send({ data: "emanuel" });
});

module.exports = router;
// flow.js - define the flow schema.
var mongoose = require('mongoose');

var schema = mongoose.Schema({
    flows: Array,
    version: { type: Date, default: new Date() }

}, { strict: false });

var Flow = mongoose.model('flow', schema);

module.exports = Flow;
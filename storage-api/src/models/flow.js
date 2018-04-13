// flow.js - define the flow schema.
var mongoose = require('mongoose');

var schema = mongoose.Schema(
    { id: String }, 
    { strict: false }
);

var Flow = mongoose.model('flow', schema);

module.exports = Flow;
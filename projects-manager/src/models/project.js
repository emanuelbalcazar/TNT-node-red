// define the project schema.
var mongoose = require('mongoose');

var schema = mongoose.Schema({
    name: { type: String },
    prefix: { type: String },
    collectionName: { type: String },
    port: { type: Number },
    created_at: { type: Date, default: new Date }
});

let Project = mongoose.model('project', schema);

module.exports = Project;
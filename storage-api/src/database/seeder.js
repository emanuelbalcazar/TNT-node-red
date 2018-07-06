const Flow = require('../models/flow');
const data = require('../backups/flow-svg-edit.json');
const connector = require('./connector');

Flow.create(data, (err, saved) => {
    console.log('Seeder finalizado con error:', err);
    process.exit(0);
});
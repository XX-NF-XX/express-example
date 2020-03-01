const express = require('express');

const status = require('./status');
const env = require('./env');
const error = require('./error');

const router = express.Router();

// Show list of endpoints (serve static JSON file)
const staticOptions = { index: 'endpoints.json' }; // serve as index file at '/' instead of '/endpoints.json')
router.get('/', express.static('static', staticOptions));

// Show system status (uptime and/or freemem)
router.use('/status', status);

// Show env (full list or single variable)
router.use('/env', env);

// Throw different types of errors
router.use('/error', error);

module.exports = router;

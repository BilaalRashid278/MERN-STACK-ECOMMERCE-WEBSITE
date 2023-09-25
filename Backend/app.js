const express = require('express');
const app = express();

app.use(express.json());

// Route Imports
const router = require('./routes/RouteProduct');

app.use('/api/v1',router);
module.exports = app

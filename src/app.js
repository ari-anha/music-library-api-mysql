const express = require('express');

const artistRouter = require('./routes/artist');
const albumRouter = require('./routes/album');

const app = express();

const artistController = require('../src/controllers/artist');

app.use(express.json());

app.post('/artists', artistController.create);

module.exports = app;

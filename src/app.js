const express = require('express');

const artistRouter = require('./routes/artist');
const albumRouter = require('./routes/album');

const app = express();

const artistController = require('../src/controllers/artist');

app.use(express.json());

app.post('/artists', artistController.create);
app.get('/artists', artistController.list);
app.get('/artists/:artistId', artistController.getArtistById);
app.patch('/artists/:artistId', artistController.updateArtist);
app.delete('/artists/:artistId', artistController.deleteArtist);

module.exports = app;

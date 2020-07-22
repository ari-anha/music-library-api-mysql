const express = require('express');

const artistRouter = require('./routes/artist');
const albumRouter = require('./routes/album');

const app = express();

const artistController = require('../src/controllers/artist');
const albumController = require('../src/controllers/album');

app.use(express.json());

//  Artist
app.post('/artists', artistController.create);
app.get('/artists', artistController.list);
app.get('/artists/:artistId', artistController.getArtistById);
app.patch('/artists/:artistId', artistController.updateArtist);
app.delete('/artists/:artistId', artistController.deleteArtist);

//  Album
app.post('/artists/:artistId/albums', albumController.create);
app.get('/artists/:artistId/albums', albumController.list);
app.get('/artists/:artistId/albums/:albumId', albumController.getAlbumById);
app.patch('/artists/:artistId/albums/:albumId', albumController.updateAlbum);
app.delete('/artists/:artistId/albums/:albumId', albumController.deleteAlbum);

//  Songs

module.exports = app;

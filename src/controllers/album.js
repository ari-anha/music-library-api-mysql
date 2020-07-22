const { Album, Artist } = require('../models');

exports.create = (req, res) => {
  const { artistId } = req.params;
  Artist.findByPk(artistId).then((artist) => {
    if (!artist) {
      res.status(404).json({ error: 'The artist could not be found.' });
    } else {
      Album.create(req.body).then((album) => {
        album.setArtist(artistId).then((linkedAlbum) => {
          res.status(201).json(linkedAlbum);
        });
      });
    }
  });
};

exports.list = (req, res) => {
  const { artistId } = req.params;
  Artist.findByPk(artistId).then((artist) => {
    if (!artist) {
      res.status(404).json({ error: 'The artist could not be found.' });
    } else {
      Album.findAll({ where: { artistId: artistId } }).then((albums) =>
        res.status(200).json(albums)
      );
    }
  });
};

exports.getAlbumById = (req, res) => {
  const { artistId } = req.params;
  const { albumId } = req.params;
  Artist.findByPk(artistId).then((artist) => {
    if (!artist) {
      res.status(404).json({ error: 'The artist could not be found.' });
    } else {
      Album.findByPk(albumId).then((album) => {
        res.status(200).json(album);
      });
    }
  });
};

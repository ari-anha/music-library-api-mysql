const { Album, Song } = require('../models');

exports.create = (req, res) => {
  const { albumId } = req.params;

  Album.findByPk(albumId).then((album) => {
    if (!album) {
      res.status(404).json({ error: 'The artist could not be found.' });
    } else {
      const songData = {
        name: req.body.name,
        albumId: album.id,
        artistId: req.body.artist,
      };
      Song.create(songData).then((song) => {
        res.status(201).json(song);
      });
    }
  });
};

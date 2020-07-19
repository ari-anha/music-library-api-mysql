const { Artist } = require('../models');

exports.create = (req, res) => {
  Artist.create(req.body).then((user) => res.status(201).json(user));
};

exports.list = (req, res) => {
  Artist.findAll().then((artists) => res.status(200).json(artists));
};

exports.getArtistById = (req, res) => {
  const { artistId } = req.params;
  Artist.findByPk(artistId).then((artist) => {
    if (!artist) {
      res.status(404).json({ error: 'The artist could not be found.' });
    } else {
      res.status(200).json(artist);
    }
  });
};

exports.updateArtist = (req, res) => {
  const { artistId } = req.params;
  Artist.update(req.body, { where: { artistId } }).then(([updates]) => {
    if (!updates) {
      res.status(404).json({ error: 'The artist could not be updated.' });
    } else {
      res.status(200).json(updates);
    }
  });
};

'use strict';

var _ = require('lodash');
var Instrument = require('./instrument.model');

// Get list of instruments
exports.index = function(req, res) {
  Instrument.find(function (err, instruments) {
    if(err) { return handleError(res, err); }
    return res.json(200, instruments);
  });
};

// Get a single instrument
exports.show = function(req, res) {
  Instrument.findById(req.params.id, function (err, instrument) {
    if(err) { return handleError(res, err); }
    if(!instrument) { return res.send(404); }
    return res.json(instrument);
  });
};

// Creates a new instrument in the DB.
exports.create = function(req, res) {
  Instrument.create(req.body, function(err, instrument) {
    if(err) { return handleError(res, err); }
    return res.json(201, instrument);
  });
};

// Updates an existing instrument in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Instrument.findById(req.params.id, function (err, instrument) {
    if (err) { return handleError(res, err); }
    if(!instrument) { return res.send(404); }
    var updated = _.merge(instrument, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, instrument);
    });
  });
};

// Deletes a instrument from the DB.
exports.destroy = function(req, res) {
  Instrument.findById(req.params.id, function (err, instrument) {
    if(err) { return handleError(res, err); }
    if(!instrument) { return res.send(404); }
    instrument.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}
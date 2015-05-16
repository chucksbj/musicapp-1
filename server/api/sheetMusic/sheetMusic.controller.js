'use strict';

var _ = require('lodash');
var SheetMusic = require('./sheetMusic.model');

// Get list of sheetMusics
exports.index = function(req, res) {
  SheetMusic.find(function (err, sheetMusics) {
    if(err) { return handleError(res, err); }
    return res.json(200, sheetMusics);
  });
};

// Get a single sheetMusic
exports.show = function(req, res) {
  SheetMusic.findById(req.params.id, function (err, sheetMusic) {
    if(err) { return handleError(res, err); }
    if(!sheetMusic) { return res.send(404); }
    return res.json(sheetMusic);
  });
};

// Creates a new sheetMusic in the DB.
exports.create = function(req, res) {
  SheetMusic.create(req.body, function(err, sheetMusic) {
    if(err) { return handleError(res, err); }
    return res.json(201, sheetMusic);
  });
};

// Updates an existing sheetMusic in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  SheetMusic.findById(req.params.id, function (err, sheetMusic) {
    if (err) { return handleError(res, err); }
    if(!sheetMusic) { return res.send(404); }
    var updated = _.merge(sheetMusic, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, sheetMusic);
    });
  });
};

// Deletes a sheetMusic from the DB.
exports.destroy = function(req, res) {
  SheetMusic.findById(req.params.id, function (err, sheetMusic) {
    if(err) { return handleError(res, err); }
    if(!sheetMusic) { return res.send(404); }
    sheetMusic.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}
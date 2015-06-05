'use strict';

var _ = require('lodash');
var SheetMusicDisplay = require('./sheetMusicDisplay.model');

// Get list of sheetMusicDisplays
exports.index = function(req, res) {
  SheetMusicDisplay.find(function (err, sheetMusicDisplays) {
    if(err) { return handleError(res, err); }
    return res.json(200, sheetMusicDisplays);
  });
};

// Get a single sheetMusicDisplay
exports.show = function(req, res) {
  SheetMusicDisplay.findById(req.params.id, function (err, sheetMusicDisplay) {
    if(err) { return handleError(res, err); }
    if(!sheetMusicDisplay) { return res.send(404); }
    return res.json(sheetMusicDisplay);
  });
};

// Creates a new sheetMusicDisplay in the DB.
exports.create = function(req, res) {
  SheetMusicDisplay.create(req.body, function(err, sheetMusicDisplay) {
    if(err) { return handleError(res, err); }
    return res.json(201, sheetMusicDisplay);
  });
};

// Updates an existing sheetMusicDisplay in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  SheetMusicDisplay.findById(req.params.id, function (err, sheetMusicDisplay) {
    if (err) { return handleError(res, err); }
    if(!sheetMusicDisplay) { return res.send(404); }
    var updated = _.merge(sheetMusicDisplay, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, sheetMusicDisplay);
    });
  });
};

// Deletes a sheetMusicDisplay from the DB.
exports.destroy = function(req, res) {
  SheetMusicDisplay.findById(req.params.id, function (err, sheetMusicDisplay) {
    if(err) { return handleError(res, err); }
    if(!sheetMusicDisplay) { return res.send(404); }
    sheetMusicDisplay.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}
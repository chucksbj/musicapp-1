/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var SheetMusic = require('./sheetMusic.model');

exports.register = function(socket) {
  SheetMusic.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  SheetMusic.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('sheetMusic:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('sheetMusic:remove', doc);
}
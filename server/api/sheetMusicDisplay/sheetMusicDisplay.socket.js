/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var SheetMusicDisplay = require('./sheetMusicDisplay.model');

exports.register = function(socket) {
  SheetMusicDisplay.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  SheetMusicDisplay.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('sheetMusicDisplay:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('sheetMusicDisplay:remove', doc);
}
/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Word = require('./word.model');

exports.register = function(socket) {
  Word.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Word.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('word:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('word:remove', doc);
}
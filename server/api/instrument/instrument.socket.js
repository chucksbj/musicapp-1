/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Instrument = require('./instrument.model');

exports.register = function(socket) {
  Instrument.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Instrument.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('instrument:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('instrument:remove', doc);
}
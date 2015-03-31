'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var SongSchema = new Schema({
  title: String,
  words: String,
  start_key: String,
  aux_key: String
});

module.exports = mongoose.model('Song', SongSchema);
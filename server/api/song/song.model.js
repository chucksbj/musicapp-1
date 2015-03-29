'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var SongSchema = new Schema({
  title: String,
  words: String,
  active: Boolean
});

module.exports = mongoose.model('Song', SongSchema);
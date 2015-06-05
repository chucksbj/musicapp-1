'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var SheetMusicSchema = new Schema({
  name: String,
  instrument: String,
  info: String,
  active: Boolean
});

module.exports = mongoose.model('SheetMusic', SheetMusicSchema);
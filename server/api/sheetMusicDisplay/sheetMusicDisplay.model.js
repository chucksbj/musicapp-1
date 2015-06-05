'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var SheetMusicDisplaySchema = new Schema({
  name: String,
  info: String,
  active: Boolean
});

module.exports = mongoose.model('SheetMusicDisplay', SheetMusicDisplaySchema);
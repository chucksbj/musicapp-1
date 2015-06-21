'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var InstrumentSchema = new Schema({
  name: String,
  folder: String,
  info: String,
  active: Boolean
});

module.exports = mongoose.model('Instrument', InstrumentSchema);
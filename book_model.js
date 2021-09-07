var mongoose = require('mongoose');
var schema = mongoose.Schema;

var BookSchema = new schema({
  title:String,
  published:Boolean
});

module.exports = mongoose.model('Book',BookSchema);

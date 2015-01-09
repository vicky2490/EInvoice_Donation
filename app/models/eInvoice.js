// Example model

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var EInvoice = new Schema({
  id: String,
  owner: String,
  EInvoiceNumber: String,
  shopName: String,
  term: String,
  date: String,
  randomCode: String,
  total: String,
  count: String,
  EInvoiceStatus: String,
  List: Object
});

// EInvoice.virtual('date')
//   .get(function() {
//     return this._id.getTimestamp();
//   });

mongoose.model('EInvoiceItem', EInvoice);

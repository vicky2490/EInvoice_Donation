var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  EInvoice = mongoose.model('EInvoiceItem');

module.exports = function(app) {
  app.use('/seed', router);
};

router.get('/seed', function(req, res, next) {
  res.json({
      'message': 'ok'
    });
  // EInvoice.find(function(err, eInvoices) {
  //   if (eInvoices.length) return;

  //   new EInvoice({
  //     id: '1',
  //     owner: 'aa',
  //     EInvoiceNumber: '1234567',
  //     shopName: 'cook',
  //     term: 'a',
  //     date: '12',
  //     randomCode: '33',
  //     total: '2',
  //     count: '1',
  //     EInvoiceStatus: '1',
  //     List: 'ww'
  //   }).save();

  //   res.json({
  //     'message': 'ok'
  //   });


  // });
});

var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
 EInvoice = mongoose.model('EInvoiceItem');

module.exports = function (app) {
  app.use('/donation/:id/:btn', router);
};

router.get('/donation/:id/:btn', function (req, res, next) {

  EInvoice.find({'id' : req.parms.id}, function (err, eInvoices) {
    if (err) return next(err);

eInvoices.owner=req.parms.btn;
eInvoices.EInvoiceStatus=1;

    res.json(eInvoices);
    // res.render('index', {
    //   title: 'Generator-Express MVC',
    //   EInvoice: eInvoices
    // });
  });
});

var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  EInvoice = mongoose.model('EInvoiceItem');

module.exports = function (app) {
  app.use('/', router);
  app.use('/listInfo/:id', router);

  app.use('/seed', router);
  app.use('/donation', router);

};

router.get('/', function (req, res, next) {

  EInvoice.find(function (err, eInvoices) {
    if (err) {
      return next(err);
    }
    res.render('index', {
      title: 'Generator-Express MVC',
      EInvoice: eInvoices
    });
  });
});

// 抓全部發票
router.get('/invoices', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");  
  EInvoice.find(function(err, eInvoices) {
    if (err) {
      return;
    }
    res.jsonp(eInvoices);
  });
});

// 捐贈發票
router.put('/donation', function (req, res, next) {
  console.log(req.body);

  EInvoice.findOne({'EInvoiceNumber': req.body.EInvoiceNumber, 'EInvoiceStatus': 'unDonate'}, function(err, eInvoice) {
    if (err) {
      res.json({'statusCode': 1, 'message': 'error'});
    }

    if (!eInvoice) {
      res.json({'statusCode': 1, 'message': 'error'});
    } else {
      eInvoice.owner = req.body.org;
      eInvoice.EInvoiceStatus = 'Donated';
      eInvoice.save();
      res.json({'statusCode': 0, 'message': 'success'});
    }
  });
});

// 還原
router.get('/restore', function (req, res, next) {
  console.log(req.body);

  EInvoice.find({'EInvoiceStatus': 'Donated'}, function(err, eInvoices) {    

    for (var i = 0; i < eInvoices.length; i++) {
      eInvoices[i].owner = 'Marks';
      eInvoices[i].EInvoiceStatus = 'unDonate';
      eInvoices[i].save();
    }

    res.json({'statusCode': 0, 'message': 'success'});
  });
});

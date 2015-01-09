var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'invoice-donation'
    },
    port: 3000,
    db: 'mongodb://140.118.110.84/EInvoice'
    
  },

  test: {
    root: rootPath,
    app: {
      name: 'invoice-donation'
    },
    port: 3000,
    db: 'mongodb://localhost/invoice-donation-test'
    
  },

  production: {
    root: rootPath,
    app: {
      name: 'invoice-donation'
    },
    port: 3000,
    db: 'mongodb://localhost/invoice-donation-production'
    
  }
};

module.exports = config[env];

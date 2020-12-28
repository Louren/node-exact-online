var util = require('util');


var SalesInvoice = exports.SalesInvoice = function (Client) {
  this.client = Client;

  return this;
};


/**
 * Create Sales Invoice
 * @param {Object} fields   POST fields
 * @param {Integer} division Division ID
 * @param {Function} callback Gets called after request is complete
 */
SalesInvoice.prototype.createSalesInvoice = function(fields, division, callback) {
  if(typeof division === 'function') {
    callback = division;
    division = this.client.division;
  }

  this.client.sendRequest('/v1/' + division + '/SalesInvoice/SalesInvoices', 'POST', null, fields, callback);
};


/**
 * Create printed sales invoice
 * @param  {Object}   fields   POST fields
 * @param  {Integer}   division Division ID
 * @param  {Function} callback Callback
 */
SalesInvoice.prototype.createPrintedSalesInvoice = function(fields, division, callback) {
  if(typeof division === 'function') {
    callback = division;
    division = this.client.division;
  }

  this.client.sendRequest('/v1/' + division + '/SalesInvoice/PrintedSalesInvoices', 'POST', null, fields, callback);
};
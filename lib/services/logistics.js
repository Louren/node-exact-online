var util = require('util');


var Logistics = exports.Logistics = function (Client) {
  this.client = Client;

  return this;
};


/**
 * Get Items
 * @param {Integer} division Division ID
 * @param {Function} callback Gets called after request is complete
 */
Logistics.prototype.getItems = function(division, callback) {
  if(typeof division === 'function') {
    callback = division;
    division = this.client.division;
  }

  this.client.sendRequest('/v1/' + division + '/logistics/Items', 'GET', null, null, callback);
};
var util = require('util');


var Sys = exports.Sys = function (Client) {
  this.client = Client;

  return this;
};


/**
 * Get current user data
 * @param {Function} callback Gets called after request is complete
 */
Sys.prototype.me = function(callback) {
  this.client.sendRequest('/v1/current/Me', 'GET', null, null, callback);
};
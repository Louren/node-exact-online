var util = require('util');

var CRM = exports.CRM = function (Client) {
  this.client = Client;

  return this;
};

// ---- BANK ACCOUNT BEGIN --- 

/**
 * Get back account
 * @param  {String}   accountId Account ID
 * @param  {Integer}  division  Division ID
 * @param  {Function} callback  Callback
 */
CRM.prototype.getBankAccount = function(accountId, division, callback) {
  var params = {
    $filter: 'Account eq guid\''+ accountId +'\''
  };

  if(typeof division === 'function') {
    callback = division;
    division = this.client.division;
  }

  this.client.sendRequest('/v1/' + division + '/crm/BankAccounts', 'GET', params, null, callback);
};

/**
 * Alter a bank account
 * @param  {String}   userData  JSON Object with content saved
 * @param  {Integer}  division  Division ID 
 * @param  {Function} callback  Callback
 */
CRM.prototype.saveBankAccount = function(bankAccountId, userData, division, callback) {

  if(typeof division === 'function') {
    callback = division;
    division = this.client.division;
  }

  this.client.sendRequest('/v1/' + division + '/crm/BankAccounts(guid\'' + bankAccountId + '\')', 'PUT', null, userData, callback);
};

/**
 * Create a bank account
 * @param  {String}   userData  JSON Object with content saved
 * @param  {Integer}  division  Division ID
 * @param  {Function} callback  Callback
 */
CRM.prototype.createBankAccount = function(userData, division, callback) {
  if(typeof division === 'function') {
    callback = division;
    division = this.client.division;
  }

  this.client.sendRequest('/v1/' + division + '/crm/BankAccounts', 'POST', null, userData, callback);
};

// ---- BANK ACCOUNT END --- 

// ---- USER ACCOUNT BEGIN --- 

/**
 * Create an account
 * @param {Function} callback gets called after request is complete
 */
CRM.prototype.createAccount = function(userData, division, callback) {
  if(typeof division === 'function') {
    callback = division;
    division = this.client.division;
  }

  this.client.sendRequest('/v1/' + division + '/crm/Accounts', 'POST', null, userData, callback);
};

// ---- USER ACCOUNT END --- 

// ---- DIRECTDEBITMANDATORY ATTACHMENTS BEGIN --- 

/**
 * Create an account
 * @param {Function} callback gets called after request is complete
 */
CRM.prototype.createDirectDebitMandate = function(userData, division, callback) {
  if(typeof division === 'function') {
    callback = division;
    division = this.client.division;
  }

  this.client.sendRequest('/v1/' + division + '/cashflow/DirectDebitMandates', 'POST', null, userData, callback);
};


// ---- DIRECTDEBITMANDATORY ATTACHMENTS END --- 

// ---- DOCUMENT ATTACHMENTS BEGIN --- 

/**
 * Get document attachments
 * @param  {String}   documentId Document ID
 * @param  {Integer}   division   Division ID
 * @param  {Function} callback   Callback
 */
CRM.prototype.getDocumentAttachments = function(documentId, division, callback) {
  var params = {
    $filter: 'Document eq guid\''+ documentId +'\''
  };

  if(typeof division === 'function') {
    callback = division;
    division = this.client.division;
  }

  this.client.sendRequest('/v1/' + division + '/documents/DocumentAttachments', 'GET', params, null, callback);
};

// ---- DOCUMENT ATTACHMENTS END --- 

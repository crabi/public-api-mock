'use strict';

var utils = require('../utils/writer.js');
var Policy = require('../service/PolicyService');

module.exports.searchPolicy = function searchPolicy (req, res, next, osName, osVersion, brand, clientVersion, policyNumber, results, pagination, status, vehiclePlates, personPhone, personEmail) {
  Policy.searchPolicy(osName, osVersion, brand, clientVersion, policyNumber, results, pagination, status, vehiclePlates, personPhone, personEmail)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

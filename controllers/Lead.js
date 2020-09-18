'use strict';

var utils = require('../utils/writer.js');
var Lead = require('../service/LeadService');

module.exports.createOrUpdateLead = function createOrUpdateLead (req, res, next, body) {
  Lead.createOrUpdateLead(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

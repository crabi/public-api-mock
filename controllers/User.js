'use strict';

var utils = require('../utils/writer.js');
var User = require('../service/UserService');

module.exports.loginUser = function loginUser (req, res, next, body, osName, osVersion, brand, clientVersion) {
  User.loginUser(body, osName, osVersion, brand, clientVersion)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

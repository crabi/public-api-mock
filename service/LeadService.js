'use strict';


/**
 * Create or update lead
 *
 * body Body
 **/
exports.createOrUpdateLead = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {  
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


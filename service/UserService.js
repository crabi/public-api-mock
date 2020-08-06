'use strict';


/**
 * Logs user into the system
 *
 * body Body 
 * osName String os name
 * osVersion String device model
 * brand String device brand
 * clientVersion String frontend client version
 * returns Session
 **/
exports.loginUser = function(body,osName,osVersion,brand,clientVersion) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "accessToken" : {
    "expiresOn" : "2020-09-04T17:00:07Z",
    "token" : "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhbGciOiJSUzI1NiIsImRldmljZV9pZCI6ImFzZGFzZHNzcyIsImV4cCI6MTU5OTIzODgwNywiaXNfcmVmcmVzaF90b2tlbiI6ZmFsc2UsInJvbGVzIjpbIkJBU0lDIl0sInN1YiI6IiIsInR5cCI6IkpXVCJ9.rJxeiuf8h6tKnzXHDADeq2G3u78CWRnvsAI4oJEJHoL8Kv5rPnO9phZN6oqlvEiFNdjxNZsAPeQN5-Y25nOMVqgKgk3eeJ9ne9dFpf2y5agosWzRR477deNngY9wDsgsjTxY3XDOZQV8rkIlf86pRcgf3kaIodTtqcAQtl_r9vJu35h4GkUU49HZA_dYe8g0sq7ykkm52dh4wWXo0IcfNuubHlCZ-4LNYyTqhCyoGLCeVx2KkfMPg17hf8JjivGZDpF_2vvN77e7Wnwi_BtQR427YeSEi9IgUyp4C-6iGPV3j-LzVjNHbMX0Ln6ZdY41a4avROZdLCF2ijFRoJ7WbQ"
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


// Config JSEncrypt to run on Node.js
global.navigator = {
  userAgent: 'node.js'
};
global.window = {
  crypto: null
};

const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const JSEncrypt = require('jsencrypt').JSEncrypt;

module.exports = function(req, res) {
  const url = process.env.MBPT_AUTH_URI;
  const encrypt = new JSEncrypt();
  encrypt.setPublicKey(process.env.MBPT_API_CLIENT_SECRET);
  const http = new XMLHttpRequest();
  http.open("POST", url, true);
  http.setRequestHeader("Content-Type", "application/json");
  http.onreadystatechange = function() {
    if (http.readyState === 4) {
      res.status(http.status);
      res.send(http.responseText);
    }
  };
  http.send(JSON.stringify({
    client: process.env.MBPT_API_CLIENT_ID,
    data: encrypt.encrypt(req.body)
  }));
};

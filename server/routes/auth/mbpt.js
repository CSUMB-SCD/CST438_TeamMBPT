// Config JSEncrypt to run on Node.js
global.navigator = {
  userAgent: 'node.js'
};
global.window = {
  crypto: null
};

const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

module.exports = function(req, res) {
  // TODO: Remove this function entirely
  const url = process.env.MBPT_AUTH_URI;
};

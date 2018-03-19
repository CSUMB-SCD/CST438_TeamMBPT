const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

module.exports = function(req, res) {
  const url = process.env.MBPT_AUTH_URI;
  const http = new XMLHttpRequest();
  http.open("POST", url, true);
  http.setRequestHeader("Content-Type", "application/json");
  http.onreadystatechange = function() {
    if (http.readyState === 4 && http.status === 200) {
      res.send(this.responseText);
    }
  };
  http.send(req.body);
};

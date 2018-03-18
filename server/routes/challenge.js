const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

module.exports = function(req, res) {
  const url = process.env.MBPT_API_CHALLENGE_URL;
  const http = new XMLHttpRequest();
  http.open("GET", url, true);
  http.onreadystatechange = function() {
    if (http.readyState === 4 && http.status === 200) {
      res.send(this.responseText);
    }
  };
  http.send();
};

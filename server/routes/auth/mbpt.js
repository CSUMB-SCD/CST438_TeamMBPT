const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

module.exports = function(req, res) {
  const url = process.env.MBPT_AUTH_URI;
  const http = new XMLHttpRequest();
  http.open("POST", url, true);
  http.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  http.onreadystatechange = function() {
    console.log(this.responseText);
    if (http.readyState === 4 && http.status === 200) {
      res.send(this.responseText);
    }
  };
  http.send("client_id=" + process.env.MBPT_API_CLIENT_ID +
    "&client_secret=" + process.env.MBPT_API_CLIENT_SECRET +
    "&username=" + encodeURIComponent(req.body.username) +
    "&password=" + encodeURIComponent(req.body.password) +
    "&grant_type=password");
};

const google = require('googleapis');
const OAuth2 = google.google.auth.OAuth2;
const oauth2Client = new OAuth2(
  process.env.GOOGLE_API_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  process.env.GOOGLE_REDIRECT_URI
);

var scopes = [
  'https://www.googleapis.com/auth/plus.me',
  'https://www.googleapis.com/auth/calendar'
];

var url = oauth2Client.generateAuthUrl({
  access_type: 'online',
  scope: scopes
});
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function querify(json) {
  return '?' +
    Object.keys(json).map(function(key) {
      return encodeURIComponent(key) + '=' +
        encodeURIComponent(json[key]);
    }).join('&');
}

module.exports = {
  url: function(req, res) {
    res.json({url: url});
  },
  callback: function(req, res) {
    oauth2Client.getToken(req.query.code, function (err, tokens) {
      if (!err) {
        const url = process.env.MBPT_SOCIAL_AUTH_URI;
        const http = new XMLHttpRequest();
        http.open("POST", url, true);
        http.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        http.onreadystatechange = function() {
          if (http.readyState === 4 && http.status === 200) {
            const params = querify(JSON.parse(this.responseText));
            res.redirect('/auth/callback' + params);
          }
        };
        console.log(tokens);
        http.send("client_id=" + process.env.MBPT_API_CLIENT_ID +
          "&client_secret=" + process.env.MBPT_API_CLIENT_SECRET +
          "&token=" + tokens['access_token'] +
          "&backend=google-oauth2" +
          "&grant_type=convert_token");
      }
    });
  }
};

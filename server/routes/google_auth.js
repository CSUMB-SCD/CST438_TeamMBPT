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

module.exports = {
  url: function(req, res) {
    res.json({url: url});
  },
  callback: function(req, res) {
    oauth2Client.getToken(req.query.code, function (err, tokens) {
      if (!err) {
        // TODO: Use the tokens!
        console.log(tokens);
        oauth2Client.setCredentials(tokens);
      }
      res.redirect('/');
    });
  }
};

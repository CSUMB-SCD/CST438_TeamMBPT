const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const router = express.Router();

const app = express();
const __static = path.join(__dirname, '..', '/dist');

app.use(bodyParser.text());
app.use(bodyParser.json());
app.use(express.static(__static));
app.use(router);
app.listen(process.env.PORT || 8080);

// Google user authentication
const google = require('./routes/auth/google');
router.get('/auth/google/url', google.url);
router.get('/auth/google', google.callback);
const mbpt = require('./routes/auth/mbpt');
router.post('/auth/mbpt/token', mbpt.token);
router.post('/auth/mbpt/revoke', mbpt.revoke);
app.all("/*", function(req, res, next) {
  res.sendFile('index.html', { root: __static});
});

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const router = express.Router();

const app = express();
const __static = path.join(__dirname, '..', '/dist');

app.use(bodyParser.text());
app.use(express.static(__static));
app.use('/', router);
app.listen(process.env.PORT || 8080);

// Google user authentication
const google = require('./routes/google_auth');
router.get('/auth/google/url', google.url);
router.get('/auth/google', google.callback);
// Backend user query
router.post('/user', require('./routes/user'));

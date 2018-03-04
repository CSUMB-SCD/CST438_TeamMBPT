const express = require('express');
const app = express();
const path = require('path');
const __static = path.join(__dirname, '..', '/dist');

app.use(express.static(__static));
app.listen(process.env.PORT || 8080);

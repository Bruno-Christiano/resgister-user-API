import dotenv from 'dotenv';
const express = require('express');
const routes = require('./routes');

dotenv.config();
const app = express();
const port = 3333;

routes(app);

app.listen(process.env.PORT || 3000);

module.exports = app;

/* eslint-disable no-console */

const path = require('path');
const express = require('express');

const port = process.env.PORT || 3000;
const emberAppRoot = path.resolve(__dirname, '../dummy');
const emberDistRoot = path.resolve(__dirname, '../../dist');

const app = express();
const emberRuntimeConfigMiddleware = require('../../middleware');

app.use(emberRuntimeConfigMiddleware(emberAppRoot));
app.use(express.static(emberDistRoot));

app.listen(port, () => {
  console.log(`Server running on ${port}`);
});

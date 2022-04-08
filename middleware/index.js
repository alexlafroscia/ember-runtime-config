'use strict';

const theredoc = require('theredoc');
const getConfig = require('../lib/get-config');

module.exports = function (projectRoot) {
  const runtimeConfig = getConfig(projectRoot);
  const scriptContent = theredoc`
    (function(context) {
      context._erc = ${JSON.stringify(runtimeConfig)};
    })(window);
  `;

  return (req, res, next) => {
    if (req.path === '/__/env.js') {
      res.set('Content-Type', 'application/javascript');
      res.set('Cache-Control', 'no-cache');
      res.send(scriptContent);
    } else {
      next();
    }
  };
};

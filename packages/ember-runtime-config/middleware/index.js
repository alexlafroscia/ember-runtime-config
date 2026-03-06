'use strict';

const theredoc = require('theredoc');
const crypto = require('crypto');
const getConfig = require('../lib/get-config.js');

module.exports = function (projectRoot, useEtag = false) {
  const runtimeConfig = getConfig(projectRoot);

  const scriptContent = theredoc`
(function(context) {
context._erc = ${JSON.stringify(runtimeConfig)};
})(window);
`;

  let etag;

  if (useEtag) {
    etag = crypto.createHash('sha1').update(scriptContent).digest('hex');
  }

  return (req, res, next) => {
    if (req.path === '/__/env.js') {
      res.set('Content-Type', 'application/javascript');

      if (useEtag) {
        res.set('Cache-Control', 'max-age=0, no-cache');
        res.set('ETag', etag);

        if (req.headers['if-none-match'] === etag) {
          res.status(304).end();
          return;
        }
      } else {
        res.set('Cache-Control', 'max-age=0, no-cache, no-store');
      }

      res.send(scriptContent);
    } else {
      next();
    }
  };
};

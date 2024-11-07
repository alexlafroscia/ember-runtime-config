'use strict';

const path = require('path');

module.exports = function (projectRoot) {
  const runtimeConfigPath = path.resolve(
    projectRoot,
    'config',
    'ember-runtime-config.js',
  );

  return require(runtimeConfigPath)();
};

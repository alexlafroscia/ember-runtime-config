'use strict';

const getConfig = require('../lib/get-config.js');

module.exports.buildSandboxGlobals = function (
  projectRoot,
  additionalConfig = {},
) {
  return {
    _erc: Object.assign(getConfig(projectRoot), additionalConfig),
  };
};

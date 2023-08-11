'use strict';

const getConfig = require('../lib/get-config');

module.exports.buildSandboxGlobals = function (
  projectRoot,
  additionalConfig = {}
) {
  return {
    _erc: Object.assign(getConfig(projectRoot), additionalConfig),
  };
};

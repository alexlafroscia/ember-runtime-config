'use strict';

const getConfig = require('../lib/get-config');

module.exports.buildSandboxGlobals = function (projectRoot) {
  return {
    _erc: getConfig(projectRoot),
  };
};

'use strict';

const path = require('path');
const fs = require('fs');

module.exports = function (projectRoot) {
  const configDir = path.resolve(projectRoot, 'config');
  const baseName = 'ember-runtime-config';

  let runtimeConfigPath;

  for (const ext of ['js', 'cjs', 'mjs']) {
    const configPath = path.join(configDir, `${baseName}.${ext}`);
    if (fs.existsSync(configPath)) {
      runtimeConfigPath = configPath;
    }
  }

  if (!runtimeConfigPath) {
    throw new Error(
      `ember-runtime-config: No config file found. Expected one of ${baseName}.{js,cjs,mjs} in the ${projectRoot} directory.`,
    );
  }

  const module = require(runtimeConfigPath);
  const configFn = typeof module === 'function' ? module : module.default;

  if (typeof configFn !== 'function') {
    throw new Error(
      `ember-runtime-config: Config file at ${runtimeConfigPath} must export a function (received ${typeof configFn})`,
    );
  }

  return configFn();
};

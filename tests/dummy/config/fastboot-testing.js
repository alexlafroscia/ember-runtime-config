const fastbootConfig = require('./fastboot');

module.exports = {
  buildSandboxGlobals(defaultGlobals) {
    return fastbootConfig().buildSandboxGlobals(defaultGlobals);
  },
};

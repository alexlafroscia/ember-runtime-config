const fastbootConfig = require('./fastboot');

module.exports = function () {
  return {
    buildSandboxGlobals(defaultGlobals) {
      return fastbootConfig().buildSandboxGlobals(defaultGlobals);
    },
  };
};

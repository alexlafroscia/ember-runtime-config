const { dirname } = require('path');

module.exports = function () {
  return {
    buildSandboxGlobals(defaultGlobals) {
      let fastbootOnlyConfig = {
        GREETING: 'Hello, FastBoot world!',
      };

      return Object.assign(
        {},
        defaultGlobals,
        require('../../../fastboot').buildSandboxGlobals(
          dirname(__dirname),
          fastbootOnlyConfig
        )
      );
    },
  };
};

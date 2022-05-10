const path = require('path');

module.exports = {
  buildSandboxGlobals(defaultGlobals) {
    let fastbootOnlyConfig = {
      GREETING: 'Hello, FastBoot world!',
    };

    return Object.assign(
      {},
      defaultGlobals,
      require(path.join(process.cwd(), 'fastboot')).buildSandboxGlobals(
        path.join(__dirname, '..'),
        fastbootOnlyConfig
      )
    );
  },
};

const path = require('path');

module.exports = {
  buildSandboxGlobals(defaultGlobals) {
    return Object.assign(
      {},
      defaultGlobals,
      require(path.join(process.cwd(), 'fastboot')).buildSandboxGlobals(
        path.join(__dirname, '..')
      )
    );
  },
};

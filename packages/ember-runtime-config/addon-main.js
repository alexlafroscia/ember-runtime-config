const { addonV1Shim } = require('@embroider/addon-shim');
const middleware = require('./middleware');
const { join } = require('path');

function isV1Addon(project) {
  return project.isEmberCLIAddon() && project.pkg['ember-addon'].version !== 2;
}

function projectRoot(project) {
  return isV1Addon(project)
    ? join(project.root, 'tests', 'dummy')
    : project.root;
}

module.exports = {
  ...addonV1Shim(__dirname),

  serverMiddleware({ app }) {
    app.use(middleware(projectRoot(this.project)));
  },

  testemMiddleware(app) {
    app.use(middleware(projectRoot(this.project)));
  },

  contentFor(hook) {
    if (hook === 'head') {
      return `<script type="text/javascript" src="/__/env.js" data-embroider-ignore></script>`;
    }
  },
};

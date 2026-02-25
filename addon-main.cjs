'use strict';

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

  contentFor(type, config) {
    if (type === 'head') {
      const defer = config.runtimeConfig?.deferScript ? 'defer' : '';
      return `<script type="text/javascript" src="/__/env.js" ${defer} data-embroider-ignore></script>`;
    }
  },
};

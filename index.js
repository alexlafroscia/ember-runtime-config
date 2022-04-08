'use strict';

const path = require('path');
const middleware = require('./middleware');

module.exports = {
  name: require('./package').name,

  serverMiddleware({ app }) {
    this._startMiddleware(app);
  },

  testemMiddleware(app) {
    this._startMiddleware(app);
  },

  _startMiddleware(app) {
    let projectRoot = this.project.root;

    if (this.project.isEmberCLIAddon()) {
      projectRoot = path.resolve(projectRoot, 'tests/dummy');
    }

    app.use(middleware(projectRoot));
  },

  contentFor(hook) {
    if (hook === 'head') {
      return `<script type="text/javascript" src="/__/env.js"></script>`;
    }
  },
};

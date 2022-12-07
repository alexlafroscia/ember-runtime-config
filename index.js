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

// const { addonV1Shim } = require('@embroider/addon-shim');
// const middleware = require('./middleware');
//
// module.exports = {
//   ...addonV1Shim(__dirname),
//
//   serverMiddleware({ app }) {
//     app.use(middleware(this.project.root));
//   },
//
//   testemMiddleware(app) {
//     app.use(middleware(this.project.root));
//   },
//
//   contentFor(hook) {
//     if (hook === 'head') {
//       return `<script type="text/javascript" src="/__/env.js" data-embroider-ignore></script>`;
//     }
//   },
// };

const { addonV1Shim } = require('@embroider/addon-shim');
const middleware = require('./middleware');

module.exports = {
  ...addonV1Shim(__dirname),

  serverMiddleware({ app }) {
    app.use(middleware(this.project.root));
  },

  testemMiddleware(app) {
    app.use(middleware(this.project.root));
  },

  contentFor(hook) {
    if (hook === 'head') {
      return `<script type="text/javascript" src="/__/env.js" data-embroider-ignore></script>`;
    }
  },
};

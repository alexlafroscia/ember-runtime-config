module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module'
  },
  plugins: [
    'ember',
    'prettier'
  ],
  extends: [
    'eslint:recommended',
    'plugin:ember/recommended',
    'prettier'
  ],
  env: {
    browser: true
  },
  rules: {
    'prettier/prettier': ['error', {
      singleQuote: true
    }]
  },
  overrides: [
    // node files
    {
      files: [
        'commitlint.config.js',
        'ember-cli-build.js',
        'index.js',
        'testem.js',
        'blueprints/*/index.js',
        'config/**/*.js',
        'lib/**/*.js',
        'middleware/**/*.js',
        'tests/dummy/config/**/*.js',
        'tests/server/**/*.js'
      ],
      excludedFiles: [
        'addon/**',
        'addon-test-support/**',
        'app/**',
        'tests/dummy/app/**'
      ],
      parserOptions: {
        sourceType: 'script',
        ecmaVersion: 2015
      },
      env: {
        browser: false,
        node: true
      },
      plugins: ['node'],
      rules: Object.assign({}, require('eslint-plugin-node').configs.recommended.rules, {
        // add your custom rules and overrides for node files here
      })
    }
  ]
};

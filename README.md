ember-runtime-config [![Build Status](https://github.com/alexlafroscia/ember-runtime-config/actions/workflows/ci.yml/badge.svg)](https://github.com/alexlafroscia/ember-runtime-config/actions/workflows/ci.yml)
==============================================================================

> Configure an Ember application with server-side environment variables

Normally, if you want to configure your Ember application on a per-environment basis, you can access the environment at build-time in `config/environment.js` and use that in your application.

But what happens if you want to build your application once, but still configure the application based on the environment?

This addon allows you to do just that!


Compatibility
------------------------------------------------------------------------------

* Ember.js v3.24 or above
* Ember CLI v3.24 or above
* Node.js v14 or above


Installation
------------------------------------------------------------------------------

```
ember install ember-runtime-config
```

Then, edit the configuration in `config/ember-runtime-config.js` to define the variables you want access to in your application.

To access the variables from the client, you can import the environment like so:

```javascript
import env from 'ember-runtime-config';
```

Additionally, yu may use template helper `runtime-config` to access the variables in the template like so:

```handlebars
{{runtime-config "SOME_KEY"}}
```


Usage
------------------------------------------------------------------------------

In development, the environment will be exposed to your Ember application automatically by hooking into the development server.

In a production environment, it's assumed that you're using an Express-like Node server for your assets. You can import the middleware and add it to your own server.

```javascript
const app = require('express')();
const emberRuntimeConfig = require('ember-runtime-config/middleware');

app.use(emberRuntimeConfig('/path/to/ember/app/root'));

app.listen(3000, () => {
  console.log('Server running');
});
```

To have access to runtime variables in fastboot mode add runtime-config properties within the sandbox:
```javascript
buildSandboxGlobals (defaultGlobals) {
  return Object.assign(
    {},
    defaultGlobals,
    require('ember-runtime-config/fastboot').buildSandboxGlobals(path.dirname(__dirname))
  );
}
```
More info can be found in [ember-cli-fastboot](https://github.com/ember-fastboot/ember-cli-fastboot/tree/master/packages/fastboot#usage).

Test helpers
------------------------------------------------------------------------------
```setRuntimeConfig``` set custom config in application.

Example:
```javascript
  import { setRuntimeConfig } from 'ember-runtime-config/test-support';

  module('Acceptance | Awesome test', function (hooks) {
    setupApplicationTest(hooks);

    test('updating an environment variable and accessing it', async function (assert) {
      setRuntimeConfig({
        GREETING: 'Welcome!'
      });

      await visit('/');

      assert.dom('h1').hasText('Welcome!');
    });
  });
```


Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).

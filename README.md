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


Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).

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
// config/fastboot.js or config/fastboot-testing.js
const { dirname } = require('path');

module.exports = function () {
  return {
    buildSandboxGlobals(defaultGlobals) {
      let fastbootOnlyConfig = {
        SOME_KEY: 'fastbootOnly'
      };

      return Object.assign(
        {},
        defaultGlobals,
        require('ember-runtime-config/fastboot').buildSandboxGlobals(
          dirname(__dirname),
          fastbootOnlyConfig
        )
      );
    },
  };
};
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

TypeScript
------------------------------------------------------------------------------

The library ships with full support for TypeScript usage.
The API described above works as expected, with one additional nicety and one caveat.

**Nicety:** the library provides you the ability to define statically known
feature flags by using a *registry* (as you may be familiar with from the registries
for Ember's services, Ember Data models, etc.). If you define your keys in a registry like this:

```ts
// types/index.d.ts, with other types defined for your app

declare module 'ember-runtime-config/registry' {
  export default interface Registry {
    'prop-a': boolean;
    'prop-b': string;
  }
}
```

Then in your app code, you will get type checking: TS will require you to use
one of those keys and reject unknown keys.

```ts
import Component from '@glimmer/component';
import runtimeConfig from 'ember-runtime-config';
 
export default class Example extends Component {
  get imagePrefix() {
    return runtimeConfig['prop-a']; // ✅
  }

  get whoops() {
    return runtimeConfig.propX; // ❌
  }
}
```

This applies to all the values. If you do *not* add any keys to the `Registry` interface,
the types will fall back to simply allowing any string and returning a `unknown` value.

This project ships [Glint](https://github.com/typed-ember/glint) types,
which allow you when using TypeScript to get strict type checking in your templates.

Unless you are using [strict mode](http://emberjs.github.io/rfcs/0496-handlebars-strict-mode.html) templates
(via [first class component templates](http://emberjs.github.io/rfcs/0779-first-class-component-templates.html)),
Glint needs a [Template Registry](https://typed-ember.gitbook.io/glint/using-glint/ember/template-registry)
that contains entries for the element modifier provided by this addon.
To add these registry entries automatically to your app, you just need to import `ember-runtime-config/template-registry`
from somewhere in your app. When using Glint already, you will likely have a file like
`types/glint.d.ts` where you already import glint types, so just add the import there:

 ```ts
 import '@glint/environment-ember-loose';
 import type EmberRuntimeConfigRegistry from 'ember-runtime-config/template-registry';
 declare module '@glint/environment-ember-loose/registry' {
   export default interface Registry extends EmberRuntimeConfigRegistry, /* other addon registries */ {
     // local entries
   }
 }
 ```

> **Note** Glint itself is still under active development, and as such breaking changes might occur.
> Therefore, Glint support by this addon is also considered experimental, and not covered by our SemVer contract!

#### Stability

This library provides type definitions and follows the current draft of the
[Semantic Versioning for TypeScript Types](https://www.semver-ts.org) specification.
The public API is all published types. It currently supports TypeScript 4.4 - 4.9.

Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).

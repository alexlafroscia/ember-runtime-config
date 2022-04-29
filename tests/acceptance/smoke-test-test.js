import { module, test } from 'qunit';
import { visit } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { setRuntimeConfig } from 'ember-runtime-config/test-support';

module('Acceptance | smoke test', function (hooks) {
  setupApplicationTest(hooks);

  test('accessing an environment variable', async function (assert) {
    await visit('/');

    assert.dom('h1').hasText('Hello, world!');
  });

  test('updating an environment variable and accessing it', async function (assert) {
    setRuntimeConfig({ GREETING: 'Welcome!' });

    await visit('/');

    assert.dom('h1').hasText('Welcome!');
  });
});

import { module, test } from 'qunit';
import { visit } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | smoke test', function(hooks) {
  setupApplicationTest(hooks);

  test('accessing an environment variable', async function(assert) {
    await visit('/');

    assert.dom('h1').hasText('Hello, world!');
  });
});

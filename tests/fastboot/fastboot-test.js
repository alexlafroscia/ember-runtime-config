import { module, test } from 'qunit';
import { setup, visit } from 'ember-cli-fastboot-testing/test-support';

module('FastBoot', function (hooks) {
  setup(hooks);

  test('it renders the correct html', async function (assert) {
    await visit('/');

    assert.dom('h1').hasText('Hello, world!');
  });
});

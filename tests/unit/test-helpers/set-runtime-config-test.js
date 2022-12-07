import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import config from 'ember-runtime-config';
import { setRuntimeConfig } from 'ember-runtime-config/test-support';

module('Integration | Helper | runtime-config', function (hooks) {
  setupTest(hooks);

  test('it works', async function (assert) {
    assert.strictEqual(config.GREETING, 'Hello, world!', 'initial value is ok');

    setRuntimeConfig({
      GREETING: '¡Hola Mundo!',
    });
    assert.strictEqual(config.GREETING, '¡Hola Mundo!', 'updated value is ok');
  });

  test('it restores value for next test', async function (assert) {
    assert.strictEqual(config.GREETING, 'Hello, world!', 'initial value is ok');

    setRuntimeConfig({
      GREETING: '¡Hola Mundo!',
    });
    assert.strictEqual(config.GREETING, '¡Hola Mundo!', 'updated value is ok');
  });
});

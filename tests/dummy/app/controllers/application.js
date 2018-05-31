import Controller from '@ember/controller';
import { readOnly } from '@ember/object/computed';
import env from 'ember-runtime-config';

export default Controller.extend({
  env,

  greeting: readOnly('env.GREETING')
});

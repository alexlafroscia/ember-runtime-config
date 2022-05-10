import { helper } from '@ember/component/helper';
import config from 'ember-runtime-config';

export default helper(function runtimeConfig([key]) {
  return config[key];
});

import { helper } from '@ember/component/helper';
import config from '../index.js';

function runtimeConfig([key]) {
  return config[key];
}
var runtimeConfig$1 = helper(runtimeConfig);

export { runtimeConfig$1 as default };
//# sourceMappingURL=runtime-config.js.map

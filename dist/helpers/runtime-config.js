import { helper } from '@ember/component/helper';
import config from '../index.js';

function runtimeConfig([key]) {
  return config[key];
}
var runtimeConfig_default = helper(runtimeConfig);

export { runtimeConfig_default as default };
//# sourceMappingURL=runtime-config.js.map

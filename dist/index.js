import { defer } from 'rsvp';
import { later } from '@ember/runloop';

/* eslint-disable ember/no-runloop */
const config = defer();
function checkConfig() {
  if (window._erc) {
    config.resolve(window._erc);
  } else {
    later(checkConfig, 10);
  }
}
function awaitRuntimeConfig() {
  checkConfig();
  return config.promise;
}
var config$1 = new Proxy({}, {
  get(target, prop) {
    // Safeguard for the case if /env.js has not resolved yet.
    return (window._erc || target)[prop];
  }
});

export { awaitRuntimeConfig, config$1 as default };
//# sourceMappingURL=index.js.map

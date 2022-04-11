'use strict';

import { defer } from 'rsvp';
import { later } from '@ember/runloop';

const config = defer();

function checkConfig() {
  if (window._erc) {
    config.resolve(window._erc);
  } else {
    later(checkConfig, 10);
  }
}

export function awaitRuntimeConfig() {
  checkConfig();
  return config.promise;
}

export default window._erc;

import { defer } from 'rsvp';
import { later } from '@ember/runloop';

import type ConfigRegistry from 'ember-runtime-config/registry';

export type RuntimeConfig = keyof ConfigRegistry extends never
  ? Record<string, string>
  : ConfigRegistry;

const config = defer<RuntimeConfig>();

function checkConfig(): void {
  if (window._erc) {
    config.resolve(window._erc);
  } else {
    later(checkConfig, 10);
  }
}

export function awaitRuntimeConfig(): Promise<RuntimeConfig> {
  checkConfig();
  return config.promise;
}

export default new Proxy<RuntimeConfig>({} as RuntimeConfig, {
  get<K extends keyof RuntimeConfig = keyof RuntimeConfig>(
    _target: RuntimeConfig,
    prop: K
  ): RuntimeConfig[K] {
    // Safeguard for the case if /env.js has not resolved yet,
    return (window._erc || _target)[prop];
  },
});

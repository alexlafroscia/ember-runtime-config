import { defer } from 'rsvp';
import { later } from '@ember/runloop';

import type ConfigRegistry from './registry.ts';

export type RuntimeConfig = keyof ConfigRegistry extends never
  ? { [key: string]: string }
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

export default new Proxy({} as RuntimeConfig, {
  get<K extends keyof RuntimeConfig>(
    target: RuntimeConfig,
    prop: string
  ): RuntimeConfig[K] {
    // Safeguard for the case if /env.js has not resolved yet.
    return (window._erc || target)[prop]!;
  },
});

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

export default new Proxy(window._erc, {
  get<K extends keyof RuntimeConfig>(
    _target: RuntimeConfig,
    prop: string
  ): RuntimeConfig[K] {
    return window._erc[prop]!;
  },
});

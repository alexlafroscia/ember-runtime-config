import { helper } from '@ember/component/helper';
import config, { type RuntimeConfig } from '../index.ts';

function runtimeConfig<K extends keyof RuntimeConfig>([key]: [
  K,
]): RuntimeConfig[K] {
  return config[key];
}

export default helper(runtimeConfig);

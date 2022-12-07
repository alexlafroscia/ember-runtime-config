import { helper } from '@ember/component/helper';
import config, { type RuntimeConfig } from '../index';

export interface RuntimeConfigSignature<
  K extends keyof RuntimeConfig = keyof RuntimeConfig
> {
  Args: {
    Positional: [K];
  };
  Return: RuntimeConfig[K];
}

function runtimeConfig<K extends keyof RuntimeConfig = keyof RuntimeConfig>([
  key,
]: [K]): RuntimeConfig[K] {
  return config[key];
}

export default helper<RuntimeConfigSignature>(runtimeConfig);

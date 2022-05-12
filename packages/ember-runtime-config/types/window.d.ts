import { RuntimeConfig } from 'ember-runtime-config';

declare global {
  interface Window {
    _erc: RuntimeConfig;
  }
}

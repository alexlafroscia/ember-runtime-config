import { RuntimeConfig } from './index.ts';

declare global {
  interface Window {
    _erc: RuntimeConfig;
  }
}

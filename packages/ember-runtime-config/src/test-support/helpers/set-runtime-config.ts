import { registerDestructor } from '@ember/destroyable';
import { getContext, type TestContext } from '@ember/test-helpers';

import type { RuntimeConfig } from '../../index.ts';

const initialConfig = Symbol('setRuntimeConfig');

interface ModifiedTestContext extends TestContext {
  [initialConfig]: RuntimeConfig;
}

export function setRuntimeConfig(config: Partial<RuntimeConfig>): void {
  const context = <ModifiedTestContext>getContext();

  if (!context[initialConfig]) {
    context[initialConfig] = { ...window._erc };
  }

  window._erc = { ...window._erc, ...(config as RuntimeConfig) };

  registerDestructor(context.owner, () => {
    window._erc = context[initialConfig];
  });
}

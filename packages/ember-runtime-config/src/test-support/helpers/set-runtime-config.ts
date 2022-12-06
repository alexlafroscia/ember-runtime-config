import { registerDestructor } from '@ember/destroyable';
import { getContext, TestContext } from '@ember/test-helpers';

import type { RuntimeConfig } from '../../index';

const initialConfig = Symbol('setRuntimeConfig');

interface ModifiedTestContext extends TestContext {
  [initialConfig]: Partial<RuntimeConfig>;
}

export function setRuntimeConfig(config: Partial<RuntimeConfig>): void {
  const context = <ModifiedTestContext>getContext();

  if (!context[initialConfig]) {
    context[initialConfig] = { ...window._erc };
  }

  window._erc = { ...window._erc, ...config };

  registerDestructor(context.owner, () => {
    window._erc = context[initialConfig];
  });
}

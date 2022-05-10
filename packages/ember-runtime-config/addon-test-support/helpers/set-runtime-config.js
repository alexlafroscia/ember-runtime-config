import { registerDestructor } from '@ember/destroyable';
import { getContext } from '@ember/test-helpers';

const initialConfig = Symbol('setRuntimeConfig');

export function setRuntimeConfig(config) {
  const context = getContext();

  if (!context[initialConfig]) {
    context[initialConfig] = { ...window._erc };
  }

  Object.assign(window._erc, config);

  registerDestructor(context.owner, () => {
    Object.assign(window._erc, context[initialConfig]);
  });
}

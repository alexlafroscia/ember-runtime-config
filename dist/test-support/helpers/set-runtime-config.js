import { registerDestructor } from '@ember/destroyable';
import { getContext } from '@ember/test-helpers';

const initialConfig = Symbol('setRuntimeConfig');
function setRuntimeConfig(config) {
  const context = getContext();
  if (!context[initialConfig]) {
    context[initialConfig] = {
      ...window._erc
    };
  }
  window._erc = {
    ...window._erc,
    ...config
  };
  registerDestructor(context.owner, () => {
    window._erc = context[initialConfig];
  });
}

export { setRuntimeConfig };
//# sourceMappingURL=set-runtime-config.js.map

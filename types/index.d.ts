import '@glint/environment-ember-loose';

import type EmberRuntimeConfigRegistry from 'ember-runtime-config/template-registry';

declare module '@glint/environment-ember-loose/registry' {
  // Remove this once entries have been added! 👇
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export default interface Registry
    extends EmberRuntimeConfigRegistry /* other addon registries */ {
    // local entries
  }
}

declare module 'ember-runtime-config/registry' {
  export default interface Registry {
    GREETING: string;
  }
}

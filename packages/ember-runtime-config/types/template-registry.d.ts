import type { HelperLike } from '@glint/template';
import type { RuntimeConfigSignature } from 'ember-runtime-config/helpers/runtime-config';

export default interface EmberRuntimeConfigRegistry {
  'runtime-config': HelperLike<RuntimeConfigSignature>;
}

import Component from '@glimmer/component';
import runtimeConfig from 'ember-runtime-config';

export default class extends Component {
  // typecheck TypeScript integration.
  get greeting(): string {
    return runtimeConfig.GREETING;
  }
}

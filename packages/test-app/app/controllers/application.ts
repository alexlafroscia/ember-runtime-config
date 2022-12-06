import Controller from '@ember/controller';
import runtimeConfig from 'ember-runtime-config';

export default class extends Controller {
  env = runtimeConfig;

  get greeting() {
    return this.env.GREETING;
  }
}

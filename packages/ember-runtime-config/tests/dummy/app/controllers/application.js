import Controller from '@ember/controller';
import env from 'ember-runtime-config';

export default class extends Controller {
  env = env;

  get greeting() {
    return this.env.GREETING;
  }
}

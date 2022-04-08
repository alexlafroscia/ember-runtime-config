'use strict';

/**
 * The file configures the environment exposed by `ember-runtime-config`
 *
 * The object returned by this function can be imported in the client
 * like so:
 *
 *   import env from 'ember-runtime-config';
 *
 * Make sure that the object is serializable to a POJO.
 */
module.exports = function () {
  return {
    GREETING: process.env.GREETING || 'Default Value',
  };
};

# How To Contribute

## Installation

* `git clone https://github.com/alexlafroscia/ember-runtime-config.git`
* `cd ember-runtime-config`
* `yarn install`

## Linting

Inside any of the packages you can run:

* `yarn lint`
* `yarn lint:fix`

## Running tests

* `cd packages/ember-runtime-config && ember test` – Runs the test suite on the current Ember version
* `cd packages/ember-runtime-config && cd test-app && ember test --server` – Runs the test suite in "watch mode"
* `cd packages/ember-runtime-config && cd test-app && ember try:each` – Runs the test suite against multiple Ember versions

## Running the dummy application

* `cd packages/ember-runtime-config && ember serve`
* Visit the dummy application at [http://localhost:4200](http://localhost:4200).

For more information on using ember-cli, visit [https://cli.emberjs.com/release/](https://cli.emberjs.com/release/).

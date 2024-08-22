# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

<a name="1.0.1"></a>


## v2.0.1 (2024-08-22)

#### :memo: Documentation
* `ember-runtime-config`
  * [#22](https://github.com/alexlafroscia/ember-runtime-config/pull/22) (docs) fix typescript support version ([@SergeAstapov](https://github.com/SergeAstapov))

#### Committers: 1
- Sergey Astapov ([@SergeAstapov](https://github.com/SergeAstapov))

## v2.0.0 (2024-08-22)

#### :boom: Breaking Change
* `ember-runtime-config`, `test-app`
  * [#12](https://github.com/alexlafroscia/ember-runtime-config/pull/12) feat!: convert to v2 addon ([@SergeAstapov](https://github.com/SergeAstapov))
* Other
  * [#2](https://github.com/alexlafroscia/ember-runtime-config/pull/2) chore: drop Node.js <= 12 support ([@SergeAstapov](https://github.com/SergeAstapov))

#### :rocket: Enhancement
* `ember-runtime-config`
  * [#18](https://github.com/alexlafroscia/ember-runtime-config/pull/18) feat: opt-in option to defer attribute in script tag ([@SergeAstapov](https://github.com/SergeAstapov))
* `ember-runtime-config`, `test-app`
  * [#14](https://github.com/alexlafroscia/ember-runtime-config/pull/14) feat: convert to TypeScript ([@SergeAstapov](https://github.com/SergeAstapov))
* Other
  * [#8](https://github.com/alexlafroscia/ember-runtime-config/pull/8) feat: add test helper ([@anbykova](https://github.com/anbykova))
  * [#9](https://github.com/alexlafroscia/ember-runtime-config/pull/9) feat(fastboot): allow fastboot specific config ([@SergeAstapov](https://github.com/SergeAstapov))
  * [#7](https://github.com/alexlafroscia/ember-runtime-config/pull/7) feat(middleware): add no-store to Cache-Control header ([@SergeAstapov](https://github.com/SergeAstapov))
  * [#1](https://github.com/alexlafroscia/ember-runtime-config/pull/1) feat: add fastboot support ([@anbykova](https://github.com/anbykova))
  * [#6](https://github.com/alexlafroscia/ember-runtime-config/pull/6) feat: add `runtime-config` template helper ([@SergeAstapov](https://github.com/SergeAstapov))

#### :bug: Bug Fix
* `ember-runtime-config`
  * [#15](https://github.com/alexlafroscia/ember-runtime-config/pull/15) fix: v1 addon and dummy app compat ([@SergeAstapov](https://github.com/SergeAstapov))

#### :house: Internal
* Other
  * [#21](https://github.com/alexlafroscia/ember-runtime-config/pull/21) Setup release-it ([@SergeAstapov](https://github.com/SergeAstapov))
  * [#16](https://github.com/alexlafroscia/ember-runtime-config/pull/16) feat: add push-dist workflow ([@SergeAstapov](https://github.com/SergeAstapov))
  * [#5](https://github.com/alexlafroscia/ember-runtime-config/pull/5) chore: run `ember-cli-update` to sync with latest addon blueprint ([@SergeAstapov](https://github.com/SergeAstapov))
  * [#4](https://github.com/alexlafroscia/ember-runtime-config/pull/4) chore: add `eslint-plugin-qunit` per latest addon blueprint ([@SergeAstapov](https://github.com/SergeAstapov))
  * [#3](https://github.com/alexlafroscia/ember-runtime-config/pull/3) chore: bump lint dependencies ([@SergeAstapov](https://github.com/SergeAstapov))
* `ember-runtime-config`, `test-app`
  * [#20](https://github.com/alexlafroscia/ember-runtime-config/pull/20) Sync with latest addon blueprint ([@SergeAstapov](https://github.com/SergeAstapov))
  * [#17](https://github.com/alexlafroscia/ember-runtime-config/pull/17) chore: sync addon setup with latest embroider addon blueprint ([@SergeAstapov](https://github.com/SergeAstapov))
  * [#11](https://github.com/alexlafroscia/ember-runtime-config/pull/11) chore: extract test-app into own package ([@SergeAstapov](https://github.com/SergeAstapov))
* `test-app`
  * [#13](https://github.com/alexlafroscia/ember-runtime-config/pull/13) chore: add tests for `setRuntimeConfig` test helper ([@SergeAstapov](https://github.com/SergeAstapov))
* `ember-runtime-config`
  * [#10](https://github.com/alexlafroscia/ember-runtime-config/pull/10) chore: convert to monorepo ([@SergeAstapov](https://github.com/SergeAstapov))

#### Committers: 2
- Sergey Astapov ([@SergeAstapov](https://github.com/SergeAstapov))
- [@anbykova](https://github.com/anbykova)

## [1.0.1](https://github.com/alexlafroscia/ember-runtime-config/compare/v1.0.0...v1.0.1) (2018-05-31)


### Bug Fixes

* correctly export configuration function ([6754804](https://github.com/alexlafroscia/ember-runtime-config/commit/6754804))

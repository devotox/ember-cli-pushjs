[![Ember Observer Score](http://emberobserver.com/badges/ember-cli-pushjs.svg)](http://emberobserver.com/addons/ember-cli-pushjs)
[![Build Status](https://travis-ci.org/devotox/ember-cli-pushjs.svg)](http://travis-ci.org/devotox/ember-cli-pushjs)
[![Coverage Status](https://codecov.io/gh/devotox/ember-cli-pushjs/branch/master/graph/badge.svg)](https://codecov.io/gh/devotox/ember-cli-pushjs)
[![NPM Version](https://badge.fury.io/js/ember-cli-pushjs.svg)](http://badge.fury.io/js/ember-cli-pushjs)
[![NPM Downloads](https://img.shields.io/npm/dm/ember-cli-pushjs.svg)](https://www.npmjs.org/package/ember-cli-pushjs)
[![Dependency Status](https://david-dm.org/poetic/ember-cli-pushjs.svg)](https://david-dm.org/poetic/ember-cli-pushjs)
[![DevDependency Status](https://david-dm.org/poetic/ember-cli-pushjs/dev-status.svg)](https://david-dm.org/poetic/ember-cli-pushjs#info=devDependencies)
[![Greenkeeper](https://badges.greenkeeper.io/devotox/ember-cli-pushjs.svg)](https://greenkeeper.io/)

ember-cli-pushjs
==============================================================================

Simple Wrapper around [Push JS](https://github.com/Nickersoft/push.js).
This provides a service that can be used to send system / web notifications

[DEMO](http://devotox.github.io/ember-cli-pushjs)

Installation
------------------------------------------------------------------------------

```
ember install ember-cli-pushjs
```


Usage
------------------------------------------------------------------------------

```javascript
import Route from '@ember/routing/route';

import { inject } from '@ember/service';

export default Route.extend({
  push: inject(),

  setupController(controller) {
    this._super(...arguments);
    controller.setProperties({
      timeout: 5000,
      title: 'Test Notification',
      body: 'How does it feel for this to be so easy?',
      icon: 'https://lh5.ggpht.com/ZHrKRvpiLuDpAzK55_VJUXf0g22TM_jHWb5fMG1GUSnt6NtFVoxzlDvqjbi_f7005dU=w300'
    })
  },

  actions: {
    notify() {
      let { title, body, icon, timeout } = this.get('controller');
      this.get('push').create(title, {
        body, icon, timeout
      })
    }
  }
});
```


Contributing
------------------------------------------------------------------------------

### Installation

* `git clone <repository-url>`
* `cd ember-cli-pushjs`
* `yarn install`

### Linting

* `yarn lint:js`
* `yarn lint:js --fix`

### Running tests

* `ember test` – Runs the test suite on the current Ember version
* `ember test --server` – Runs the test suite in "watch mode"
* `yarn test` – Runs `ember try:each` to test your addon against multiple Ember versions

### Running the dummy application

* `ember serve`
* Visit the dummy application at [http://localhost:4200](http://localhost:4200).

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).

[![Ember Observer Score](http://emberobserver.com/badges/ember-cli-pushjs.svg)](http://emberobserver.com/addons/ember-cli-pushjs)
[![Build Status](https://travis-ci.org/devotox/ember-cli-pushjs.svg)](http://travis-ci.org/devotox/ember-cli-pushjs)
[![Coverage Status](https://codecov.io/gh/devotox/ember-cli-pushjs/branch/master/graph/badge.svg)](https://codecov.io/gh/devotox/ember-cli-pushjs)
[![NPM Version](https://badge.fury.io/js/ember-cli-pushjs.svg)](http://badge.fury.io/js/ember-cli-pushjs)
[![NPM Downloads](https://img.shields.io/npm/dm/ember-cli-pushjs.svg)](https://www.npmjs.org/package/ember-cli-pushjs)
[![Dependency Status](https://david-dm.org/devotox/ember-cli-pushjs.svg)](https://david-dm.org/devotox/ember-cli-pushjs)
[![DevDependency Status](https://david-dm.org/devotox/ember-cli-pushjs/dev-status.svg)](https://david-dm.org/devotox/ember-cli-pushjs#info=devDependencies)
[![Greenkeeper](https://badges.greenkeeper.io/devotox/ember-cli-pushjs.svg)](https://greenkeeper.io/)

ember-cli-pushjs
==============================================================================

Simple Wrapper around [Push JS](https://github.com/Nickersoft/push.js).
This provides a service that can be used to send system / web notifications

[DEMO](https://devotox.github.io/ember-cli-pushjs)

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

See the [Contributing](CONTRIBUTING.md) guide for details.

License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).

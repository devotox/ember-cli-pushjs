import Service from '@ember/service';

import Push from 'Push';

Push.config({
    serviceWorker: '/push.js/serviceWorker.js',
    fallback(payload = {}) {
      let message = payload.body || payload.title;
      message && alert(message);
    }
});

export default Service.extend({
  instance: Push,
  create() {
    return Push.create(...arguments);
  },
  clear() {
    return Push.clear(...arguments);
  },
  close() {
    return Push.close(...arguments);
  },
  count() {
    return Push.count(...arguments);
  },
  config() {
    return Push.config(...arguments);
  }
});

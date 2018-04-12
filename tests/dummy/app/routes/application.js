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
		});
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

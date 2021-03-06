'use strict';

const { name } = require('./package');
const Funnel = require('broccoli-funnel');
const mergeTrees = require('broccoli-merge-trees');

module.exports = {
	name,
	included() {
		this._super.included.apply(this, arguments);
		this._ensureThisImport();

		this.import('vendor/shims/push.js');
		this.import('node_modules/push.js/bin/push.js');
	},

	treeForPublic() {
		let push = new Funnel('node_modules/push.js/bin', {
			include: ['serviceWorker.js'],
			destDir: 'push.js'
		});

		return mergeTrees([push]);
	},

	_getAddonOptions() {
		return this.parent && this.parent.options
			|| this.app && this.app.options || {};
	},

	_ensureThisImport() {
		if (!this.import) {
			this._findHost = function findHostShim() {
				let current = this;
				let app;

				// eslint-disable-next-line
				do {
					app = current.app || app;
				} while (current.parent.parent && (current = current.parent));

				return app;
			};
			this.import = function importShim(asset, options) {
				let app = this._findHost();
				app.import(asset, options);
			};
		}
	}
};

"use strict"
define("dummy/app",["exports","dummy/resolver","ember-load-initializers","dummy/config/environment"],function(e,t,n,i){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var o=Ember.Application.extend({modulePrefix:i.default.modulePrefix,podModulePrefix:i.default.podModulePrefix,Resolver:t.default});(0,n.default)(o,i.default.modulePrefix)
var r=o
e.default=r}),define("dummy/initializers/container-debug-adapter",["exports","ember-resolver/resolvers/classic/container-debug-adapter"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0]
e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}
e.default=n}),define("dummy/initializers/export-application-global",["exports","dummy/config/environment"],function(e,t){function n(){var e=arguments[1]||arguments[0]
if(!1!==t.default.exportApplicationGlobal){var n
if("undefined"!=typeof window)n=window
else if("undefined"!=typeof global)n=global
else{if("undefined"==typeof self)return
n=self}var i,o=t.default.exportApplicationGlobal
i="string"==typeof o?o:Ember.String.classify(t.default.modulePrefix),n[i]||(n[i]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete n[i]}}))}}Object.defineProperty(e,"__esModule",{value:!0}),e.initialize=n,e.default=void 0
var i={name:"export-application-global",initialize:n}
e.default=i}),define("dummy/resolver",["exports","ember-resolver"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n=t.default
e.default=n}),define("dummy/router",["exports","dummy/config/environment"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n=Ember.Router.extend({location:t.default.locationType,rootURL:t.default.rootURL})
n.map(function(){})
var i=n
e.default=i}),define("dummy/routes/application",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.Route.extend({push:Ember.inject.service(),setupController:function(e){this._super.apply(this,arguments),e.setProperties({timeout:5e3,title:"Test Notification",body:"How does it feel for this to be so easy?",icon:"https://lh5.ggpht.com/ZHrKRvpiLuDpAzK55_VJUXf0g22TM_jHWb5fMG1GUSnt6NtFVoxzlDvqjbi_f7005dU=w300"})},actions:{notify:function(){var e=this.get("controller"),t=e.title,n=e.body,i=e.icon,o=e.timeout
this.get("push").create(t,{body:n,icon:i,timeout:o})}}})
e.default=t}),define("dummy/services/push",["exports","ember-cli-pushjs/services/push"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/templates/application",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"JYZnMlYx",block:'{"symbols":[],"statements":[[7,"h2"],[11,"id","title"],[9],[0,"Ember CLI Push JS"],[10],[0,"\\n\\n"],[7,"label"],[9],[0,"Timeout"],[10],[0,"\\n"],[7,"br"],[9],[10],[0,"\\n"],[1,[27,"input",[[27,"-input-type",[[23,["text"]]],null]],[["type","value"],[[23,["text"]],[23,["timeout"]]]]],false],[0,"\\n"],[7,"br"],[9],[10],[0,"\\n\\n"],[7,"br"],[9],[10],[0,"\\n"],[7,"label"],[9],[0,"Icon"],[10],[0,"\\n"],[7,"br"],[9],[10],[0,"\\n"],[1,[27,"input",[[27,"-input-type",[[23,["text"]]],null]],[["type","value"],[[23,["text"]],[23,["icon"]]]]],false],[0,"\\n"],[7,"br"],[9],[10],[0,"\\n\\n"],[7,"br"],[9],[10],[0,"\\n"],[7,"label"],[9],[0,"Title"],[10],[0,"\\n"],[7,"br"],[9],[10],[0,"\\n"],[1,[27,"input",[[27,"-input-type",[[23,["text"]]],null]],[["type","value"],[[23,["text"]],[23,["title"]]]]],false],[0,"\\n"],[7,"br"],[9],[10],[0,"\\n\\n"],[7,"br"],[9],[10],[0,"\\n"],[7,"label"],[9],[0,"Body"],[10],[0,"\\n"],[7,"br"],[9],[10],[0,"\\n"],[1,[27,"input",[[27,"-input-type",[[23,["text"]]],null]],[["type","value"],[[23,["text"]],[23,["body"]]]]],false],[0,"\\n"],[7,"br"],[9],[10],[0,"\\n\\n"],[7,"br"],[9],[10],[0,"\\n"],[7,"button"],[9],[0,"Notify"],[3,"action",[[22,0,[]],"notify"]],[10]],"hasEval":false}',meta:{moduleName:"dummy/templates/application.hbs"}})
e.default=t}),define("dummy/config/environment",[],function(){try{var e="dummy/config/environment",t=document.querySelector('meta[name="'+e+'"]').getAttribute("content"),n={default:JSON.parse(decodeURIComponent(t))}
return Object.defineProperty(n,"__esModule",{value:!0}),n}catch(i){throw new Error('Could not read config from meta tag with name "'+e+'".')}}),runningTests||require("dummy/app").default.create({})

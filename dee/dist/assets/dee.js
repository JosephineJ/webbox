eval("//# sourceURL=vendor/ember-cli/loader.js");

;eval("define(\"dee/app\", \n  [\"ember\",\"ember/resolver\",\"ember/load-initializers\",\"dee/config/environment\",\"exports\"],\n  function(__dependency1__, __dependency2__, __dependency3__, __dependency4__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    var Resolver = __dependency2__[\"default\"];\n    var loadInitializers = __dependency3__[\"default\"];\n    var config = __dependency4__[\"default\"];\n\n    Ember.MODEL_FACTORY_INJECTIONS = true;\n\n    var App = Ember.Application.extend({\n      modulePrefix: config.modulePrefix,\n      podModulePrefix: config.podModulePrefix,\n      Resolver: Resolver\n    });\n\n    loadInitializers(App, config.modulePrefix);\n\n    __exports__[\"default\"] = App;\n  });//# sourceURL=dee/app.js");

;eval("define(\"dee/initializers/export-application-global\", \n  [\"ember\",\"dee/config/environment\",\"exports\"],\n  function(__dependency1__, __dependency2__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    var config = __dependency2__[\"default\"];\n\n    function initialize(container, application) {\n      var classifiedName = Ember.String.classify(config.modulePrefix);\n\n      if (config.exportApplicationGlobal) {\n        window[classifiedName] = application;\n      }\n    };\n    __exports__.initialize = initialize;\n    __exports__[\"default\"] = {\n      name: \'export-application-global\',\n\n      initialize: initialize\n    };\n  });//# sourceURL=dee/initializers/export-application-global.js");

;eval("define(\"dee/router\", \n  [\"ember\",\"dee/config/environment\",\"exports\"],\n  function(__dependency1__, __dependency2__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    var config = __dependency2__[\"default\"];\n\n    var Router = Ember.Router.extend({\n      location: config.locationType\n    });\n\n    Router.map(function() {\n    	this.route(\"about\", { path: \"/about\" });\n    	//this.route(\"comic\", { path: \"/comic\" });\n    	this.resource(\"home\", { path: \"/\" }, function() {\n    		this.route(\'news\');\n    	});\n    	this.route(\"contact\", { path: \"/contact\" });\n    	this.resource(\'comic\', { path: \'/comic\' }, function() {\n    		this.route(\'chapter1\');\n    		this.route(\'chapter2\');\n    	}); \n    });\n\n    __exports__[\"default\"] = Router;\n  });//# sourceURL=dee/router.js");

;eval("define(\"dee/templates/about\", \n  [\"ember\",\"exports\"],\n  function(__dependency1__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    __exports__[\"default\"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {\n    this.compilerInfo = [4,\'>= 1.0.0\'];\n    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};\n      var buffer = \'\', stack1;\n\n\n      data.buffer.push(\"<h2 id=\'title\'>Welcome to About.js</h2>\\n\\n\");\n      stack1 = helpers._triageMustache.call(depth0, \"outlet\", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:[\"ID\"],data:data});\n      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }\n      data.buffer.push(\"\\n\");\n      return buffer;\n      \n    });\n  });//# sourceURL=dee/templates/about.js");

;eval("define(\"dee/templates/application\", \n  [\"ember\",\"exports\"],\n  function(__dependency1__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    __exports__[\"default\"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {\n    this.compilerInfo = [4,\'>= 1.0.0\'];\n    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};\n      var buffer = \'\', stack1;\n\n\n      data.buffer.push(\"<div class=\\\"wrapper\\\">\\n<header class=\\\"top-header\\\">\\n<nav class=\\\"main-nav\\\">\\n<a href=\\\"/\\\">Start</a>\\n<a href=\\\"/comic\\\">Comic</a>\\n<a href=\\\"/about\\\">About</a>\\n<a href=\\\"/contact\\\">Contact</a>\\n</nav>\\n</header>\\n<main class=\\\"main-section\\\">\\n\");\n      stack1 = helpers._triageMustache.call(depth0, \"outlet\", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:[\"ID\"],data:data});\n      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }\n      data.buffer.push(\"\\n</main>\\n<footer class=\\\"main-footer\\\">\\n</footer>\\n</div>\\n\");\n      return buffer;\n      \n    });\n  });//# sourceURL=dee/templates/application.js");

;eval("define(\"dee/templates/home\", \n  [\"ember\",\"exports\"],\n  function(__dependency1__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    __exports__[\"default\"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {\n    this.compilerInfo = [4,\'>= 1.0.0\'];\n    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};\n      var buffer = \'\', stack1, self=this;\n\n    function program1(depth0,data) {\n      \n      var buffer = \'\', stack1;\n      data.buffer.push(\"\\n<section class=\\\"full-size\\\">\\n<div class=\\\"center-box row-col\\\">\\n	<div class=\\\"part-1\\\">\\n		<h2 class=\\\"news-title\\\">\");\n      stack1 = helpers._triageMustache.call(depth0, \"news-title\", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:[\"ID\"],data:data});\n      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }\n      data.buffer.push(\"</h2>\\n	</div>\\n	<div class=\\\"part-1\\\">\\n		<p>\");\n      stack1 = helpers._triageMustache.call(depth0, \"news-content\", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:[\"ID\"],data:data});\n      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }\n      data.buffer.push(\"</p>\\n	</div>\\n</div>\\n</section>\\n\");\n      return buffer;\n      }\n\n      data.buffer.push(\"<section class=\\\"fullsize\\\">\\n<div class=\\\"center-box row-colrow\\\">\\n<div class=\\\"part-1\\\">\\n<h1 id=\'title\'>Welcome to Dee</h1>\\n</div>\\n<div class=\\\"part-1\\\">\\n	<p>Tell me more, tell me more....</p>\\n</div>\\n</div>\\n</section>\\n\");\n      stack1 = helpers.each.call(depth0, {hash:{\n        \'itemController\': (\"news-item\")\n      },hashTypes:{\'itemController\': \"STRING\"},hashContexts:{\'itemController\': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data});\n      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }\n      data.buffer.push(\"\\n\");\n      return buffer;\n      \n    });\n  });//# sourceURL=dee/templates/home.js");

;eval("define(\"dee/tests/app.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - .\');\n    test(\'app.js should pass jshint\', function() { \n      ok(true, \'app.js should pass jshint.\'); \n    });\n  });//# sourceURL=dee/tests/app.jshint.js");

;eval("define(\"dee/tests/dee/tests/helpers/resolver.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - dee/tests/helpers\');\n    test(\'dee/tests/helpers/resolver.js should pass jshint\', function() { \n      ok(true, \'dee/tests/helpers/resolver.js should pass jshint.\'); \n    });\n  });//# sourceURL=dee/tests/dee/tests/helpers/resolver.jshint.js");

;eval("define(\"dee/tests/dee/tests/helpers/start-app.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - dee/tests/helpers\');\n    test(\'dee/tests/helpers/start-app.js should pass jshint\', function() { \n      ok(true, \'dee/tests/helpers/start-app.js should pass jshint.\'); \n    });\n  });//# sourceURL=dee/tests/dee/tests/helpers/start-app.jshint.js");

;eval("define(\"dee/tests/dee/tests/test-helper.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - dee/tests\');\n    test(\'dee/tests/test-helper.js should pass jshint\', function() { \n      ok(true, \'dee/tests/test-helper.js should pass jshint.\'); \n    });\n  });//# sourceURL=dee/tests/dee/tests/test-helper.jshint.js");

;eval("define(\"dee/tests/helpers/resolver\", \n  [\"ember/resolver\",\"dee/config/environment\",\"exports\"],\n  function(__dependency1__, __dependency2__, __exports__) {\n    \"use strict\";\n    var Resolver = __dependency1__[\"default\"];\n    var config = __dependency2__[\"default\"];\n\n    var resolver = Resolver.create();\n\n    resolver.namespace = {\n      modulePrefix: config.modulePrefix,\n      podModulePrefix: config.podModulePrefix\n    };\n\n    __exports__[\"default\"] = resolver;\n  });//# sourceURL=dee/tests/helpers/resolver.js");

;eval("define(\"dee/tests/helpers/start-app\", \n  [\"ember\",\"dee/app\",\"dee/router\",\"dee/config/environment\",\"exports\"],\n  function(__dependency1__, __dependency2__, __dependency3__, __dependency4__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    var Application = __dependency2__[\"default\"];\n    var Router = __dependency3__[\"default\"];\n    var config = __dependency4__[\"default\"];\n\n    __exports__[\"default\"] = function startApp(attrs) {\n      var App;\n\n      var attributes = Ember.merge({}, config.APP);\n      attributes = Ember.merge(attributes, attrs); // use defaults, but you can override;\n\n      Ember.run(function() {\n        App = Application.create(attributes);\n        App.setupForTesting();\n        App.injectTestHelpers();\n      });\n\n      return App;\n    }\n  });//# sourceURL=dee/tests/helpers/start-app.js");

;eval("define(\"dee/tests/router.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - .\');\n    test(\'router.js should pass jshint\', function() { \n      ok(true, \'router.js should pass jshint.\'); \n    });\n  });//# sourceURL=dee/tests/router.jshint.js");

;eval("define(\"dee/tests/test-helper\", \n  [\"dee/tests/helpers/resolver\",\"ember-qunit\"],\n  function(__dependency1__, __dependency2__) {\n    \"use strict\";\n    var resolver = __dependency1__[\"default\"];\n    var setResolver = __dependency2__.setResolver;\n\n    setResolver(resolver);\n\n    document.write(\'<div id=\"ember-testing-container\"><div id=\"ember-testing\"></div></div>\');\n\n    QUnit.config.urlConfig.push({ id: \'nocontainer\', label: \'Hide container\'});\n    var containerVisibility = QUnit.urlParams.nocontainer ? \'hidden\' : \'visible\';\n    document.getElementById(\'ember-testing-container\').style.visibility = containerVisibility;\n  });//# sourceURL=dee/tests/test-helper.js");

/* jshint ignore:start */

define('dee/config/environment', ['ember'], function(Ember) {
  var prefix = 'dee';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */



});

if (runningTests) {
  require("dee/tests/test-helper");
} else {
  require("dee/app")["default"].create({"LOG_ACTIVE_GENERATION":true,"LOG_VIEW_LOOKUPS":true});
}



/* jshint ignore:end */

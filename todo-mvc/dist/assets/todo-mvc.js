eval("//# sourceURL=vendor/ember-cli/loader.js");

;eval("define(\"todo-mvc/adapters/application\", \n  [\"ember-data\",\"exports\"],\n  function(__dependency1__, __exports__) {\n    \"use strict\";\n    var DS = __dependency1__[\"default\"];\n     \n    var ApplicationAdapter = DS.FixtureAdapter.extend({});\n     \n    __exports__[\"default\"] = ApplicationAdapter;\n  });//# sourceURL=todo-mvc/adapters/application.js");

;eval("define(\"todo-mvc/app\", \n  [\"ember\",\"ember/resolver\",\"ember/load-initializers\",\"todo-mvc/config/environment\",\"exports\"],\n  function(__dependency1__, __dependency2__, __dependency3__, __dependency4__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    var Resolver = __dependency2__[\"default\"];\n    var loadInitializers = __dependency3__[\"default\"];\n    var config = __dependency4__[\"default\"];\n\n    Ember.MODEL_FACTORY_INJECTIONS = true;\n\n    var App = Ember.Application.extend({\n      modulePrefix: config.modulePrefix,\n      podModulePrefix: config.podModulePrefix,\n      Resolver: Resolver\n    });\n\n    loadInitializers(App, config.modulePrefix);\n\n    __exports__[\"default\"] = App;\n  });//# sourceURL=todo-mvc/app.js");

;eval("define(\"todo-mvc/initializers/export-application-global\", \n  [\"ember\",\"todo-mvc/config/environment\",\"exports\"],\n  function(__dependency1__, __dependency2__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    var config = __dependency2__[\"default\"];\n\n    function initialize(container, application) {\n      var classifiedName = Ember.String.classify(config.modulePrefix);\n\n      if (config.exportApplicationGlobal) {\n        window[classifiedName] = application;\n      }\n    };\n    __exports__.initialize = initialize;\n    __exports__[\"default\"] = {\n      name: \'export-application-global\',\n\n      initialize: initialize\n    };\n  });//# sourceURL=todo-mvc/initializers/export-application-global.js");

;eval("define(\"todo-mvc/models/todo\", \n  [\"ember-data\",\"exports\"],\n  function(__dependency1__, __exports__) {\n    \"use strict\";\n    var DS = __dependency1__[\"default\"];\n     \n    var Todo = DS.Model.extend({\n    title: DS.attr(\'string\'),\n    isCompleted: DS.attr(\'boolean\')\n    });\n\n    Todo.reopenClass({\n    FIXTURES: [\n    {\n    id: 1,\n    title: \"Complete Ember.js Tutorial\",\n    isCompleted: false\n    },\n    {\n    id: 2,\n    title: \"Checkout some more ember stuff\",\n    isCompleted: true\n    },\n    {\n    id: 3,\n    title: \"Solve world hunger (with Ember)\",\n    isCompleted: false\n    }\n    ]\n    });\n     \n    __exports__[\"default\"] = Todo;\n  });//# sourceURL=todo-mvc/models/todo.js");

;eval("define(\"todo-mvc/router\", \n  [\"ember\",\"todo-mvc/config/environment\",\"exports\"],\n  function(__dependency1__, __dependency2__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    var config = __dependency2__[\"default\"];\n     \n    var Router = Ember.Router.extend({\n    location: config.locationType\n    });\n     \n    Router.map(function() {\n    this.resource(\'todos\', {path: \'/\'});\n    });\n     \n    __exports__[\"default\"] = Router;\n  });//# sourceURL=todo-mvc/router.js");

;eval("define(\"todo-mvc/routes/todos\", \n  [\"ember\",\"exports\"],\n  function(__dependency1__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n     \n    var TodosRoute = Ember.Route.extend({\n    model: function() {\n    return this.store.find(\'todo\');\n    }\n    });\n     \n    __exports__[\"default\"] = TodosRoute;\n  });//# sourceURL=todo-mvc/routes/todos.js");

;eval("define(\"todo-mvc/templates/application\", \n  [\"ember\",\"exports\"],\n  function(__dependency1__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    __exports__[\"default\"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {\n    this.compilerInfo = [4,\'>= 1.0.0\'];\n    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};\n      var buffer = \'\', stack1;\n\n\n      data.buffer.push(\"<section id=\\\"todoapp\\\">\\n<header id=\\\"header\\\">\\n<h1>todos</h1>\\n</header>\\n\");\n      stack1 = helpers._triageMustache.call(depth0, \"outlet\", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:[\"ID\"],data:data});\n      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }\n      data.buffer.push(\"\\n</section>\\n \\n<footer id=\\\"info\\\">\\n<p>Double-click to edit a todo</p>\\n</footer> \\n\");\n      return buffer;\n      \n    });\n  });//# sourceURL=todo-mvc/templates/application.js");

;eval("define(\"todo-mvc/templates/todos\", \n  [\"ember\",\"exports\"],\n  function(__dependency1__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    __exports__[\"default\"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {\n    this.compilerInfo = [4,\'>= 1.0.0\'];\n    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};\n      var buffer = \'\', stack1, self=this;\n\n    function program1(depth0,data) {\n      \n      var buffer = \'\', stack1;\n      data.buffer.push(\"\\n<li>\\n<input type=\\\"checkbox\\\" class=\\\"toggle\\\">\\n<label>\");\n      stack1 = helpers._triageMustache.call(depth0, \"title\", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:[\"ID\"],data:data});\n      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }\n      data.buffer.push(\"</label><button class=\\\"destroy\\\"></button>\\n</li>\\n\");\n      return buffer;\n      }\n\n      data.buffer.push(\"<input type=\\\"text\\\" id=\\\"new-todo\\\" placeholder=\\\"What needs to be done?\\\" />\\n \\n<section id=\\\"main\\\">\\n<ul id=\\\"todo-list\\\">\\n\");\n      stack1 = helpers.each.call(depth0, {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data});\n      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }\n      data.buffer.push(\"\\n</ul> \\n \\n<input type=\\\"checkbox\\\" id=\\\"toggle-all\\\">\\n</section>\\n \\n<footer id=\\\"footer\\\">\\n<span id=\\\"todo-count\\\">\\n<strong>2</strong> todos left\\n</span>\\n<ul id=\\\"filters\\\">\\n<li>\\n<a href=\\\"all\\\" class=\\\"selected\\\">All</a>\\n</li>\\n<li>\\n<a href=\\\"active\\\">Active</a>\\n</li>\\n<li>\\n<a href=\\\"completed\\\">Completed</a>\\n</li>\\n</ul>\\n \\n<button id=\\\"clear-completed\\\">\\nClear completed (1)\\n</button>\\n</footer> \\n\");\n      return buffer;\n      \n    });\n  });//# sourceURL=todo-mvc/templates/todos.js");

;eval("define(\"todo-mvc/tests/adapters/application.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - adapters\');\n    test(\'adapters/application.js should pass jshint\', function() { \n      ok(true, \'adapters/application.js should pass jshint.\'); \n    });\n  });//# sourceURL=todo-mvc/tests/adapters/application.jshint.js");

;eval("define(\"todo-mvc/tests/app.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - .\');\n    test(\'app.js should pass jshint\', function() { \n      ok(true, \'app.js should pass jshint.\'); \n    });\n  });//# sourceURL=todo-mvc/tests/app.jshint.js");

;eval("define(\"todo-mvc/tests/helpers/resolver\", \n  [\"ember/resolver\",\"todo-mvc/config/environment\",\"exports\"],\n  function(__dependency1__, __dependency2__, __exports__) {\n    \"use strict\";\n    var Resolver = __dependency1__[\"default\"];\n    var config = __dependency2__[\"default\"];\n\n    var resolver = Resolver.create();\n\n    resolver.namespace = {\n      modulePrefix: config.modulePrefix,\n      podModulePrefix: config.podModulePrefix\n    };\n\n    __exports__[\"default\"] = resolver;\n  });//# sourceURL=todo-mvc/tests/helpers/resolver.js");

;eval("define(\"todo-mvc/tests/helpers/start-app\", \n  [\"ember\",\"todo-mvc/app\",\"todo-mvc/router\",\"todo-mvc/config/environment\",\"exports\"],\n  function(__dependency1__, __dependency2__, __dependency3__, __dependency4__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    var Application = __dependency2__[\"default\"];\n    var Router = __dependency3__[\"default\"];\n    var config = __dependency4__[\"default\"];\n\n    __exports__[\"default\"] = function startApp(attrs) {\n      var App;\n\n      var attributes = Ember.merge({}, config.APP);\n      attributes = Ember.merge(attributes, attrs); // use defaults, but you can override;\n\n      Ember.run(function() {\n        App = Application.create(attributes);\n        App.setupForTesting();\n        App.injectTestHelpers();\n      });\n\n      return App;\n    }\n  });//# sourceURL=todo-mvc/tests/helpers/start-app.js");

;eval("define(\"todo-mvc/tests/models/todo.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - models\');\n    test(\'models/todo.js should pass jshint\', function() { \n      ok(true, \'models/todo.js should pass jshint.\'); \n    });\n  });//# sourceURL=todo-mvc/tests/models/todo.jshint.js");

;eval("define(\"todo-mvc/tests/router.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - .\');\n    test(\'router.js should pass jshint\', function() { \n      ok(true, \'router.js should pass jshint.\'); \n    });\n  });//# sourceURL=todo-mvc/tests/router.jshint.js");

;eval("define(\"todo-mvc/tests/routes/todos.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - routes\');\n    test(\'routes/todos.js should pass jshint\', function() { \n      ok(true, \'routes/todos.js should pass jshint.\'); \n    });\n  });//# sourceURL=todo-mvc/tests/routes/todos.jshint.js");

;eval("define(\"todo-mvc/tests/test-helper\", \n  [\"todo-mvc/tests/helpers/resolver\",\"ember-qunit\"],\n  function(__dependency1__, __dependency2__) {\n    \"use strict\";\n    var resolver = __dependency1__[\"default\"];\n    var setResolver = __dependency2__.setResolver;\n\n    setResolver(resolver);\n\n    document.write(\'<div id=\"ember-testing-container\"><div id=\"ember-testing\"></div></div>\');\n\n    QUnit.config.urlConfig.push({ id: \'nocontainer\', label: \'Hide container\'});\n    var containerVisibility = QUnit.urlParams.nocontainer ? \'hidden\' : \'visible\';\n    document.getElementById(\'ember-testing-container\').style.visibility = containerVisibility;\n  });//# sourceURL=todo-mvc/tests/test-helper.js");

;eval("define(\"todo-mvc/tests/todo-mvc/tests/helpers/resolver.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - todo-mvc/tests/helpers\');\n    test(\'todo-mvc/tests/helpers/resolver.js should pass jshint\', function() { \n      ok(true, \'todo-mvc/tests/helpers/resolver.js should pass jshint.\'); \n    });\n  });//# sourceURL=todo-mvc/tests/todo-mvc/tests/helpers/resolver.jshint.js");

;eval("define(\"todo-mvc/tests/todo-mvc/tests/helpers/start-app.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - todo-mvc/tests/helpers\');\n    test(\'todo-mvc/tests/helpers/start-app.js should pass jshint\', function() { \n      ok(true, \'todo-mvc/tests/helpers/start-app.js should pass jshint.\'); \n    });\n  });//# sourceURL=todo-mvc/tests/todo-mvc/tests/helpers/start-app.jshint.js");

;eval("define(\"todo-mvc/tests/todo-mvc/tests/test-helper.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - todo-mvc/tests\');\n    test(\'todo-mvc/tests/test-helper.js should pass jshint\', function() { \n      ok(true, \'todo-mvc/tests/test-helper.js should pass jshint.\'); \n    });\n  });//# sourceURL=todo-mvc/tests/todo-mvc/tests/test-helper.jshint.js");

;eval("define(\"todo-mvc/tests/todo-mvc/tests/unit/adapters/application-test.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - todo-mvc/tests/unit/adapters\');\n    test(\'todo-mvc/tests/unit/adapters/application-test.js should pass jshint\', function() { \n      ok(true, \'todo-mvc/tests/unit/adapters/application-test.js should pass jshint.\'); \n    });\n  });//# sourceURL=todo-mvc/tests/todo-mvc/tests/unit/adapters/application-test.jshint.js");

;eval("define(\"todo-mvc/tests/todo-mvc/tests/unit/models/todo-test.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - todo-mvc/tests/unit/models\');\n    test(\'todo-mvc/tests/unit/models/todo-test.js should pass jshint\', function() { \n      ok(true, \'todo-mvc/tests/unit/models/todo-test.js should pass jshint.\'); \n    });\n  });//# sourceURL=todo-mvc/tests/todo-mvc/tests/unit/models/todo-test.jshint.js");

;eval("define(\"todo-mvc/tests/todo-mvc/tests/unit/routes/todos-test.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - todo-mvc/tests/unit/routes\');\n    test(\'todo-mvc/tests/unit/routes/todos-test.js should pass jshint\', function() { \n      ok(true, \'todo-mvc/tests/unit/routes/todos-test.js should pass jshint.\'); \n    });\n  });//# sourceURL=todo-mvc/tests/todo-mvc/tests/unit/routes/todos-test.jshint.js");

;eval("define(\"todo-mvc/tests/unit/adapters/application-test\", \n  [\"ember-qunit\"],\n  function(__dependency1__) {\n    \"use strict\";\n    var moduleFor = __dependency1__.moduleFor;\n    var test = __dependency1__.test;\n\n    moduleFor(\'adapter:application\', \'ApplicationAdapter\', {\n      // Specify the other units that are required for this test.\n      // needs: [\'serializer:foo\']\n    });\n\n    // Replace this with your real tests.\n    test(\'it exists\', function() {\n      var adapter = this.subject();\n      ok(adapter);\n    });\n  });//# sourceURL=todo-mvc/tests/unit/adapters/application-test.js");

;eval("define(\"todo-mvc/tests/unit/models/todo-test\", \n  [\"ember-qunit\"],\n  function(__dependency1__) {\n    \"use strict\";\n    var moduleForModel = __dependency1__.moduleForModel;\n    var test = __dependency1__.test;\n\n    moduleForModel(\'todo\', \'Todo\', {\n      // Specify the other units that are required for this test.\n      needs: []\n    });\n\n    test(\'it exists\', function() {\n      var model = this.subject();\n      // var store = this.store();\n      ok(!!model);\n    });\n  });//# sourceURL=todo-mvc/tests/unit/models/todo-test.js");

;eval("define(\"todo-mvc/tests/unit/routes/todos-test\", \n  [\"ember-qunit\"],\n  function(__dependency1__) {\n    \"use strict\";\n    var moduleFor = __dependency1__.moduleFor;\n    var test = __dependency1__.test;\n\n    moduleFor(\'route:todos\', \'TodosRoute\', {\n      // Specify the other units that are required for this test.\n      // needs: [\'controller:foo\']\n    });\n\n    test(\'it exists\', function() {\n      var route = this.subject();\n      ok(route);\n    });\n  });//# sourceURL=todo-mvc/tests/unit/routes/todos-test.js");

/* jshint ignore:start */

define('todo-mvc/config/environment', ['ember'], function(Ember) {
  var prefix = 'todo-mvc';
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
  require("todo-mvc/tests/test-helper");
} else {
  require("todo-mvc/app")["default"].create({"LOG_ACTIVE_GENERATION":true,"LOG_VIEW_LOOKUPS":true});
}



/* jshint ignore:end */

import Ember from 'ember';
export default Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n<section class=\"full-size\">\n<div class=\"center-box row-col\">\n	<div class=\"part-1\">\n		<h2 class=\"news-title\">");
  stack1 = helpers._triageMustache.call(depth0, "title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h2>\n	</div>\n	<div class=\"part-1\">\n		<p>");
  stack1 = helpers._triageMustache.call(depth0, "articleContent", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</p>\n	</div>\n</div>\n</section>\n");
  return buffer;
  }

  data.buffer.push("<section class=\"fullsize\">\n<div class=\"center-box row-colrow\">\n<div class=\"part-1\">\n<h1 id='title'>Welcome to Dee</h1>\n</div>\n<div class=\"part-1\">\n	<p>Tell me more, tell me more....</p>\n</div>\n</div>\n</section>\n");
  stack1 = helpers.each.call(depth0, {hash:{
    'itemController': ("newsitem")
  },hashTypes:{'itemController': "STRING"},hashContexts:{'itemController': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  
});

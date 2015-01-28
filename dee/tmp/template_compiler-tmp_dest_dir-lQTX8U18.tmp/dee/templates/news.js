import Ember from 'ember';
export default Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  data.buffer.push("Read Comic");
  }

function program3(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n<section class=\"fullsize milk\">\n<div class=\"center-box row-col\">\n	<div class=\"part-1\">\n		<h2 class=\"news-title\">");
  stack1 = helpers._triageMustache.call(depth0, "title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h2>\n	</div>\n	<div class=\"part-1\">\n		<div class=\"content-box\">\n			<p>");
  data.buffer.push(escapeExpression((helper = helpers['short-abstract'] || (depth0 && depth0['short-abstract']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "articleContent", options) : helperMissing.call(depth0, "short-abstract", "articleContent", options))));
  data.buffer.push("\n			");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'class': ("link")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "news-item", "id", options) : helperMissing.call(depth0, "link-to", "news-item", "id", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</p>\n		</div>\n	</div>\n</div>\n</section>\n");
  return buffer;
  }
function program4(depth0,data) {
  
  
  data.buffer.push("more");
  }

  data.buffer.push("<div class=\"newspage\">\n<section class=\"fullsize glass\">\n<div class=\"center-box row-colrow\">\n<div class=\"part-1\">\n<h1 id='title' class=\"headline\">Welcome to Dee</h1>\n</div>\n</div>\n</section>\n<section class=\"fullsize\">\n<div class=\"center-box row-col\">\n	<div class=\"part-1\">\n		<p class=\"center\"><strong>Dee is a 2015 web comic project illustrating the story of \n		Joshua who finds himself thrown into a world he would have \n		never imagined to visit before. Follow him on his journey as\n		soon as the dusk falls:</strong></p>\n		<p class=\"center\">");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'class': ("button")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "comic.intro", options) : helperMissing.call(depth0, "link-to", "comic.intro", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</p>\n	</div>\n</div>\n</section>\n");
  stack1 = helpers.each.call(depth0, {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[],types:[],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n<section class=\"fullsize solidfoot\">\n<div class=\"center-box row-row\">\n<div class=\"part-1\">\n<p class=\"center light-1\">Want to start reading the comic just now? Have a try!</p>\n<p class=\"mt-2\">");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'class': ("button light-1")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "comic.intro", options) : helperMissing.call(depth0, "link-to", "comic.intro", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</p>\n</div>\n</div>\n</section>\n</div>\n\n");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  
});

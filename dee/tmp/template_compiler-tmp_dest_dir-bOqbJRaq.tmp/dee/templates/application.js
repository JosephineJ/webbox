import Ember from 'ember';
export default Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("Start");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("Comic");
  }

function program5(depth0,data) {
  
  
  data.buffer.push("Characters");
  }

function program7(depth0,data) {
  
  
  data.buffer.push("About");
  }

function program9(depth0,data) {
  
  
  data.buffer.push("Contact");
  }

function program11(depth0,data) {
  
  
  data.buffer.push("About us");
  }

  data.buffer.push("<div class=\"wrapper\">\n<header class=\"top-header\">\n<nav class=\"main-nav\">\n");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "news", options) : helperMissing.call(depth0, "link-to", "news", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "comic", options) : helperMissing.call(depth0, "link-to", "comic", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "chars", options) : helperMissing.call(depth0, "link-to", "chars", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "about", options) : helperMissing.call(depth0, "link-to", "about", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "contact", options) : helperMissing.call(depth0, "link-to", "contact", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</nav>\n</header>\n<main class=\"main-section\">\n");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</main>\n<footer class=\"main-footer\">\n<div class=\"center-box row-colrow\">\n<ul class=\"part-1\">\n<li class=\"footer-title\">Be Social</li>\n<li>Stuff 1</li>\n<li>Stuff 2</li>\n<li>Stuff 3</li>\n<li>Stuff 4</li>\n</ul>\n<ul class=\"part-1\">\n<li class=\"footer-title\">Features</li>\n<li>Stuff 1</li>\n<li>Stuff 2</li>\n<li>Stuff 3</li>\n<li>Stuff 4</li>\n</ul>\n<ul class=\"part-1\">\n<li class=\"footer-title\">About</li>\n<li>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(11, program11, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "about", options) : helperMissing.call(depth0, "link-to", "about", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n<li>Impressum</li>\n<li>Stuff 3</li>\n<li>Stuff 4</li>\n</ul>\n</div>\n</footer>\n</div>\n");
  return buffer;
  
});

import Ember from 'ember';
export default Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var stack1;
  stack1 = helpers._triageMustache.call(depth0, "contactButtonText", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  }

  data.buffer.push("<section class=\"contactpage\">\n<div class=\"row-col fullsize\">\n	<div class=\"center-box\">\n		<div class=\"part-1\">\n			<h1>Nice to hear from you!</h1>\n		</div>\n	</div>\n</div>\n<div class=\"row-col fullsize\">\n	<div class=\"center-box row-colrow\">\n		<div class=\"part-2\">\n			<div class=\"contactform\">\n				<div><input name=\"name\" placeholder=\"Your Name\" autocomplete=\"on\" id=\"myname\" required ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'readonly': ("messageSent")
  },hashTypes:{'readonly': "ID"},hashContexts:{'readonly': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("/></div>\n				<!-- <div><input name=\"e-mail\" placeholder=\"E-Mail Adress\" autocomplete=\"on\" required ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'readonly': ("messageSent")
  },hashTypes:{'readonly': "ID"},hashContexts:{'readonly': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("/></div> -->\n				<div class=\"spamchecker\"><input name=\"url\" placeholder=\"Leave this empty\" id=\"spamchecker\" autocomplete=\"on\" /></div>\n				<div><input name=\"subject\" placeholder=\"Your message subject\" autocomplete=\"on\" id=\"mysubject\" required ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'readonly': ("messageSent")
  },hashTypes:{'readonly': "ID"},hashContexts:{'readonly': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("/></div>\n				<div><textarea name=\"textarea\" rows=\"5\" cols=\"70\" placeholder=\"Your Message\" id=\"mymessage\" required ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'readonly': ("messageSent")
  },hashTypes:{'readonly': "ID"},hashContexts:{'readonly': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("></textarea></div>\n				");
  stack1 = helpers.view.call(depth0, "contactsendform", {hash:{
    'class': ("button wide")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n			</div>\n		</div>\n		<div class=\"explain part-1\">\n			<div class=\"\">\n				<p>");
  data.buffer.push(escapeExpression((helper = helpers['fa-icon'] || (depth0 && depth0['fa-icon']),options={hash:{
    'size': (1)
  },hashTypes:{'size': "INTEGER"},hashContexts:{'size': depth0},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "check", options) : helperMissing.call(depth0, "fa-icon", "check", options))));
  data.buffer.push(" Fill out the form with your name, subject and message</p>\n				<p>");
  data.buffer.push(escapeExpression((helper = helpers['fa-icon'] || (depth0 && depth0['fa-icon']),options={hash:{
    'size': (1)
  },hashTypes:{'size': "INTEGER"},hashContexts:{'size': depth0},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "check", options) : helperMissing.call(depth0, "fa-icon", "check", options))));
  data.buffer.push(" Hit the <strong>Send</strong> button below the form</p>\n				<p>");
  data.buffer.push(escapeExpression((helper = helpers['fa-icon'] || (depth0 && depth0['fa-icon']),options={hash:{
    'size': (1)
  },hashTypes:{'size': "INTEGER"},hashContexts:{'size': depth0},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "check", options) : helperMissing.call(depth0, "fa-icon", "check", options))));
  data.buffer.push(" The message will be generated in your e-mail client automatically. You just need to hit the send\n				button in your now opening mail client.</p>\n				<p class=\"mt-1\">No e-mail client installed yet? Then just send me an e-mail at foo@bar.com using the web e-mail client of your choice.</p>\n			</div>\n		</div>\n	</div>\n</div>\n</section>\n\n\n\n");
  return buffer;
  
});

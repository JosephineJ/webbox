import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
	this.route("about", { path: "/about" });
	//this.route("comic", { path: "/comic" });
	this.resource("home", { path: "/" }, function(){
		this.route('news');
	});
	this.route("contact", { path: "/contact" });
	this.resource('comic', { path: '/comic' }, function() {
		this.route('chapter1');
		this.route('chapter2');
	}); 
});

export default Router;


 

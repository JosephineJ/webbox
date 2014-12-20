import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
	this.route("about", { path: "/about" });
	this.route("comic", { path: "/comic" });
	this.route("home", { path: "/" });
	this.route("contact", { path: "/contact" });
});

export default Router;


 

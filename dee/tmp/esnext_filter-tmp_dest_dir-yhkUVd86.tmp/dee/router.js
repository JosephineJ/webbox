import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
	//this.route("news", { path: "/" });
	this.resource('news', { path: '/' }, function() {
		this.route('news', { path: '/news' }); 
	});
	this.resource('news-item', {path: '/news/:news_id'});
	//this.route("comic", { path: "/comic" });
	this.route("chars", { path: "/chars" });
	this.route("about", { path: "/about" });
	this.route("contact", { path: "/contact" });
	this.resource('comic', { path: '/comic' }, function() {
		this.route('intro');
		this.route('chapter1');
		this.route('chapter2');
	}); 
	this.route("teaseme");
  this.route('clock');
  this.route('klock');
});

export default Router;


 

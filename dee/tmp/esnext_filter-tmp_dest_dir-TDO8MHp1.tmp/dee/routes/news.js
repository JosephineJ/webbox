import Ember from 'ember';

var NewsRoute = Ember.Route.extend({
	model: function() {
		return this.store.find('news');
		//return this.store.filterBy('isPublic', true)
	}
	/*model: function(){
		return this.store.filter('news', function(news) {
		return news.get('isPublic');
		});
	}*/ // to advances for me now....

});

export default NewsRoute;




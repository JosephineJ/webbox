import Ember from 'ember';

var NewsItem = Ember.Route.extend({
	model: function(params) {
		var aSinglePost = this.store.find('news', params.news_id);
		return aSinglePost;
		//return this.store.find('news');

	}
});

export default NewsItem;

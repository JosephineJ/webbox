import DS from 'ember-data';

var IntroItems = DS.Model.extend({
  
title: DS.attr('string'),
articleContent: DS.attr('string'),
isPublic: DS.attr('boolean')
});

IntroItems.reopenClass({
FIXTURES: [
{
id: 1,
title: "NewsItem Ember.js Tutorial",
articleContent: "If one examines dialectic deconstructivism, one is faced with a choice: either accept constructivism or conclude that narrativity is capable of deconstruction. The subject is interpolated into a posttextual discourse that includes sexuality as a reality. However, if constructivism holds, we have to choose between posttextual discourse and Lacanist obscurity. ",
isPublic: false
},
{
id: 2,
title: " 2 NewsItem Ember.js Tutorial",
articleContent: "If one examines dialectic deconstructivism, one is faced with a  capable of deconstruction. The object is interpolatual discourse that includes sexuality as a reality. However, if constructivism holds, we have to choose between posttextual discourse and Lacanist obscurity. ",
isPublic: false
}
]
});

export default IntroItems;

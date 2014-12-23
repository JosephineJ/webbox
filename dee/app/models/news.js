import DS from 'ember-data';

var News = DS.Model.extend({
  
title: DS.attr('string'),
articleContent: DS.attr('string'),
isPublic: DS.attr('boolean')
});

News.reopenClass({
FIXTURES: [
{
id: 1,
title: "Complete Ember.js Tutorial",
articleContent: "LoremLoremLoremfalse",
isPublic: false
},
{
id: 2,
title: "Checkout some more ember stuff",
articleContent: "LoremLoremLorem",
isPublic: true
},
{
id: 3,
title: "Solve world hunger (with Ember)",
articleContent: "LoremLoremLorem",
isPublic: true
}
]
});

export default News;

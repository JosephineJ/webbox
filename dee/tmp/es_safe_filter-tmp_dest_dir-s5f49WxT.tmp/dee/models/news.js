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
articleContent: "If one examines dialectic deconstructivism, one is faced with a choice: either accept constructivism or conclude that narrativity is capable of deconstruction. The subject is interpolated into a posttextual discourse that includes sexuality as a reality. However, if constructivism holds, we have to choose between posttextual discourse and Lacanist obscurity. ",
isPublic: false
},
{
id: 2,
title: "Checkout some more ember stuff",
articleContent: "Lebowski ipsum shut the fuck up, Donny. Dolor sit amet, consectetur adipiscing elit praesent ac magna justo. Over the line! Pellentesque ac lectus quis elit blandit fringilla. When he moved down to Venice he had to go door-to-door to tell everyone he's a pederast. A ut turpis praesent felis ligula, malesuada suscipit malesuada non, ultrices. Well sir, it's this rug I have, really tied the room together. Non urna sed orci ipsum, placerat id condimentum rutrum, rhoncus." +
"Ja, und maybe vee stamp on it und skvush it, Bbbbebowski! Ac lorem aliquam placerat. You said it, man. Nobody fucks with the Jesus. Posuere neque, at dignissim magna. Fuck it, Dude. Let's go bowling. Ullamcorper in aliquam sagittis massa ac tortor ultrices. You thought, hey, a deadbeat, a loser, someone the square community won't give a shit about. Faucibus curabitur eu mi sapien, ut ultricies ipsum morbi eget risus nulla nullam vel.",
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

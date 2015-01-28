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
title: "Dee Comic goes online",
articleContent: "I am happy to anounce that the web comic project Dee went online today. The site now offers a ghost typer start page, a first comic intro slider, this news section, as well as an about section. As time goes by, this site will grow further, offering new features and first of all new comic pages! Just get into contact with me if you have thoughts to share or if you have any questions about this page under foo@bar.com. I am looking forward to your feedback. Read on and enjoy exploring Dee.",
isPublic: false
},
{
id: 2,
title: "Want to find out more about the Dee project?",
articleContent: "This website is a project by Jessica Jordan, created in 2015, combining current web development technologies with her own comic art. You can find out more about in our about section, as well as checking the project out on the social platforms, using the social buttons in the footer below. " +
"Be social and read on!",
isPublic: true
}
]
});

export default News;

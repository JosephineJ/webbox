import DS from 'ember-data';

var IntroItems = DS.Model.extend({
  
titlePartOne: DS.attr('string'),
titlePartTwo: DS.attr('string'),
titlePartThree: DS.attr('string'),
articleContent: DS.attr('string'),
});

IntroItems.reopenClass({
FIXTURES: [
{
id: 1,
titlePartOne: "When I arrived",
titlePartTwo: "at her home",
titlePartThree: "there was an empty silence",
articleContent: "Graduate student Joshua lives the busy life of a young man in his end-twenties. Studies and spending his free time hanging out with his friends, finding joy in climbing and travelling around Europe every now and then. Joshuas lifestyle is the one of an every-day normal guy. Until one day, he discovers a world he has never visited before.",
},
{
id: 2,
titlePartOne: "It felt strange",
titlePartTwo: "like I was a stranger",
titlePartThree: "in my own parents' house",
articleContent: "Biochemistry PhD student Kim is on her way to fix her way out of a struggled childhood and keep moving on. She is almost obsessed with the imagination of finding the relevant mechanisms of schizophrenia and finding an answer to her troubled past.",
},
{
id: 3,
titlePartOne: "When I climbed up",
titlePartTwo: "the stairs",
titlePartThree: "there was one single sound",
articleContent: "Former co-student Sebastian has never been seen to university again since he became sick half a year ago. The irregular visits from Joshua are the single, every-now-and-then occasions, on which they both enjoy some bits of their year-long friendship.",
},
{
id: 4,
titlePartOne: "The sound of",
titlePartTwo: "dusk",
titlePartThree: "falling",
articleContent: "The journey starts soon - come back again to read on! ",
}
]
});

export default IntroItems;

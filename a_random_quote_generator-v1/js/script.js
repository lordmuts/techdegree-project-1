/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing
//var printQuote;

/*** 
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.
  Add the `citation` property to at least one object in the array.
  Add the `year` property to at least one object in the array.
  Use console.log() to log your array of quotes to the console.
***/
var quotes = [
  {
    quote: 'Knock knock',
    source: 'JP',
    citation: 'Facebook',
    year: '2015',
    situation: ''
  },
  {
    quote: 'Live, laugh, love! ',
    source: 'Insta girl',
    citation: 'Facebook',
    year: '2020',
    situation: ''
  },
  {
    quote: 'A banana has 105 calories, wine has 65. Choose wisely',
    source: 'Santa',
    citation: 'NewYork-Times',
    year: '2016',
    situation:''
  },
  {
    quote: 'Trust me! You can dance!',
    source: 'tequila',
    citation: 'Bar',
    year: '04:00 friday night',
    situation: ''
  },
  {
    quote: 'Fake it until you make it',
    source: 'some dude from work',
    citation: 'Work',
    year: '1999',
    situation: ''
  },


]





/***
  Create the `getRandomQuote` function to:
   - Create a variable to store a random number 
   - Cse the random number to `return` a random quote object from the `quotes` array.
***/

function getRandomQuote() {
  
  var number = Math.floor(Math.random() * quotes.length);
  return quotes[number];
  
};


/***
  Create the `printQuote` function to: 
   - Call the `getRandomQuote` function and assign it to a variable.
   - Create a variable for the HTML string and set it equal to an empty string.
   - Use the HTML template in the instructions or the markup in the index.html file, AND 
     the random quote vairable to build your HTML string.
   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string. 
***/
function printQuote() {
  var randomQuote = getRandomQuote();
  var output = '';
  

  output += `<p class="quote">${randomQuote.quote}</p>`;
  output += `<p class="source">${randomQuote.source}</p>`;

  //console.log(randomQuote)
  if (randomQuote.citation === '') {
    //console.log('placeholder CITATION is emty');
  } else output += `<p class="citation"> ${randomQuote.citation}</p>`;
  
  if (randomQuote.year === '') {
    //console.log('placeholder YEAR is emty');
  } else output += `<p class="citation"> ${randomQuote.year}</p>`;
 

  
  //console.log('output: ' + output); //staat op de website

  document.getElementById('quote-box').innerHTML = output;
};

printQuote();


/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.
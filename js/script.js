/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
var quotes= [
  
  {
  quote: "A face without freckles is like a night without stars", 
  source: "Tina Schmidt"
  },

  {
  quote: "F*ck it, Dude. Let's go bowling.",
  source: "Walter Sobchak",
  citation: "The Big Lebowski",
  year: "1998"
  },

  {
  quote: "I think Pringles' original intention was to make tennis balls... But on the day the rubber was supposed to show up, a truckload of potatoes came. Pringles is a laid-back company, so they just said 'F*ck it, cut em up!'",
  source: "Mitch Hedberg",
  year: "1998"
  },
  
  {
  quote: "I have no special talent.  I am only passionately curious",
  source: "Albert Einstein"
  },

  {
  quote: "CONSEQUENCES WILL NEVER BE THE SAME!!!",
  source: "Gene Leonhardt",
  year:"2010"
  },

  {
  quote: "All your base are belong to us",
  source: "CATS",
  citation: "Zero Wing",
  year: "1989"
  }
];


/***
 * `getRandomQuote` function
***/
function getRandomQuote() {
  var randomNumber = Math.floor(Math.random() * (quotes.length));
  return quotes[randomNumber]; 
}

/***
 * `printQuote` function
***/
function printQuote() {

  var randomQuote = getRandomQuote();
  var quoteString = '';
  
  quoteString = quoteString.concat("<p class='quote'>\"" + randomQuote.quote + "\"</p>");
  quoteString = quoteString.concat("<p class='source'>" + randomQuote.source);
  if(randomQuote.citation != undefined) {
    quoteString = quoteString.concat("<span class='citation'>" + randomQuote.citation + "</span>");
  }
  if(randomQuote.year != undefined) {
    quoteString = quoteString.concat("<span class='year'>" + randomQuote.year + "</span>");
  }
  quoteString = quoteString.concat("</p>");
  
  document.getElementById("quote-box").innerHTML = quoteString;
  document.body.style.background = getRandomColor();
}

    
function getRandomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var rgb = "rgb(" + r + "," + g + "," + b + ")";
    
    return rgb;
}
/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
var intervalID = setInterval(printQuote, 20000);
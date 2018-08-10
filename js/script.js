// FSJS - Random Quote Generator

// Create the array of quote objects and name it quotes
//reference https://www.goodreads.com/quotes
var quotes = [
  //object 1
  {
    quote:'You know you\'re in love when you can\'t fall asleep because reality is finally better than your dreams.',
    source:'Dr.Seuss',

  },
  //object 2
  {
    quote:'If you want to know what a man\'s like, take a good look at how he treats his inferiors, not his equals.',
    source:' J.K. Rowling',
    citation:' Harry Potter and the Goblet of Fire',
  },
  //object 3
  {
    quote:'I believe that everything happens for a reason. People change so that you can learn to let go',
    source:'Marilyn Monroe',
    year:'1959'
  },
  //object 4
  {
    quote:'Twenty years from now you will be more disappointed by the things that you didn\'t do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.',
    source:'H. Jackson Brown Jr.',
    citation:'P.S. I Love You',
    year:'1990'
  },
  //object 5
  {
    quote:'Some infinities are bigger than other infinities.',
    source:' John Green',
    citation:'The Fault in Our Stars',
    year:'2015'
  }

];



// Create the getRandomQuuote function and name it getRandomQuote
function getRandomQuote(array){
  var randomNumber =Math.floor(Math.random()*array.length);
  return randomNumber;
  //returns the index of the quote
};

//global variables that will be boolean
var isCitation;
var isYear;

//function to check if the array of objects contains either a citation or a year
//it doesn't check if there is a quote or a source object because those were required
function keyCheck(index){
  if(quotes[index].citation !== undefined){
    isCitation=true;
  } else{
    isCitation=false;
  }
  if(quotes[index].year !== undefined){
    isYear=true;
  } else{
    isYear=false;
  }
}

// Create the printQuote funtion and name it printQuote
function printQuote(){
  var quote = getRandomQuote(quotes);
  keyCheck(quote);
  var stringOfQuoteProperties;
    if(isCitation === true && isYear === true){
      stringOfQuoteProperties = "<p class=\"quote\">"+quotes[quote].quote+ "</p> <p class=\"source\">"+ quotes[quote].source +"<span class=\"citation\">" +quotes[quote].citation+ "</span><span class=\"year\">"+quotes[quote].year+ "</span></p>";
    }else if (isCitation === true && isYear === false) {
     stringOfQuoteProperties = "<p class=\"quote\">"+quotes[quote].quote+ "</p> <p class=\"source\">"+ quotes[quote].source +"<span class=\"citation\">" +quotes[quote].citation+ "</p>";
    } else if (isCitation===false && isYear===true) {
     stringOfQuoteProperties = "<p class=\"quote\">"+quotes[quote].quote+ "</p> <p class=\"source\">"+ quotes[quote].source +"<span class=\"year\">" +quotes[quote].year+ "</p>";
    } else{
     stringOfQuoteProperties = "<p class=\"quote\">"+quotes[quote].quote+ "</p> <p class=\"source\">"+quotes[quote].source+"</p>";
}

document.getElementById('quote-box').innerHTML = stringOfQuoteProperties;
getRandomColor();
}

function getRandomColor() {
  //code i googled and got from stackexchange
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  document.getElementById("BodyColor").style.backgroundColor=color;

}

//Function for switching the quote every so often in this case i made it 5 seconds
setInterval(printQuote, 5000);
// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

//js constant variables getting the HTML elements by their id
const quote = document.getElementById("quote-saying");
const author = document.getElementById("author");
//js constant variables specifying the API URL
const apiURL = "https://api.quotable.io/random"


//function calling and getting all the data from the api and passing it into url
async function getQuote(url){
    //fetching the data from the url
    const response = await fetch(url);
    //passing the data from the url into the variable data
    let data = await response.json();
    // code to insert the quote saying and author name into the HTML page
    quote.innerHTML = data.content; 
    author.innerHTML = data.author; 
}

//js code which executes the function
getQuote(apiURL);

//function to post the quote on twitter
function tweetQuote(){
    window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML + " -- By " + author.innerHTML, "Tweet Window", "width=600, height=300");
}
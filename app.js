const quotes = ["a", "b", "c", "d"]

const updateQuote = () => {
  document.getElementById('quote').innerHTML = quotes[Math.floor(Math.random() * quotes.length)];
}

//on button click set "#quote" to quote
document.getElementById("getQuote").addEventListener("click", updateQuote);

//TODO take quote to twitter login

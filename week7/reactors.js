var quotes = ["You had me at hello.", "A boy's best friend is his mother", "May the force be with you", "Houston, we have a problem", "E.T. Phone Home"];
var authors = ["Jerry Maguire", "Psycho", "Star Wars", "Apollo", "E.T"];

function generateQuote() {
    var number = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").innerHTML = quotes[number];
    document.getElementById("author").innerHTML = authors[number];
}
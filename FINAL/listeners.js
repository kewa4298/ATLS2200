var goblue_home = document.getElementById("goblue_home");
var goblue_cleanup = document.getElementById("goblue_cleanup");
var goblue_news = document.getElementById("goblue_news");
var goBlueDescriptionLabel = document.getElementById("descriptionLabel-goblue");

var cabana_dashboard = document.getElementById("cabana_dashboard");
var cabana_home = document.getElementById("cabana_home");
var cabanaDescriptionLabel = document.getElementById("descriptionLabel-cabana")

goblue_home.onmouseover = function() {
    goBlueDescriptionLabel.innerHTML = "The goBlue homescreen features a GIF background, and uses MongoDB authentication queries to check if the user exists, and if not, it will redirect the user to the signup page to begin the signup process."
}

goblue_news.onmouseover = function() {
    goBlueDescriptionLabel.innerHTML = "The goBlue news page uses the Twitter API, Fabric, to pull tweets that the partnering Loggerhead Marinelife Center interacts with."
}

goblue_cleanup.onmouseover = function() {
    goBlueDescriptionLabel.innerHTML = "The goBlue cleanup page is for organizing and find local beach cleanups. It uses queried Cleanup objects from a MongoDB query based off your location, and will give you a list and a visual map to help you know where and when they are."
}

cabana_dashboard.onmouseover = function() {
    cabanaDescriptionLabel.innerHTML = "This is one of the pages that I created. It calculates how much you have worked out on, and where you are in relation to your goals."
}

cabana_home.onmouseover = function() {
    cabanaDescriptionLabel.innerHTML = "This is a page that I worked on. This is the first page you see after logging in, and it is the page that displays all the cabanas that you currently are apart of."
}



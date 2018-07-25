// HEADER LOGIC
// ===============================================================

var education = document.getElementById("education");
var developer = document.getElementById("developer");
var sports= document.getElementById("sports");
var health = document.getElementById("health");
var tech = document.getElementById("tech");
var culture = document.getElementById("culture");
var movies = document.getElementById("movies");
var comics = document.getElementById("comics");

$("#educationHeader").on("click", function(){
    console.log("clicked");
    education.classList.toggle("unhidden");
});
$("#developerHeader").on("click", function(){
    console.log("clicked");
    developer.classList.toggle("unhidden");
});
$("#sportsHeader").on("click", function(){
    console.log("clicked");
    sports.classList.toggle("unhidden");
});
$("#healthHeader").on("click", function(){
    console.log("clicked");
    health.classList.toggle("unhidden");
});
$("#techHeader").on("click", function(){
    console.log("clicked");
    tech.classList.toggle("unhidden");
});
$("#cultureHeader").on("click", function(){
    console.log("clicked");
    culture.classList.toggle("unhidden");
});
$("#moviesHeader").on("click", function(){
    console.log("clicked");
    movies.classList.toggle("unhidden");
});
$("#comicsHeader").on("click", function(){
    console.log("clicked");
    comics.classList.toggle("unhidden");
});

/* var menu = $(".menuItem");
menu.on("click", function(){
    this.toggleClass("unhidden");
    console.log(this);
}); */
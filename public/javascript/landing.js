// HEADER LOGIC
// ===============================================================
var bodyContainer = document.getElementById("bodyContainer");
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
    bodyContainer.classList.toggle("onMenuClickBodyOpacity");
});
$("#developerHeader").on("click", function(){
    console.log("clicked");
    developer.classList.toggle("unhidden");
    bodyContainer.classList.toggle("onMenuClickBodyOpacity");
});
$("#sportsHeader").on("click", function(){
    console.log("clicked");
    sports.classList.toggle("unhidden");
    bodyContainer.classList.toggle("onMenuClickBodyOpacity");
});
$("#healthHeader").on("click", function(){
    console.log("clicked");
    health.classList.toggle("unhidden");
    bodyContainer.classList.toggle("onMenuClickBodyOpacity");
});
$("#techHeader").on("click", function(){
    console.log("clicked");
    tech.classList.toggle("unhidden");
    bodyContainer.classList.toggle("onMenuClickBodyOpacity");
});
$("#cultureHeader").on("click", function(){
    console.log("clicked");
    culture.classList.toggle("unhidden");
    bodyContainer.classList.toggle("onMenuClickBodyOpacity");
});
$("#moviesHeader").on("click", function(){
    console.log("clicked");
    movies.classList.toggle("unhidden");
    bodyContainer.classList.toggle("onMenuClickBodyOpacity");
});
$("#comicsHeader").on("click", function(){
    console.log("clicked");
    comics.classList.toggle("unhidden");
    bodyContainer.classList.toggle("onMenuClickBodyOpacity");
});

/* var menu = $(".menuItem");
menu.on("click", function(){
    this.toggleClass("unhidden");
    console.log(this);
}); */
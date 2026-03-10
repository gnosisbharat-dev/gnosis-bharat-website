document.addEventListener("DOMContentLoaded", () => {


// Smooth scroll for navigation links
const links = document.querySelectorAll("nav a");

links.forEach(link => {

link.addEventListener("click", function(e){

const target = this.getAttribute("href");

if(target.startsWith("#")){

e.preventDefault();

document.querySelector(target).scrollIntoView({
behavior:"smooth"
});

}

});

});



// Join button scroll
document.querySelector(".join-btn").addEventListener("click", () => {

document.querySelector(".subscribe").scrollIntoView({
behavior:"smooth"
});

});



// Upcoming event button
document.querySelector(".event-btn").addEventListener("click", () => {

document.querySelector("#event").scrollIntoView({
behavior:"smooth"
});

});



// Event registration
document.querySelector(".register-btn").addEventListener("click", () => {

window.open("https://tally.so/r/D41NYR","_blank");

});



// Email subscription
document.querySelector(".subscribe-btn").addEventListener("click", () => {

const email = document.querySelector(".email-input").value;

if(email === ""){

alert("Please enter your email.");

return;

}

alert("Thank you for joining Gnosis Bharat!");

document.querySelector(".email-input").value = "";

});


});
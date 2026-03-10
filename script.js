document.addEventListener("DOMContentLoaded", () => {


// Smooth scroll for navigation links
const links = document.querySelectorAll("nav a");

links.forEach(link => {

link.addEventListener("click", function(e){

const target = this.getAttribute("href");

if(target.startsWith("#")){

e.preventDefault();

const section = document.querySelector(target);

if(section){
section.scrollIntoView({
behavior:"smooth"
});
}

}

});

});



// Join button scroll
const joinBtn = document.querySelector(".join-btn");

if(joinBtn){
joinBtn.addEventListener("click", () => {

const section = document.querySelector(".subscribe");

if(section){
section.scrollIntoView({
behavior:"smooth"
});
}

});
}



// Upcoming event button
const eventBtn = document.querySelector(".event-btn");

if(eventBtn){
eventBtn.addEventListener("click", () => {

const section = document.querySelector("#event");

if(section){
section.scrollIntoView({
behavior:"smooth"
});
}

});
}



// Event registration
const registerBtn = document.querySelector(".register-btn");

if(registerBtn){
registerBtn.addEventListener("click", () => {

window.open("https://tally.so/r/D41NYR","_blank");

});
}



// Email subscription
const subscribeBtn = document.querySelector(".subscribe-btn");

if(subscribeBtn){
subscribeBtn.addEventListener("click", () => {

const emailInput = document.querySelector(".email-input");

if(!emailInput) return;

const email = emailInput.value;

if(email === ""){

alert("Please enter your email.");
return;

}

alert("Thank you for joining Gnosis Bharat!");

emailInput.value = "";

});
}



// Mobile menu toggle
const toggle = document.getElementById("menu-toggle");
const menu = document.getElementById("nav-menu");
const navLinks = document.querySelectorAll("#nav-menu a");

if(toggle && menu){

// open / close menu
toggle.addEventListener("click", (e) => {
e.stopPropagation();
menu.classList.toggle("active");
});

// close when clicking a nav link
navLinks.forEach(link => {
link.addEventListener("click", () => {
menu.classList.remove("active");
});
});

// close when clicking outside
document.addEventListener("click", (e) => {
if(!menu.contains(e.target) && !toggle.contains(e.target)){
menu.classList.remove("active");
}
});

}

});
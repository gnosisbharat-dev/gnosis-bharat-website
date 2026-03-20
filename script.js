document.addEventListener("DOMContentLoaded", () => {


/* ================= SMOOTH SCROLL ================= */

const links = document.querySelectorAll("nav a");

links.forEach(link => {

link.addEventListener("click", function(e){

const target = this.getAttribute("href");

if(target && target.startsWith("#")){

e.preventDefault();

const section = document.querySelector(target);

if(section){
section.scrollIntoView({
behavior:"smooth",
block:"start"
});
}

}

});

});



/* ================= JOIN BUTTON ================= */

const joinBtn = document.querySelector(".join-btn");

if(joinBtn){
joinBtn.addEventListener("click", () => {

const section = document.querySelector(".subscribe");

if(section){
section.scrollIntoView({
behavior:"smooth",
block:"start"
});
}

});
}



/* ================= EVENT BUTTON ================= */

const eventBtn = document.querySelector(".event-btn");

if(eventBtn){
eventBtn.addEventListener("click", () => {

const section = document.querySelector("#event");

if(section){
section.scrollIntoView({
behavior:"smooth",
block:"start"
});
}

});
}



/* ================= REGISTER BUTTON ================= */

const registerBtn = document.querySelector(".register-btn");

if(registerBtn){
registerBtn.addEventListener("click", () => {
window.open("https://tally.so/r/D41NYR","_blank");
});
}



/* ================= EMAIL SUBSCRIBE ================= */

const subscribeBtn = document.querySelector(".subscribe-btn");

if(subscribeBtn){
subscribeBtn.addEventListener("click", () => {

const emailInput = document.querySelector(".email-input");

if(!emailInput) return;

const email = emailInput.value.trim();

/* basic validation */
if(email === ""){
alert("Please enter your email.");
return;
}

if(!email.includes("@")){
alert("Enter a valid email.");
return;
}

alert("Thank you for joining Gnosis Bharat!");

emailInput.value = "";

});
}



/* ================= MOBILE MENU ================= */

const toggle = document.getElementById("menu-toggle");
const menu = document.getElementById("nav-menu");
const navLinks = document.querySelectorAll("#nav-menu a");

if(toggle && menu){

/* open / close menu */
toggle.addEventListener("click", (e) => {
e.stopPropagation();
menu.classList.toggle("active");

/* prevent body scroll when open */
document.body.classList.toggle("menu-open");
});


/* close when clicking nav link */
navLinks.forEach(link => {
link.addEventListener("click", () => {
menu.classList.remove("active");
document.body.classList.remove("menu-open");
});
});


/* close when clicking outside */
document.addEventListener("click", (e) => {
if(!menu.contains(e.target) && !toggle.contains(e.target)){
menu.classList.remove("active");
document.body.classList.remove("menu-open");
}
});


/* close on ESC key (pro UX) */
document.addEventListener("keydown", (e) => {
if(e.key === "Escape"){
menu.classList.remove("active");
document.body.classList.remove("menu-open");
}
});

}

});
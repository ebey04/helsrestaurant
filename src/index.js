import "./styles.css";

// Import functions from each module
import loadHome from "./home.js";
import loadMenu from "./menu.js";
import loadAbout from "./about.js";

// Grab the buttons from the header
const homeBtn = document.getElementById("home-btn");
const menuBtn = document.getElementById("menu-btn");
const aboutBtn = document.getElementById("about-btn");

// When the page loads, show the Home tab
loadHome();

// Add event listeners for tab switching
homeBtn.addEventListener("click", () => {
    loadHome();
});

menuBtn.addEventListener("click", () => {
    loadMenu();
});

aboutBtn.addEventListener("click", () => {
    loadAbout();
});

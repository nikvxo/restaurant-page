// Import our CSS file first
import './style.css';

// Import our page modules
import { createHomePage } from './home.js';
import { createMenuPage } from './menu.js';
import { createAboutPage } from './about.js';

console.log("Restaurant page loaded!");

// Get the content div where we'll display our pages
const contentDiv = document.getElementById('content');

// Function to clear whatever is currently in the content div
function clearContent() {
    contentDiv.innerHTML = ''; // This removes all HTML inside the content div
}

// Function to load a page by calling the appropriate page creation function
function loadPage(pageFunction) {
    clearContent(); // Clear existing content
    const pageContent = pageFunction(); // Call the function to create the page content
    contentDiv.appendChild(pageContent); // Add the new content to the content div
}

// Load the home page when the page first loads
document.addEventListener('DOMContentLoaded', () => {
    loadPage(createHomePage);
});

// Add event listeners to the navigation buttons
document.addEventListener('DOMContentLoaded', () => {
    // Get all the buttons in the navigation
    const buttons = document.querySelectorAll('nav button');
    
    // Add click event listeners to each button
    buttons[0].addEventListener('click', () => loadPage(createHomePage)); // Home button
    buttons[1].addEventListener('click', () => loadPage(createMenuPage)); // Menu button
    buttons[2].addEventListener('click', () => loadPage(createAboutPage)); // About button
});
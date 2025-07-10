// This function creates and returns a DOM element containing the home page content
function createHomePage() {
    // Create a container div for all the home page content
    const content = document.createElement('div');
    content.classList.add('homepage'); // Add a CSS class for styling
    
    // Create and add the main title
    const title = document.createElement('h1');
    title.textContent = 'Welcome to Bella Vista Restaurant';
    content.appendChild(title);
    
    // Create and add the description paragraph
    const description = document.createElement('p');
    description.textContent = 'Experience the finest dining with our exquisite menu featuring fresh, locally-sourced ingredients and traditional recipes passed down through generations.';
    content.appendChild(description);
    
    // Create and add an image
    const image = document.createElement('img');
    image.src = 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80';
    image.alt = 'Restaurant interior';
    image.style.width = '100%';
    image.style.maxWidth = '600px';
    image.style.height = '300px';
    image.style.objectFit = 'cover';
    image.style.borderRadius = '8px';
    content.appendChild(image);
    
    // Create and add the closing paragraph
    const closingText = document.createElement('p');
    closingText.textContent = 'Our passionate chefs create culinary masterpieces that will tantalize your taste buds and leave you craving for more. Join us for an unforgettable dining experience!';
    content.appendChild(closingText);
    
    // Return the complete content div
    return content;
}

// Export the function so other files can import and use it
export { createHomePage };

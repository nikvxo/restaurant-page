// This function creates and returns a DOM element containing the about page content
function createAboutPage() {
    const content = document.createElement('div');
    content.classList.add('about-page');
    
    // Main title
    const title = document.createElement('h1');
    title.textContent = 'About Bella Vista Restaurant';
    content.appendChild(title);
    
    // Our Story section
    const story = document.createElement('div');
    story.classList.add('story');
    
    const storyTitle = document.createElement('h2');
    storyTitle.textContent = 'Our Story';
    story.appendChild(storyTitle);
    
    const storyText = document.createElement('p');
    storyText.textContent = 'Founded in 1985 by the Rossi family, Bella Vista Restaurant has been serving authentic Italian cuisine to our community for over three decades. What started as a small family dream has grown into a beloved local institution.';
    story.appendChild(storyText);
    
    content.appendChild(story);
    
    // Contact Information section
    const contact = document.createElement('div');
    contact.classList.add('contact-info');
    
    const contactTitle = document.createElement('h2');
    contactTitle.textContent = 'Contact Us';
    contact.appendChild(contactTitle);
    
    // Contact details as an array - easier to manage
    const contactDetails = [
        'Phone: (555) 123-4567',
        'Email: info@bellavista.com',
        'Address: 123 Main Street, Anytown, USA 12345',
        'Hours: Mon-Thu 11AM-9PM, Fri-Sat 11AM-10PM, Sun 12PM-8PM'
    ];
    
    // Loop through contact details and create paragraphs
    contactDetails.forEach(detail => {
        const p = document.createElement('p');
        p.textContent = detail;
        contact.appendChild(p);
    });
    
    content.appendChild(contact);
    
    // Chef Information section
    const chef = document.createElement('div');
    chef.classList.add('chef-info');
    
    const chefTitle = document.createElement('h2');
    chefTitle.textContent = 'Meet Our Chef';
    chef.appendChild(chefTitle);
    
    const chefText = document.createElement('p');
    chefText.textContent = 'Chef Marco Rossi brings over 20 years of culinary experience from Italy to your table. Trained in the traditional methods of Tuscan cooking, he creates dishes that honor the past while embracing modern techniques.';
    chef.appendChild(chefText);
    
    content.appendChild(chef);
    
    return content;
}

export { createAboutPage };

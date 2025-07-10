// This function creates and returns a DOM element containing the menu page content
function createMenuPage() {
    const content = document.createElement('div');
    content.classList.add('menu-page');
    
    // Create the main title
    const title = document.createElement('h1');
    title.textContent = 'Our Menu';
    content.appendChild(title);
    
    // Define our menu data - this is an array of objects
    // Each object represents a menu section with a title and array of items
    const menuSections = [
        {
            title: 'Appetizers',
            items: [
                { name: 'Bruschetta', description: 'Toasted bread with fresh tomatoes, garlic, and basil', price: '$8.99' },
                { name: 'Calamari', description: 'Crispy fried squid rings with marinara sauce', price: '$12.99' },
                { name: 'Caesar Salad', description: 'Romaine lettuce, parmesan, croutons, and Caesar dressing', price: '$9.99' }
            ]
        },
        {
            title: 'Main Courses',
            items: [
                { name: 'Pasta Carbonara', description: 'Spaghetti with eggs, cheese, pancetta, and black pepper', price: '$16.99' },
                { name: 'Grilled Salmon', description: 'Fresh Atlantic salmon with lemon butter sauce', price: '$22.99' },
                { name: 'Ribeye Steak', description: '12oz prime cut with roasted vegetables', price: '$28.99' }
            ]
        },
        {
            title: 'Desserts',
            items: [
                { name: 'Tiramisu', description: 'Classic Italian dessert with coffee and mascarpone', price: '$7.99' },
                { name: 'Gelato', description: 'Homemade Italian ice cream - vanilla, chocolate, or strawberry', price: '$5.99' }
            ]
        }
    ];
    
    // Loop through each section and create HTML elements
    menuSections.forEach(section => {
        // Create a div for each section
        const sectionDiv = document.createElement('div');
        sectionDiv.classList.add('menu-section');
        
        // Create section title
        const sectionTitle = document.createElement('h2');
        sectionTitle.textContent = section.title;
        sectionDiv.appendChild(sectionTitle);
        
        // Loop through each item in the section
        section.items.forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.classList.add('menu-item');
            
            // Create item name
            const itemName = document.createElement('h3');
            itemName.textContent = item.name;
            itemDiv.appendChild(itemName);
            
            // Create item description
            const itemDescription = document.createElement('p');
            itemDescription.textContent = item.description;
            itemDiv.appendChild(itemDescription);
            
            // Create item price
            const itemPrice = document.createElement('span');
            itemPrice.textContent = item.price;
            itemPrice.classList.add('price');
            itemDiv.appendChild(itemPrice);
            
            // Add the item to the section
            sectionDiv.appendChild(itemDiv);
        });
        
        // Add the section to the main content
        content.appendChild(sectionDiv);
    });
    
    return content;
}

export { createMenuPage };

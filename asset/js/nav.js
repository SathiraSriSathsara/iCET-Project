// navigation.js

function createNavigation() {
    const navBar = document.createElement('nav');
    navBar.classList.add('navbar', 'navbar-expand-lg', 'navbar-light', 'bg-light');

    const brandLink = document.createElement('a');
    brandLink.classList.add('navbar-brand');
    brandLink.href = '#';
    brandLink.textContent = 'Buger Shop'; // Change 'Your Logo' to 'Buger Shop'

    const toggleButton = document.createElement('button');
    toggleButton.classList.add('navbar-toggler');
    toggleButton.type = 'button';
    toggleButton.dataset.toggle = 'collapse';
    toggleButton.dataset.target = '#navbarNav';
    toggleButton.setAttribute('aria-controls', 'navbarNav');
    toggleButton.setAttribute('aria-expanded', 'false');
    toggleButton.setAttribute('aria-label', 'Toggle navigation');

    const toggleIcon = document.createElement('span');
    toggleIcon.classList.add('navbar-toggler-icon');

    toggleButton.appendChild(toggleIcon);

    const collapseDiv = document.createElement('div');
    collapseDiv.classList.add('collapse', 'navbar-collapse');
    collapseDiv.id = 'navbarNav';

    // Add your navigation links here
    const navLinks = document.createElement('ul');
    navLinks.classList.add('navbar-nav');

    // Example links
    const homeLink = createNavLink('Home', '#', 'active');
    const aboutLink = createNavLink('About', '#');
    const servicesLink = createNavLink('Services', '#');
    const contactLink = createNavLink('Contact', '#');

    navLinks.appendChild(homeLink);
    navLinks.appendChild(aboutLink);
    navLinks.appendChild(servicesLink);
    navLinks.appendChild(contactLink);

    // Append elements to the navigation bar
    collapseDiv.appendChild(navLinks);
    navBar.appendChild(brandLink);
    navBar.appendChild(toggleButton);
    navBar.appendChild(collapseDiv);

    return navBar;
}

// Helper function to create navigation links
function createNavLink(text, href, activeClass = '') {
    const navItem = document.createElement('li');
    navItem.classList.add('nav-item', activeClass);

    const navLink = document.createElement('a');
    navLink.classList.add('nav-link');
    navLink.href = href;
    navLink.textContent = text;

    navItem.appendChild(navLink);

    return navItem;
}

// 1. Manage the mobile menu (show/hide)
const navToggle = document.getElementById('nav-toggle');
const mainNav = document.getElementById('main-nav');

navToggle.addEventListener('click', () => {
    mainNav.classList.toggle('active');
});

// Close the menu if a link is clicked (for better mobile experience)
const navLinks = mainNav.querySelectorAll('a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            mainNav.classList.remove('active');
        }
    });
});

// 2. Show/hide a message when a button is clicked
const toggleMessageBtn = document.getElementById('toggleMessage');
const feedbackMessage = document.getElementById('feedbackMessage');

toggleMessageBtn.addEventListener('click', () => {
    if (feedbackMessage.style.display === 'none' || feedbackMessage.style.display === '') {
        feedbackMessage.style.display = 'block';
        feedbackMessage.textContent = 'This button is an example of a simple interaction!';
        feedbackMessage.style.color = 'blue';
    } else {
        feedbackMessage.style.display = 'none';
    }
});

// 3. Validate the contact form (success message)
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevents the actual form submission

    // Shows the success message (which is initially hidden)
    feedbackMessage.style.display = 'block';
    feedbackMessage.textContent = 'Thank you! Your message has been sent successfully.';
    feedbackMessage.style.color = 'green';

    // Resets the form after submission
    contactForm.reset();
});

// 4. Change an element's color on hover (example on product buttons)
const productButtons = document.querySelectorAll('.product-button');

productButtons.forEach(button => {
    button.addEventListener('mouseover', () => {
        button.style.backgroundColor = 'var(--accent-color)';
        button.style.transform = 'scale(1.05)';
    });

    button.addEventListener('mouseout', () => {
        button.style.backgroundColor = 'var(--primary-color)';
        button.style.transform = 'scale(1)';
    });
});
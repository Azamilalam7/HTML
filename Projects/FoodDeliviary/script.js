// Smooth scrolling for internal links (if added later)
document.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href'))?.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add a typing animation effect to the search input placeholder
const searchInput = document.querySelector('input');
const placeholderText = [
    'Search for restaurant, cuisine or a dish',
    'Looking for something delicious?',
    'Explore the best dishes in Kanpur!'
];

let index = 0;
setInterval(() => {
    searchInput.placeholder = placeholderText[index];
    index = (index + 1) % placeholderText.length;
}, 3000);

// Sticky header background change on scroll
// window.addEventListener('scroll', () => {
//     const header = document.querySelector('header');
//     if (window.scrollY > 50) {
//         header.style.backgroundColor = '#007BFF';
//     } else {
//         header.style.backgroundColor = 'white';
//     }
// });

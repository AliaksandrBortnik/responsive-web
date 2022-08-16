const header = document.querySelector('.header');
const navButton = document.querySelector('.btn-mobile-nav');

navButton.addEventListener('click', () => {
  header.classList.toggle('nav-open');
});

// Smooth scrolling for Safari
const links = document.querySelectorAll('a:link');

links.forEach(link => {


  link.addEventListener('click', (e) => {
    e.preventDefault();
    const id = link.getAttribute('href');

    if (id === '#') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }

    if (id !== '#' && id.startsWith('#')) {
      const section = document.querySelector(id);
      section.scrollIntoView({ behavior: 'smooth' });
    }

    // Close mobile nav
    if (link.classList.contains('main-nav-link')) {
      header.classList.toggle('nav-open');
    }
  });
})
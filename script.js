// Mobile menu: open/close when the hamburger button is clicked.
const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav-links');

toggle.addEventListener('click', () => {
  const isOpen = links.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(isOpen));
});

// Close the menu after choosing a link (on phones).
links.querySelectorAll('a').forEach((link) =>
  link.addEventListener('click', () => {
    links.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }),
);

// Keep the footer year up to date.
document.getElementById('year').textContent = new Date().getFullYear();

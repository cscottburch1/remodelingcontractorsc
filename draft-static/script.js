const topbar = document.querySelector('.topbar');
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.site-nav a');
const revealItems = document.querySelectorAll('.reveal');
const form = document.querySelector('.contact-form');

if (navToggle && topbar) {
  navToggle.addEventListener('click', () => {
    const nextExpanded = navToggle.getAttribute('aria-expanded') !== 'true';
    navToggle.setAttribute('aria-expanded', String(nextExpanded));
    topbar.classList.toggle('nav-open', nextExpanded);
    document.body.classList.toggle('menu-open', nextExpanded);
  });
}

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    if (!navToggle || !topbar) {
      return;
    }

    navToggle.setAttribute('aria-expanded', 'false');
    topbar.classList.remove('nav-open');
    document.body.classList.remove('menu-open');
  });
});

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.18,
      rootMargin: '0px 0px -40px 0px'
    }
  );

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('is-visible'));
}

if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const submitButton = form.querySelector('button[type="submit"]');
    if (submitButton instanceof HTMLButtonElement) {
      submitButton.textContent = 'Request Sent';
      submitButton.disabled = true;
    }

    form.reset();
  });
}
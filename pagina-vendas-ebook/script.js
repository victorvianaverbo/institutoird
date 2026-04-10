/* ========================================
   Scroll Reveal — IntersectionObserver
   ======================================== */
function initScrollReveal() {
  const revealSelectors = [
    '.js-reveal',
    '.js-reveal-block',
    '.js-reveal-card',
    '.js-reveal-item',
    '.js-reveal-spotlight'
  ];

  const elements = document.querySelectorAll(revealSelectors.join(','));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const delay = el.dataset.delay || 0;
        setTimeout(() => {
          el.classList.add('is-visible');
        }, delay);
        observer.unobserve(el);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -40px 0px'
  });

  elements.forEach((el, index) => {
    /* Stagger siblings of same type */
    const parent = el.parentElement;
    const siblings = parent.querySelectorAll(':scope > ' + getSelector(el));
    const sibIndex = Array.from(siblings).indexOf(el);

    if (sibIndex > 0) {
      el.dataset.delay = sibIndex * 100;
    }

    observer.observe(el);
  });
}

function getSelector(el) {
  const classes = ['js-reveal', 'js-reveal-block', 'js-reveal-card', 'js-reveal-item', 'js-reveal-spotlight'];
  for (const cls of classes) {
    if (el.classList.contains(cls)) return '.' + cls;
  }
  return '.js-reveal';
}


/* ========================================
   Animated lines (solucao, ctafinal)
   ======================================== */
function initLineAnimations() {
  const lines = document.querySelectorAll('.solucao__line, .ctafinal__line');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  lines.forEach((line) => observer.observe(line));
}


/* ========================================
   FAQ Accordion — one open at a time
   ======================================== */
function initFAQ() {
  const items = document.querySelectorAll('.faq__item');

  items.forEach((item) => {
    item.addEventListener('toggle', () => {
      if (item.open) {
        items.forEach((other) => {
          if (other !== item && other.open) {
            other.removeAttribute('open');
          }
        });
      }
    });
  });
}


/* ========================================
   Popup
   ======================================== */
function initPopup() {
  const popup = document.getElementById('popup');
  if (!popup) return;

  const openers = document.querySelectorAll('[data-open-popup]');
  const closers = document.querySelectorAll('[data-close-popup]');
  const form = document.getElementById('popupForm');

  function openPopup(e) {
    e.preventDefault();
    popup.classList.add('is-open');
    popup.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    var firstInput = popup.querySelector('.popup__input');
    if (firstInput) firstInput.focus();
  }

  function closePopup() {
    popup.classList.remove('is-open');
    popup.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  openers.forEach(function(btn) { btn.addEventListener('click', openPopup); });
  closers.forEach(function(btn) { btn.addEventListener('click', closePopup); });

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && popup.classList.contains('is-open')) {
      closePopup();
    }
  });

  /* Form submit — redirect to Hotmart with pre-filled data */
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();

      var nome = form.querySelector('#popup-nome').value.trim();
      var email = form.querySelector('#popup-email').value.trim();
      var telefone = form.querySelector('#popup-telefone').value.trim();

      var baseUrl = 'https://pay.hotmart.com/P103619807D?bid=1775825269172';
      var params = new URLSearchParams();
      if (nome) params.set('name', nome);
      if (email) params.set('email', email);
      if (telefone) params.set('phoneNumber', telefone);

      /* Meta Pixel — Lead event */
      if (typeof fbq === 'function') fbq('track', 'Lead');

      var finalUrl = baseUrl + '&' + params.toString();
      window.open(finalUrl, '_blank');
    });
  }
}


/* ========================================
   Init
   ======================================== */
document.addEventListener('DOMContentLoaded', () => {
  initScrollReveal();
  initLineAnimations();
  initFAQ();
  initPopup();
});

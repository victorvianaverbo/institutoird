/* ========================================
   Supabase
   ======================================== */
const SUPABASE_URL = 'https://tqahdpasetyiwlggzhit.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRxYWhkcGFzZXR5aXdsZ2d6aGl0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY2OTI4MzIsImV4cCI6MjA5MjI2ODgzMn0.g4X_a0cubfvtTG15j638i6_dYYdQwo9v-QS4thyXc24';

async function saveToSupabase(data) {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/aulao_leads`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'apikey': SUPABASE_KEY,
      'Authorization': `Bearer ${SUPABASE_KEY}`,
      'Prefer': 'return=minimal'
    },
    body: JSON.stringify(data)
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(err);
  }
}


/* ========================================
   Scroll Reveal
   ======================================== */
const reveals = document.querySelectorAll('.js-reveal');

if (reveals.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  reveals.forEach((el) => observer.observe(el));
}


/* ========================================
   Scroll Progress Bar
   ======================================== */
const progressBar = document.querySelector('.scroll-progress');

if (progressBar) {
  let ticking = false;

  function updateProgress() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? scrollTop / docHeight : 0;

    progressBar.style.setProperty('--progress', progress.toFixed(4));
    progressBar.style.setProperty('--progress-visible', scrollTop > 100 ? '1' : '0');
    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(updateProgress);
      ticking = true;
    }
  }, { passive: true });
}


/* ========================================
   Popup
   ======================================== */
const popup = document.getElementById('popup');
const popupForm = document.getElementById('popupForm');
const popupSubmit = document.getElementById('popupSubmit');

function openPopup() {
  popup.classList.add('is-open');
  popup.setAttribute('aria-hidden', 'false');
  document.body.classList.add('popup-open');
  setTimeout(() => {
    const firstInput = popup.querySelector('input');
    if (firstInput) firstInput.focus();
  }, 350);
}

function closePopup() {
  popup.classList.remove('is-open');
  popup.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('popup-open');
}

/* Open triggers */
document.querySelectorAll('[data-open-popup]').forEach((btn) => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    openPopup();
  });
});

/* Close triggers */
document.querySelectorAll('[data-close-popup]').forEach((el) => {
  el.addEventListener('click', closePopup);
});

/* Close on Escape */
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && popup.classList.contains('is-open')) {
    closePopup();
  }
});

/* Form submission */
if (popupForm) {
  popupForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const nome = popupForm.querySelector('[name="nome"]').value.trim();
    const email = popupForm.querySelector('[name="email"]').value.trim();
    const whatsapp = popupForm.querySelector('[name="whatsapp"]').value.trim();

    if (!nome || !email || !whatsapp) return;

    popupSubmit.disabled = true;
    popupSubmit.textContent = 'Enviando...';

    try {
      await saveToSupabase({ nome, email, telefone: whatsapp, source: 'lp-aulao' });

      /* Envio para webhook Luvia pausado
      navigator.sendBeacon(
        'https://webhooks.tryluvia.com/api/webhooks/flow/9fa4d93254233b5e8e99d0a3',
        new Blob([JSON.stringify({ nome, email, whatsapp })], { type: 'text/plain' })
      );
      */

      /* Show success */
      popupForm.style.display = 'none';
      const noteEl = popup.querySelector('.popup__note');
      if (noteEl) noteEl.style.display = 'none';

      const successHTML = `
        <div class="popup__success is-visible">
          <div class="popup__success-icon">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
          </div>
          <h4>Inscrição confirmada!</h4>
          <p>Você receberá o link de acesso no seu e-mail e WhatsApp antes do aulão.</p>
        </div>
      `;
      popup.querySelector('.popup__body').insertAdjacentHTML('beforeend', successHTML);

    } catch (err) {
      console.error('Erro ao salvar lead:', err);
      popupSubmit.disabled = false;
      popupSubmit.textContent = 'Quero garantir minha vaga';
      alert('Erro ao processar inscrição. Tente novamente.');
    }
  });
}


/* ========================================
   FAQ Accordion
   ======================================== */
document.querySelectorAll('.faq__item').forEach((details) => {
  const summary = details.querySelector('summary');
  const content = details.querySelector('.faq__answer');

  if (!summary || !content) return;

  summary.addEventListener('click', (e) => {
    e.preventDefault();

    if (details.open) {
      content.style.maxHeight = content.scrollHeight + 'px';
      requestAnimationFrame(() => {
        content.style.maxHeight = '0';
      });
      const onEnd = () => {
        details.open = false;
        content.style.maxHeight = '';
        content.removeEventListener('transitionend', onEnd);
      };
      content.addEventListener('transitionend', onEnd);
    } else {
      details.open = true;
      const height = content.scrollHeight;
      content.style.maxHeight = '0';
      requestAnimationFrame(() => {
        content.style.maxHeight = height + 'px';
      });
      const onEnd = () => {
        content.style.maxHeight = '';
        content.removeEventListener('transitionend', onEnd);
      };
      content.addEventListener('transitionend', onEnd);
    }
  });
});

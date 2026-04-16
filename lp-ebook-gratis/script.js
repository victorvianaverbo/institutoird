/**
 * LP Ebook Gratis — Do Zero a Aprovacao
 * Supabase integration + form validation + scroll reveal
 */

/* ==========================================
   CONFIG — Supabase
   Substituir pelos valores do seu projeto
   ========================================== */
const SUPABASE_URL = 'https://woebteyuqzndvchruxhw.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndvZWJ0ZXl1cXpuZHZjaHJ1eGh3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE3OTAyMDYsImV4cCI6MjA4NzM2NjIwNn0.N2KgxsYE-NEnM6dz9cjGRKY1WVXoLBW1qpoNTo0oCcs';

/* URL da pagina de obrigado (redirect apos captura) */
const OBRIGADO_URL = 'obrigado.html';


/* ==========================================
   INIT
   ========================================== */
document.addEventListener('DOMContentLoaded', () => {
  initScrollReveal();
  initPhoneInput();
  initForm();
});


/* ==========================================
   SCROLL REVEAL (IntersectionObserver)
   ========================================== */
function initScrollReveal() {
  const els = document.querySelectorAll('.js-reveal');
  if (!els.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  els.forEach(el => observer.observe(el));
}


/* ==========================================
   TELEFONE INTERNACIONAL
   ========================================== */
let itiInstance = null;

function initPhoneInput() {
  if (typeof intlTelInput === 'undefined') return;

  const input = document.getElementById('telefone');
  if (!input) return;

  itiInstance = intlTelInput(input, {
    initialCountry: 'br',
    preferredCountries: ['br', 'us', 'pt'],
    separateDialCode: true,
    strictMode: true,
    loadUtilsOnInit: 'https://cdn.jsdelivr.net/npm/intl-tel-input@24.6.0/build/js/utils.js'
  });
}


/* ==========================================
   VALIDACAO
   ========================================== */
const tempEmailDomains = [
  'tempmail', 'guerrillamail', '10minutemail', 'mailinator',
  'throwaway', 'fakeinbox', 'yopmail', 'trashmail', 'temp-mail',
  'disposable', 'sharklasers'
];

function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regex.test(email)) return false;
  const domain = email.split('@')[1].toLowerCase();
  return !tempEmailDomains.some(temp => domain.includes(temp));
}

function validateForm(form) {
  let valid = true;

  form.querySelectorAll('.form__input').forEach(field => {
    field.classList.remove('error');
  });

  const nome = form.querySelector('#nome');
  if (!nome.value.trim()) {
    nome.classList.add('error');
    valid = false;
  }

  const email = form.querySelector('#email');
  if (!email.value.trim() || !isValidEmail(email.value)) {
    email.classList.add('error');
    valid = false;
  }

  const telefone = form.querySelector('#telefone');
  if (itiInstance && !itiInstance.isValidNumber()) {
    telefone.classList.add('error');
    valid = false;
  } else if (!telefone.value.trim()) {
    telefone.classList.add('error');
    valid = false;
  }

  return valid;
}


/* ==========================================
   FORMULARIO — Submit
   ========================================== */
function initForm() {
  const form = document.getElementById('leadForm');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const feedback = document.getElementById('formFeedback');
    const btn = document.getElementById('submitBtn');

    if (!validateForm(form)) {
      showFeedback(feedback, 'error', 'Preencha todos os campos corretamente.');
      return;
    }

    const nome = form.querySelector('#nome').value.trim();
    const email = form.querySelector('#email').value.trim();
    const telefone = itiInstance ? itiInstance.getNumber() : form.querySelector('#telefone').value.trim();

    const originalText = btn.textContent;
    btn.disabled = true;
    btn.textContent = 'Enviando...';

    try {
      /* Carrega Supabase sob demanda (48KB so quando necessario) */
      if (!window._supabaseClient) {
        await loadScript('https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/dist/umd/supabase.min.js');
        const { createClient } = supabase;
        window._supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
      }
      const client = window._supabaseClient;

      const { error } = await client
        .from('leadsebookgratisird')
        .insert({
          nome: nome,
          email: email,
          telefone: telefone,
          origem: 'lp-ebook-gratis'
        });

      if (error) throw error;

      /* Envia lead para webhook Luvia */
      navigator.sendBeacon(
        'https://webhooks.tryluvia.com/api/webhooks/flow/c046d3d7f262bc9d47399d2b',
        new Blob([JSON.stringify({ nome, email, telefone })], { type: 'text/plain' })
      );

      /* Redireciona para pagina de obrigado com parametros */
      const redirectUrl = new URL(OBRIGADO_URL, window.location.href);
      if (nome) redirectUrl.searchParams.set('nome', nome);

      /* Repassa UTMs e parametros de rastreamento */
      new URLSearchParams(window.location.search).forEach((value, key) => {
        redirectUrl.searchParams.set(key, value);
      });

      window.location.href = redirectUrl.toString();
      return;

    } catch (err) {
      console.error('Supabase error:', err);
      showFeedback(feedback, 'error', 'Erro ao enviar. Tente novamente.');
    } finally {
      btn.disabled = false;
      btn.textContent = originalText;
    }
  });
}


/* ==========================================
   FEEDBACK
   ========================================== */
function showFeedback(el, type, msg) {
  if (!el) return;
  el.className = 'form__feedback ' + type;
  el.textContent = msg;
  setTimeout(() => {
    el.className = 'form__feedback';
    el.textContent = '';
  }, 6000);
}


/* ==========================================
   LOAD SCRIPT (dynamic)
   ========================================== */
function loadScript(src) {
  return new Promise((resolve, reject) => {
    const s = document.createElement('script');
    s.src = src;
    s.onload = resolve;
    s.onerror = reject;
    document.head.appendChild(s);
  });
}

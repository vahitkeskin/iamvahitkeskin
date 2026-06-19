// ============================================================
//  VAHIT KESKIN — World-Class Portfolio Script
// ============================================================

// ── Utility Functions ────────────────────────────────────────
const $ = (q, root = document) => root.querySelector(q);
const $$ = (q, root = document) => root.querySelectorAll(q);

function el(tag, props = {}, ...children) {
  const node = document.createElement(tag);
  Object.assign(node, props);
  children.flat().forEach(c => {
    if (typeof c === 'string') node.appendChild(document.createTextNode(c));
    else if (c) node.appendChild(c);
  });
  return node;
}

// ── Date/Time ────────────────────────────────────────────────
let userTimeZone = 'Europe/Istanbul';

function updateDateTime() {
  try {
    const now = new Date();
    const localeMapping = { 'tr': 'tr-TR', 'en': 'en-GB', 'de': 'de-DE', 'fr': 'fr-FR', 'ru': 'ru-RU' };
    const locale = localeMapping[currentLanguage] || 'tr-TR';
    const timeString = now.toLocaleTimeString(locale, {
      timeZone: userTimeZone,
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
    const dateString = now.toLocaleDateString(locale, {
      timeZone: userTimeZone,
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
    const timeElement = $('#current-time');
    const dateElement = $('#current-date');
    if (timeElement) timeElement.textContent = timeString;
    if (dateElement) dateElement.textContent = dateString;
  } catch (error) {
    console.error('DateTime update error:', error);
  }
}

function updateTimeZone(lat, lon) {
  const timezoneOffset = Math.round(lon / 15);
  const timezoneNames = [
    'UTC-12','UTC-11','UTC-10','UTC-9','UTC-8','UTC-7','UTC-6','UTC-5','UTC-4','UTC-3','UTC-2','UTC-1',
    'UTC','UTC+1','UTC+2','UTC+3','UTC+4','UTC+5','UTC+6','UTC+7','UTC+8','UTC+9','UTC+10','UTC+11','UTC+12'
  ];
  const idx = timezoneOffset + 12;
  if (idx >= 0 && idx < timezoneNames.length) userTimeZone = timezoneNames[idx];
}

setInterval(updateDateTime, 1000);
updateDateTime();

// ── Theme Switcher ───────────────────────────────────────────
function setupThemeSwitcher() {
  const themeSwitcher = $('#theme-switcher');
  const themeIcon = $('#theme-icon');
  const themeText = $('#theme-text');
  if (!themeSwitcher || !themeIcon) return;

  if (typeof updatePageLanguage === 'function') updatePageLanguage();
  let currentTheme = localStorage.getItem('theme') || 'auto';

  function updateTheme() {
    const root = document.documentElement;
    root.classList.remove('dark', 'light');
    if (currentTheme === 'dark') {
      root.classList.add('dark');
      themeIcon.className = 'fas fa-moon';
      if (themeText && typeof TRANSLATIONS !== 'undefined') themeText.textContent = TRANSLATIONS[currentLanguage]?.['theme.dark'] || 'Dark';
    } else if (currentTheme === 'light') {
      root.classList.add('light');
      themeIcon.className = 'fas fa-sun';
      if (themeText && typeof TRANSLATIONS !== 'undefined') themeText.textContent = TRANSLATIONS[currentLanguage]?.['theme.light'] || 'Light';
    } else {
      const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      root.classList.add(isDark ? 'dark' : 'light');
      themeIcon.className = 'fas fa-adjust';
      if (themeText && typeof TRANSLATIONS !== 'undefined') themeText.textContent = TRANSLATIONS[currentLanguage]?.['theme.auto'] || 'Auto';
    }
  }

  themeSwitcher.addEventListener('click', () => {
    if (currentTheme === 'auto') currentTheme = 'light';
    else if (currentTheme === 'light') currentTheme = 'dark';
    else currentTheme = 'auto';
    localStorage.setItem('theme', currentTheme);
    updateTheme();
  });

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    if (currentTheme === 'auto') updateTheme();
  });

  updateTheme();
}

// ── Visitor Counter ──────────────────────────────────────────
class VisitorCounter {
  constructor() {
    this.count = 0;
    this.isInitialized = false;
    this.sessionId = 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    this.element = $('#visitor-count');
  }

  async init() {
    if (this.isInitialized || !this.element) return;
    this.element.textContent = '...';
    try {
      await this.updateCount();
      this.isInitialized = true;
    } catch (error) {
      console.error('Visitor counter init error:', error);
      this.useLocalStorageFallback(true);
    }
  }

  async updateCount() {
    const existingSession = sessionStorage.getItem('visitorSessionId');
    const isNewSession = !existingSession;
    if (isNewSession) sessionStorage.setItem('visitorSessionId', this.sessionId);
    const namespace = 'vahitkeskin.com';
    const key = 'visits';
    const url = `https://api.counterapi.dev/v1/${namespace}/${key}${isNewSession ? '/up' : ''}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data && typeof data.count === 'number') {
        this.count = data.count;
        this.updateDisplay();
      } else throw new Error('Invalid data');
    } catch (error) {
      this.useLocalStorageFallback(isNewSession);
    }
  }

  useLocalStorageFallback(isNewSession) {
    let storedCount = parseInt(localStorage.getItem('visitorCount') || '1250');
    if (isNewSession) {
      storedCount += 1;
      localStorage.setItem('visitorCount', storedCount.toString());
    }
    this.count = storedCount;
    this.updateDisplay();
  }

  updateDisplay() {
    if (this.element) this.element.textContent = this.count.toLocaleString('tr-TR');
  }

  async refresh() { await this.updateCount(); }
}

const visitorCounter = new VisitorCounter();

function trackPageView() {
  const pv = localStorage.getItem('pageViews') || 0;
  localStorage.setItem('pageViews', parseInt(pv) + 1);
}

// ── Contact Form ─────────────────────────────────────────────
function setupContactForm() {
  const form = $('#contact-form');
  if (!form) return;
  const firstNameInput = $('#first_name');
  const lastNameInput = $('#last_name');
  const emailInput = $('#email');
  const subjectInput = $('#subject');
  const messageInput = $('#message');
  const sendBtn = $('#sendBtn');

  function isEmailValid(v) { return v && /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(String(v).toLowerCase()); }
  function isNonEmpty(v) { return !!(v && v.trim().length >= 2); }

  function validateForm() {
    const allOk = isNonEmpty(firstNameInput?.value) && isNonEmpty(lastNameInput?.value)
      && isEmailValid(emailInput?.value?.trim()) && !!subjectInput?.value?.trim() && !!messageInput?.value?.trim();
    if (sendBtn) {
      sendBtn.disabled = !allOk;
      sendBtn.style.opacity = allOk ? '1' : '0.6';
      sendBtn.style.cursor = allOk ? 'pointer' : 'not-allowed';
    }
    return allOk;
  }

  // Image upload preview
  const imageInput = $('#image_upload');
  const previewContainer = $('#image-preview-container');
  const previewImg = $('#image_preview');
  const removeBtn = $('#remove_image');

  imageInput?.addEventListener('change', () => {
    const file = imageInput.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => { previewImg.src = e.target.result; previewContainer.style.display = 'block'; };
      reader.readAsDataURL(file);
    }
  });

  removeBtn?.addEventListener('click', () => { imageInput.value = ''; previewContainer.style.display = 'none'; previewImg.src = ''; });

  [firstNameInput, lastNameInput, emailInput, subjectInput, messageInput, imageInput].forEach(inp => {
    inp?.addEventListener('input', validateForm);
    inp?.addEventListener('blur', validateForm);
  });
  validateForm();

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData(form);
      const firstName = (formData.get('first_name') || firstNameInput?.value || '').toString().trim();
      const lastName = (formData.get('last_name') || lastNameInput?.value || '').toString().trim();
      const name = `${firstName} ${lastName}`.trim();
      const email = (formData.get('email') || emailInput?.value || '').toString().trim();
      const subject = (formData.get('subject') || subjectInput?.value || '').toString().trim();
      const message = (formData.get('message') || messageInput?.value || '').toString().trim();

      if (!firstName || !lastName || !email || !subject || !message || !isEmailValid(email)) {
        alert('Lütfen tüm alanları doldurun.');
        return;
      }

      const originalBtnText = sendBtn ? sendBtn.innerHTML : '';
      if (sendBtn) { sendBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Gönderiliyor...'; sendBtn.disabled = true; }

      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 15000);
      const ajaxData = new FormData();
      ajaxData.append('name', name);
      ajaxData.append('email', email);
      ajaxData.append('message', message);
      ajaxData.append('_subject', `[iamvahitkeskin.com] ${subject}`);
      ajaxData.append('_captcha', 'false');
      ajaxData.append('_template', 'table');
      const file = imageInput?.files[0];
      if (file) ajaxData.append('attachment', file);

      let sent = false;
      try {
        const res = await fetch('https://formsubmit.co/ajax/vahitkeskin07@gmail.com', {
          method: 'POST', body: ajaxData, signal: controller.signal
        });
        clearTimeout(timeoutId);
        if (res.ok) sent = true;
        else throw new Error(`HTTP ${res.status}`);
      } catch (err) {
        clearTimeout(timeoutId);
        console.warn('FormSubmit failed:', err.message || err);
      }

      if (!sent) {
        try {
          const tempForm = document.createElement('form');
          tempForm.action = 'https://formsubmit.co/vahitkeskin07@gmail.com';
          tempForm.method = 'POST';
          tempForm.target = '_blank';
          const fields = { name, first_name: firstName, last_name: lastName, email, message, _subject: `[iamvahitkeskin.com] ${subject}`, _captcha: 'false', _template: 'table' };
          Object.entries(fields).forEach(([k, v]) => {
            const input = document.createElement('input');
            input.type = 'hidden'; input.name = k; input.value = v;
            tempForm.appendChild(input);
          });
          document.body.appendChild(tempForm);
          tempForm.submit();
          setTimeout(() => tempForm.remove(), 1000);
          sent = true;
        } catch (e) { console.warn('Standard POST fallback failed:', e); }
      }

      if (!sent) {
        const mailtoSubject = encodeURIComponent(`[iamvahitkeskin.com] ${subject}`);
        const mailtoBody = encodeURIComponent(`Ad: ${firstName}\nSoyad: ${lastName}\nE-posta: ${email}\n\nMesaj:\n${message}`);
        window.location.href = `mailto:vahitkeskin07@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;
        sent = true;
      }

      if (sent) {
        const toast = el('div', {
          style: 'position:fixed;inset:auto 0 30px 0;margin:auto;max-width:340px;padding:14px 20px;background:var(--surface);backdrop-filter:blur(20px);border:1px solid var(--border);border-radius:16px;box-shadow:var(--shadow-lg);color:var(--text);display:flex;align-items:center;gap:10px;justify-content:center;z-index:9999;transform:translateY(20px);opacity:0;transition:all .35s cubic-bezier(.4,0,.2,1);'
        }, '✅ Mesajınız gönderildi!');
        document.body.appendChild(toast);
        requestAnimationFrame(() => { toast.style.transform = 'translateY(0)'; toast.style.opacity = '1'; });
        setTimeout(() => { toast.style.transform = 'translateY(20px)'; toast.style.opacity = '0'; setTimeout(() => toast.remove(), 350); }, 2500);
        form.reset();
        if (previewContainer) previewContainer.style.display = 'none';
        validateForm();
      }

      if (sendBtn) { sendBtn.innerHTML = originalBtnText; sendBtn.disabled = false; }
    } catch (error) {
      console.error('Contact form error:', error);
      alert('Bir hata oluştu. Lütfen tekrar deneyin.');
      if (sendBtn) { sendBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Mesajı Gönder'; sendBtn.disabled = false; }
    }
  });
}

// ============================================================
//  NEW ANIMATION ENGINE
// ============================================================

// ── Scroll Progress Bar ──────────────────────────────────────
function updateScrollProgress() {
  const bar = $('#scroll-progress');
  if (!bar) return;
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  bar.style.width = docHeight > 0 ? (scrollTop / docHeight * 100) + '%' : '0%';
}

// ── Scroll Reveal System ─────────────────────────────────────
function setupScrollReveal() {
  const revealElements = $$('[data-reveal]');
  if (!revealElements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.08,
    rootMargin: '0px 0px -60px 0px'
  });

  revealElements.forEach(el => observer.observe(el));

  // Fallback: reveal elements already in viewport
  setTimeout(() => {
    revealElements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.classList.add('revealed');
      }
    });
  }, 200);

  // Safety net: reveal everything after 2 seconds
  setTimeout(() => {
    revealElements.forEach(el => el.classList.add('revealed'));
  }, 2500);
}

// ── Legacy data-animate support ──────────────────────────────
function setupLegacyAnimations() {
  const animateEls = $$('[data-animate]');
  if (!animateEls.length) return;

  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in', 'animate-active', 'revealed');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  animateEls.forEach(n => { n.classList.add('js-hide'); io.observe(n); });

  setTimeout(() => {
    animateEls.forEach(n => {
      const rect = n.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) n.classList.add('in', 'animate-active', 'revealed');
    });
  }, 100);

  setTimeout(() => animateEls.forEach(n => n.classList.add('in', 'animate-active', 'revealed')), 1500);
}

// ── Number Counter Animation ─────────────────────────────────
function setupCounters() {
  const counters = $$('[data-count]');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target;
        const end = parseInt(target.dataset.count);
        const suffix = target.dataset.suffix || '+';
        animateNumber(target, 0, end, 1800, suffix);
        observer.unobserve(target);
      }
    });
  }, { threshold: 0.3 });

  counters.forEach(c => observer.observe(c));
}

function animateNumber(element, start, end, duration, suffix) {
  const startTime = performance.now();
  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    // Ease out expo
    const eased = 1 - Math.pow(1 - progress, 4);
    const current = Math.round(start + (end - start) * eased);
    element.textContent = current + suffix;
    if (progress < 1) requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
}

// ── Typewriter Effect ────────────────────────────────────────
function setupTypewriter() {
  const titleEl = $('#hero-title');
  if (!titleEl) return;

  const titles = [
    'Senior Android Engineer',
    'Kotlin Expert',
    'Jetpack Compose Developer',
    'Clean Architecture Advocate',
    'Mobile App Specialist'
  ];

  let titleIdx = 0;
  let charIdx = 0;
  let isDeleting = false;
  let isPaused = false;

  function type() {
    const current = titles[titleIdx];
    if (isPaused) {
      isPaused = false;
      isDeleting = true;
      setTimeout(type, 80);
      return;
    }

    if (!isDeleting) {
      titleEl.textContent = current.substring(0, charIdx + 1);
      charIdx++;
      if (charIdx === current.length) {
        isPaused = true;
        setTimeout(type, 2500);
        return;
      }
      setTimeout(type, 60 + Math.random() * 40);
    } else {
      titleEl.textContent = current.substring(0, charIdx);
      charIdx--;
      if (charIdx < 0) {
        isDeleting = false;
        charIdx = 0;
        titleIdx = (titleIdx + 1) % titles.length;
        setTimeout(type, 400);
        return;
      }
      setTimeout(type, 30);
    }
  }

  // Start after hero animation
  setTimeout(type, 2000);
}

// ── Active Section Highlight (Sidebar) ───────────────────────
function setupSidebarHighlight() {
  const sections = $$('section[id]');
  const navItems = $$('.sidebar-item[data-section]');
  if (!sections.length || !navItems.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navItems.forEach(item => {
          if (item.dataset.section === id) item.classList.add('active');
          else item.classList.remove('active');
        });
      }
    });
  }, {
    threshold: 0.2,
    rootMargin: '-10% 0px -60% 0px'
  });

  sections.forEach(s => observer.observe(s));
}

// ── Magnetic Button Effect ───────────────────────────────────
function setupMagneticButtons() {
  const buttons = $$('.btn');
  buttons.forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width * 100).toFixed(1);
      const y = ((e.clientY - rect.top) / rect.height * 100).toFixed(1);
      btn.style.setProperty('--mx', x + '%');
      btn.style.setProperty('--my', y + '%');
    });
  });
}

// ── Smooth Header Scroll ─────────────────────────────────────
function setupHeaderScroll() {
  const header = $('header');
  if (!header) return;
  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    if (scrollY > 80) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
    lastScroll = scrollY;
  }, { passive: true });
}

// ============================================================
//  RENDER FUNCTIONS (Skills & Projects)
// ============================================================

function renderSkills() {
  const skillsContainer = $('#skills-container');
  if (!skillsContainer || !window.PROFILE || !PROFILE.skills) return;
  skillsContainer.innerHTML = '';

  const skillIconOf = (name) => {
    const n = (name || '').toLowerCase();
    if (n.includes('android')) return 'images/ic-android.png';
    if (n.includes('kotlin')) return 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg';
    if (n.includes('java')) return 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg';
    if (n.includes('compose')) return 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jetpackcompose/jetpackcompose-original.svg';
    if (n.includes('flutter')) return 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg';
    if (n.includes('git')) return 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg';
    if (n.includes('jira')) return 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg';
    return 'images/ic-android.png';
  };

  PROFILE.skills.forEach((s, i) => {
    const card = el('div', { className: 'skill-card' });
    card.setAttribute('data-reveal', 'up');
    card.style.transitionDelay = `${0.05 * i}s`;

    const header = el('div', { className: 'skill-header' });
    const iconWrap = el('div', { className: 'skill-icon' });
    iconWrap.append(el('img', { src: skillIconOf(s.name), alt: s.name, style: 'width:24px;height:24px;object-fit:contain;' }));
    header.append(iconWrap, el('div', { className: 'skill-title' }, s.name));

    const body = el('div', { className: 'skill-body' });
    if (s.context) body.append(el('div', { className: 'skill-context' }, s.context));
    if (s.companies && s.companies.length) {
      const chips = el('div', { className: 'skill-chips' });
      s.companies.forEach(c => chips.append(el('span', { className: 'skill-chip' }, c)));
      body.append(chips);
    }

    card.append(header, body);
    skillsContainer.append(card);
  });
}

function renderProjects() {
  const projectsContainer = $('#projects-container');
  if (!projectsContainer || !window.PROFILE || !PROFILE.projects) return;
  projectsContainer.innerHTML = '';

  PROFILE.projects.forEach((p, i) => {
    const card = el('div', { className: `glass-card project-card${p.featured ? ' featured' : ''}` });
    card.setAttribute('data-reveal', 'up');
    card.style.transitionDelay = `${0.08 * i}s`;

    // Image
    if (p.image) {
      const imgWrap = el('div', { className: 'card-image-wrap' });
      imgWrap.append(el('img', { src: p.image, alt: p.name, className: 'card-image' }));
      card.append(imgWrap);
    }

    // Header
    const header = el('div', { className: 'card-h' });
    const titleWrap = el('div', { style: 'display:flex;justify-content:space-between;align-items:center;' });
    titleWrap.append(el('h3', { style: 'margin:0;' }, p.name));
    if (p.featured) {
      const lang = typeof currentLanguage !== 'undefined' ? currentLanguage : 'tr';
      const badgeText = (typeof TRANSLATIONS !== 'undefined' && TRANSLATIONS[lang]?.['projects.featured']) || 'Featured';
      titleWrap.append(el('span', { className: 'badge', style: 'background:var(--brand);color:#fff;font-size:0.65rem;' }, badgeText));
    }
    header.append(titleWrap);
    if (p.company) {
      const lang = typeof currentLanguage !== 'undefined' ? currentLanguage : 'tr';
      const companyText = (typeof TRANSLATIONS !== 'undefined' && TRANSLATIONS[lang]?.['projects.personal'] && p.company === 'Kişisel Proje')
        ? TRANSLATIONS[lang]['projects.personal'] : p.company;
      header.append(el('div', { className: 'text-muted', style: 'font-size:0.85rem;margin-top:0.2rem;font-weight:600;' }, companyText));
    }

    // Body
    const body = el('div', { className: 'card-b' });
    const lang = typeof currentLanguage !== 'undefined' ? currentLanguage : 'tr';
    const descriptionText = p['description_' + lang] || p.description;
    body.append(el('p', {}, descriptionText));

    const tags = el('div', { className: 'skill-chips', style: 'margin-bottom:1rem;' });
    p.tags.forEach(t => tags.append(el('span', { className: 'badge' }, t)));
    body.append(tags);

    const actions = el('div', { className: 'hero-actions' });
    if (p.link && p.link !== '#') {
      const detailText = (typeof TRANSLATIONS !== 'undefined' && TRANSLATIONS[lang]?.['projects.detail']) || 'Detay';
      const detailBtn = el('a', { href: p.link, className: 'btn btn-secondary', target: '_blank', rel: 'noreferrer noopener', style: 'flex:1;justify-content:center;' }, detailText);
      actions.append(detailBtn);
    }
    if (p.featured && p.link && p.link.includes('play.google.com')) {
      const playText = (typeof TRANSLATIONS !== 'undefined' && TRANSLATIONS[lang]?.['projects.playstore']) || 'Play Store';
      const playBtn = el('a', { href: p.link, className: 'btn btn-primary', target: '_blank', rel: 'noreferrer noopener', style: 'flex:1;justify-content:center;' });
      playBtn.append(el('i', { className: 'fab fa-google-play' }), el('span', {}, ' ' + playText));
      actions.append(playBtn);
    }
    if (actions.children.length > 0) body.append(actions);

    card.append(header, body);
    projectsContainer.append(card);
  });
}

// ============================================================
//  WEATHER (preserved from original)
// ============================================================
let selectedCity = 'Istanbul';
let currentWeather = null;
let userLocation = null;

async function getUserLocationByIP() {
  try {
    const response = await fetch('https://ipapi.co/json/');
    const data = await response.json();
    if (data.latitude && data.longitude) {
      let locationName = data.city || data.region || data.country_name || 'Bilinmeyen Konum';
      if (data.city && data.region && data.city !== data.region) locationName = `${data.city}, ${data.region}`;
      userLocation = { lat: parseFloat(data.latitude), lon: parseFloat(data.longitude), city: locationName, country: data.country_name || '', region: data.region || '', timezone: data.timezone || 'Europe/Istanbul' };
      localStorage.setItem('userLocation', JSON.stringify(userLocation));
      updateTimeZone(userLocation.lat, userLocation.lon);
      await getWeatherByCoords(userLocation.lat, userLocation.lon, userLocation.city);
      return;
    }
  } catch (error) { console.log('IP location failed:', error); }
  try {
    const response = await fetch('https://api.ipify.org?format=json');
    const ipData = await response.json();
    const geoResponse = await fetch(`https://ipapi.co/${ipData.ip}/json/`);
    const geoData = await geoResponse.json();
    if (geoData.latitude && geoData.longitude) {
      let locationName = geoData.city || geoData.region || geoData.country_name || 'Bilinmeyen Konum';
      if (geoData.city && geoData.region && geoData.city !== geoData.region) locationName = `${geoData.city}, ${geoData.region}`;
      userLocation = { lat: parseFloat(geoData.latitude), lon: parseFloat(geoData.longitude), city: locationName, country: geoData.country_name || '', region: geoData.region || '', timezone: geoData.timezone || 'Europe/Istanbul' };
      localStorage.setItem('userLocation', JSON.stringify(userLocation));
      updateTimeZone(userLocation.lat, userLocation.lon);
      getWeatherByCoords(userLocation.lat, userLocation.lon, userLocation.city);
      return;
    }
  } catch (error) { console.log('Alternative IP location failed'); }
  getWeather(selectedCity);
}

async function getWeatherByCoords(lat, lon, cityName) {
  try {
    const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,weather_code&timezone=auto`);
    const data = await response.json();
    if (data.current) {
      currentWeather = { temp: Math.round(data.current.temperature_2m), condition: getWeatherDescriptionByCode(data.current.weather_code), icon: getWeatherIconByCode(data.current.weather_code), city: cityName || 'Konum' };
      updateWeatherDisplay(currentWeather.temp, currentWeather.condition, currentWeather.icon, currentWeather.city);
      return;
    }
  } catch (error) { getWeather(cityName || selectedCity); }
}

async function getWeather(city) {
  try {
    const response = await fetch(`https://wttr.in/${encodeURIComponent(city)}?format=j1&lang=${currentLanguage || 'tr'}`);
    const data = await response.json();
    if (data.current_condition && data.current_condition[0]) {
      const w = data.current_condition[0];
      currentWeather = { temp: w.temp_C, condition: w.weatherDesc[0].value, icon: getWeatherIconFromWttr(w.weatherCode), city: data.nearest_area[0].areaName[0].value || city };
      updateWeatherDisplay(currentWeather.temp, currentWeather.condition, currentWeather.icon, currentWeather.city);
    }
  } catch (error) { updateWeatherDisplay('N/A', 'Hava durumu alınamadı', '❓', city); }
}

function getWeatherDescriptionByCode(code) {
  const d = { 0:'Açık',1:'Az bulutlu',2:'Parçalı bulutlu',3:'Kapalı',45:'Sisli',48:'Donan sisli',51:'Hafif çisenti',53:'Çisenti',55:'Şiddetli çisenti',61:'Hafif yağmur',63:'Yağmur',65:'Şiddetli yağmur',71:'Hafif kar',73:'Kar',75:'Şiddetli kar',80:'Hafif sağanak',81:'Sağanak',82:'Şiddetli sağanak',95:'Gök gürültülü',96:'Gök gürültülü dolu',99:'Şiddetli gök gürültülü dolu' };
  return d[code] || 'Bilinmeyen';
}

function getWeatherIconByCode(code) {
  const i = { 0:'☀️',1:'🌤️',2:'⛅',3:'☁️',45:'🌫️',48:'🌫️',51:'🌧️',53:'🌧️',55:'🌧️',61:'🌧️',63:'🌧️',65:'🌧️',71:'🌨️',73:'🌨️',75:'🌨️',80:'🌧️',81:'🌧️',82:'🌧️',95:'⛈️',96:'⛈️',99:'⛈️' };
  return i[code] || '🌤️';
}

function getWeatherIconFromWttr(weatherCode) {
  const m = {'113':'☀️','116':'⛅','119':'☁️','122':'☁️','143':'🌫️','176':'🌧️','179':'🌨️','200':'⛈️','227':'🌨️','230':'🌨️','248':'🌫️','260':'🌫️','263':'🌧️','266':'🌧️','293':'🌧️','296':'🌧️','299':'🌧️','302':'🌧️','305':'🌧️','308':'🌧️','323':'🌨️','326':'🌨️','329':'🌨️','332':'🌨️','335':'🌨️','338':'🌨️','353':'🌧️','356':'🌧️','359':'🌧️','386':'⛈️','389':'⛈️','392':'⛈️','395':'⛈️'};
  return m[weatherCode] || '🌤️';
}

function updateWeatherDisplay(temp, condition, icon, city) {
  const wIcon = $('#weather-icon');
  const wTemp = $('#weather-temp');
  const wDesc = $('#weather-desc');
  const wCity = $('#current-city');
  if (wIcon) wIcon.textContent = icon;
  if (wTemp) wTemp.textContent = `${temp}°C`;
  if (wDesc) wDesc.textContent = condition;
  if (wCity) wCity.textContent = city || 'Konum alınıyor...';
}

let isWeatherSetup = false;
function setupWeather() {
  if (isWeatherSetup) return;
  isWeatherSetup = true;
  getUserLocationByIP().catch(() => getWeather(selectedCity));
  setInterval(() => {
    if (userLocation) getWeatherByCoords(userLocation.lat, userLocation.lon, userLocation.city);
    else getWeather(selectedCity);
  }, 30 * 60 * 1000);
}
window.setupWeather = setupWeather;

// ── Copy to clipboard ────────────────────────────────────────
function copyToClipboard(text, btn) {
  navigator.clipboard.writeText(text).then(() => {
    const orig = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-check"></i>';
    btn.classList.add('copied');
    setTimeout(() => { btn.innerHTML = orig; btn.classList.remove('copied'); }, 2000);
  }).catch(err => console.error('Copy failed:', err));
}

// ============================================================
//  MAIN INITIALIZATION
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  try {
    // Year
    const yearEl = $('#year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    // Core features
    try { setupThemeSwitcher(); } catch (e) { console.error('Theme:', e); }
    try { if (typeof setupLanguageSwitcher === 'function') setupLanguageSwitcher(); } catch (e) { console.error('Language:', e); }
    try { setupContactForm(); } catch (e) { console.error('Contact form:', e); }
    try { setupWeather(); } catch (e) { console.error('Weather:', e); }

    // Visitor counter
    try {
      visitorCounter.init().catch(e => console.error('Counter:', e));
      const refreshBtn = $('#refresh-counter');
      const statusEl = $('#counter-status');
      if (refreshBtn && statusEl) {
        refreshBtn.addEventListener('click', async () => {
          refreshBtn.textContent = '⏳'; refreshBtn.disabled = true; statusEl.textContent = 'Yenileniyor...';
          try { await visitorCounter.refresh(); statusEl.textContent = 'Gerçek zamanlı sayım'; }
          catch (e) { statusEl.textContent = 'Yenileme hatası'; }
          finally { refreshBtn.textContent = '🔄'; refreshBtn.disabled = false; }
        });
      }
    } catch (e) { console.error('Counter:', e); }

    try { trackPageView(); } catch (e) {}

    // Render dynamic content
    try { renderSkills(); } catch (e) { console.error('Skills:', e); }
    try { renderProjects(); } catch (e) { console.error('Projects:', e); }

    // NEW: Animation engine
    try { setupScrollReveal(); } catch (e) { console.error('Scroll reveal:', e); }
    try { setupLegacyAnimations(); } catch (e) { console.error('Legacy anims:', e); }
    try { setupCounters(); } catch (e) { console.error('Counters:', e); }
    try { setupTypewriter(); } catch (e) { console.error('Typewriter:', e); }
    try { setupSidebarHighlight(); } catch (e) { console.error('Sidebar highlight:', e); }
    try { setupMagneticButtons(); } catch (e) { console.error('Magnetic:', e); }
    try { setupHeaderScroll(); } catch (e) { console.error('Header scroll:', e); }

    // Scroll progress
    window.addEventListener('scroll', updateScrollProgress, { passive: true });
    updateScrollProgress();

  } catch (error) {
    console.error('Main init error:', error);
  }
});

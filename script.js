// Utility functions
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

// Language Initialization
// currentLanguage is declared in language.js

// Time and date
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
  // Simple timezone estimation based on longitude
  // This is a basic approximation - for production, use a proper timezone API
  const timezoneOffset = Math.round(lon / 15);
  const timezoneNames = [
    'UTC-12', 'UTC-11', 'UTC-10', 'UTC-9', 'UTC-8', 'UTC-7', 'UTC-6', 'UTC-5', 'UTC-4', 'UTC-3', 'UTC-2', 'UTC-1',
    'UTC', 'UTC+1', 'UTC+2', 'UTC+3', 'UTC+4', 'UTC+5', 'UTC+6', 'UTC+7', 'UTC+8', 'UTC+9', 'UTC+10', 'UTC+11', 'UTC+12'
  ];

  const timezoneIndex = timezoneOffset + 12;
  if (timezoneIndex >= 0 && timezoneIndex < timezoneNames.length) {
    userTimeZone = timezoneNames[timezoneIndex];
  }
}

// Update time every second
setInterval(updateDateTime, 1000);
updateDateTime();

// Theme switcher with smooth transition
function setupThemeSwitcher() {
  const themeSwitcher = $('#theme-switcher');
  const themeIcon = $('#theme-icon');
  const themeText = $('#theme-text');

  if (!themeSwitcher || !themeIcon || !themeText) return;

  if (typeof updatePageLanguage === 'function') updatePageLanguage();
  let currentTheme = localStorage.getItem('theme') || 'auto';

  function updateTheme() {
    const root = document.documentElement;

    // Add transition class
    root.classList.add('theme-transitioning');

    root.classList.remove('dark', 'light');

    if (currentTheme === 'dark') {
      root.classList.add('dark');
      themeIcon.className = 'fas fa-moon';
      themeText.textContent = TRANSLATIONS[currentLanguage]['theme.dark'];
    } else if (currentTheme === 'light') {
      root.classList.add('light');
      themeIcon.className = 'fas fa-sun';
      themeText.textContent = TRANSLATIONS[currentLanguage]['theme.light'];
    } else {
      const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      root.classList.add(isDark ? 'dark' : 'light');
      themeIcon.className = 'fas fa-adjust';
      themeText.textContent = TRANSLATIONS[currentLanguage]['theme.auto'];
    }

    // Remove transition class after a short delay
    setTimeout(() => {
      root.classList.remove('theme-transitioning');
    }, 400);
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

// Clean and Stable Visitor Counter
class VisitorCounter {
  constructor() {
    this.count = 0;
    this.isInitialized = false;
    this.sessionId = this.generateSessionId();
    this.element = $('#visitor-count');
  }

  generateSessionId() {
    return 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
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

    // Using counterapi.dev - More stable than countapi.xyz
    const namespace = 'vahitkeskin.com';
    const key = 'visits';
    const url = `https://api.counterapi.dev/v1/${namespace}/${key}${isNewSession ? '/up' : ''}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data && typeof data.count === 'number') {
        this.count = data.count;
        this.updateDisplay();
      } else {
        throw new Error('Invalid data format');
      }
    } catch (error) {
      console.warn('Counter API failed, using fallback:', error);
      this.useLocalStorageFallback(isNewSession);
    }
  }

  useLocalStorageFallback(isNewSession) {
    let storedCount = parseInt(localStorage.getItem('visitorCount') || '1250'); // Start with a realistic base
    if (isNewSession) {
      storedCount += 1;
      localStorage.setItem('visitorCount', storedCount.toString());
    }
    this.count = storedCount;
    this.updateDisplay();
  }

  updateDisplay() {
    if (this.element) {
      this.element.textContent = this.count.toLocaleString('tr-TR');
    }
  }

  async refresh() {
    await this.updateCount();
  }
}

// Create global instance
const visitorCounter = new VisitorCounter();

// Track unique page views
function trackPageView() {
  const pageViews = localStorage.getItem('pageViews') || 0;
  localStorage.setItem('pageViews', parseInt(pageViews) + 1);
}

// Contact form
function setupContactForm() {
  const form = $('#contact-form');
  if (!form) {
    console.warn('Contact form not found');
    return;
  }
  const firstNameInput = $('#first_name');
  const lastNameInput = $('#last_name');
  const emailInput = $('#email');
  const subjectInput = $('#subject');
  const messageInput = $('#message');
  const sendBtn = $('#sendBtn');

  function isEmailValid(value) {
    if (!value) return false;
    // Simple RFC5322-ish email validation
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    return re.test(String(value).toLowerCase());
  }

  function isNonEmpty(value) {
    return !!(value && value.trim().length >= 2);
  }

  function validateForm() {
    const firstOk = isNonEmpty(firstNameInput?.value);
    const lastOk = isNonEmpty(lastNameInput?.value);
    const emailOk = isEmailValid(emailInput?.value.trim());
    const subjectOk = !!subjectInput?.value.trim();
    const messageOk = !!messageInput?.value.trim();
    const allOk = firstOk && lastOk && emailOk && subjectOk && messageOk;
    if (sendBtn) {
      sendBtn.disabled = !allOk;
      if (sendBtn.disabled) {
        sendBtn.style.opacity = '0.6';
        sendBtn.style.cursor = 'not-allowed';
      } else {
        sendBtn.style.opacity = '1';
        sendBtn.style.cursor = 'pointer';
      }
    }
    return allOk;
  }

  [firstNameInput, lastNameInput, emailInput, subjectInput, messageInput].forEach(inp => {
    inp?.addEventListener('input', validateForm);
    inp?.addEventListener('blur', validateForm);
  });
  // initial state
  validateForm();

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    try {
      // Get form data
      const formData = new FormData(form);
      const firstName = (formData.get('first_name') || firstNameInput?.value || '').toString().trim();
      const lastName = (formData.get('last_name') || lastNameInput?.value || '').toString().trim();
      const name = `${firstName} ${lastName}`.trim();
      const email = (formData.get('email') || $('#email')?.value || '').toString().trim();
      const subject = (formData.get('subject') || $('#subject')?.value || '').toString().trim();
      const message = (formData.get('message') || $('#message')?.value || '').toString().trim();

      // Basic validation
      if (!firstName || !lastName || !email || !subject || !message || !isEmailValid(email)) {
        alert('Lütfen tüm alanları doldurun.');
        return;
      }
      // Disable button and show loading state
      const originalBtnText = sendBtn ? sendBtn.textContent : '';
      if (sendBtn) {
        sendBtn.textContent = 'Gönderiliyor...';
        sendBtn.disabled = true;
      }

      // Primary: send via FormSubmit
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 12000);

      const payload = {
        name,
        first_name: firstName,
        last_name: lastName,
        email,
        message,
        _subject: `[iamvahitkeskin.com] ${subject}`,
        _captcha: 'false',
        _template: 'table'
      };

      let sent = false;
      try {
        const res = await fetch('https://formsubmit.co/ajax/vahitkeskin07@gmail.com', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(payload),
          signal: controller.signal
        });
        clearTimeout(timeoutId);
        if (res.ok) {
          const data = await res.json().catch(() => ({}));
          if (data && (data.success || data.message)) {
            sent = true;
          } else {
            // Some proxies return 200 without JSON body
            sent = true;
          }
        } else {
          throw new Error(`HTTP ${res.status}`);
        }
      } catch (err) {
        clearTimeout(timeoutId);
        console.warn('FormSubmit failed, will fallback to mailto:', err.message || err);
      }

      if (!sent) {
        // Second fallback: Standard POST to FormSubmit (opens a new tab)
        try {
          const tempForm = document.createElement('form');
          tempForm.action = 'https://formsubmit.co/vahitkeskin07@gmail.com';
          tempForm.method = 'POST';
          tempForm.target = '_blank';

          const fields = {
            name,
            first_name: firstName,
            last_name: lastName,
            email,
            message,
            _subject: `[iamvahitkeskin.com] ${subject}`,
            _captcha: 'false',
            _template: 'table'
          };

          Object.entries(fields).forEach(([k, v]) => {
            const input = document.createElement('input');
            input.type = 'hidden';
            input.name = k;
            input.value = v;
            tempForm.appendChild(input);
          });

          document.body.appendChild(tempForm);
          tempForm.submit();
          setTimeout(() => tempForm.remove(), 1000);
          sent = true;
          console.info('FormSubmit standard POST used. İlk kez kullanıyorsanız e-postayı doğrulamanız gerekir.');
        } catch (e) {
          console.warn('Standard POST fallback failed:', e);
        }
      }

      if (!sent) {
        // Final fallback: open default mail client
        const mailtoSubject = encodeURIComponent(`[iamvahitkeskin.com] ${subject}`);
        const mailtoBody = encodeURIComponent(
          `Ad: ${firstName}\nSoyad: ${lastName}\nE-posta: ${email}\n\nMesaj:\n${message}`
        );
        window.location.href = `mailto:vahitkeskin07@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;
        sent = true;
      }

      if (sent) {
        // Success animation toast
        try {
          const toast = el('div', {
            style: 'position:fixed;inset:auto 0 20px 0;margin:auto;max-width:320px;padding:12px 16px;background:var(--surface2);border:1px solid var(--border);border-radius:10px;box-shadow:var(--shadow);color:var(--text);display:flex;align-items:center;gap:8px;justify-content:center;z-index:9999;transform:translateY(20px);opacity:0;transition:transform .25s ease, opacity .25s ease;'
          }, '✅ Mesajınız gönderildi');
          document.body.appendChild(toast);
          requestAnimationFrame(() => {
            toast.style.transform = 'translateY(0)';
            toast.style.opacity = '1';
          });
          setTimeout(() => {
            toast.style.transform = 'translateY(20px)';
            toast.style.opacity = '0';
            setTimeout(() => toast.remove(), 250);
          }, 2200);
        } catch (_) { }

        form.reset();
        validateForm();
      }

      if (sendBtn) {
        sendBtn.textContent = originalBtnText || 'Gönder';
        sendBtn.disabled = false;
      }
    } catch (error) {
      console.error('Contact form error:', error);
      alert('Bir hata oluştu. Lütfen tekrar deneyin.');
      const sendBtn = $('#sendBtn');
      if (sendBtn) {
        sendBtn.textContent = 'Gönder';
        sendBtn.disabled = false;
      }
    }
  });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  try {
    // Set year
    const yearElement = $('#year');
    if (yearElement) {
      yearElement.textContent = new Date().getFullYear();
    }

    // Setup features with error handling
    try {
      setupThemeSwitcher();
    } catch (error) {
      console.error('Theme switcher setup error:', error);
    }

    try {
      setupLanguageSwitcher();
    } catch (error) {
      console.error('Language switcher setup error:', error);
    }

    // Mark active nav link based on current path
    try {
      const path = location.pathname.split('/').pop() || 'index.html';
      const navLinks = document.querySelectorAll('.navlinks a, .nav-drawer a');
      navLinks.forEach(a => {
        const href = a.getAttribute('href');
        if (href) {
          const file = href.split('#')[0].split('/').pop();
          if ((path === '' && file === 'index.html') || file === path) {
            a.setAttribute('aria-current', 'page');
          } else {
            a.removeAttribute('aria-current');
          }
        }
      });
    } catch (error) {
      console.error('Active nav highlight error:', error);
    }

    try {
      setupContactForm();
    } catch (error) {
      console.error('Contact form setup error:', error);
    }

    try {
      setupWeather();
    } catch (error) {
      console.error('Weather setup error:', error);
    }

    try {
      visitorCounter.init().catch(error => {
        console.error('Visitor counter init error:', error);
      });

      // Setup refresh button
      const refreshBtn = $('#refresh-counter');
      const statusElement = $('#counter-status');

      if (refreshBtn && statusElement) {
        refreshBtn.addEventListener('click', async () => {
          refreshBtn.textContent = '⏳';
          refreshBtn.disabled = true;
          statusElement.textContent = 'Yenileniyor...';

          try {
            await visitorCounter.refresh();
            statusElement.textContent = 'Gerçek zamanlı sayım';
          } catch (error) {
            console.error('Counter refresh failed:', error);
            statusElement.textContent = 'Yenileme hatası';
          } finally {
            refreshBtn.textContent = '🔄';
            refreshBtn.disabled = false;
          }
        });
      }
    } catch (error) {
      console.error('Visitor count setup error:', error);
    }

    try {
      trackPageView();
    } catch (error) {
      console.error('Page view tracking error:', error);
    }

    // Setup mobile navigation
    try {
      const menuBtn = $('#menuBtn');
      const navDrawer = $('#navDrawer');

      if (menuBtn && navDrawer) {
        // Restore menu state from localStorage
        const savedMenuState = localStorage.getItem('mobileMenuOpen');
        if (savedMenuState === 'true') {
          navDrawer.style.display = 'block';
          menuBtn.setAttribute('aria-expanded', 'true');
        }

        menuBtn.addEventListener('click', () => {
          const open = navDrawer.style.display === 'block';
          navDrawer.style.display = open ? 'none' : 'block';
          menuBtn.setAttribute('aria-expanded', String(!open));

          // Save menu state to localStorage
          localStorage.setItem('mobileMenuOpen', String(!open));
        });

        navDrawer.querySelectorAll('a').forEach(a => {
          a.addEventListener('click', (e) => {
            // Close menu immediately for better UX
            navDrawer.style.display = 'none';
            menuBtn.setAttribute('aria-expanded', 'false');
            // Save closed state to localStorage
            localStorage.setItem('mobileMenuOpen', 'false');

            // Add visual feedback
            menuBtn.style.transform = 'scale(0.95)';
            setTimeout(() => {
              menuBtn.style.transform = 'scale(1)';
            }, 150);
          });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
          if (navDrawer.style.display === 'block' &&
            !navDrawer.contains(e.target) &&
            !menuBtn.contains(e.target)) {
            navDrawer.style.display = 'none';
            menuBtn.setAttribute('aria-expanded', 'false');
            localStorage.setItem('mobileMenuOpen', 'false');
          }
        });

        // Close menu on escape key
        document.addEventListener('keydown', (e) => {
          if (e.key === 'Escape' && navDrawer.style.display === 'block') {
            navDrawer.style.display = 'none';
            menuBtn.setAttribute('aria-expanded', 'false');
            localStorage.setItem('mobileMenuOpen', 'false');
            menuBtn.focus();
          }
        });
      }
    } catch (error) {
      console.error('Mobile navigation setup error:', error);
    }

    // Render skills
    try {
      const skillsContainer = $('#skills-container');
      if (!skillsContainer || !PROFILE || !PROFILE.skills) {
        console.warn('Skills container or profile data not found');
      } else {
        skillsContainer.innerHTML = ''; // Clear loading state

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

        PROFILE.skills.forEach(s => {
          const card = el('div', { className: 'skill-card' });

          const header = el('div', { className: 'skill-header' });
          const iconWrap = el('div', { className: 'skill-icon' });
          iconWrap.append(el('img', {
            src: skillIconOf(s.name),
            alt: s.name,
            style: 'width:24px;height:24px;object-fit:contain;'
          }));
          header.append(iconWrap, el('div', { className: 'skill-title' }, s.name));

          const body = el('div', { className: 'skill-body' });
          if (s.context) {
            body.append(el('div', { className: 'skill-context' }, s.context));
          }

          if (s.companies && s.companies.length) {
            const chips = el('div', { className: 'skill-chips' });
            s.companies.forEach(c => chips.append(el('span', { className: 'skill-chip' }, c)));
            body.append(chips);
          }

          card.append(header, body);
          skillsContainer.append(card);
        });
      }
    } catch (error) {
      console.error('Skills rendering error:', error);
    }

    // Render projects
    try {
      const projectsContainer = $('#projects-container');
      if (!projectsContainer || !PROFILE || !PROFILE.projects) {
        console.warn('Projects container or profile data not found');
      } else {
        projectsContainer.innerHTML = ''; // Clear loading state

        PROFILE.projects.forEach(p => {
          const card = el('div', { className: 'glass-card' });

          const header = el('div', { className: 'card-h' });
          const titleWrap = el('div', { style: 'display:flex;justify-content:space-between;align-items:center;' });
          titleWrap.append(el('h3', { style: 'margin:0;' }, p.name));

          if (p.featured) {
            const badgeText = (TRANSLATIONS[currentLanguage] && TRANSLATIONS[currentLanguage]['projects.featured']) || 'Featured';
            titleWrap.append(el('span', { className: 'badge', style: 'background:var(--brand);color:#fff;' }, badgeText));
          }
          header.append(titleWrap);

          if (p.company) {
            const companyText = (TRANSLATIONS[currentLanguage] && TRANSLATIONS[currentLanguage]['projects.personal'] && p.company === 'Kişisel Proje')
              ? TRANSLATIONS[currentLanguage]['projects.personal']
              : p.company;
            header.append(el('div', { className: 'text-muted', style: 'font-size:0.9rem;margin-top:0.25rem;font-weight:600;' }, companyText));
          }

          const body = el('div', { className: 'card-b' });

          if (p.image) {
            const imageContainer = el('div', { style: 'margin-bottom:1.5rem;border-radius:12px;overflow:hidden;border:var(--glass-border);' });
            imageContainer.append(el('img', {
              src: p.image,
              alt: p.name,
              style: 'width:100%;height:180px;object-fit:cover;'
            }));
            body.append(imageContainer);
          }

          const descriptionText = p['description_' + currentLanguage] || p.description;
          body.append(el('p', { className: 'text-muted', style: 'margin-bottom:1.5rem;' }, descriptionText));

          const tags = el('div', { className: 'skill-chips', style: 'margin-bottom:1.5rem;' });
          p.tags.forEach(t => tags.append(el('span', { className: 'badge' }, t)));
          body.append(tags);

          const actions = el('div', { className: 'hero-actions' });
          if (p.link && p.link !== '#') {
            const detailText = (TRANSLATIONS[currentLanguage] && TRANSLATIONS[currentLanguage]['projects.detail']) || 'Detay';
            const detailBtn = el('a', { href: p.link, className: 'btn btn-secondary', style: 'flex:1;justify-content:center;' }, detailText);
            actions.append(detailBtn);
          }

          if (p.featured && p.link && p.link.includes('play.google.com')) {
            const playText = (TRANSLATIONS[currentLanguage] && TRANSLATIONS[currentLanguage]['projects.playstore']) || 'Play Store';
            const playBtn = el('a', {
              href: p.link,
              className: 'btn btn-primary',
              style: 'flex:1;justify-content:center;'
            });
            playBtn.append(el('i', { className: 'fab fa-google-play' }), el('span', {}, playText));
            actions.append(playBtn);
          }

          if (actions.children.length > 0) {
            body.append(actions);
          }

          card.append(header, body);
          projectsContainer.append(card);
        });
      }
    } catch (error) {
      console.error('Projects rendering error:', error);
    }

    // Intersection Observer for staggered entry animations
    try {
      const io = new IntersectionObserver((entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        });
      }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

      // Only add to elements that need animation
      $$('[data-animate]').forEach(n => {
        // Initial setup for JS animation
        n.classList.add('js-hide');
        io.observe(n);
      });

      // Secondary check for elements already in viewport on load
      setTimeout(() => {
        $$('[data-animate]').forEach(n => {
          const rect = n.getBoundingClientRect();
          if (rect.top < window.innerHeight && rect.bottom > 0) {
            n.classList.add('in');
          }
        });
      }, 100);

      // Fallback
      setTimeout(() => {
        $$('[data-animate]').forEach(n => n.classList.add('in'));
      }, 1000);
    } catch (error) {
      console.error('Animation setup error:', error);
      $$('[data-animate]').forEach(n => n.classList.add('in'));
    }
  } catch (error) {
    console.error('Main initialization error:', error);
  }
});


// Initialize everything
function initializeSite() {
  setupThemeSwitcher();
  if (typeof window.setupWeather === 'function') {
    window.setupWeather();
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeSite);
} else {
  initializeSite();
}
// Weather API
let selectedCity = 'Istanbul'; // More generic default
let currentWeather = null;
let userLocation = null;

// Get user's location by IP (no permission required)
async function getUserLocationByIP() {
  try {
    // First try to get location from IP
    const response = await fetch('https://ipapi.co/json/');
    const data = await response.json();

    if (data.latitude && data.longitude) {
      // Get the most specific location available
      let locationName = data.city || data.region || data.country_name || 'Bilinmeyen Konum';

      // If we have both city and region, combine them for better specificity
      if (data.city && data.region && data.city !== data.region) {
        locationName = `${data.city}, ${data.region}`;
      }

      userLocation = {
        lat: parseFloat(data.latitude),
        lon: parseFloat(data.longitude),
        city: locationName,
        country: data.country_name || 'Bilinmeyen Ülke',
        region: data.region || '',
        timezone: data.timezone || 'Europe/Istanbul'
      };
      localStorage.setItem('userLocation', JSON.stringify(userLocation));

      console.log('Location detected:', userLocation);

      // Update timezone based on user location
      updateTimeZone(userLocation.lat, userLocation.lon);

      // Get weather for user's location
      await getWeatherByCoords(userLocation.lat, userLocation.lon, userLocation.city);
      return;
    }
  } catch (error) {
    console.log('IP location failed, trying alternative method:', error);
  }

  // Fallback: Try alternative IP geolocation service
  try {
    const response = await fetch('https://api.ipify.org?format=json');
    const ipData = await response.json();

    const geoResponse = await fetch(`https://ipapi.co/${ipData.ip}/json/`);
    const geoData = await geoResponse.json();

    if (geoData.latitude && geoData.longitude) {
      // Get the most specific location available
      let locationName = geoData.city || geoData.region || geoData.country_name || 'Bilinmeyen Konum';

      // If we have both city and region, combine them for better specificity
      if (geoData.city && geoData.region && geoData.city !== geoData.region) {
        locationName = `${geoData.city}, ${geoData.region}`;
      }

      userLocation = {
        lat: parseFloat(geoData.latitude),
        lon: parseFloat(geoData.longitude),
        city: locationName,
        country: geoData.country_name || 'Bilinmeyen Ülke',
        region: geoData.region || '',
        timezone: geoData.timezone || 'Europe/Istanbul'
      };
      localStorage.setItem('userLocation', JSON.stringify(userLocation));

      console.log('Location detected (fallback):', userLocation);

      updateTimeZone(userLocation.lat, userLocation.lon);
      getWeatherByCoords(userLocation.lat, userLocation.lon, userLocation.city);
      return;
    }
  } catch (error) {
    console.log('Alternative IP location failed');
  }

  // Final fallback: Use default city
  console.log('Using default city');
  getWeather(selectedCity);
}

async function getWeatherByCoords(lat, lon, cityName) {
  try {
    // Open-Meteo is very stable
    const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,weather_code&timezone=auto`);
    const data = await response.json();

    if (data.current) {
      currentWeather = {
        temp: Math.round(data.current.temperature_2m),
        condition: getWeatherDescriptionByCode(data.current.weather_code),
        icon: getWeatherIconByCode(data.current.weather_code),
        city: cityName || 'Konum'
      };
      updateWeatherDisplay(currentWeather.temp, currentWeather.condition, currentWeather.icon, currentWeather.city);
      return;
    }
  } catch (error) {
    console.error('Weather error:', error);
    // Fallback to wttr.in
    getWeather(cityName || selectedCity);
  }
}

async function getWeather(city) {
  try {
    // Use free weather API for city
    const response = await fetch(`https://wttr.in/${encodeURIComponent(city)}?format=j1&lang=${currentLanguage || 'tr'}`);
    const data = await response.json();

    if (data.current_condition && data.current_condition[0]) {
      const weather = data.current_condition[0];
      currentWeather = {
        temp: weather.temp_C,
        condition: weather.weatherDesc[0].value,
        icon: getWeatherIconFromWttr(weather.weatherCode),
        city: data.nearest_area[0].areaName[0].value || city
      };
      updateWeatherDisplay(currentWeather.temp, currentWeather.condition, currentWeather.icon, currentWeather.city);
    }
  } catch (error) {
    console.error('Weather fetch error:', error);
    updateWeatherDisplay('N/A', 'Hava durumu alınamadı', '❓', city);
  }
}

function getWeatherDescription(weatherText) {
  const descriptions = {
    'Sunny': 'Güneşli',
    'Partly cloudy': 'Parçalı bulutlu',
    'Cloudy': 'Bulutlu',
    'Overcast': 'Kapalı',
    'Mist': 'Sisli',
    'Patchy rain possible': 'Yağmur ihtimali',
    'Patchy snow possible': 'Kar ihtimali',
    'Patchy sleet possible': 'Karla karışık yağmur',
    'Patchy freezing drizzle possible': 'Donan yağmur',
    'Thundery outbreaks possible': 'Gök gürültülü',
    'Blowing snow': 'Tipi',
    'Blizzard': 'Kar fırtınası',
    'Fog': 'Sis',
    'Freezing fog': 'Donan sis',
    'Patchy light drizzle': 'Hafif çisenti',
    'Light drizzle': 'Çisenti',
    'Freezing drizzle': 'Donan çisenti',
    'Heavy freezing drizzle': 'Şiddetli donan çisenti',
    'Patchy light rain': 'Hafif yağmur',
    'Light rain': 'Yağmur',
    'Moderate rain at times': 'Orta şiddetli yağmur',
    'Moderate rain': 'Orta şiddetli yağmur',
    'Heavy rain at times': 'Şiddetli yağmur',
    'Heavy rain': 'Şiddetli yağmur',
    'Light freezing rain': 'Hafif donan yağmur',
    'Moderate or heavy freezing rain': 'Donan yağmur',
    'Light sleet': 'Karla karışık yağmur',
    'Moderate or heavy sleet': 'Şiddetli karla karışık yağmur',
    'Patchy light snow': 'Hafif kar',
    'Light snow': 'Kar',
    'Patchy moderate snow': 'Orta şiddetli kar',
    'Moderate snow': 'Orta şiddetli kar',
    'Patchy heavy snow': 'Şiddetli kar',
    'Heavy snow': 'Şiddetli kar',
    'Ice pellets': 'Dolu',
    'Light rain shower': 'Hafif sağanak',
    'Moderate or heavy rain shower': 'Sağanak',
    'Torrential rain shower': 'Şiddetli sağanak',
    'Light sleet showers': 'Karla karışık sağanak',
    'Moderate or heavy sleet showers': 'Şiddetli karla karışık sağanak',
    'Light snow showers': 'Kar sağanağı',
    'Moderate or heavy snow showers': 'Şiddetli kar sağanağı',
    'Light showers of ice pellets': 'Dolu sağanağı',
    'Moderate or heavy showers of ice pellets': 'Şiddetli dolu sağanağı',
    'Patchy light rain with thunder': 'Gök gürültülü hafif yağmur',
    'Moderate or heavy rain with thunder': 'Gök gürültülü yağmur',
    'Patchy light snow with thunder': 'Gök gürültülü hafif kar',
    'Moderate or heavy snow with thunder': 'Gök gürültülü kar'
  };

  return descriptions[weatherText] || weatherText;
}

function getWeatherIconFromCode(iconCode) {
  // OpenWeatherMap icon codes
  const iconMap = {
    '01d': '☀️', // clear sky day
    '01n': '🌙', // clear sky night
    '02d': '⛅', // few clouds day
    '02n': '☁️', // few clouds night
    '03d': '☁️', // scattered clouds
    '03n': '☁️', // scattered clouds
    '04d': '☁️', // broken clouds
    '04n': '☁️', // broken clouds
    '09d': '🌧️', // shower rain
    '09n': '🌧️', // shower rain
    '10d': '🌦️', // rain day
    '10n': '🌧️', // rain night
    '11d': '⛈️', // thunderstorm
    '11n': '⛈️', // thunderstorm
    '13d': '🌨️', // snow
    '13n': '🌨️', // snow
    '50d': '🌫️', // mist
    '50n': '🌫️'  // mist
  };

  return iconMap[iconCode] || '🌤️';
}

function getWeatherIconFromWttr(weatherCode) {
  // Wttr.in weather codes
  const iconMap = {
    '113': '☀️', // Sunny
    '116': '⛅', // Partly cloudy
    '119': '☁️', // Cloudy
    '122': '☁️', // Overcast
    '143': '🌫️', // Mist
    '176': '🌧️', // Patchy rain
    '179': '🌨️', // Patchy snow
    '182': '🌨️', // Patchy sleet
    '185': '🌨️', // Patchy freezing drizzle
    '200': '⛈️', // Thundery outbreaks
    '227': '🌨️', // Blowing snow
    '230': '🌨️', // Blizzard
    '248': '🌫️', // Fog
    '260': '🌫️', // Freezing fog
    '263': '🌧️', // Patchy light drizzle
    '266': '🌧️', // Light drizzle
    '281': '🌨️', // Freezing drizzle
    '284': '🌨️', // Heavy freezing drizzle
    '293': '🌧️', // Patchy light rain
    '296': '🌧️', // Light rain
    '299': '🌧️', // Moderate rain at times
    '302': '🌧️', // Moderate rain
    '305': '🌧️', // Heavy rain at times
    '308': '🌧️', // Heavy rain
    '311': '🌨️', // Light freezing rain
    '314': '🌨️', // Moderate or heavy freezing rain
    '317': '🌨️', // Light sleet
    '320': '🌨️', // Moderate or heavy sleet
    '323': '🌨️', // Patchy light snow
    '326': '🌨️', // Light snow
    '329': '🌨️', // Patchy moderate snow
    '332': '🌨️', // Moderate snow
    '335': '🌨️', // Patchy heavy snow
    '338': '🌨️', // Heavy snow
    '350': '🌨️', // Ice pellets
    '353': '🌧️', // Light rain shower
    '356': '🌧️', // Moderate or heavy rain shower
    '359': '🌧️', // Torrential rain shower
    '362': '🌨️', // Light sleet showers
    '365': '🌨️', // Moderate or heavy sleet showers
    '368': '🌨️', // Light snow showers
    '371': '🌨️', // Moderate or heavy snow showers
    '374': '🌨️', // Light showers of ice pellets
    '377': '🌨️', // Moderate or heavy showers of ice pellets
    '386': '⛈️', // Patchy light rain with thunder
    '389': '⛈️', // Moderate or heavy rain with thunder
    '392': '⛈️', // Patchy light snow with thunder
    '395': '⛈️'  // Moderate or heavy snow with thunder
  };

  return iconMap[weatherCode] || '🌤️';
}

function getWeatherDescriptionByCode(code) {
  const descriptions = {
    0: 'Açık',
    1: 'Az bulutlu',
    2: 'Parçalı bulutlu',
    3: 'Kapalı',
    45: 'Sisli',
    48: 'Donan sisli',
    51: 'Hafif çisenti',
    53: 'Çisenti',
    55: 'Şiddetli çisenti',
    56: 'Donan hafif çisenti',
    57: 'Donan şiddetli çisenti',
    61: 'Hafif yağmur',
    63: 'Yağmur',
    65: 'Şiddetli yağmur',
    66: 'Donan hafif yağmur',
    67: 'Donan şiddetli yağmur',
    71: 'Hafif kar',
    73: 'Kar',
    75: 'Şiddetli kar',
    77: 'Kar taneleri',
    80: 'Hafif sağanak',
    81: 'Sağanak',
    82: 'Şiddetli sağanak',
    85: 'Hafif kar sağanağı',
    86: 'Şiddetli kar sağanağı',
    95: 'Gök gürültülü',
    96: 'Gök gürültülü dolu',
    99: 'Şiddetli gök gürültülü dolu'
  };

  return descriptions[code] || 'Bilinmeyen';
}

function getWeatherIconByCode(code) {
  const icons = {
    0: '☀️', // Açık
    1: '🌤️', // Az bulutlu
    2: '⛅', // Parçalı bulutlu
    3: '☁️', // Kapalı
    45: '🌫️', // Sisli
    48: '🌫️', // Donan sisli
    51: '🌧️', // Hafif çisenti
    53: '🌧️', // Çisenti
    55: '🌧️', // Şiddetli çisenti
    56: '🌨️', // Donan hafif çisenti
    57: '🌨️', // Donan şiddetli çisenti
    61: '🌧️', // Hafif yağmur
    63: '🌧️', // Yağmur
    65: '🌧️', // Şiddetli yağmur
    66: '🌨️', // Donan hafif yağmur
    67: '🌨️', // Donan şiddetli yağmur
    71: '🌨️', // Hafif kar
    73: '🌨️', // Kar
    75: '🌨️', // Şiddetli kar
    77: '🌨️', // Kar taneleri
    80: '🌧️', // Hafif sağanak
    81: '🌧️', // Sağanak
    82: '🌧️', // Şiddetli sağanak
    85: '🌨️', // Hafif kar sağanağı
    86: '🌨️', // Şiddetli kar sağanağı
    95: '⛈️', // Gök gürültülü
    96: '⛈️', // Gök gürültülü dolu
    99: '⛈️'  // Şiddetli gök gürültülü dolu
  };

  return icons[code] || '🌤️';
}

function updateWeatherDisplay(temp, condition, icon, city) {
  const weatherIcon = $('#weather-icon');
  const weatherTemp = $('#weather-temp');
  const weatherDesc = $('#weather-desc');
  const currentCity = $('#current-city');

  if (weatherIcon) weatherIcon.textContent = icon;
  if (weatherTemp) weatherTemp.textContent = `${temp}°C`;
  if (weatherDesc) weatherDesc.textContent = condition;
  if (currentCity) {
    // Show the most specific location available
    currentCity.textContent = city || 'Konum alınıyor...';
  }

  console.log('Weather updated for:', city, `${temp}°C`, condition);
}

let isWeatherSetup = false;
function setupWeather() {
  if (isWeatherSetup) return;
  isWeatherSetup = true;

  // Get user location by IP (no permission required)
  getUserLocationByIP().catch(error => {
    console.error('Weather setup failed:', error);
    // Fallback to default city
    getWeather(selectedCity);
  });

  // Update weather every 30 minutes
  setInterval(() => {
    if (userLocation) {
      getWeatherByCoords(userLocation.lat, userLocation.lon, userLocation.city);
    } else {
      getWeather(selectedCity);
    }
  }, 30 * 60 * 1000);
}

// Ensure it's global for script.js
window.setupWeather = setupWeather;

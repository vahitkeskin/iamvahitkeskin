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

// Time and date
let userTimeZone = 'Europe/Istanbul';

function updateDateTime() {
  try {
    const now = new Date();
    const timeString = now.toLocaleTimeString('tr-TR', {
      timeZone: userTimeZone,
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
    const dateString = now.toLocaleDateString('tr-TR', {
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

// Theme switcher
function setupThemeSwitcher() {
  const themeSwitcher = $('#theme-switcher');
  const themeIcon = $('#theme-icon');
  const themeText = $('#theme-text');
  
  if (!themeSwitcher || !themeIcon || !themeText) {
    console.warn('Theme switcher elements not found');
    return;
  }
  
  let currentTheme = localStorage.getItem('theme') || 'auto';

  function updateTheme() {
    try {
      const root = document.documentElement;
      
      // Remove all theme classes first
      root.classList.remove('dark', 'light');
      
      if (currentTheme === 'dark') {
        root.classList.add('dark');
        themeIcon.className = 'fas fa-moon';
        themeText.textContent = 'Karanlık';
      } else if (currentTheme === 'light') {
        root.classList.add('light');
        themeIcon.className = 'fas fa-sun';
        themeText.textContent = 'Aydınlık';
      } else {
        // Auto mode - use system preference
        const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (isDark) {
          root.classList.add('dark');
          themeIcon.className = 'fas fa-adjust';
          themeText.textContent = 'Cihaz';
        } else {
          root.classList.add('light');
          themeIcon.className = 'fas fa-adjust';
          themeText.textContent = 'Cihaz';
        }
      }
    } catch (error) {
      console.error('Theme update error:', error);
    }
  }

  themeSwitcher?.addEventListener('click', () => {
    // Cycle through themes: auto -> light -> dark -> auto
    if (currentTheme === 'auto') {
      currentTheme = 'light';
    } else if (currentTheme === 'light') {
      currentTheme = 'dark';
    } else if (currentTheme === 'dark') {
      currentTheme = 'auto';
    }

    localStorage.setItem('theme', currentTheme);
    updateTheme();
  });

  // Listen for system theme changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    if (currentTheme === 'auto') {
      updateTheme();
    }
  });

  // Initialize theme
  updateTheme();
}

// Clean and Stable Visitor Counter
class VisitorCounter {
  constructor() {
    this.count = 0;
    this.isInitialized = false;
    this.sessionId = this.generateSessionId();
    this.element = null;
    this.retryCount = 0;
    this.maxRetries = 3;
  }

  generateSessionId() {
    return 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
  }

  async init() {
    if (this.isInitialized) return;
    
    this.element = $('#visitor-count');
    if (!this.element) {
      console.warn('Visitor count element not found');
      return;
    }

    // Show loading state
    this.element.textContent = 'Yükleniyor...';
    
    try {
      await this.updateCount();
      this.isInitialized = true;
    } catch (error) {
      console.error('Visitor counter initialization failed:', error);
      this.element.textContent = 'N/A';
    }
  }

  async updateCount() {
    // Check if this is a new session
    const existingSession = sessionStorage.getItem('visitorSessionId');
    const isNewSession = !existingSession;
    
    if (isNewSession) {
      sessionStorage.setItem('visitorSessionId', this.sessionId);
    }

    // Try multiple counter services
    const services = [
      {
        name: 'CountAPI',
        getUrl: 'https://api.countapi.xyz/get/vahitkeskin.com/visits',
        hitUrl: 'https://api.countapi.xyz/hit/vahitkeskin.com/visits'
      },
      {
        name: 'Alternative',
        getUrl: 'https://api.countapi.xyz/get/vahitkeskin-alt.com/visits',
        hitUrl: 'https://api.countapi.xyz/hit/vahitkeskin-alt.com/visits'
      }
    ];

    for (const service of services) {
      try {
        if (isNewSession) {
          // Increment counter for new sessions
          const response = await this.fetchWithTimeout(service.hitUrl, 8000);
          const data = await response.json();
          
          if (data && typeof data.value === 'number') {
            this.count = data.value;
            this.updateDisplay();
            return;
          }
        } else {
          // Just get current count for existing sessions
          const response = await this.fetchWithTimeout(service.getUrl, 8000);
          const data = await response.json();
          
          if (data && typeof data.value === 'number') {
            this.count = data.value;
            this.updateDisplay();
            return;
          }
        }
      } catch (error) {
        console.log(`${service.name} counter failed:`, error.message);
        continue;
      }
    }

    // Fallback to localStorage
    this.useLocalStorageFallback(isNewSession);
  }

  async fetchWithTimeout(url, timeout = 8000) {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);
    
    try {
      const response = await fetch(url, {
        signal: controller.signal,
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });
      
      clearTimeout(timeoutId);
      
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
      
      return response;
    } catch (error) {
      clearTimeout(timeoutId);
      throw error;
    }
  }

  useLocalStorageFallback(isNewSession) {
    try {
      let storedCount = localStorage.getItem('visitorCount');
      storedCount = storedCount ? parseInt(storedCount) : 0;
      
      if (isNewSession) {
        storedCount += 1;
        localStorage.setItem('visitorCount', storedCount.toString());
      }
      
      this.count = storedCount;
      this.updateDisplay();
    } catch (error) {
      console.error('LocalStorage fallback failed:', error);
      this.element.textContent = 'N/A';
    }
  }

  updateDisplay() {
    if (this.element) {
      this.element.textContent = this.count.toLocaleString('tr-TR');
    }
  }

  // Public method to refresh count
  async refresh() {
    if (this.isInitialized) {
      await this.updateCount();
    }
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
        } catch(_) {}

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
      const skillsGrid = $('#skillsGrid');
      if (!skillsGrid || !PROFILE || !PROFILE.skills) {
        console.warn('Skills grid or profile data not found');
      } else {
      
      const skillIconOf = (name) => {
        const n = (name || '').toLowerCase();
        if (n.includes('android')) return 'images/ic-android.png';
        if (n.includes('kotlin')) return 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg';
        if (n.includes('java')) return 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg';
        if (n.includes('compose')) return 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jetpackcompose/jetpackcompose-original.svg';
        if (n.includes('git')) return 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg';
        if (n.includes('jira')) return 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg';
        if (n.includes('json')) return 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/json/json-original.svg';
        return 'images/ic-android.png';
      };

      PROFILE?.skills?.forEach(s => {
        const card = el('div', {className:'skill-card'});
        
        const header = el('div', {className:'skill-header'});
        const iconWrap = el('div', {className:'skill-icon'});
        iconWrap.append(el('img', {src: skillIconOf(s.name), alt:s.name + ' icon', style:'width:22px;height:22px;object-fit:contain;border-radius:4px;'}));
        const title = el('div', {className:'skill-title'}, s.name);
        header.append(iconWrap, title);
        
        const body = el('div', {className:'skill-body'});
        if (s.context) {
          body.append(el('div', {className:'skill-context'}, s.context));
        }
        
        const meta = el('div', {className:'skill-meta'});
        if (s.experiences > 0) meta.append(el('span', {}, `${s.experiences} deneyim`));
        if (s.endorsements > 0) meta.append(el('span', {}, `${s.endorsements} onay`));
        if (meta.children.length) body.append(meta);

        if (s.companies && s.companies.length) {
          const chips = el('div', {className:'skill-chips'});
          s.companies.forEach(c => chips.append(el('span', {className:'skill-chip'}, c)));
          body.append(chips);
        }

        if (s.university) {
          body.append(el('div', {className:'muted', style:'font-size:.85rem;margin-top:.25rem;'}, s.university));
        }

        card.append(header, body);
        skillsGrid.append(card);

        // Initial animation state
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      });
      }
    } catch (error) {
      console.error('Skills rendering error:', error);
    }

    // Render projects
    try {
      const projectsGrid = $('#projectsGrid');
      if (!projectsGrid || !PROFILE || !PROFILE.projects) {
        console.warn('Projects grid or profile data not found');
      } else {
      
      PROFILE?.projects?.forEach(p => {
    const card = el('div',{className:'card', style:'will-change:transform;overflow:hidden;position:relative'});
    
    // Featured project styling
    if (p.featured) {
      card.style.border = '2px solid var(--brand)';
      card.style.boxShadow = '0 8px 25px rgba(99, 102, 241, 0.15)';
    }
    
    // Project header with company and period
    const header = el('div',{className:'card-h'});
    header.append(el('h3',{style:'margin:0;font-size:1.1rem;color:var(--text)'}, p.name));
    if (p.company) {
      header.append(el('div',{className:'muted', style:'font-size:0.9rem;margin-top:0.25rem;'}, p.company));
    }
    if (p.period) {
      header.append(el('div',{className:'muted', style:'font-size:0.8rem;margin-top:0.1rem;'}, p.period));
    }
    card.append(header);
    
    const body = el('div',{className:'card-b'});
    
    // Add project image if available
    if (p.image) {
      const imageContainer = el('div', {style:'margin-bottom:1rem;border-radius:8px;overflow:hidden;background:var(--surface2)'});
      const projectImage = el('img', {
        src: p.image,
        alt: p.name + ' screenshot',
        style:'width:100%;height:200px;object-fit:cover;border-radius:8px;'
      });
      imageContainer.append(projectImage);
      body.append(imageContainer);
    }
    
    body.append(el('p',{}, p.description));
    
    const tags = el('div',{style:'display:flex;gap:.5rem;flex-wrap:wrap;margin-top:.5rem'});
    p.tags.forEach(t => tags.append(el('span',{className:'badge'}, t)));
    body.append(tags);
    
    // Action buttons
    const actions = el('div',{style:'display:flex;gap:0.5rem;margin-top:.75rem;flex-wrap:wrap'});
    
    if (p.link && p.link !== '#') {
      actions.append(el('a',{href:p.link,className:'btn',style:'flex:1;justify-content:center;'}, 'Detay'));
    }
    
    // Add Google Play Store badge for featured projects
    if (p.featured && p.link && p.link.includes('play.google.com')) {
      actions.append(el('a',{
        href: p.link,
        style:'display:flex;align-items:center;gap:0.5rem;padding:0.5rem 1rem;background:linear-gradient(135deg, #01875f, #00d4aa);color:white;border-radius:8px;text-decoration:none;font-size:0.9rem;font-weight:500;transition:transform 0.2s ease;'
      }, '🎮 Play Store'));
    }
    
    if (actions.children.length > 0) {
      body.append(actions);
    }
    
    card.append(body); 
    projectsGrid.append(card);
    
    // Add hover effect for featured projects
    if (p.featured) {
      card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-4px) scale(1.02)';
        card.style.boxShadow = '0 12px 35px rgba(99, 102, 241, 0.25)';
      });
          card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
            card.style.boxShadow = '0 8px 25px rgba(99, 102, 241, 0.15)';
          });
        }
      });
      }
    } catch (error) {
      console.error('Projects rendering error:', error);
    }

    // Intersection Observer for animations
    try {
      const io = new IntersectionObserver((entries) => {
        entries.forEach(e => {
          if(e.isIntersecting) {
            e.target.classList.add('in');

            // Skills animation
            if(e.target.closest('#skills')) {
              e.target.querySelectorAll('.skill-card, .card').forEach((card, index) => {
                setTimeout(() => {
                  card.style.opacity = '1';
                  card.style.transform = 'translateY(0)';
                }, index * 100);
              });
            }

            io.unobserve(e.target);
          }
        });
      }, {threshold:0.01, rootMargin: '0px 0px -10% 0px'});

      const animEls = $$('[data-animate]');
      animEls.forEach(n => io.observe(n));

      // Fallback: mark in-view elements immediately
      animEls.forEach(n => {
        const rect = n.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          n.classList.add('in');
        }
      });
    } catch (error) {
      console.error('Intersection Observer setup error:', error);
      // Hard fallback if IO not supported
      $$('[data-animate]').forEach(n => n.classList.add('in'));
    }
  } catch (error) {
    console.error('Main initialization error:', error);
  }
});

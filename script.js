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
  
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    try {
      // Get form data
      const formData = new FormData(form);
      const name = formData.get('name') || $('#name')?.value;
      const email = formData.get('email') || $('#email')?.value;
      const subject = formData.get('subject') || $('#subject')?.value;
      const message = formData.get('message') || $('#message')?.value;
      
      // Basic validation
      if (!name || !email || !subject || !message) {
        alert('Lütfen tüm alanları doldurun.');
        return;
      }
      
      // Simulate form submission
      alert('Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağım.');
      form.reset();
    } catch (error) {
      console.error('Contact form error:', error);
      alert('Bir hata oluştu. Lütfen tekrar deneyin.');
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
        menuBtn.addEventListener('click', () => {
          const open = navDrawer.style.display === 'block';
          navDrawer.style.display = open ? 'none' : 'block';
          menuBtn.setAttribute('aria-expanded', String(!open));
        });
        
        navDrawer.querySelectorAll('a').forEach(a => {
          a.addEventListener('click', () => {
            navDrawer.style.display = 'none';
            menuBtn.setAttribute('aria-expanded', 'false');
          });
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
        return;
      }
      
      PROFILE.skills.forEach(s => {
    const card = el('div', {className:'card', style:'position:relative;overflow:hidden;border-radius:12px;box-shadow:var(--shadow);transition:transform 0.2s ease'});
    
    const body = el('div', {className:'card-b', style:'padding:1.5rem;display:flex;flex-direction:column;gap:0.75rem'});
    
    // Header with icon and name
    const header = el('div', {style:'display:flex;align-items:center;gap:0.75rem;margin-bottom:0.5rem'});
    const img = el('img', {src:'images/ic-android.png', alt:s.name+' icon', style:'width:32px;height:32px;border-radius:6px;object-fit:cover'});
    const title = el('h3', {style:'margin:0;font-size:1.1rem;font-weight:600;color:var(--text)'}, s.name);
    header.append(img, title);
    
    // Context info
    if (s.context) {
      const context = el('div', {className:'muted', style:'font-size:0.9rem;margin-bottom:0.25rem'}, s.context);
      body.append(context);
    }
    
    // Experience and endorsements
    const stats = el('div', {style:'display:flex;gap:1rem;font-size:0.85rem;color:var(--muted)'});
    if (s.experiences > 0) {
      stats.append(el('span', {}, `${s.experiences} deneyim`));
    }
    if (s.endorsements > 0) {
      stats.append(el('span', {}, `${s.endorsements} onay`));
    }
    body.append(stats);
    
    // Companies
    if (s.companies && s.companies.length > 0) {
      const companies = el('div', {style:'display:flex;flex-wrap:wrap;gap:0.25rem;margin-top:0.5rem'});
      s.companies.forEach(company => {
        companies.append(el('span', {className:'badge', style:'font-size:0.75rem;padding:0.25rem 0.5rem'}, company));
      });
      body.append(companies);
    }
    
    // University if exists
    if (s.university) {
      const uni = el('div', {className:'muted', style:'font-size:0.8rem;margin-top:0.25rem'}, s.university);
      body.append(uni);
    }
    
    card.append(body);
    skillsGrid.append(card);
    
    // Initial animation state
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    
    // Hover effect
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-2px)';
    });
        card.addEventListener('mouseleave', () => {
          card.style.transform = 'translateY(0)';
        });
      });
    } catch (error) {
      console.error('Skills rendering error:', error);
    }

    // Render projects
    try {
      const projectsGrid = $('#projectsGrid');
      if (!projectsGrid || !PROFILE || !PROFILE.projects) {
        console.warn('Projects grid or profile data not found');
        return;
      }
      
      PROFILE.projects.forEach(p => {
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
              e.target.querySelectorAll('.card').forEach((card, index) => {
                setTimeout(() => {
                  card.style.opacity = '1';
                  card.style.transform = 'translateY(0)';
                }, index * 100);
              });
            }

            io.unobserve(e.target);
          }
        });
      }, {threshold:.2});

      $$('[data-animate]').forEach(n => io.observe(n));
    } catch (error) {
      console.error('Intersection Observer setup error:', error);
    }
  } catch (error) {
    console.error('Main initialization error:', error);
  }
});

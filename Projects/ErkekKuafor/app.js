/**
 * KESKİN ERKEK KUAFÖRÜ & GROOMING LOUNGE
 * Core Application Logic & Interactive Experience
 */

(function () {
  'use strict';

  // --- STATE MANAGEMENT ---
  const state = {
    lang: 'tr',
    soundEnabled: false,
    selectedServices: ['hair-cut'],
    selectedBarber: 'any',
    selectedDate: null,
    selectedTime: null,
    currentStep: 1,
    bookingData: null
  };

  // --- TRANSLATION DICTIONARY (TR / EN) ---
  const translations = {
    tr: {
      'nav.about': 'Hakkımızda',
      'nav.services': 'Hizmetler',
      'nav.pricing': 'Fiyat Listesi',
      'nav.team': 'Usta Berberler',
      'nav.gallery': 'Galeri',
      'nav.reviews': 'Yorumlar',
      'nav.contact': 'İletişim',
      'cta.book': 'Randevu Al',
      'cta.book_now': 'Hemen Randevu Al',
      'cta.book_chair': 'Koltuğunuzu Ayırtın',
      'hero.badge': "İSTANBUL'UN EN SEÇKİN ERKEK KUAFÖRÜ & GROOMING SALONU",
      'hero.title1': 'Kusursuz Kesim,',
      'hero.title2': 'Benzersiz Duruş.',
      'hero.desc': 'Geleneksel berber ustalığını fütüristik lüks, modern saç-sakal tasarımı ve kişiye özel VIP bakım protokolleriyle yeniden tanımlıyoruz. Sizin için tasarlanmış birinci sınıf erkek kuaför deneyimi.',
      'hero.cta_book': 'Hemen Randevu Al',
      'hero.cta_explore': 'Hizmetleri Keşfet',
      'hero.cta_wa': 'Hızlı WhatsApp',
      'stats.exp': 'Yıllık Ustalık & Deneyim',
      'stats.clients': 'Memnun Beyefendi',
      'stats.rating': 'Google Puanı (500+ Yorum)',
      'stats.hygiene': 'Steril & VIP Protokolü',
      'about.tag': 'FÜTÜRİSTİK LÜKS & USTALIK',
      'about.title': 'Neden Keskin Erkek Kuaförü?',
      'about.desc': 'Sıradan bir berber ziyaretinden çok daha fazlası; stilinizi keskinleştiren, sizi dinlendiren ve özel hissettiren fütüristik bir konfor alanı.',
      'features.f1_title': 'Sıfır Bekleme & VIP Randevu',
      'features.f1_desc': 'Zamanınız değerlidir. Randevu saatinizde koltuğunuz hazır bekler, gereksiz sıralar tarih olur.',
      'features.f2_title': 'Yüz Analizi & Kişiye Özel Stil',
      'features.f2_desc': 'Kafa kemik yapınız, yüz hatlarınız ve sakal yönünüze göre bilimsel ve sanatsal kesim planlaması.',
      'features.f3_title': 'Hastane Standartlarında Hijyen',
      'features.f3_desc': 'Her misafir için tek kullanımlık havlu-pelerin, UV-C ve tıbbi otoklav sterilizasyonlu ekipmanlar.',
      'features.f4_title': 'Premium Lounge & İkram Barı',
      'features.f4_desc': 'Özel single-origin kahveler, soğuk detoks içecekleri ve dinlendirici akustik müzik eşliğinde konfor.',
      'about.artisan': 'Elit İşçilik',
      'about.story_tag': 'HİKAYEMİZ',
      'about.story_title': 'Erkek Bakımında Keskin Bir Dönüm Noktası',
      'about.story_p1': 'Keskin Erkek Kuaförü, berberliği yalnızca bir saç kısaltma rutini değil; bir erkeğin kendine gösterdiği saygının ve özgüveninin en somut ifadesi olarak görür.',
      'about.story_p2': 'Sektördeki 15 yılı aşkın ustalık geleneğimizi, fütüristik salon mimarimiz, ergonomik İtalyan koltuklarımız ve modern stil tekniklerimizle harmanladık. Kapımızdan girdiğiniz andan itibaren kendinizi lüks bir kulübün ayrıcalıklı bir üyesi gibi hissedeceksiniz.',
      'services.tag': 'AYRICALIKLI HİZMETLERİMİZ',
      'services.title': 'Hizmet & Fiyat Listesi',
      'services.desc': 'Şeffaf fiyatlandırma, üstün ustalık ve en kaliteli organik bakım ürünleriyle sunulan ayrıcalıklar.',
      'tabs.all': 'Tüm Hizmetler',
      'tabs.hair': 'Saç Tasarımı',
      'tabs.beard': 'Sakal & Ustura',
      'tabs.vip': 'VIP Bakım Paketleri',
      'tabs.care': 'Cilt & Spa',
      'badge.popular': 'Çok Tercih Edilen',
      'badge.vip': 'VIP ÖZEL',
      'badge.classic': 'Geleneksel Ustalık',
      'badge.best_value': 'En Avantajlı',
      'badge.spa': 'Medikal Spa',
      'badge.treatment': 'Yoğun Bakım',
      'badge.color': 'Doğal Renk',
      'badge.groom': 'DAMAT ÖZEL',
      'cta.add_service': 'Randevuya Ekle',
      'team.tag': 'SANATÇILARIMIZ',
      'team.title': 'Usta Berber Ekibimiz',
      'team.desc': 'Uluslararası akademilerde eğitim almış, makas ustalığını vizyoner trendlerle birleştiren uzman eller.',
      'team.b1_badge': 'Kurucu & Baş Berber',
      'team.b1_role': 'Master Stylist & Tasarım Direktörü',
      'team.b1_bio': '15 yılı aşkın ustalık geçmişiyle klasik İtalyan kesim ekolünü ve fütüristik erkek stillerini harmanlıyor.',
      'team.b2_badge': 'Kıdemli Berber',
      'team.b2_role': 'Skin Fade & Sakal Mimarı',
      'team.b2_bio': 'Sıfır geçişli kusursuz skin fade kesimleri ve milimetrik sakal hatlarındaki cerrahi hassasiyetiyle tanınır.',
      'team.b3_badge': 'Usta Berber',
      'team.b3_role': 'Geleneksel Ustura & Spa Uzmanı',
      'team.b3_bio': 'Sıcak havlu ritüelleri, kafa derisi masajları ve klasik berber mirasındaki ustalığıyla eşsiz rahatlama sunar.',
      'cta.book_with': 'Bu Ustadan Randevu Al',
      'gallery.tag': 'STİL KATALOĞUMUZ',
      'gallery.title': 'İmza Çalışmalarımız & Salonumuz',
      'gallery.desc': 'Her saç telinde hassasiyet, her dokunuşta fütüristik mükemmeliyet.',
      'gallery.filter_all': 'Tümü',
      'gallery.filter_hair': 'Kesim & Stil',
      'gallery.filter_salon': 'Salon Atmosferi',
      'gallery.filter_tools': 'Ekipman & Sanat',
      'reviews.tag': 'MÜŞTERİ DENEYİMLERİ',
      'reviews.title': 'Misafirlerimizin Yorumları',
      'contact.tag': 'BİZE ULAŞIN',
      'contact.title': 'İletişim & Lokasyon',
      'contact.desc': "İstanbul'un kalbinde, modern ve lüks atmosferimizde sizi ağırlamaktan onur duyarız.",
      'contact.addr_label': 'Adres',
      'contact.maps_link': 'Google Haritalarda Aç ↗',
      'contact.phone_label': 'Telefon & Rezervasyon',
      'contact.hours_label': 'Çalışma Saatleri'
    },
    en: {
      'nav.about': 'About Us',
      'nav.services': 'Services',
      'nav.pricing': 'Price List',
      'nav.team': 'Master Barbers',
      'nav.gallery': 'Gallery',
      'nav.reviews': 'Reviews',
      'nav.contact': 'Contact',
      'cta.book': 'Book Now',
      'cta.book_now': 'Book Appointment Now',
      'cta.book_chair': 'Reserve Your Chair',
      'hero.badge': "ISTANBUL'S PREMIER LUXURY BARBERSHOP & GROOMING LOUNGE",
      'hero.title1': 'Precision Cut,',
      'hero.title2': 'Unrivaled Presence.',
      'hero.desc': 'Redefining heritage barber craftsmanship with futuristic luxury, modern hair and beard sculpting, and bespoke VIP grooming protocols.',
      'hero.cta_book': 'Book Appointment',
      'hero.cta_explore': 'Explore Services',
      'hero.cta_wa': 'Quick WhatsApp',
      'stats.exp': 'Years of Mastery & Craft',
      'stats.clients': 'Satisfied Gentlemen',
      'stats.rating': 'Google Score (500+ Reviews)',
      'stats.hygiene': 'Sterile VIP Protocols',
      'about.tag': 'FUTURISTIC LUXURY & CRAFTSMANSHIP',
      'about.title': 'Why Keskin Barbershop?',
      'about.desc': 'Far more than a routine haircut; a futuristic sanctuary tailored to refine your personal style, unwind and feel distinguished.',
      'features.f1_title': 'Zero Wait & VIP Booking',
      'features.f1_desc': 'Your time is valuable. Your chair awaits ready at your exact booked time—no waiting in lines.',
      'features.f2_title': 'Cranial Analysis & Bespoke Style',
      'features.f2_desc': 'Scientific and aesthetic styling tailored specifically to your head shape, facial contours, and beard growth.',
      'features.f3_title': 'Hospital-Grade Sterilization',
      'features.f3_desc': 'Single-use towels and capes for every guest, UV-C and medical autoclave sterilised titanium tools.',
      'features.f4_title': 'Premium Lounge & Refreshment Bar',
      'features.f4_desc': 'Complimentary single-origin espresso, cold detox drinks, and curated acoustic lounge music.',
      'about.artisan': 'Elite Craftsmanship',
      'about.story_tag': 'OUR STORY',
      'about.story_title': 'A Paradigm Shift in Men’s Grooming',
      'about.story_p1': 'Keskin Barbershop regards grooming not merely as cutting hair, but as the clearest expression of a man’s self-respect and confidence.',
      'about.story_p2': 'We merged over 15 years of artisan barbering tradition with futuristic interior architecture, Italian ergonomic chairs, and high-fashion hair styling techniques.',
      'services.tag': 'OUR EXCLUSIVE SERVICES',
      'services.title': 'Services & Pricing',
      'services.desc': 'Transparent pricing, premier barber artistry, and organic luxury grooming products.',
      'tabs.all': 'All Services',
      'tabs.hair': 'Hair Styling',
      'tabs.beard': 'Beard & Razor',
      'tabs.vip': 'VIP Packages',
      'tabs.care': 'Skin & Spa',
      'badge.popular': 'Most Popular',
      'badge.vip': 'VIP EXCLUSIVE',
      'badge.classic': 'Heritage Mastery',
      'badge.best_value': 'Best Value',
      'badge.spa': 'Medical Spa',
      'badge.treatment': 'Intensive Care',
      'badge.color': 'Natural Camo',
      'badge.groom': 'GROOM SPECIAL',
      'cta.add_service': 'Select Service',
      'team.tag': 'OUR ARTISTS',
      'team.title': 'Master Barber Team',
      'team.desc': 'Trained in top European academies, blending razor-sharp scissors mastery with visionary trends.',
      'team.b1_badge': 'Founder & Master Stylist',
      'team.b1_role': 'Design Director & Master Barber',
      'team.b1_bio': 'Blending traditional Italian barber methods with avant-garde modern men’s grooming for over 15 years.',
      'team.b2_badge': 'Senior Barber',
      'team.b2_role': 'Skin Fade & Beard Architect',
      'team.b2_bio': 'Renowned for surgical precision in seamless skin fades and immaculate geometric beard contours.',
      'team.b3_badge': 'Master Barber',
      'team.b3_role': 'Traditional Shave & Spa Specialist',
      'team.b3_bio': 'Offering deep relaxation with hot towel rituals, scalp therapy, and classic straight razor perfection.',
      'cta.book_with': 'Book With This Master',
      'gallery.tag': 'STYLE CATALOGUE',
      'gallery.title': 'Signature Cuts & Lounge Atmosphere',
      'gallery.desc': 'Precision in every strand, futuristic perfection in every touch.',
      'gallery.filter_all': 'All',
      'gallery.filter_hair': 'Cuts & Styling',
      'gallery.filter_salon': 'Salon Ambience',
      'gallery.filter_tools': 'Equipment & Craft',
      'reviews.tag': 'CLIENT EXPERIENCES',
      'reviews.title': 'Guest Testimonials',
      'contact.tag': 'GET IN TOUCH',
      'contact.title': 'Contact & Location',
      'contact.desc': 'Located in the heart of Istanbul Nişantaşı, ready to welcome you into modern luxury.',
      'contact.addr_label': 'Address',
      'contact.maps_link': 'Open in Google Maps ↗',
      'contact.phone_label': 'Phone & Reservations',
      'contact.hours_label': 'Opening Hours'
    }
  };

  // --- AUDIO SYNTHESIZER (WEB AUDIO API) ---
  let audioCtx = null;
  function getAudioContext() {
    if (!audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        audioCtx = new AudioContext();
      }
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    return audioCtx;
  }

  function playScissorClick() {
    if (!state.soundEnabled) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(3200, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(800, ctx.currentTime + 0.04);

      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.04);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.05);
    } catch (e) {
      // Audio not supported or blocked
    }
  }

  // --- TOAST NOTIFICATIONS ---
  function showToast(message, icon = '✦') {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast-msg';
    toast.innerHTML = `<span style="color: var(--neon-green); font-size: 1.1rem;">${icon}</span> <span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
      toast.remove();
    }, 4000);
  }

  // --- LIVE SALON WORKING HOURS STATUS ---
  function updateSalonStatus() {
    const statusLabel = document.getElementById('status-label');
    const statusBox = document.getElementById('salon-status');
    if (!statusLabel || !statusBox) return;

    const now = new Date();
    const day = now.getDay(); // 0: Sun, 1: Mon, ..., 6: Sat
    const hour = now.getHours();
    const minute = now.getMinutes();
    const timeVal = hour + minute / 60;

    let isOpen = false;
    let closingTime = '21:00';

    if (day >= 1 && day <= 6) {
      // Mon - Sat: 09:00 - 21:00
      if (timeVal >= 9 && timeVal < 21) {
        isOpen = true;
        closingTime = '21:00';
      }
    } else if (day === 0) {
      // Sun: 10:00 - 19:00
      if (timeVal >= 10 && timeVal < 19) {
        isOpen = true;
        closingTime = '19:00';
      }
    }

    if (isOpen) {
      statusLabel.textContent = state.lang === 'tr' ? `Şu An Açık (${closingTime}'a kadar)` : `Open Now (until ${closingTime})`;
      statusBox.style.borderColor = 'rgba(0, 255, 135, 0.4)';
    } else {
      statusLabel.textContent = state.lang === 'tr' ? 'Şu An Kapalı (Yarın 09:00)' : 'Closed Now (Opens 09:00)';
      statusBox.style.borderColor = 'rgba(255, 255, 255, 0.2)';
      const dot = statusBox.querySelector('.pulse-dot');
      if (dot) dot.style.backgroundColor = '#f59e0b';
    }
  }

  // --- SCROLL PROGRESS & NAVBAR SCROLLED STATE ---
  function handleScroll() {
    const scrollBar = document.getElementById('scroll-progress');
    const header = document.getElementById('main-header');
    const topBtn = document.getElementById('back-to-top-btn');

    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;

    if (scrollBar) {
      scrollBar.style.width = `${progress}%`;
    }

    if (header) {
      if (window.scrollY > 40) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }

    if (topBtn) {
      if (window.scrollY > 400) {
        topBtn.classList.add('visible');
      } else {
        topBtn.classList.remove('visible');
      }
    }
  }

  // --- ANIMATE NUMERIC COUNTERS ON SCROLL ---
  function initCounters() {
    const counters = document.querySelectorAll('.counter');
    if (!('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = +entry.target.getAttribute('data-target');
          let count = 0;
          const step = Math.ceil(target / 40);
          const timer = setInterval(() => {
            count += step;
            if (count >= target) {
              entry.target.textContent = target;
              clearInterval(timer);
            } else {
              entry.target.textContent = count;
            }
          }, 30);
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(c => observer.observe(c));
  }

  // --- SERVICE TABS FILTERING ---
  function initServiceTabs() {
    const tabs = document.querySelectorAll('.service-tab-btn');
    const cards = document.querySelectorAll('.service-card');

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        playScissorClick();
        tabs.forEach(t => {
          t.classList.remove('active');
          t.setAttribute('aria-selected', 'false');
        });
        tab.classList.add('active');
        tab.setAttribute('aria-selected', 'true');

        const category = tab.getAttribute('data-category');

        cards.forEach(card => {
          const cardCat = card.getAttribute('data-category');
          if (category === 'all' || cardCat === category) {
            card.style.display = 'flex';
            card.style.animation = 'fadeInStep 0.4s ease';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  // --- GALLERY FILTERING & LIGHTBOX ---
  function initGallery() {
    const filterBtns = document.querySelectorAll('.gallery-filter-btn');
    const items = document.querySelectorAll('.gallery-item');
    const lightbox = document.getElementById('lightbox-modal');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCap = document.getElementById('lightbox-caption');
    const lightboxClose = document.getElementById('lightbox-close-btn');

    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        playScissorClick();
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');
        items.forEach(item => {
          const cat = item.getAttribute('data-cat');
          if (filter === 'all' || cat === filter) {
            item.style.display = 'block';
          } else {
            item.style.display = 'none';
          }
        });
      });
    });

    items.forEach(item => {
      item.addEventListener('click', () => {
        playScissorClick();
        const src = item.getAttribute('data-src');
        const cap = item.getAttribute('data-caption') || '';
        if (lightbox && lightboxImg) {
          lightboxImg.src = src;
          lightboxImg.alt = cap;
          if (lightboxCap) lightboxCap.textContent = cap;
          lightbox.showModal();
        }
      });
    });

    if (lightboxClose && lightbox) {
      lightboxClose.addEventListener('click', () => {
        lightbox.close();
      });
    }

    if (lightbox) {
      lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
          lightbox.close();
        }
      });
    }
  }

  // --- BOOKING MODAL & MULTI-STEP LOGIC ---
  const bookingModal = document.getElementById('booking-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const stepBackBtn = document.getElementById('step-back-btn');
  const stepNextBtn = document.getElementById('step-next-btn');
  const resetModalBtn = document.getElementById('reset-modal-btn');
  const datesCarousel = document.getElementById('dates-selector-carousel');
  const timeSlotsGrid = document.getElementById('time-slots-grid');

  function openBookingModal(preselectedServiceId = null, preselectedBarberId = null) {
    if (!bookingModal) return;
    playScissorClick();

    if (preselectedServiceId) {
      const chk = document.querySelector(`.booking-service-item input[value="${preselectedServiceId}"]`);
      if (chk) {
        chk.checked = true;
      }
    }

    if (preselectedBarberId) {
      const rad = document.querySelector(`.booking-barber-card input[value="${preselectedBarberId}"]`);
      if (rad) {
        rad.checked = true;
        state.selectedBarber = preselectedBarberId;
      }
    }

    updateBookingSummary();
    setModalStep(1);
    bookingModal.showModal();
  }

  function closeBookingModal() {
    if (bookingModal) {
      bookingModal.close();
    }
  }

  function setModalStep(step) {
    state.currentStep = step;

    // Update Step Indicator
    const stepNodes = document.querySelectorAll('.step-node');
    stepNodes.forEach(node => {
      const s = +node.getAttribute('data-step');
      if (s === step) {
        node.classList.add('active');
        node.classList.remove('completed');
      } else if (s < step) {
        node.classList.remove('active');
        node.classList.add('completed');
      } else {
        node.classList.remove('active', 'completed');
      }
    });

    // Toggle Content Views
    const formSteps = document.querySelectorAll('.form-step');
    formSteps.forEach(fs => fs.classList.remove('active'));

    const activeFs = document.getElementById(`step-${step}-content`);
    if (activeFs) activeFs.classList.add('active');

    // Footer buttons state
    const footer = document.getElementById('modal-nav-footer');
    if (step === 5) {
      if (footer) footer.style.display = 'none';
    } else {
      if (footer) footer.style.display = 'flex';
      if (stepBackBtn) stepBackBtn.disabled = (step === 1);
      if (stepNextBtn) {
        stepNextBtn.textContent = (step === 4) ? (state.lang === 'tr' ? 'Randevuyu Onayla ✓' : 'Confirm Booking ✓') : (state.lang === 'tr' ? 'İleri →' : 'Next →');
      }
    }
  }

  function updateBookingSummary() {
    const checkboxes = document.querySelectorAll('.booking-service-item input[type="checkbox"]:checked');
    let totalPrice = 0;
    const names = [];

    checkboxes.forEach(cb => {
      totalPrice += +cb.getAttribute('data-price');
      names.push(cb.getAttribute('data-name'));
    });

    const countElem = document.getElementById('selected-services-count');
    const totalElem = document.getElementById('selected-services-total');

    if (countElem) {
      countElem.textContent = state.lang === 'tr' ? `${checkboxes.length} Hizmet` : `${checkboxes.length} Services`;
    }
    if (totalElem) {
      totalElem.textContent = `₺ ${totalPrice.toLocaleString('tr-TR')}`;
    }

    // Also update review card values in step 4
    const revServices = document.getElementById('review-services');
    const revPrice = document.getElementById('review-price');
    if (revServices) {
      revServices.textContent = names.length > 0 ? names.join(', ') : (state.lang === 'tr' ? 'Hizmet Seçilmedi' : 'No service selected');
    }
    if (revPrice) {
      revPrice.textContent = `₺ ${totalPrice.toLocaleString('tr-TR')}`;
    }
  }

  // Populate Dates Carousel
  function populateDates() {
    if (!datesCarousel) return;
    datesCarousel.innerHTML = '';

    const today = new Date();
    const trDays = ['Paz', 'Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt'];
    const enDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const trMonths = ['Oca', 'Şub', 'Mar', 'Nis', 'May', 'Haz', 'Tem', 'Ağu', 'Eyl', 'Eki', 'Kas', 'Ara'];
    const enMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    for (let i = 0; i < 7; i++) {
      const d = new Date();
      d.setDate(today.getDate() + i);

      const dayName = state.lang === 'tr' ? trDays[d.getDay()] : enDays[d.getDay()];
      const monthName = state.lang === 'tr' ? trMonths[d.getMonth()] : enMonths[d.getMonth()];
      const dayNum = d.getDate();
      const dateString = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(dayNum).padStart(2, '0')}`;

      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = `date-slot-btn ${i === 0 ? 'selected' : ''}`;
      btn.setAttribute('data-date', dateString);
      btn.innerHTML = `
        <span class="date-day-name">${i === 0 ? (state.lang === 'tr' ? 'Bugün' : 'Today') : (i === 1 ? (state.lang === 'tr' ? 'Yarın' : 'Tmrw') : dayName)}</span>
        <span class="date-day-num">${dayNum}</span>
        <span class="date-month-name">${monthName}</span>
      `;

      btn.addEventListener('click', () => {
        playScissorClick();
        document.querySelectorAll('.date-slot-btn').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        state.selectedDate = dateString;
        updateReviewDateTime();
      });

      datesCarousel.appendChild(btn);
      if (i === 0) {
        state.selectedDate = dateString;
      }
    }
  }

  // Populate Time Slots
  function populateTimeSlots() {
    if (!timeSlotsGrid) return;
    timeSlotsGrid.innerHTML = '';

    const slots = [
      '10:00', '11:00', '12:00', '13:00',
      '14:00', '15:00', '16:00', '17:00',
      '18:00', '19:00', '20:00'
    ];

    slots.forEach((time, index) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      const isTaken = (index === 2 || index === 7); // Simulate couple booked slots
      btn.className = `time-slot-btn ${index === 0 ? 'selected' : ''} ${isTaken ? 'disabled' : ''}`;
      btn.textContent = time;

      if (!isTaken) {
        btn.addEventListener('click', () => {
          playScissorClick();
          document.querySelectorAll('.time-slot-btn').forEach(b => b.classList.remove('selected'));
          btn.classList.add('selected');
          state.selectedTime = time;
          updateReviewDateTime();
        });
      }

      timeSlotsGrid.appendChild(btn);
      if (index === 0) {
        state.selectedTime = time;
      }
    });

    updateReviewDateTime();
  }

  function updateReviewDateTime() {
    const rev = document.getElementById('review-datetime');
    if (rev) {
      rev.textContent = `${state.selectedDate || ''} • ${state.selectedTime || ''}`;
    }
  }

  function handleBookingSubmission() {
    const nameInput = document.getElementById('client-name');
    const phoneInput = document.getElementById('client-phone');
    const notesInput = document.getElementById('client-notes');
    const nameError = document.getElementById('name-error');
    const phoneError = document.getElementById('phone-error');

    let valid = true;
    if (!nameInput.value.trim()) {
      if (nameError) nameError.classList.add('visible');
      valid = false;
    } else {
      if (nameError) nameError.classList.remove('visible');
    }

    if (!phoneInput.value.trim() || phoneInput.value.trim().length < 10) {
      if (phoneError) phoneError.classList.add('visible');
      valid = false;
    } else {
      if (phoneError) phoneError.classList.remove('visible');
    }

    if (!valid) return;

    // Gather selected barber
    const barberRadio = document.querySelector('.booking-barber-card input[type="radio"]:checked');
    const barberNameElem = barberRadio ? barberRadio.closest('.booking-barber-card').querySelector('.barber-card-name') : null;
    const barberName = barberNameElem ? barberNameElem.textContent.trim() : 'İlk Müsait Usta';

    // Gather selected services
    const serviceItems = [];
    let totalPrice = 0;
    document.querySelectorAll('.booking-service-item input[type="checkbox"]:checked').forEach(cb => {
      serviceItems.push(cb.getAttribute('data-name'));
      totalPrice += +cb.getAttribute('data-price');
    });

    const bookingDetails = {
      name: nameInput.value.trim(),
      phone: phoneInput.value.trim(),
      notes: notesInput ? notesInput.value.trim() : '',
      barber: barberName,
      services: serviceItems,
      totalPrice: totalPrice,
      date: state.selectedDate,
      time: state.selectedTime,
      timestamp: new Date().toISOString()
    };

    state.bookingData = bookingDetails;

    // Save to LocalStorage
    try {
      const savedBookings = JSON.parse(localStorage.getItem('keskin_appointments') || '[]');
      savedBookings.push(bookingDetails);
      localStorage.setItem('keskin_appointments', JSON.stringify(savedBookings));
    } catch (e) {
      // Localstorage unavailable
    }

    // Build Confirmation Card UI
    const confirmedCard = document.getElementById('confirmed-details-card');
    if (confirmedCard) {
      confirmedCard.innerHTML = `
        <div class="review-row">
          <span class="review-label">Misafir:</span>
          <span class="review-val" style="color: #fff; font-weight: 700;">${bookingDetails.name}</span>
        </div>
        <div class="review-row">
          <span class="review-label">Telefon:</span>
          <span class="review-val">${bookingDetails.phone}</span>
        </div>
        <div class="review-row">
          <span class="review-label">Seçilen Usta:</span>
          <span class="review-val" style="color: var(--neon-green); font-weight: 600;">${bookingDetails.barber}</span>
        </div>
        <div class="review-row">
          <span class="review-label">Tarih & Saat:</span>
          <span class="review-val" style="color: #fff; font-weight: 700;">${bookingDetails.date} • ${bookingDetails.time}</span>
        </div>
        <div class="review-row">
          <span class="review-label">Hizmetler:</span>
          <span class="review-val">${bookingDetails.services.join(', ')}</span>
        </div>
        <div class="review-row total-highlight">
          <span class="review-label">Tutar:</span>
          <span class="review-val text-neon">₺ ${bookingDetails.totalPrice.toLocaleString('tr-TR')}</span>
        </div>
      `;
    }

    // Build WhatsApp Confirmation Link
    const waBtn = document.getElementById('wa-confirm-btn');
    if (waBtn) {
      const waText = encodeURIComponent(
        `Merhaba Keskin Erkek Kuaförü, online randevu talebim:\n\n` +
        `👤 Misafir: ${bookingDetails.name}\n` +
        `📞 Tel: ${bookingDetails.phone}\n` +
        `✂️ Hizmet(ler): ${bookingDetails.services.join(', ')}\n` +
        `💈 Usta: ${bookingDetails.barber}\n` +
        `📅 Tarih: ${bookingDetails.date}\n` +
        `⏰ Saat: ${bookingDetails.time}\n` +
        `💰 Toplam Tutar: ₺${bookingDetails.totalPrice.toLocaleString('tr-TR')}\n` +
        (bookingDetails.notes ? `📝 Not: ${bookingDetails.notes}\n` : '') +
        `\nKoltuğumu teyit etmek istiyorum. İyi çalışmalar!`
      );
      waBtn.href = `https://wa.me/905550123456?text=${waText}`;
    }

    setModalStep(5);
    showToast(state.lang === 'tr' ? 'Randevunuz oluşturuldu!' : 'Booking created successfully!', '✓');
  }

  // Next / Back Navigation in Modal
  if (stepNextBtn) {
    stepNextBtn.addEventListener('click', () => {
      playScissorClick();
      if (state.currentStep === 1) {
        const checkedServices = document.querySelectorAll('.booking-service-item input[type="checkbox"]:checked');
        if (checkedServices.length === 0) {
          showToast(state.lang === 'tr' ? 'Lütfen en az bir hizmet seçin.' : 'Please select at least one service.', '!');
          return;
        }
        setModalStep(2);
      } else if (state.currentStep === 2) {
        // Update review barber
        const barberRadio = document.querySelector('.booking-barber-card input[type="radio"]:checked');
        const barberName = barberRadio ? barberRadio.closest('.booking-barber-card').querySelector('.barber-card-name').textContent.trim() : 'İlk Müsait Usta';
        const revBarber = document.getElementById('review-barber');
        if (revBarber) revBarber.textContent = barberName;
        setModalStep(3);
      } else if (state.currentStep === 3) {
        setModalStep(4);
      } else if (state.currentStep === 4) {
        handleBookingSubmission();
      }
    });
  }

  if (stepBackBtn) {
    stepBackBtn.addEventListener('click', () => {
      playScissorClick();
      if (state.currentStep > 1) {
        setModalStep(state.currentStep - 1);
      }
    });
  }

  if (resetModalBtn) {
    resetModalBtn.addEventListener('click', () => {
      closeBookingModal();
      setModalStep(1);
    });
  }

  // --- TRIGGER ATTACHMENTS ---
  function initBookingTriggers() {
    // Open modal buttons
    document.querySelectorAll('.open-booking-trigger').forEach(btn => {
      btn.addEventListener('click', () => {
        openBookingModal();
      });
    });

    // Select specific service buttons from pricing cards
    document.querySelectorAll('.select-service-trigger').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const serviceId = btn.getAttribute('data-service-id');
        openBookingModal(serviceId, null);
      });
    });

    // Select specific barber buttons from team cards
    document.querySelectorAll('.select-barber-trigger').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const barberId = btn.getAttribute('data-barber-id');
        openBookingModal(null, barberId);
      });
    });

    // Modal close button
    if (modalCloseBtn) {
      modalCloseBtn.addEventListener('click', closeBookingModal);
    }

    // Light dismiss for dialog
    if (bookingModal) {
      bookingModal.addEventListener('click', (e) => {
        if (e.target === bookingModal) {
          closeBookingModal();
        }
      });
    }

    // Service checkbox changes
    document.querySelectorAll('.booking-service-item input[type="checkbox"]').forEach(cb => {
      cb.addEventListener('change', () => {
        playScissorClick();
        updateBookingSummary();
      });
    });
  }

  // --- LANGUAGE SWITCHER ---
  function initLanguageSwitcher() {
    const langBtn = document.getElementById('lang-toggle-btn');
    const langText = document.getElementById('current-lang');

    if (!langBtn) return;

    langBtn.addEventListener('click', () => {
      playScissorClick();
      state.lang = state.lang === 'tr' ? 'en' : 'tr';
      if (langText) langText.textContent = state.lang.toUpperCase();

      applyLanguage(state.lang);
      populateDates();
      updateSalonStatus();
      updateBookingSummary();
      showToast(state.lang === 'tr' ? 'Dil: Türkçe seçildi' : 'Language: English selected', '🌐');
    });
  }

  function applyLanguage(lang) {
    const dict = translations[lang] || translations.tr;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        el.textContent = dict[key];
      }
    });
    document.documentElement.lang = lang;
  }

  // --- SOUND TOGGLE ---
  function initSoundToggle() {
    const soundBtn = document.getElementById('sound-toggle-btn');
    if (!soundBtn) return;

    const iconOn = soundBtn.querySelector('.icon-sound-on');
    const iconOff = soundBtn.querySelector('.icon-sound-off');

    soundBtn.addEventListener('click', () => {
      state.soundEnabled = !state.soundEnabled;
      if (iconOn && iconOff) {
        if (state.soundEnabled) {
          iconOn.classList.remove('hidden');
          iconOff.classList.add('hidden');
          getAudioContext();
          playScissorClick();
          showToast(state.lang === 'tr' ? 'Ses efektleri açıldı' : 'Sound effects enabled', '🔊');
        } else {
          iconOn.classList.add('hidden');
          iconOff.classList.remove('hidden');
          showToast(state.lang === 'tr' ? 'Ses efektleri kapatıldı' : 'Sound effects muted', '🔇');
        }
      }
    });
  }

  // --- MOBILE DRAWER NAVIGATION ---
  function initMobileMenu() {
    const toggleBtn = document.getElementById('mobile-menu-toggle');
    const drawer = document.getElementById('mobile-nav');
    const links = document.querySelectorAll('.mobile-link');

    if (!toggleBtn || !drawer) return;

    toggleBtn.addEventListener('click', () => {
      playScissorClick();
      const isOpen = drawer.classList.contains('open');
      if (isOpen) {
        drawer.classList.remove('open');
        toggleBtn.classList.remove('open');
        toggleBtn.setAttribute('aria-expanded', 'false');
      } else {
        drawer.classList.add('open');
        toggleBtn.classList.add('open');
        toggleBtn.setAttribute('aria-expanded', 'true');
      }
    });

    links.forEach(link => {
      link.addEventListener('click', () => {
        drawer.classList.remove('open');
        toggleBtn.classList.remove('open');
        toggleBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // --- BACK TO TOP BUTTON ---
  function initBackToTop() {
    const topBtn = document.getElementById('back-to-top-btn');
    if (topBtn) {
      topBtn.addEventListener('click', () => {
        playScissorClick();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  }

  // --- COPYRIGHT YEAR ---
  function updateYear() {
    const yr = document.getElementById('current-year');
    if (yr) yr.textContent = new Date().getFullYear();
  }

  // --- INITIALIZATION ---
  document.addEventListener('DOMContentLoaded', () => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    updateSalonStatus();
    updateYear();
    initCounters();
    initServiceTabs();
    initGallery();
    initBookingTriggers();
    populateDates();
    populateTimeSlots();
    initLanguageSwitcher();
    initSoundToggle();
    initMobileMenu();
    initBackToTop();

    // Check status every minute
    setInterval(updateSalonStatus, 60000);
  });

})();

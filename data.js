// Data
const PROFILE = {
  skills: [
    { 
      name: 'Android', 
      experiences: 3,
      companies: ['Appcent', 'TEKROM Teknoloji AŞ.', 'İnnova Bilişim'],
      university: 'Bilecik Üniversitesi',
      context: 'Android Mobil Uygulama Geliştirme',
      endorsements: 14
    },
    { 
      name: 'Kotlin', 
      experiences: 3,
      companies: ['Appcent', 'TEKROM Teknoloji AŞ.', 'İnnova Bilişim'],
      university: 'Bilecik Üniversitesi',
      context: 'Android Mobil Uygulama Geliştirme',
      endorsements: 11
    },
    { 
      name: 'Jetpack Compose', 
      experiences: 1,
      companies: ['TEKROM Teknoloji AŞ.'],
      context: 'Android Developer',
      endorsements: 5
    },
    { 
      name: 'Java', 
      experiences: 3,
      companies: ['TEKROM Teknoloji AŞ.', 'Code And More'],
      university: 'Bilecik Üniversitesi',
      context: 'Android Mobil Uygulama Geliştirme',
      endorsements: 9
    },
    { 
      name: 'Git', 
      experiences: 0,
      context: 'LinkedIn Yetenek Değerlendirmesi geçti',
      endorsements: 4
    },
    { 
      name: 'JIRA', 
      experiences: 1,
      companies: ['TEKROM Teknoloji AŞ.'],
      context: 'Android Developer',
      endorsements: 5
    },
    { 
      name: 'OOP', 
      experiences: 0,
      context: 'LinkedIn Yetenek Değerlendirmesi geçti',
      endorsements: 2
    },
    { 
      name: 'JSON', 
      experiences: 2,
      companies: ['TEKROM Teknoloji AŞ.'],
      context: 'Android Mobil Uygulama Geliştirme',
      endorsements: 1
    },
    { 
      name: 'MVVM', 
      experiences: 0,
      context: 'LinkedIn Yetenek Değerlendirmesi geçti',
      endorsements: 1
    },
    { 
      name: 'Hilt', 
      experiences: 1,
      companies: ['TEKROM Teknoloji AŞ.'],
      context: 'Android Developer',
      endorsements: 1
    },
    { 
      name: 'Coroutines', 
      experiences: 1,
      companies: ['TEKROM Teknoloji AŞ.'],
      context: 'Android Developer',
      endorsements: 1
    },
    { 
      name: 'XML', 
      experiences: 0,
      context: 'LinkedIn Yetenek Değerlendirmesi geçti',
      endorsements: 1
    }
  ],
  projects: [
    { 
      name: 'Yolculuk Defterim', 
      description: 'Kişisel seyahat deneyimlerinizi kaydetmenizi sağlayan modern Android uygulaması. Google Play Store\'da yayınlanan ve kullanıcılar tarafından beğenilen mobil uygulama.', 
      tags: ['Android', 'Kotlin', 'Jetpack Compose', 'MVVM', 'Room Database', 'Google Play Store'], 
      link: 'https://play.google.com/store/apps/developer?id=vahitkeskin',
      company: 'Kişisel Proje',
      period: '2024 - Halen',
      image: 'images/bg.webp',
      featured: true
    },
    { 
      name: 'Türk Telekom Online İşlemler', 
      description: 'Türkiye\'nin en büyük projelerinden biri ve aynı zamanda en aktif kullanıcı tabanına sahip proje. Google Play Store\'da yayınlanan kurumsal uygulama.', 
      tags: ['Kotlin', 'Hilt', 'MVVM', 'OOP', 'Design Patterns', 'Delegation'], 
      link: 'https://play.google.com/store/apps/details?id=com.turktelekom.onlineislemler',
      company: 'İnnova Bilişim',
      period: 'Nis 2023 - Halen',
      image: 'images/turktelecom_bg.jpeg'
    },
    { 
      name: 'MetroOnline', 
      description: 'Metro online uygulamasında aktif olarak çalışıyorum. Kullanıcı deneyimi odaklı mobil uygulama geliştirme.', 
      tags: ['Android', 'Kotlin', 'JIRA', 'Trello', 'Product Requirements'], 
      link: '#',
      company: 'Appcent',
      period: 'Kas 2022 - Halen',
      image: 'images/metromarket_bg.svg'
    },
    { 
      name: 'Monitorink', 
      description: 'Monitoring ve takip sistemi için geliştirilen Android uygulaması. Kurumsal çözümler ve performans optimizasyonu.', 
      tags: ['Android', 'Kotlin', 'Mobile Applications', 'Product Requirements'], 
      link: '#',
      company: 'TEKROM Teknoloji AŞ.',
      period: 'Eyl 2022 - Halen'
    },
    { 
      name: 'Nildesk', 
      description: 'Masaüstü ve mobil entegrasyonu ile çalışan kurumsal uygulama. Çok platformlu geliştirme deneyimi.', 
      tags: ['Android', 'Kotlin', 'Cross-platform', 'Product Requirements'], 
      link: '#',
      company: 'TEKROM Teknoloji AŞ.',
      period: 'Eyl 2022 - Halen'
    },
    { 
      name: 'Tahsildar', 
      description: 'Tahsilat ve ödeme sistemleri için geliştirilen mobil uygulama. Güvenli ödeme entegrasyonları.', 
      tags: ['Android', 'Kotlin', 'JIRA', 'Payment Systems', 'Security'], 
      link: '#',
      company: 'TEKROM Teknoloji AŞ.',
      period: 'Tem 2022 - Halen'
    },
    { 
      name: 'T-Soft Mobile - United Apps', 
      description: 'T-Soft e-ticaret platformu için geliştirilen mobil uygulama. E-ticaret ve alışveriş deneyimi.', 
      tags: ['Android', 'Kotlin', 'Java', 'JSON', 'Fastlane', 'E-commerce'], 
      link: '#',
      company: 'TEKROM Teknoloji AŞ.',
      period: 'Mar 2022 - Halen',
      image: 'images/gizlimoda_bg.png'
    },
    { 
      name: 'T-Soft Mobile - Shopping', 
      description: 'T-Soft alışveriş uygulaması. E-ticaret platformu için özel olarak tasarlanmış mobil deneyim.', 
      tags: ['Android', 'Kotlin', 'Java', 'JSON', 'Fastlane', 'Shopping'], 
      link: '#',
      company: 'TEKROM Teknoloji AŞ.',
      period: 'Haz 2021 - Eyl 2022',
      image: 'images/tsoft_bg.svg'
    },
    { 
      name: 'MilangazApp', 
      description: 'Code And More firmasında staj kapsamında geliştirilen Milangaz Android uygulaması. İlk profesyonel deneyim.', 
      tags: ['Android', 'Java', 'JSON', 'Internship', 'Product Requirements'], 
      link: '#',
      company: 'Code And More',
      period: 'Tem 2020 - Eyl 2020',
      image: 'images/milangaz_bg.jpg'
    },
    { 
      name: 'Android ve TensorFlow ile Görüntü Sınıflandırması', 
      description: 'Bilgisayar Mühendisliği bitirme projesi. Android mobil cihazlarda TensorFlow ve Keras kullanarak görüntü sınıflandırma sistemi.', 
      tags: ['Android', 'Java', 'TensorFlow', 'Keras', 'Machine Learning', 'Graduation Project'], 
      link: '#',
      company: 'Bilecik Üniversitesi',
      period: 'Şub 2020 - Haz 2020',
      image: 'images/tensorflowlite_bg.webp'
    },
    { 
      name: 'Android Kan Bağış Uygulaması', 
      description: 'Java dili ve Firebase veritabanı kullanılarak geliştirilen kan bağış uygulaması. Sosyal sorumluluk projesi.', 
      tags: ['Android', 'Java', 'Firebase', 'JSON', 'Social Responsibility'], 
      link: '#',
      image: 'images/kanbagis_bg.jpg',
      company: 'Bilecik Üniversitesi',
      period: 'Eyl 2019 - Oca 2020'
    }
  ]
};

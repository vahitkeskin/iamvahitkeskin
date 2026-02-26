// Data
window.PROFILE = {
  skills: [
    {
      name: 'Android',
      experiences: 5,
      companies: ['Türk Telekom', 'Metro Market / Appcent', 'TEKROM Teknoloji AŞ.', 'İnnova Bilişim'],
      university: 'Bilecik Şeyh Edebali Üniversitesi',
      context: 'Senior Android Mobil Uygulama Geliştirme',
      endorsements: 20
    },
    {
      name: 'Kotlin',
      experiences: 5,
      companies: ['Türk Telekom', 'Metro Market / Appcent', 'TEKROM Teknoloji AŞ.', 'İnnova Bilişim'],
      university: 'Bilecik Şeyh Edebali Üniversitesi',
      context: 'Senior Android Mobil Uygulama Geliştirme',
      endorsements: 18
    },
    {
      name: 'Jetpack Compose',
      experiences: 2,
      companies: ['Türk Telekom', 'Metro Market / Appcent', 'TEKROM Teknoloji AŞ.'],
      context: 'Senior Android Developer (Expert)',
      endorsements: 12
    },
    {
      name: 'Java',
      experiences: 5,
      companies: ['TEKROM Teknoloji AŞ.', 'Code And More'],
      university: 'Bilecik Şeyh Edebali Üniversitesi',
      context: 'Android Mobil Uygulama Geliştirme',
      endorsements: 11
    },
    {
      name: 'Git',
      experiences: 5,
      context: 'Professional Version Control & GitHub Actions',
      endorsements: 10
    },
    {
      name: 'JIRA',
      experiences: 4,
      companies: ['Türk Telekom', 'Metro Market / Appcent', 'TEKROM Teknoloji AŞ.'],
      context: 'Agile & Scrum Methodologies',
      endorsements: 9
    },
    {
      name: 'Clean Architecture',
      experiences: 4,
      context: 'Scalable and maintainable code design',
      endorsements: 15
    },
    {
      name: 'MVI/MVVM',
      experiences: 4,
      context: 'Modern architecture patterns',
      endorsements: 14
    },
    {
      name: 'Hilt',
      experiences: 3,
      companies: ['Türk Telekom', 'Metro Market / Appcent'],
      context: 'Dependency Injection',
      endorsements: 8
    },
    {
      name: 'Coroutines',
      experiences: 3,
      companies: ['Türk Telekom', 'Metro Market / Appcent'],
      context: 'Asynchronous Programming',
      endorsements: 10
    },
    {
      name: 'Flow',
      experiences: 2,
      companies: ['Türk Telekom', 'Metro Market / Appcent'],
      context: 'Reactive Programming',
      endorsements: 9
    }
  ],
  projects: [
    {
      name: 'Equatix',
      description: 'Matematiksel düşünme yeteneğinizi zorlayan, modern tasarımlı matrix bulmaca oyunu. Şık arayüzü ve akıcı animasyonları ile eşsiz bir deneyim sunar.',
      description_en: 'A modern design matrix puzzle game that challenges your mathematical thinking. Offers a unique experience with its sleek interface and fluid animations.',
      description_de: 'Ein Matrix-Puzzlespiel mit modernem Design, das Ihr mathematisches Denken herausfordert. Bietet ein einzigartiges Erlebnis mit seiner eleganten Benutzeroberfläche und flüssigen Animationen.',
      tags: ['Android', 'Kotlin', 'Jetpack Compose', 'Game Development', 'Animations', 'Material 3'],
      link: 'https://play.google.com/store/apps/details?id=com.vahitkeskin.equatix',
      company: 'Kişisel Proje',
      period: '2025 - Halen',
      image: 'images/equatix_app_icon.png',
      featured: true
    },
    {
      name: 'Yolculuk Defterim',
      description: 'Seyahat anılarınızı, rotalarınızı ve deneyimlerinizi kaydedebileceğiniz modern bir gezi günlüğü uygulaması.',
      description_en: 'A modern travel journal app where you can record your travel memories, routes, and experiences.',
      tags: ['Android', 'Kotlin', 'Jetpack Compose', 'Google Maps API', 'Room DB'],
      link: 'https://play.google.com/store/apps/details?id=com.vahitkeskin.yolculukdefterim',
      company: 'Kişisel Proje',
      period: '2024 - Halen',
      image: 'images/bg.webp',
      featured: true
    },
    {
      name: 'Türk Telekom Online İşlemler',
      description: 'Türkiye\'nin en büyük projelerinden biri ve aynı zamanda en aktif kullanıcı tabanına sahip proje. Google Play Store\'da yayınlanan kurumsal uygulama.',
      tags: ['Kotlin', 'Hilt', 'MVVM', 'MVI', 'Clean Architecture', 'SOLID'],
      link: 'https://play.google.com/store/apps/details?id=com.turktelekom.onlineislemler',
      company: 'Türk Telekom',
      period: 'Nis 2023 - Oca 2026',
      image: 'images/turktelekom_bg.jpeg'
    },
    {
      name: 'MetroOnline',
      description: 'Metro online uygulamasında performans optimizasyonu ve UI/UX geliştirmeleri.',
      tags: ['Android', 'Kotlin', 'Performance', 'UI/UX'],
      link: '#',
      company: 'Appcent',
      period: 'Kas 2022 - Nis 2023',
      image: 'images/metromarket_bg.svg'
    },
    {
      name: 'T-Soft Mobile - United Apps',
      description: 'T-Soft e-ticaret platformu için geliştirilen mobil uygulama. E-ticaret ve alışveriş deneyimi.',
      tags: ['Android', 'Kotlin', 'Java', 'JSON', 'Fastlane', 'E-commerce'],
      link: '#',
      company: 'TEKROM Teknoloji AŞ.',
      period: 'Haz 2021 - Kas 2022',
      image: 'images/gizlimoda_bg.png'
    },
    {
      name: 'MilangazApp',
      description: 'Code And More firmasında staj kapsamında geliştirilen Milangaz Android uygulaması. İlk profesyonel deneyim.',
      tags: ['Android', 'Java', 'JSON', 'Internship'],
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
      company: 'Bilecik Şeyh Edebali Üniversitesi',
      period: 'Şub 2020 - Haz 2020',
      image: 'images/tensorflowlite_bg.webp'
    },
    {
      name: 'Android Kan Bağış Uygulaması',
      description: 'Java dili ve Firebase veritabanı kullanılarak geliştirilen kan bağış uygulaması. Sosyal sorumluluk projesi.',
      tags: ['Android', 'Java', 'Firebase', 'Social Responsibility'],
      link: '#',
      image: 'images/kanbagis_bg.jpg',
      company: 'Bilecik Şeyh Edebali Üniversitesi',
      period: 'Eyl 2019 - Oca 2020'
    }
  ]
};

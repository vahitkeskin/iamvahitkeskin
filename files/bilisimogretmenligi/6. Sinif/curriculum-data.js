/**
 * 6. Sınıf Bilişim Teknolojileri - Yıllık Müfredat Veri Birleştirici (41 Hafta)
 * 2026/2027 Eğitim-Öğretim Yılı MEB Bilişim Teknolojileri Dersi
 * Öğretmen: Vahit Keskin
 */

const CURRICULUM_DATA = [
  ...CURRICULUM_TERM_1_PART1,
  ...CURRICULUM_TERM_1_PART2,
  ...CURRICULUM_TERM_2_PART1,
  ...CURRICULUM_TERM_2_PART2
];

if (typeof WEEKLY_TESTS !== 'undefined') {
  CURRICULUM_DATA.forEach(w => {
    if (WEEKLY_TESTS[w.week]) {
      w.test = WEEKLY_TESTS[w.week];
    }
  });
}

console.log("6. Sınıf Bilişim Teknolojileri Müfredat Verisi Yüklendi. Toplam Hafta Sayısı:", CURRICULUM_DATA.length);


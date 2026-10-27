/**
 * MEB 10. Sınıf Bilgisayar Bilimi (Kur 2) - Yıllık Müfredat Veri Birleştirici (41 Hafta)
 * 2026/2027 Eğitim-Öğretim Yılı MEB Bilişim Teknolojileri & Bilgisayar Bilimi Dersi
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

console.log("10. Sınıf Bilgisayar Bilimi (Kur 2) Müfredat Verisi Başarıyla Yüklendi. Toplam Hafta Sayısı:", CURRICULUM_DATA.length);

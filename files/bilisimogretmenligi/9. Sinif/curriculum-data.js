/**
 * MEB 9. Sınıf Bilgisayar Bilimi (Kur 1) - Yıllık Müfredat Veri Birleştirici (41 Hafta)
 * 2026/2027 Eğitim-Öğretim Yılı MEB Bilişim Teknolojileri & Bilgisayar Bilimi Dersi
 * Öğretmen: Vahit Keskin
 */

const CURRICULUM_DATA = [
  ...CURRICULUM_TERM_1_PART1,
  ...CURRICULUM_TERM_1_PART2,
  ...CURRICULUM_TERM_2_PART1,
  ...CURRICULUM_TERM_2_PART2
];

console.log("9. Sınıf Bilgisayar Bilimi (Kur 1) Müfredat Verisi Başarıyla Yüklendi. Toplam Hafta Sayısı:", CURRICULUM_DATA.length);

/**
 * MEB 4. Sınıf Bilişim Teknolojileri ve Yazılım - Yıllık Müfredat Veri Birleştirici (41 Hafta)
 * 2026/2027 Eğitim-Öğretim Yılı MEB Bilişim Teknolojileri & Bilgisayar Bilimi Dersi
 * Öğretmen: Vahit Keskin
 */

const CURRICULUM_DATA = [
  ...CURRICULUM_TERM_1_PART1,
  ...CURRICULUM_TERM_1_PART2,
  ...CURRICULUM_TERM_2_PART1,
  ...CURRICULUM_TERM_2_PART2
];

if (typeof window !== 'undefined') {
  window.CURRICULUM_DATA = CURRICULUM_DATA;
  window.CURRICULUM_DATA_4 = CURRICULUM_DATA;
}
if (typeof globalThis !== 'undefined') {
  globalThis.CURRICULUM_DATA = CURRICULUM_DATA;
  globalThis.CURRICULUM_DATA_4 = CURRICULUM_DATA;
}

console.log("4. Sınıf Bilişim Teknolojileri ve Yazılım Müfredat Verisi Başarıyla Yüklendi. Toplam Hafta Sayısı:", CURRICULUM_DATA.length);


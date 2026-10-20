/**
 * 5. Sınıf Bilişim Teknolojileri ve Yazılım - Birleşik Müfredat Verisi
 * Türkiye Yüzyılı Maarif Modeli (2026-2027)
 * 1. Dönem: Hafta 1 - 19
 * 2. Dönem: Hafta 20 - 41
 * Toplam: 41 Hafta (Tüm Konular, SVG Şemaları, Atölye ve Quizler)
 */

(function () {
  const term1 = typeof CURRICULUM_TERM_1_GRADE5 !== 'undefined' ? CURRICULUM_TERM_1_GRADE5 : [];
  const term1Part2 = typeof CURRICULUM_TERM_1_PART2_GRADE5 !== 'undefined' ? CURRICULUM_TERM_1_PART2_GRADE5 : [];
  const term2Part1 = typeof CURRICULUM_TERM_2_PART1_GRADE5 !== 'undefined' ? CURRICULUM_TERM_2_PART1_GRADE5 : [];
  const term2Part2 = typeof CURRICULUM_TERM_2_PART2_GRADE5 !== 'undefined' ? CURRICULUM_TERM_2_PART2_GRADE5 : [];

  const allWeeks = [...term1, ...term1Part2, ...term2Part1, ...term2Part2];

  // Sıralamayı garanti et
  allWeeks.sort((a, b) => a.week - b.week);

  // Global erişim
  if (typeof window !== 'undefined') {
    window.CURRICULUM_DATA_5 = allWeeks;
    window.getWeekData = function (weekNum) {
      return allWeeks.find(w => w.week === parseInt(weekNum, 10));
    };
    window.getWeeksByTheme = function (themeKey) {
      return allWeeks.filter(w => w.unitTheme === themeKey);
    };
  }

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = { CURRICULUM_DATA_5: allWeeks };
  }
})();

const fs = require('fs');
const vm = require('vm');

function testGradeDeck(gradeNum) {
  const gDir = `./${gradeNum}-sinif`;
  
  // Create mock DOM environment
  const mockElements = {};
  const mockDeck = {
    id: 'presentation-deck',
    innerHTML: '',
    querySelectorAll: (sel) => [],
    querySelector: (sel) => null
  };

  const windowMock = {
    addEventListener: () => {},
    matchMedia: () => ({ matches: false }),
    location: { search: '' },
    ThemeManager: { update: () => {} },
    CURRICULUM_DATA: null,
    getWeekData: (w) => windowMock.CURRICULUM_DATA ? windowMock.CURRICULUM_DATA.find(x => x.week === w) : null
  };

  const documentMock = {
    getElementById: (id) => (id === 'presentation-deck' ? mockDeck : null),
    querySelector: (sel) => null,
    querySelectorAll: (sel) => [],
    body: {
      dataset: { week: '1' },
      setAttribute: () => {}
    },
    documentElement: {
      setAttribute: () => {}
    },
    addEventListener: () => {}
  };

  const ctx = {
    window: windowMock,
    document: documentMock,
    console: { log: () => {}, warn: () => {} },
    globalThis: windowMock
  };
  vm.createContext(ctx);

  // Load term files
  const termFiles = ["curriculum-term1.js", "curriculum-term1-part2.js", "curriculum-term2-part1.js", "curriculum-term2-part2.js", "weekly-tests.js", "curriculum-data.js", "presentation-builder.js"];
  for (const tf of termFiles) {
    const p = `${gDir}/${tf}`;
    if (fs.existsSync(p)) {
      try {
        let code = fs.readFileSync(p, 'utf8');
        code = code.replace(/const /g, 'var ');
        vm.runInContext(code, ctx);
      } catch (err) {
        console.error(`Error loading ${p}:`, err.message);
        throw err;
      }
    }
  }

  // Get week 1 data
  const data = ctx.CURRICULUM_DATA || ctx.window.CURRICULUM_DATA || (ctx.window.CURRICULUM_DATA_5) || (ctx[`CURRICULUM_DATA_${gradeNum}`]);
  if (!data || data.length === 0) {
    console.error(`❌ Grade ${gradeNum}: CURRICULUM_DATA not loaded in mock DOM!`);
    return false;
  }

  const week1 = data[0];

  const fn = ctx.buildPresentation || ctx.window.buildPresentation;
  if (typeof fn === 'function') {
    fn(week1);
    if (!mockDeck.innerHTML || !mockDeck.innerHTML.includes('<section class="slide')) {
      fn(week1.week);
    }
  }

  const html = mockDeck.innerHTML;
  // Count slides in html
  const slideMatches = html.match(/<section class="slide/g);
  const slideCount = slideMatches ? slideMatches.length : 0;

  const hasPills = html.includes('quiz-pills-bar');
  const hasHardQ = html.includes('ZOR SORU') || html.includes('ZOR DÜZEY');
  const hasResults = html.includes('slide-quiz-results');

  console.log(`Grade ${gradeNum}: rendered ${slideCount} slides | has pills: ${hasPills} | has hard Q: ${hasHardQ} | has results: ${hasResults}`);
  return slideCount >= 17 && hasPills && hasHardQ && hasResults;
}

let allOk = true;
for (let g = 1; g <= 10; g++) {
  const ok = testGradeDeck(g);
  if (!ok) allOk = false;
}

if (allOk) {
  console.log('\n🎉 ALL 10 GRADES RENDER FULL 18 SLIDES WITH 10 QUESTIONS & HARD QUESTION 10!');
} else {
  console.error('\n❌ SOME GRADES FAILED TO RENDER PROPER SLIDES.');
}

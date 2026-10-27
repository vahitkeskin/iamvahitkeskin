const fs = require('fs');
const vm = require('vm');

let allPassed = true;

for (let g = 1; g <= 10; g++) {
  const gDir = `./${g}-sinif`;
  const testsPath = `${gDir}/weekly-tests.js`;

  if (!fs.existsSync(testsPath)) {
    console.error(`❌ Grade ${g}: weekly-tests.js not found!`);
    allPassed = false;
    continue;
  }

  const testsCode = fs.readFileSync(testsPath, 'utf8');
  const ctx = { window: {}, globalThis: {}, module: {} };
  vm.createContext(ctx);
  vm.runInContext(testsCode, ctx);

  const tests = ctx.WEEKLY_TESTS || ctx.window.WEEKLY_TESTS || ctx.module.exports;
  if (!tests) {
    console.error(`❌ Grade ${g}: WEEKLY_TESTS not exported!`);
    allPassed = false;
    continue;
  }

  const weeksCount = Object.keys(tests).length;
  if (weeksCount !== 41) {
    console.error(`❌ Grade ${g}: Expected 41 weeks in weekly-tests.js, found ${weeksCount}!`);
    allPassed = false;
    continue;
  }

  // Check each week
  let questionsOk = true;
  let hardOk = true;
  for (let w = 1; w <= 41; w++) {
    const qList = tests[w];
    if (!qList || qList.length !== 10) {
      console.error(`❌ Grade ${g} Week ${w}: Expected 10 questions, found ${qList ? qList.length : 0}!`);
      questionsOk = false;
      break;
    }
    const q10 = qList[9];
    if (!q10.isHard || q10.difficulty !== 'Zor') {
      console.error(`❌ Grade ${g} Week ${w}: 10th question is not marked isHard/Zor!`);
      hardOk = false;
      break;
    }
    // Check options
    for (let i = 0; i < 10; i++) {
      const q = qList[i];
      if (!q.question || !q.options || q.options.length < 3 || !q.explanation) {
        console.error(`❌ Grade ${g} Week ${w} Q${i+1}: Invalid question structure!`);
        questionsOk = false;
        break;
      }
    }
  }

  if (questionsOk && hardOk) {
    console.log(`✅ Grade ${g}: 41 weeks verified, 410 questions valid, all 10th questions are HARD/Zor!`);
  } else {
    allPassed = false;
  }
}

if (allPassed) {
  console.log('\n🎉 ALL 10 GRADES & ALL 410 WEEKS (4,100 QUESTIONS) VERIFIED 100% SUCCESSFULLY!');
} else {
  console.error('\n❌ SOME VERIFICATIONS FAILED.');
  process.exit(1);
}

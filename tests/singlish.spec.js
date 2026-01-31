import { test, expect } from '@playwright/test';


test.use({ browserName: 'chromium' });

test('Pos_Fun_0001 - Convert short greeting question', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const singlishInput = page.getByPlaceholder('Input Your Singlish Text Here.').first();
  const sinhalaOutput = page.locator('div.whitespace-pre-wrap').first();

  await page.waitForLoadState('networkidle');
  await page.waitForSelector('[placeholder="Input Your Singlish Text Here."]', { timeout: 10000 });

  try {
    await singlishInput.fill('oyaata suba dhavasak');
  } catch (err) {
    await singlishInput.click({ force: true });
    await page.keyboard.type('oyaata suba dhavasak', { delay: 50 });
  }


  await expect(sinhalaOutput).toContainText('සුබ', { timeout: 20000 });
});


test('Pos_Fun_0002 -Simple statement', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const singlishInput = page.getByPlaceholder('Input Your Singlish Text Here.').first();
  const sinhalaOutput = page.locator('div.whitespace-pre-wrap').first();

  await page.waitForLoadState('networkidle');
  await page.waitForSelector('[placeholder="Input Your Singlish Text Here."]', { timeout: 10000 });

  try {
    await singlishInput.fill('mama yanavaa');
  } catch (err) {
    await singlishInput.click({ force: true });
    await page.keyboard.type('mama yanavaa', { delay: 50 });
  }
  try {
    await singlishInput.press('Enter');
  } catch (e) {
    await page.keyboard.press('Enter');
  }


  await expect(sinhalaOutput).toContainText('මම යනවා', { timeout: 20000 });
});


test('Pos_Fun_0003 - Question sentence', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const singlishInput = page.getByPlaceholder('Input Your Singlish Text Here.').first();
  const sinhalaOutput = page.locator('div.whitespace-pre-wrap').first();

  await page.waitForLoadState('networkidle');
  await page.waitForSelector('[placeholder="Input Your Singlish Text Here."]', { timeout: 10000 });

  try {
    await singlishInput.fill('obata kohomadha?');
  } catch (err) {
    await singlishInput.click({ force: true });
    await page.keyboard.type('obata kohomadha?', { delay: 50 });
  }
  try {
    await singlishInput.press('Enter');
  } catch (e) {
    await page.keyboard.press('Enter');
  }


  await expect(sinhalaOutput).toContainText('ඔබට කොහොමද?', { timeout: 20000 });
});



test('Pos_Fun_0004 -  Mixed language', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const singlishInput = page.getByPlaceholder('Input Your Singlish Text Here.').first();
  const sinhalaOutput = page.locator('div.whitespace-pre-wrap').first();

  await page.waitForLoadState('networkidle');
  await page.waitForSelector('[placeholder="Input Your Singlish Text Here."]', { timeout: 10000 });

  try {
    await singlishInput.fill('meka maage personal email eka.send karanna ');
  } catch (err) {
    await singlishInput.click({ force: true });
    await page.keyboard.type('meka maage personal email eka.send karanna ', { delay: 50 });
  }
  try {
    await singlishInput.press('Enter');
  } catch (e) {
    await page.keyboard.press('Enter');
  }

  await expect(sinhalaOutput).toContainText('මේක මාගේ personal email එක.send කරන්න', { timeout: 20000 });
});


test('Pos_Fun_0005 - Weather statement', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const singlishInput = page.getByPlaceholder('Input Your Singlish Text Here.').first();
  const sinhalaOutput = page.locator('div.whitespace-pre-wrap').first();

  await page.waitForLoadState('networkidle');
  await page.waitForSelector('[placeholder="Input Your Singlish Text Here."]', { timeout: 10000 });

  try {
    await singlishInput.fill('heta vaessa vahinna puluvan.heta parissam venna onii. ');
  } catch (err) {
    await singlishInput.click({ force: true });
    await page.keyboard.type('heta vaessa vahinna puluvan.heta parissam venna onii. ', { delay: 50 });
  }
  try {
    await singlishInput.press('Enter');
  } catch (e) {
    await page.keyboard.press('Enter');
  }

 
  await expect(sinhalaOutput).toContainText('හෙට වැස්ස වහින්න පුළුවන්.හෙට පරිස්සම් වෙන්න ඕනී.', { timeout: 20000 });
});



test('Pos_Fun_0006 - Long sentence', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const singlishInput = page.getByPlaceholder('Input Your Singlish Text Here.').first();
  const sinhalaOutput = page.locator('div.whitespace-pre-wrap').first();

  await page.waitForLoadState('networkidle');
  await page.waitForSelector('[placeholder="Input Your Singlish Text Here."]', { timeout: 10000 });

  try {
    await singlishInput.fill('mama adha udhee kaeema kaeevee naee mokadha mata godak vaeda thibba nisaa');

  } catch (err) {
    await singlishInput.click({ force: true });
    await page.keyboard.type('mama adha udhee kaeema kaeevee naee mokadha mata godak vaeda thibba nisaa', { delay: 50 });
  }
  try {
    await singlishInput.press('Enter');
  } catch (e) {
    await page.keyboard.press('Enter');
  }


  await expect(sinhalaOutput).toContainText(/[\u0D80-\u0DFF]/, { timeout: 20000 });
});



test('Pos_Fun_0007 - Numbers with units', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const singlishInput = page.getByPlaceholder('Input Your Singlish Text Here.').first();
  const sinhalaOutput = page.locator('div.whitespace-pre-wrap').first();

  await page.waitForLoadState('networkidle');
  await page.waitForSelector('[placeholder="Input Your Singlish Text Here."]', { timeout: 10000 });

  try {
    await singlishInput.fill('poth vala bara 15kg');

  } catch (err) {
    await singlishInput.click({ force: true });
    await page.keyboard.type('poth vala bara 15kg', { delay: 50 });
  }
  try {
    await singlishInput.press('Enter');
  } catch (e) {
    await page.keyboard.press('Enter');
  }


  await expect(sinhalaOutput).toContainText('පොත් වල බර 15kg', { timeout: 20000 });
});



test('Pos_Fun_0008 - Currency style', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const singlishInput = page.getByPlaceholder('Input Your Singlish Text Here.').first();
  const sinhalaOutput = page.locator('div.whitespace-pre-wrap').first();

  await page.waitForLoadState('networkidle');
  await page.waitForSelector('[placeholder="Input Your Singlish Text Here."]', { timeout: 10000 });

  try {
    await singlishInput.fill('mata 1000 k dhenna');

  } catch (err) {
    await singlishInput.click({ force: true });
    await page.keyboard.type('mata 1000 k dhenna', { delay: 50 });
  }
  try {
    await singlishInput.press('Enter');
  } catch (e) {
    await page.keyboard.press('Enter');
  }


  await expect(sinhalaOutput).toContainText('මට 1000 ක් දෙන්න', { timeout: 20000 });
});


test('Pos_Fun_0009 - Long sentence', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const singlishInput = page.getByPlaceholder('Input Your Singlish Text Here.').first();
  const sinhalaOutput = page.locator('div.whitespace-pre-wrap').first();

  await page.waitForLoadState('networkidle');
  await page.waitForSelector('[placeholder="Input Your Singlish Text Here."]', { timeout: 10000 });

  try {
    await singlishInput.fill('mamagedharayanavaadhaenma.oyaaenavadha?');

  } catch (err) {
    await singlishInput.click({ force: true });
    await page.keyboard.type('mamagedharayanavaadhaenma.oyaaenavadha?', { delay: 50 });
  }
  try {
    await singlishInput.press('Enter');
  } catch (e) {
    await page.keyboard.press('Enter');
  }

  await expect(sinhalaOutput).toContainText(/[\u0D80-\u0DFF]/, { timeout: 20000 });
});



test('Pos_Fun_0010 - Long sentence', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const singlishInput = page.getByPlaceholder('Input Your Singlish Text Here.').first();
  const sinhalaOutput = page.locator('div.whitespace-pre-wrap').first();

  await page.waitForLoadState('networkidle');
  await page.waitForSelector('[placeholder="Input Your Singlish Text Here."]', { timeout: 10000 });

  try {
    await singlishInput.fill('adoo mokadha ban vennee .niyama yaluvek nedha');

  } catch (err) {
    await singlishInput.click({ force: true });
    await page.keyboard.type('adoo mokadha ban vennee .niyama yaluvek nedha', { delay: 50 });
  }
  try {
    await singlishInput.press('Enter');
  } catch (e) {
    await page.keyboard.press('Enter');
  }


  await expect(sinhalaOutput).toContainText('අඩෝ මොකද බන් වෙන්නේ .නියම යලුවෙක් නේද', { timeout: 20000 });
});




test('Pos_Fun_0011 - Special characters greeting', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const singlishInput = page.getByPlaceholder('Input Your Singlish Text Here.').first();
  const sinhalaOutput = page.locator('div.whitespace-pre-wrap').first();

  await page.waitForLoadState('networkidle');
  await page.waitForSelector('[placeholder="Input Your Singlish Text Here."]', { timeout: 10000 });

  try {
    await singlishInput.fill('hello!!!!???');

  } catch (err) {
    await singlishInput.click({ force: true });
    await page.keyboard.type('hello!!!!???', { delay: 50 });
  }
  try {
    await singlishInput.press('Enter');
  } catch (e) {
    await page.keyboard.press('Enter');
  }

  await expect(sinhalaOutput).not.toHaveText(/^\s*$/, { timeout: 20000 });
});




test('Neg_Fun_0012 - Convert simple greeting statement', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const singlishInput = page.getByPlaceholder('Input Your Singlish Text Here.').first();
  const sinhalaOutput = page.locator('div.whitespace-pre-wrap').first();

  await page.waitForLoadState('networkidle');
  await page.waitForSelector('[placeholder="Input Your Singlish Text Here."]', { timeout: 10000 });

  try {
    await singlishInput.fill('thx mchn');

  } catch (err) {
    await singlishInput.click({ force: true });
    await page.keyboard.type('thx mchn', { delay: 50 });
  }
  try {
    await singlishInput.press('Enter');
  } catch (e) {
    await page.keyboard.press('Enter');
  }

  await expect(sinhalaOutput).not.toHaveText('thx mchn', { timeout: 20000 });
});



test('Pos_Fun_0013 - Long sentence', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const singlishInput = page.getByPlaceholder('Input Your Singlish Text Here.').first();
  const sinhalaOutput = page.locator('div.whitespace-pre-wrap').first();

  await page.waitForLoadState('networkidle');
  await page.waitForSelector('[placeholder="Input Your Singlish Text Here."]', { timeout: 10000 });

  try {
    await singlishInput.fill('mama kaevaa saha vathura bivaa.ita passe sindhu ahana gaman midhula pirisidhu kalaa');

  } catch (err) {
    await singlishInput.click({ force: true });
    await page.keyboard.type('mama kaevaa saha vathura bivaa.ita passe sindhu ahana gaman midhula pirisidhu kalaa', { delay: 50 });
  }
  try {
    await singlishInput.press('Enter');
  } catch (e) {
    await page.keyboard.press('Enter');
  }

  await expect(sinhalaOutput).toContainText('මම කෑවා සහ වතුර බිවා.ඉට පස්සෙ සින්දු අහන ගමන් මිදුල පිරිසිදු කලා', { timeout: 20000 });
});



test('Pos_Fun_0014 - Convert emoji statement', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const singlishInput = page.getByPlaceholder('Input Your Singlish Text Here.').first();
  const sinhalaOutput = page.locator('div.whitespace-pre-wrap').first();

  await page.waitForLoadState('networkidle');
  await page.waitForSelector('[placeholder="Input Your Singlish Text Here."]', { timeout: 10000 });

  try {
    await singlishInput.fill('😀😀😀😀😀');

  } catch (err) {
    await singlishInput.click({ force: true });
    await page.keyboard.type('😀😀😀😀😀', { delay: 50 });
  }
  try {
    await singlishInput.press('Enter');
  } catch (e) {
    await page.keyboard.press('Enter');
  }


  await expect(sinhalaOutput).toContainText('😀😀😀😀😀', { timeout: 20000 });
});


test('Pos_Fun_0015 - Negation', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const singlishInput = page.getByPlaceholder('Input Your Singlish Text Here.').first();
  const sinhalaOutput = page.locator('div.whitespace-pre-wrap').first();

  await page.waitForLoadState('networkidle');
  await page.waitForSelector('[placeholder="Input Your Singlish Text Here."]', { timeout: 10000 });

  try {
    await singlishInput.fill('mama kaeema kanne nae');

  } catch (err) {
    await singlishInput.click({ force: true });
    await page.keyboard.type('mama kaeema kanne nae', { delay: 50 });
  }
  try {
    await singlishInput.press('Enter');
  } catch (e) {
    await page.keyboard.press('Enter');
  }


  await expect(sinhalaOutput).toContainText(/[\u0D80-\u0DFF]/, { timeout: 20000 });
});



test('Pos_Fun_0016 - Proper Nouns', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const singlishInput = page.getByPlaceholder('Input Your Singlish Text Here.').first();
  const sinhalaOutput = page.locator('div.whitespace-pre-wrap').first();

  await page.waitForLoadState('networkidle');
  await page.waitForSelector('[placeholder="Input Your Singlish Text Here."]', { timeout: 10000 });

  try {
    await singlishInput.fill('sri lankaava sundhara ratak');

  } catch (err) {
    await singlishInput.click({ force: true });
    await page.keyboard.type('sri lankaava sundhara ratak', { delay: 50 });
  }
  try {
    await singlishInput.press('Enter');
  } catch (e) {
    await page.keyboard.press('Enter');
  }


  await expect(sinhalaOutput).toContainText(/[\u0D80-\u0DFF]/, { timeout: 20000 });
});


test('Pos_Fun_0017 - Time Focus', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const singlishInput = page.getByPlaceholder('Input Your Singlish Text Here.').first();
  const sinhalaOutput = page.locator('div.whitespace-pre-wrap').first();

  await page.waitForLoadState('networkidle');
  await page.waitForSelector('[placeholder="Input Your Singlish Text Here."]', { timeout: 10000 });

  try {
    await singlishInput.fill('dhen velava 10yi');

  } catch (err) {
    await singlishInput.click({ force: true });
    await page.keyboard.type('dhen velava 10yi', { delay: 50 });
  }
  try {
    await singlishInput.press('Enter');
  } catch (e) {
    await page.keyboard.press('Enter');
  }


  await expect(sinhalaOutput).toContainText(/[\u0D80-\u0DFF]/, { timeout: 20000 });
});


test('Pos_Fun_0018 - Narrative Description', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const singlishInput = page.getByPlaceholder('Input Your Singlish Text Here.').first();
  const sinhalaOutput = page.locator('div.whitespace-pre-wrap').first();

  await page.waitForLoadState('networkidle');
  await page.waitForSelector('[placeholder="Input Your Singlish Text Here."]', { timeout: 10000 });

  try {
    await singlishInput.fill('ada udee kema keeve nae mokadha mata godak vada thibba nisa mama hithuwe heta karanna kiyala.');

  } catch (err) {
    await singlishInput.click({ force: true });
    await page.keyboard.type('ada udee kema keeve nae mokadha mata godak vada thibba nisa mama hithuwe heta karanna kiyala.', { delay: 50 });
  }
  try {
    await singlishInput.press('Enter');
  } catch (e) {
    await page.keyboard.press('Enter');
  }


  await expect(sinhalaOutput).toContainText(/[\u0D80-\u0DFF]/, { timeout: 20000 });
});



test('Pos_Fun_0019 - Past Events', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const singlishInput = page.getByPlaceholder('Input Your Singlish Text Here.').first();
  const sinhalaOutput = page.locator('div.whitespace-pre-wrap').first();

  await page.waitForLoadState('networkidle');
  await page.waitForSelector('[placeholder="Input Your Singlish Text Here."]', { timeout: 10000 });

  try {
    await singlishInput.fill('mama giya dhesaembar 1 nuvara giya.edhaa maru dhavasak.mama goodaak sathutu unaa');

  } catch (err) {
    await singlishInput.click({ force: true });
    await page.keyboard.type('mama giya dhesaembar 1 nuvara giya.edhaa maru dhavasak.mama goodaak sathutu unaa', { delay: 50 });
  }
  try {
    await singlishInput.press('Enter');
  } catch (e) {
    await page.keyboard.press('Enter');
  }

  
  await expect(sinhalaOutput).toContainText('මම ගිය දෙසැම්බර් 1 නුවර ගිය.එදා මරු දවසක්.මම ගෝඩාක් සතුටු උනා', { timeout: 20000 });
});


test('Pos_Fun_0020 - Complex Sentence', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const singlishInput = page.getByPlaceholder('Input Your Singlish Text Here.').first();
  const sinhalaOutput = page.locator('div.whitespace-pre-wrap').first();

  await page.waitForLoadState('networkidle');
  await page.waitForSelector('[placeholder="Input Your Singlish Text Here."]', { timeout: 10000 });

  try {
    await singlishInput.fill('oya enavaanam mama balan innavaa, ethakota apita katha karanna puluvan.');

  } catch (err) {
    await singlishInput.click({ force: true });
    await page.keyboard.type('oya enavaanam mama balan innavaa, ethakota apita katha karanna puluvan.', { delay: 50 });
  }
  try {
    await singlishInput.press('Enter');
  } catch (e) {
    await page.keyboard.press('Enter');
  }

 
  await expect(sinhalaOutput).toContainText('ඔය එනවානම් මම බලන් ඉන්නවා, එතකොට අපිට කත කරන්න පුලුවන්.', { timeout: 20000 });
});





test('Pos_Fun_0021 -Instructions', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const singlishInput = page.getByPlaceholder('Input Your Singlish Text Here.').first();
  const sinhalaOutput = page.locator('div.whitespace-pre-wrap').first();

  await page.waitForLoadState('networkidle');
  await page.waitForSelector('[placeholder="Input Your Singlish Text Here."]', { timeout: 10000 });

  try {
    await singlishInput.fill('vamata haerenna');

  } catch (err) {
    await singlishInput.click({ force: true });
    await page.keyboard.type('vamata haerenna', { delay: 50 });
  }
  try {
    await singlishInput.press('Enter');
  } catch (e) {
    await page.keyboard.press('Enter');
  }

  
  await expect(sinhalaOutput).toContainText('වමට හැරෙන්න', { timeout: 20000 });
});




test('Pos_Fun_0022 -Professional Setting', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const singlishInput = page.getByPlaceholder('Input Your Singlish Text Here.').first();
  const sinhalaOutput = page.locator('div.whitespace-pre-wrap').first();

  await page.waitForLoadState('networkidle');
  await page.waitForSelector('[placeholder="Input Your Singlish Text Here."]', { timeout: 10000 });

  try {
    await singlishInput.fill('meeting eka dhen patan gannava');

  } catch (err) {
    await singlishInput.click({ force: true });
    await page.keyboard.type('meeting eka dhen patan gannava', { delay: 50 });
  }
  try {
    await singlishInput.press('Enter');
  } catch (e) {
    await page.keyboard.press('Enter');
  }


  await expect(sinhalaOutput).toContainText(/[\u0D80-\u0DFF]/, { timeout: 20000 });
});


test('Neg_Fun_0023 - Extreme Informal Slang', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const singlishInput = page.getByPlaceholder('Input Your Singlish Text Here.').first();
  const sinhalaOutput = page.locator('div.whitespace-pre-wrap').first();

  await page.waitForLoadState('networkidle');
  await page.waitForSelector('[placeholder="Input Your Singlish Text Here."]', { timeout: 10000 });

  try {
    await singlishInput.fill('adoo mokada ban venne');

  } catch (err) {
    await singlishInput.click({ force: true });
    await page.keyboard.type('adoo mokada ban venne', { delay: 50 });
  }
  try {
    await singlishInput.press('Enter');
  } catch (e) {
    await page.keyboard.press('Enter');
  }


  await expect(sinhalaOutput).not.toHaveText('අඩෝ මොකඩ බන් වෙන්නෙ', { timeout: 20000 });
});



test('Neg_Fun_0024 - Symbol Mixt', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const singlishInput = page.getByPlaceholder('Input Your Singlish Text Here.').first();
  const sinhalaOutput = page.locator('div.whitespace-pre-wrap').first();

  await page.waitForLoadState('networkidle');
  await page.waitForSelector('[placeholder="Input Your Singlish Text Here."]', { timeout: 10000 });

  try {
    await singlishInput.fill('m@m@ yanav@');

  } catch (err) {
    await singlishInput.click({ force: true });
    await page.keyboard.type('m@m@ yanav@', { delay: 50 });
  }
  try {
    await singlishInput.press('Enter');
  } catch (e) {
    await page.keyboard.press('Enter');
  }


  await expect(sinhalaOutput).not.toHaveText('m@m@ yanav@', { timeout: 20000 });
});


test('Neg_Fun_0025 - Double Vowels', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const singlishInput = page.getByPlaceholder('Input Your Singlish Text Here.').first();
  const sinhalaOutput = page.locator('div.whitespace-pre-wrap').first();

  await page.waitForLoadState('networkidle');
  await page.waitForSelector('[placeholder="Input Your Singlish Text Here."]', { timeout: 10000 });

  try {
    await singlishInput.fill('maamaaa@');

  } catch (err) {
    await singlishInput.click({ force: true });
    await page.keyboard.type('maamaaa@', { delay: 50 });
  }
  try {
    await singlishInput.press('Enter');
  } catch (e) {
    await page.keyboard.press('Enter');
  }


  await expect(sinhalaOutput).not.toHaveText('', { timeout: 20000 });
});



test('Neg_Fun_0026 - Line Breaks', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const singlishInput = page.getByPlaceholder('Input Your Singlish Text Here.').first();
  const sinhalaOutput = page.locator('div.whitespace-pre-wrap').first();

  await page.waitForLoadState('networkidle');
  await page.waitForSelector('[placeholder="Input Your Singlish Text Here."]', { timeout: 10000 });

  try {
    await singlishInput.fill('line 1\nline 2');

  } catch (err) {
    await singlishInput.click({ force: true });
    await page.keyboard.type('line 1\nline 2', { delay: 50 });
  }
  try {
    await singlishInput.press('Enter');
  } catch (e) {
    await page.keyboard.press('Enter');
  }


  await expect(sinhalaOutput).not.toHaveText('line 1\nline 2', { timeout: 20000 });
});


test('Neg_Fun_0027 -requests', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const singlishInput = page.getByPlaceholder('Input Your Singlish Text Here.').first();
  const sinhalaOutput = page.locator('div.whitespace-pre-wrap').first();

  await page.waitForLoadState('networkidle');
  await page.waitForSelector('[placeholder="Input Your Singlish Text Here."]', { timeout: 10000 });

  try {
    await singlishInput.fill('mama bodimata yanavaa.oya enavadha');

  } catch (err) {
    await singlishInput.click({ force: true });
    await page.keyboard.type('mama bodimata yanavaa.oya enavadha', { delay: 50 });
  }
  try {
    await singlishInput.press('Enter');
  } catch (e) {
    await page.keyboard.press('Enter');
  }


  await expect(sinhalaOutput).not.toHaveText('මම බොඩිමට යනවා.ඔය එනවද?', { timeout: 20000 });
});



test('Neg_Fun_0028 - Non-standard Encoding', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const singlishInput = page.getByPlaceholder('Input Your Singlish Text Here.').first();
  const sinhalaOutput = page.locator('div.whitespace-pre-wrap').first();

  await page.waitForLoadState('networkidle');
  await page.waitForSelector('[placeholder="Input Your Singlish Text Here."]', { timeout: 10000 });

  try {
    await singlishInput.fill('$inhala t3xt is go0d');

  } catch (err) {
    await singlishInput.click({ force: true });
    await page.keyboard.type('$inhala t3xt is go0d', { delay: 50 });
  }
  try {
    await singlishInput.press('Enter');
  } catch (e) {
    await page.keyboard.press('Enter');
  }


  await expect(sinhalaOutput).not.toHaveText('$ඉන්හල t3xට් ඉස් go0ඩ්', { timeout: 20000 });
});



test('Neg_Fun_0029 - Case Sensitivity Check', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const singlishInput = page.getByPlaceholder('Input Your Singlish Text Here.').first();
  const sinhalaOutput = page.locator('div.whitespace-pre-wrap').first();

  await page.waitForLoadState('networkidle');
  await page.waitForSelector('[placeholder="Input Your Singlish Text Here."]', { timeout: 10000 });

  try {
    await singlishInput.fill('MAMA GEDHARA YANAVAA SAHA KEMA KANAWA');

  } catch (err) {
    await singlishInput.click({ force: true });
    await page.keyboard.type('MAMA GEDHARA YANAVAA SAHA KEMA KANAWA', { delay: 50 });
  }
  try {
    await singlishInput.press('Enter');
  } catch (e) {
    await page.keyboard.press('Enter');
  }

  await expect(sinhalaOutput).toHaveText('MAMA GEDHARA YANAVAA SAHA KEMA KANAWA', { timeout: 20000 });
});




test('Pos_Fun_0030 - Emotion & Request', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const singlishInput = page.getByPlaceholder('Input Your Singlish Text Here.').first();
  const sinhalaOutput = page.locator('div.whitespace-pre-wrap').first();

  await page.waitForLoadState('networkidle');
  await page.waitForSelector('[placeholder="Input Your Singlish Text Here."]', { timeout: 10000 });

  try {
    await singlishInput.fill('mama eyaata udhavu karanna kaemathii.eth eyaa mage sathuta naethi karanavaa.ekata mama kaemathi naee.eka sadhaaranayi nedha');

  } catch (err) {
    await singlishInput.click({ force: true });
    await page.keyboard.type('mama eyaata udhavu karanna kaemathii.eth eyaa mage sathuta naethi karanavaa.ekata mama kaemathi naee.eka sadhaaranayi nedha', { delay: 50 });
  }
  try {
    await singlishInput.press('Enter');
  } catch (e) {
    await page.keyboard.press('Enter');
  }


  await expect(sinhalaOutput).toContainText(/[\u0D80-\u0DFF]/, { timeout: 20000 });
});



test('Pos_Fun_0031 - Repeated Emphasis', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const singlishInput = page.getByPlaceholder('Input Your Singlish Text Here.').first();
  const sinhalaOutput = page.locator('div.whitespace-pre-wrap').first();

  await page.waitForLoadState('networkidle');
  await page.waitForSelector('[placeholder="Input Your Singlish Text Here."]', { timeout: 10000 });

  try {
    await singlishInput.fill('vada vada vada vitharayi');

  } catch (err) {
    await singlishInput.click({ force: true });
    await page.keyboard.type('vada vada vada vitharayi', { delay: 50 });
  }
  try {
    await singlishInput.press('Enter');
  } catch (e) {
    await page.keyboard.press('Enter');
  }

  await expect(sinhalaOutput).toContainText(/[\u0D80-\u0DFF]/, { timeout: 20000 });
});


test('Pos_Fun_0032 - Instructional', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const singlishInput = page.getByPlaceholder('Input Your Singlish Text Here.').first();
  const sinhalaOutput = page.locator('div.whitespace-pre-wrap').first();

  await page.waitForLoadState('networkidle');
  await page.waitForSelector('[placeholder="Input Your Singlish Text Here."]', { timeout: 10000 });

  try {
    await singlishInput.fill('karunaakara methana inna');

  } catch (err) {
    await singlishInput.click({ force: true });
    await page.keyboard.type('karunaakara methana inna', { delay: 50 });
  }
  try {
    await singlishInput.press('Enter');
  } catch (e) {
    await page.keyboard.press('Enter');
  }

  await expect(sinhalaOutput).toContainText(/[\u0D80-\u0DFF]/, { timeout: 20000 });
});



test('Pos_Fun_0033 -Present Continuous Tense', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const singlishInput = page.getByPlaceholder('Input Your Singlish Text Here.').first();
  const sinhalaOutput = page.locator('div.whitespace-pre-wrap').first();

  await page.waitForLoadState('networkidle');
  await page.waitForSelector('[placeholder="Input Your Singlish Text Here."]', { timeout: 10000 });

  try {
    await singlishInput.fill('mama thavama igenagannavaa. eka issarahata godaak vaedhagath igenaganna eka .mama issarahata igena gena hodha thaenakata yanavaa');

  } catch (err) {
    await singlishInput.click({ force: true });
    await page.keyboard.type('mama thavama igenagannavaa. eka issarahata godaak vaedhagath igenaganna eka .mama issarahata igena gena hodha thaenakata yanavaa', { delay: 50 });
  }
  try {
    await singlishInput.press('Enter');
  } catch (e) {
    await page.keyboard.press('Enter');
  }

  await expect(sinhalaOutput).toContainText('මම තවම ඉගෙනගන්නවා. එක ඉස්සරහට ගොඩාක් වැදගත් ඉගෙනගන්න එක .මම ඉස්සරහට ඉගෙන ගෙන හොද තැනකට යනවා', { timeout: 20000 });
});




test('Pos_Fun_0034 - Plural Noun Variation', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const singlishInput = page.getByPlaceholder('Input Your Singlish Text Here.').first();
  const sinhalaOutput = page.locator('div.whitespace-pre-wrap').first();

  await page.waitForLoadState('networkidle');
  await page.waitForSelector('[placeholder="Input Your Singlish Text Here."]', { timeout: 10000 });

  try {
    await singlishInput.fill('poth godak kiyavanna puluvan');

  } catch (err) {
    await singlishInput.click({ force: true });
    await page.keyboard.type('poth godak kiyavanna puluvan', { delay: 50 });
  }
  try {
    await singlishInput.press('Enter');
  } catch (e) {
    await page.keyboard.press('Enter');
  }

  await expect(sinhalaOutput).toContainText('පොත් ගොඩක් කියවන්න පුළුවන්', { timeout: 20000 });
});



test('Pos_UI_0001 - Real-time Update while typing', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const singlishInput = page.getByPlaceholder('Input Your Singlish Text Here.').first();
  const sinhalaOutput = page.locator('div.whitespace-pre-wrap').first();

  await page.waitForLoadState('networkidle');
  await page.waitForSelector('[placeholder="Input Your Singlish Text Here."]', { timeout: 10000 });


  await singlishInput.click();

  const text = 'mama poth kiyavanawa';


  for (let i = 0; i < text.length; i++) {
    await page.keyboard.type(text[i], { delay: 80 });

  
    await expect(sinhalaOutput).not.toHaveText('', { timeout: 5000 });
  }
 
  try {
    await singlishInput.press('Enter');
  } catch (e) {
    await page.keyboard.press('Enter');
  }

  const finalOutput = await sinhalaOutput.textContent();
  expect(finalOutput).toMatch(/[\u0D80-\u0DFF]/);
});

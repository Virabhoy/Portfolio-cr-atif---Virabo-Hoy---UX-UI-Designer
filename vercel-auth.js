const { chromium } = require('playwright');

async function main() {
  console.log('🚀 Ouverture de Vercel pour authentification...');

  const browser = await chromium.launch({
    headless: false,
    slowMo: 200
  });

  const context = await browser.newContext({
    viewport: { width: 1280, height: 900 }
  });

  const page = await context.newPage();

  // Go to Vercel auth page
  await page.goto('https://vercel.com/oauth/device?user_code=FFJK-NZNJ');

  console.log('');
  console.log('='.repeat(60));
  console.log('👉 CONNECTEZ-VOUS À VERCEL');
  console.log('   Code: FFJK-NZNJ');
  console.log('='.repeat(60));
  console.log('');

  // Wait for authentication to complete
  await page.waitForURL(url => {
    const u = url.toString();
    return u.includes('success') || u.includes('dashboard') || u.includes('vercel.com/');
  }, { timeout: 300000 });

  console.log('✅ Authentification Vercel réussie!');

  await page.waitForTimeout(3000);
  await browser.close();
}

main().catch(err => {
  console.error('Erreur:', err.message);
});

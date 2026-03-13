const { chromium } = require('playwright');

async function main() {
  console.log('🚀 Lancement du navigateur interactif...');
  console.log('');
  console.log('Le navigateur va rester ouvert pour vous permettre de:');
  console.log('1. Vous connecter à GitHub');
  console.log('2. Créer le dépôt');
  console.log('3. Configurer Vercel');
  console.log('');

  const browser = await chromium.launch({
    headless: false,
    slowMo: 100
  });

  const context = await browser.newContext({
    viewport: { width: 1280, height: 800 }
  });

  const page = await context.newPage();

  // Go to GitHub
  console.log('📦 Ouverture de GitHub...');
  await page.goto('https://github.com/login');

  console.log('');
  console.log('='.repeat(60));
  console.log('👉 CONNECTEZ-VOUS À GITHUB dans le navigateur');
  console.log('='.repeat(60));
  console.log('');

  // Wait for user to login (detect when we're on github.com and not on login page)
  await page.waitForURL(url => {
    const u = url.toString();
    return u.includes('github.com') && !u.includes('/login') && !u.includes('/session') && !u.includes('accounts.google.com');
  }, { timeout: 600000 }); // 10 minutes

  console.log('✅ Connexion GitHub réussie!');

  // Navigate to new repo page
  console.log('📦 Navigation vers la création de dépôt...');
  await page.goto('https://github.com/new');
  await page.waitForLoadState('networkidle');

  // Fill in repository details
  console.log('📝 Remplissage du formulaire...');

  // Wait for the form to be ready
  await page.waitForSelector('input[data-testid="repository-name-input"]', { timeout: 30000 });

  // Fill repository name
  await page.fill('input[data-testid="repository-name-input"]', 'portfolio-virabo-hoy');
  await page.waitForTimeout(500);

  // Fill description
  const descInput = page.locator('input[id="Description"]');
  if (await descInput.isVisible()) {
    await descInput.fill('Portfolio créatif - Virabo Hoy - UX/UI Designer');
  }

  console.log('');
  console.log('='.repeat(60));
  console.log('📝 VÉRIFIEZ ET CLIQUEZ SUR "Create repository"');
  console.log('='.repeat(60));
  console.log('');

  // Wait for repo to be created
  await page.waitForURL(/github\.com\/[^/]+\/portfolio-virabo-hoy/, { timeout: 300000 });

  const repoUrl = page.url();
  console.log(`✅ Dépôt créé: ${repoUrl}`);

  // Extract username
  const username = repoUrl.split('/')[3];

  console.log('');
  console.log('='.repeat(60));
  console.log('📤 COMMANDES GIT:');
  console.log('='.repeat(60));
  console.log(`git remote add origin ${repoUrl}.git`);
  console.log(`git push -u origin main`);
  console.log('='.repeat(60));
  console.log('');

  // Save repo info
  const fs = require('fs');
  fs.writeFileSync('/tmp/github-repo-info.json', JSON.stringify({
    url: repoUrl,
    username: username,
    name: 'portfolio-virabo-hoy'
  }));

  console.log('📋 Info sauvegardée dans /tmp/github-repo-info.json');

  // Now go to Vercel
  console.log('');
  console.log('🔗 Ouverture de Vercel...');
  await page.goto('https://vercel.com/new');

  console.log('');
  console.log('='.repeat(60));
  console.log('📝 INSTRUCTIONS VERCEL:');
  console.log('='.repeat(60));
  console.log('1. Connectez-vous avec GitHub');
  console.log('2. Importez: portfolio-virabo-hoy');
  console.log('3. Environment Variables:');
  console.log('   ADMIN_USERNAME = Virabz');
  console.log('   ADMIN_PASSWORD = Filou24');
  console.log('   SESSION_SECRET = virabo-hoy-portfolio-secret-2026');
  console.log('4. Cliquez sur Deploy');
  console.log('='.repeat(60));
  console.log('');
  console.log('⏳ Le navigateur reste ouvert 30 minutes...');

  // Keep browser open
  await page.waitForTimeout(1800000); // 30 minutes

  await browser.close();
}

main().catch(err => {
  console.error('Erreur:', err.message);
});

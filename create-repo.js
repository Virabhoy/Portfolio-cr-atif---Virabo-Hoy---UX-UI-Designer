const { chromium } = require('playwright');

async function main() {
  console.log('🚀 Lancement du navigateur...');

  const browser = await chromium.launch({
    headless: false,
    slowMo: 200
  });

  const context = await browser.newContext({
    viewport: { width: 1280, height: 900 }
  });

  const page = await context.newPage();

  // Go to GitHub new repo page
  console.log('📦 Ouverture de GitHub...');
  await page.goto('https://github.com/new', { waitUntil: 'domcontentloaded', timeout: 60000 });

  // Check if we need to login
  const currentUrl = page.url();
  if (currentUrl.includes('/login') || currentUrl.includes('/session')) {
    console.log('');
    console.log('⚠️  Vous devez vous connecter à GitHub.');
    console.log('👉 Connectez-vous dans le navigateur...');
    console.log('');

    // Wait for login to complete - wait until we're on github.com/new
    await page.waitForURL(url => {
      const u = url.toString();
      return u === 'https://github.com/new' || u.includes('github.com/new');
    }, { timeout: 300000 });
    console.log('✅ Connexion réussie!');
    await page.waitForTimeout(2000);
  }

  console.log('📝 Remplissage du formulaire...');
  await page.waitForTimeout(3000);

  // Fill repository name - try clicking first
  try {
    // Look for the input field
    const nameInput = page.locator('input').filter({ hasText: '' }).first();

    // Or try by aria-describedby or other attributes
    const repoInput = page.locator('[id*="name"], [name*="name"], [aria-label*="name" i]').first();

    // Screenshot for debugging
    await page.screenshot({ path: '/tmp/github-page.png' });
    console.log('📸 Screenshot sauvegardé: /tmp/github-page.png');

    // Try to find and fill the repo name input
    const inputs = await page.locator('input[type="text"]').all();
    console.log(`Trouvé ${inputs.length} champs de texte`);

    if (inputs.length > 0) {
      // First visible text input is usually the repo name
      for (const input of inputs) {
        if (await input.isVisible()) {
          await input.click();
          await input.fill('portfolio-virabo-hoy');
          console.log('✅ Nom du dépôt: portfolio-virabo-hoy');
          break;
        }
      }
    }
  } catch (e) {
    console.log('⚠️ Erreur lors du remplissage:', e.message);
  }

  await page.waitForTimeout(1500);

  // Try to fill description (usually second text input or textarea)
  try {
    const textareas = await page.locator('textarea, input[type="text"]').all();
    if (textareas.length > 1) {
      for (let i = 1; i < textareas.length; i++) {
        const ta = textareas[i];
        if (await ta.isVisible()) {
          await ta.fill('Portfolio créatif - Virabo Hoy - UX/UI Designer');
          console.log('✅ Description ajoutée');
          break;
        }
      }
    }
  } catch (e) {
    // Description is optional
  }

  await page.waitForTimeout(1000);

  // Click the Create repository button
  console.log('🔘 Recherche du bouton "Create repository"...');

  try {
    // Find button by text
    const createBtn = page.getByRole('button', { name: /create repository/i });
    if (await createBtn.isVisible({ timeout: 5000 })) {
      await createBtn.click();
      console.log('✅ Bouton "Create repository" cliqué!');
    } else {
      // Try other methods
      const btn = page.locator('button[type="submit"]').filter({ hasText: /create/i });
      if (await btn.isVisible({ timeout: 3000 })) {
        await btn.click();
        console.log('✅ Bouton submit cliqué!');
      }
    }
  } catch (e) {
    console.log('⚠️ Bouton non trouvé automatiquement');
    console.log('👉 Veuillez cliquer sur "Create repository" manuellement');
  }

  // Wait for the repo page
  console.log('⏳ Attente de la création du dépôt...');

  try {
    await page.waitForURL(/github\.com\/[^/]+\/[^/]+$/, { timeout: 120000 });

    const repoUrl = page.url();

    if (!repoUrl.includes('/new')) {
      console.log('');
      console.log('='.repeat(60));
      console.log('🎉 DÉPÔT CRÉÉ!');
      console.log('='.repeat(60));
      console.log('URL:', repoUrl);
      console.log('='.repeat(60));

      // Save the URL
      const fs = require('fs');
      fs.writeFileSync('/tmp/github-repo-url.txt', repoUrl);

      await page.waitForTimeout(3000);
      await browser.close();
      return;
    }
  } catch (e) {
    console.log('⏳ En attente de votre action...');
  }

  // If we're still here, wait for manual action
  console.log('');
  console.log('👉 Complétez la création du dépôt manuellement si nécessaire');
  console.log('   Le script attend...');

  await page.waitForURL(/github\.com\/[^/]+\/[^/]+$/, { timeout: 600000 });

  const finalUrl = page.url();
  if (!finalUrl.includes('/new') && !finalUrl.includes('/login')) {
    console.log('');
    console.log('🎉 Dépôt créé:', finalUrl);
    const fs = require('fs');
    fs.writeFileSync('/tmp/github-repo-url.txt', finalUrl);
  }

  await browser.close();
  console.log('✅ Terminé!');
}

main().catch(err => {
  console.error('❌ Erreur:', err.message);
});

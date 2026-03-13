const { chromium } = require('playwright');

async function main() {
  console.log('🚀 Lancement du navigateur...');

  const browser = await chromium.launch({
    headless: false,
    slowMo: 500
  });

  const context = await browser.newContext();
  const page = await context.newPage();

  // Step 1: GitHub - Create new repository
  console.log('📦 Ouverture de GitHub pour créer un nouveau dépôt...');
  await page.goto('https://github.com/new');

  console.log('');
  console.log('='.repeat(60));
  console.log('📝 INSTRUCTIONS GITHUB:');
  console.log('='.repeat(60));
  console.log('1. Connectez-vous à GitHub si nécessaire');
  console.log('2. Nom du dépôt: portfolio-virabo-hoy');
  console.log('3. Description: Portfolio créatif - Virabo Hoy');
  console.log('4. Visibilité: Public (pour Vercel gratuit)');
  console.log('5. NE PAS cocher "Add a README"');
  console.log('6. Cliquez sur "Create repository"');
  console.log('='.repeat(60));
  console.log('');
  console.log('⏳ En attente de la création du dépôt...');
  console.log('   (Le script continuera automatiquement une fois le dépôt créé)');

  // Wait for the repository to be created (URL changes to the new repo)
  await page.waitForURL(/github\.com\/[^/]+\/[^/]+$/, { timeout: 300000 });

  const repoUrl = page.url();
  console.log(`✅ Dépôt créé: ${repoUrl}`);

  // Extract repo info
  const urlParts = repoUrl.split('/');
  const username = urlParts[3];
  const repoName = urlParts[4];

  console.log('');
  console.log('='.repeat(60));
  console.log('📤 COMMANDES GIT À EXÉCUTER:');
  console.log('='.repeat(60));
  console.log(`cd /Users/virabhoy/Desktop/Portfolio2026`);
  console.log(`git remote add origin ${repoUrl}.git`);
  console.log(`git push -u origin main`);
  console.log('='.repeat(60));
  console.log('');

  // Step 2: Open Vercel
  console.log('🔗 Ouverture de Vercel pour l\'import du projet...');
  await page.goto('https://vercel.com/new');

  console.log('');
  console.log('='.repeat(60));
  console.log('📝 INSTRUCTIONS VERCEL:');
  console.log('='.repeat(60));
  console.log('1. Connectez-vous avec GitHub');
  console.log('2. Importez le dépôt: ' + repoName);
  console.log('3. Dans "Environment Variables", ajoutez:');
  console.log('   - ADMIN_USERNAME = Virabz');
  console.log('   - ADMIN_PASSWORD = Filou24');
  console.log('   - SESSION_SECRET = virabo-hoy-portfolio-secret-2026');
  console.log('4. Cliquez sur "Deploy"');
  console.log('='.repeat(60));
  console.log('');
  console.log('⏳ En attente du déploiement...');

  // Keep browser open for user interaction
  await page.waitForTimeout(600000); // 10 minutes timeout

  await browser.close();
}

main().catch(console.error);

// This script migrates local JSON data to Vercel Blob
// Run with: BLOB_READ_WRITE_TOKEN=xxx node scripts/migrate-to-blob.js

const { put } = require('@vercel/blob');
const fs = require('fs');
const path = require('path');

async function migrate() {
  console.log('🚀 Migration des données vers Vercel Blob...');

  const dataDir = path.join(__dirname, '..', 'data');
  const files = ['projects.json', 'about.json', 'skills.json'];

  for (const filename of files) {
    const filepath = path.join(dataDir, filename);

    if (fs.existsSync(filepath)) {
      console.log(`📄 Migration de ${filename}...`);

      const content = fs.readFileSync(filepath, 'utf-8');
      const blob = new Blob([content], { type: 'application/json' });

      try {
        const { url } = await put(`data/${filename}`, blob, {
          access: 'public',
          addRandomSuffix: false,
          allowOverwrite: true,
        });

        console.log(`✅ ${filename} -> ${url}`);
      } catch (error) {
        console.error(`❌ Erreur pour ${filename}:`, error.message);
      }
    } else {
      console.log(`⚠️ ${filename} non trouvé, ignoré`);
    }
  }

  console.log('');
  console.log('✅ Migration terminée!');
}

migrate().catch(console.error);


import { PrismaClient } from '../src/generated/prisma/client';
import { readFileSync } from 'fs';
import { join } from 'path';

const prisma = new PrismaClient()

async function main() {
  // Lire les données JSON
  const photographersData = JSON.parse(
    readFileSync(join(__dirname, '../data/photographer.json'), 'utf-8')
  );

  const mediaData = JSON.parse(
    readFileSync(join(__dirname, '../data/media.json'), 'utf-8')
  );

  // Insérer les données
  await prisma.photographer.createMany({
    data: photographersData,
  });

  await prisma.media.createMany({
    data: mediaData,
  });
}

main()
  .then(async () => {
    console.log('Données insérées avec succès !');
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Start seeding ...');

  // Create roles
  console.log('----ROLE BUILDING---');
  await prisma.role.createMany({
    data: [{ name: 'Vendor' }, { name: 'Customer' }],
  });

  // Clear existing categories
  await prisma.categories.deleteMany({});

  // Create categories
  console.log('----CATEGORIES BUILDING---');
  await prisma.categories.createMany({
    data: [{ name: 'BADMINTON' }, { name: 'FUTSAL' }, { name: 'VOLLY' }],
    skipDuplicates: true, // Skip duplicates if they exist
  });

  // Retrieve categories to get the IDs
  const categories = await prisma.categories.findMany();
  const categoryMap = categories.reduce(
    (map, category) => {
      map[category.name] = category.id;
      return map;
    },
    {} as Record<string, string>
  );

  // Clear existing subcategories
  await prisma.subcategories.deleteMany({});

  // Create subcategories
  console.log('----SUBCATEGORIES BUILDING---');
  await prisma.subcategories.createMany({
    data: [
      { name: 'JERSY', categoryId: categoryMap['BADMINTON'] },
      { name: 'LAPANGAN', categoryId: categoryMap['BADMINTON'] },
      { name: 'ROMPI', categoryId: categoryMap['BADMINTON'] },
      { name: 'RAKET', categoryId: categoryMap['BADMINTON'] },
      { name: 'SHUTTELCOCK', categoryId: categoryMap['BADMINTON'] },
      { name: 'BOLA', categoryId: categoryMap['FUTSAL'] },
      { name: 'JERSY', categoryId: categoryMap['FUTSAL'] },
      { name: 'LAPANGAN', categoryId: categoryMap['FUTSAL'] },
      { name: 'ROMPI', categoryId: categoryMap['FUTSAL'] },
      { name: 'BOLA', categoryId: categoryMap['VOLLY'] },
      { name: 'JERSY', categoryId: categoryMap['VOLLY'] },
      { name: 'LAPANGAN', categoryId: categoryMap['VOLLY'] },
      { name: 'ROMPI', categoryId: categoryMap['VOLLY'] },
    ],
  });

  console.log('Seeding finished.');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

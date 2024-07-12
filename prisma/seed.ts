import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const facilities = [
  'Parking',
  'Changing Rooms',
  'Showers',
  'Equipment Rental',
  'Cafeteria',
  'First Aid',
  'Wi-Fi',
];

const getRandomFacilities = () => {
  const numberOfFacilities = Math.floor(Math.random() * facilities.length) + 1;
  return Array.from(
    { length: numberOfFacilities },
    () => facilities[Math.floor(Math.random() * facilities.length)]
  ).join(', ');
};

const createProduct = (userId: string, categoryId: string) => ({
  name: faker.company.name(),
  userId,
  categoryId,
  location: faker.address.cityName(),
  address: faker.address.streetAddress(),
  facilities: getRandomFacilities(),
  pricePerHour: parseFloat(faker.commerce.price(10, 100)),
  pricePerDay: parseFloat(faker.commerce.price(100, 1000)),
  description: faker.lorem.paragraph(),
  imageUrl: faker.image.sports(),
});

const main = async () => {
  console.log('Start seeding ...');

  // Create roles
  const vendorRole = await prisma.role.create({
    data: {
      name: 'Vendor',
    },
  });

  const customerRole = await prisma.role.create({
    data: {
      name: 'Customer',
    },
  });

  // Create sample vendors
  const vendors = [];
  for (let i = 0; i < 5; i++) {
    const vendor = await prisma.user.create({
      data: {
        displayName: faker.name.fullName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        rolesId: vendorRole.id,
      },
    });
    vendors.push(vendor);
  }

  // Create sample customers
  for (let i = 0; i < 5; i++) {
    await prisma.user.create({
      data: {
        displayName: faker.name.fullName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        rolesId: customerRole.id,
      },
    });
  }

  // Create sample categories
  const categories = [];
  for (let i = 0; i < 3; i++) {
    const category = await prisma.categories.create({
      data: {
        name: `Category ${i + 1}`,
      },
    });
    categories.push(category);
  }

  // Create products for each vendor
  for (const vendor of vendors) {
    for (const category of categories) {
      for (let i = 0; i < 3; i++) {
        await prisma.product.create({
          data: createProduct(vendor.id, category.id),
        });
      }
    }
  }

  console.log('Seeding finished.');
};

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

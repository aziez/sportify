import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';

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
      name: 'vendor',
      users: {},
    },
  });
  const customer = await prisma.role.create({
    data: {
      name: 'customer',
      users: {},
    },
  });
  console.log(vendorRole);
  console.log(customer);
};

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

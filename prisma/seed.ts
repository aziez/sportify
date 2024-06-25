import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const vendor = await prisma.role.create({
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
  console.log(vendor);
  console.log(customer);
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

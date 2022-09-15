const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient()

async function createTest() {
    await prisma.user.deleteMany();
    console.log("Deleted all users");
    await prisma.user.createMany({
      data: [
        {email: "K@email", lastName: "To"},
        {email: "Eb@email", lastName: "Eb"},
        {email: "Summer@email", lastName: "Summer"}
      ],
      skipDuplicates: true,
    })
    console.log("Pushed users to DB");
}

createTest()
  .catch((e) => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

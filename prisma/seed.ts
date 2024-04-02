const { PrismaClient } = require("@prisma/client");
const { pickaxes } = require("./data.js");
const prisma = new PrismaClient();

const load = async () => {
  try {
    await prisma.pickaxe.deleteMany();
    console.log("Deleted records in pickaxe table");

    await prisma.$queryRaw`ALTER TABLE Pickaxe AUTO_INCREMENT = 1`;
    console.log("reset pickaxe auto increment to 1");

    await prisma.pickaxe.createMany({
      data: pickaxes,
    });
    console.log("Added pickaxe data");
  } catch (e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
};

load();

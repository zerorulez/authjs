const { PrismaClient } = require("@prisma/client");
const { tools } = require("./data.js");
const prisma = new PrismaClient();

const load = async () => {
  try {
    await prisma.tool.deleteMany();
    console.log("Deleted records in tool table");

    await prisma.$queryRaw`ALTER TABLE Tool AUTO_INCREMENT = 1`;
    console.log("reset tool auto increment to 1");

    await prisma.tool.createMany({
      data: tools,
    });
    console.log("Added tool data");
  } catch (e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
};

load();

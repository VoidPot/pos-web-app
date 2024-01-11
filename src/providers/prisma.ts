import { PrismaClient } from "@prisma/client";

const prismaClientSingleton = () => {
  return new PrismaClient({
    log: [
      {
        emit: "event",
        level: "query",
      },
      "info",
      "warn",
      "error",
    ],
  });
};

declare global {
  var prisma: undefined | ReturnType<typeof prismaClientSingleton>;
}

export const prisma = globalThis.prisma ?? prismaClientSingleton();

prisma.$on("query", (e) => {
  console.log("Query: " + e.query);
  console.log("Duration: " + e.duration + "ms");
});

export default prisma;

if (process.env.NODE_ENV !== "production") globalThis.prisma = prisma;

async function connect() {
  console.log("DATABASE :: Initializing prisma connecting");
  await prisma
    .$connect()
    .then(() => {
      console.log(
        "DATABASE :: Prisma connected to the database server ✅ ✅ ✅"
      );
    })
    .catch(async (error: any) => {
      await prisma.$disconnect();
      console.error(
        "DATABASE :: prisma failed to connect to the database",
        error
      );
      // process.exit(1);
    });

  process.on("SIGINT", async function () {
    await prisma.$disconnect().then(() => {
      console.error(
        "DATABASE :: Prisma disconnecting from the database server due to SIGINT"
      );
      process.exit(0);
    });
  });
}

async function disconnect() {
  return await prisma.$disconnect().then(() => {
    console.error("DATABASE :: Prisma disconnecting from the database server");
  });
}

export const database = {
  connect,
  disconnect,
};

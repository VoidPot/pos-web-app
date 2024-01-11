"use server";

import prisma from "@/providers/prisma";

export async function getStores() {
  const response = await prisma.store.findMany();
  return response;
}

export async function getStore(slug: string) {
  const response = await prisma.store.findUnique({
    where: {
      slug,
    },
    include: {
      addresses: true,
    },
  });
  return response;
}

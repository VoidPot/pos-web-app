"use server";

import prisma from "@/providers/prisma";

export async function getCategories() {
  const response = await prisma.category.findMany();
  return response;
}

export async function createCategory({
  name,
  deck,
  slug,
}: {
  name: string;
  deck: string;
  slug: string;
}) {
  const response = await prisma.category.create({
    data: {
      name,
      deck,
      store: {
        connect: {
          slug,
        },
      },
    },
  });

  return response;
}

export async function updateCategory({
  name,
  deck,
  slug,
  id,
}: {
  name: string;
  deck: string;
  slug: string;
  id: number;
}) {
  const response = await prisma.category.update({
    where: {
      id,
      store: {
        slug,
      },
    },
    data: {
      name,
      deck,
    },
  });

  return response;
}

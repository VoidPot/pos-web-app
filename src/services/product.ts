"use server";

import prisma from "@/providers/prisma";

export async function getProducts() {
  const response = await prisma.product.findMany();
  return response;
}

export async function createProduct({
  name,
  deck,
  slug,
  categoryId,
}: {
  name: string;
  deck: string;
  slug: string;
  categoryId: number;
}) {
  const response = await prisma.product.create({
    data: {
      name,
      deck,
      store: {
        connect: {
          slug,
        },
      },
      category: {
        connect: {
          id: categoryId,
        },
      },
    },
  });

  return response;
}

export async function updateProduct({
  name,
  deck,
  slug,
  id,
  categoryId,
}: {
  name: string;
  deck: string;
  slug: string;
  id: number;
  categoryId: number;
}) {
  const response = await prisma.product.update({
    where: {
      id,
      store: {
        slug,
      },
    },
    data: {
      name,
      deck,
      categoryId,
    },
  });

  return response;
}

"use server";

import prisma from "@/providers/prisma";

export async function getProducts() {
  const response = await prisma.product.findMany();
  return response;
}

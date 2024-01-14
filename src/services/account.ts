"use server";

import prisma from "@/providers/prisma";

export async function getAuthData(username: string) {
  const response = await prisma.account.findUnique({
    where: {
      username_type: {
        username,
        type: "BUSINESS",
      },
    },
    select: {
      salt: true,
      password: true,
      email: true,
      username: true,
      id: true,
    },
  });
  return response;
}

export async function getContextData(id: number) {
  const response = await prisma.account.findUnique({
    where: {
      id,
    },
    include: {
      connections: {
        include: {
          store: true,
        },
      },
    },
  });
  return response;
}

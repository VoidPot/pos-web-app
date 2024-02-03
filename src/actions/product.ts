"use server";

import { verifyPasswordHash } from "@/helpers/hash";
import { encodeJWT } from "@/helpers/jwt";
import { getAuthData } from "@/services/account";
import { createProduct } from "@/services/product";
import { ProductSchemaValues } from "@/validation";

export async function addProduct(
  slug: string,
  { name, deck, categoryId }: ProductSchemaValues
) {
  const product = await createProduct({
    slug,
    name,
    deck,
    categoryId: Number(categoryId),
  });

  if (product.id) {
    return {
      status: "success",
      message: null,
      data: product,
    };
  }

  return {
    status: "error",
    message: "NO_PASSWORD_ADDED",
    data: null,
  };
}

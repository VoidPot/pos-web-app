"use server";

import { verifyPasswordHash } from "@/helpers/hash";
import { encodeJWT } from "@/helpers/jwt";
import { getAuthData } from "@/services/account";

export async function login({
  username,
  password,
}: {
  username: string;
  password: string;
}) {
  const response = await getAuthData(username);
  if (response && response.id) {
    if (response.password && response.salt) {
      const validatePassword = verifyPasswordHash(
        password,
        response.password,
        response.salt
      );

      if (validatePassword) {
        const token = encodeJWT({
          id: response.id,
        });

        return {
          status: "success",
          message: null,
          data: { token },
        };
      }

      return {
        status: "error",
        message: "INCORRECT_PASSWORD",
        data: null,
      };
    }

    return {
      status: "error",
      message: "NO_PASSWORD_ADDED",
      data: null,
    };
  }

  return {
    status: "error",
    message: "USER_NOT_FOUND",
    data: null,
  };
}

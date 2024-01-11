import { pbkdf2Sync, generateKeySync } from "crypto";

export function passwordHashWithSalt(input: string, salt: string) {
  return pbkdf2Sync(input, salt, 1000, 64, `sha512`).toString(`hex`);
}

export function generatePasswordHash(password: string) {
  const salt = generateKeySync("hmac", { length: 512 })
    .export()
    .toString("hex");

  return [passwordHashWithSalt(password, salt), salt];
}

export function verifyPasswordHash(
  password: string,
  hash: string,
  salt: string,
) {
  const passwordHash = passwordHashWithSalt(password, salt);
  return hash === passwordHash;
}

import jwt, { SignOptions, VerifyOptions } from "jsonwebtoken";

const JWT_SIGN_OPTIONS: SignOptions = {
  expiresIn: Number(60 * 60 * 2), // sec * min * hrs = 2 hrs
  algorithm: "RS256",
  issuer: process.env.NEXT_PUBLIC_APP_NAME,
};

const JWT_VERIFY_OPTIONS: VerifyOptions = {
  algorithms: ["RS256"],
  issuer: process.env.NEXT_PUBLIC_APP_NAME,
};

export function encodeJWT(payload: { id: number }): string | undefined {
  const { PRIVATE_KEY, PASS_PHRASE } = process.env;

  if (!PRIVATE_KEY) {
    return undefined;
  }

  try {
    return jwt.sign(
      payload,
      {
        key: PRIVATE_KEY.split("/\\n/").join("\n"),
        passphrase: PASS_PHRASE || "",
      },
      JWT_SIGN_OPTIONS
    );
  } catch (error) {
    console.log("Error on JWT sign process", error);
    return undefined;
  }
}

export function decodeJWT(
  token: string
): { id: number; storeId?: number } | string {
  const { PUBLIC_KEY } = process.env;

  if (!PUBLIC_KEY) {
    return "UNEXPECTED_ERROR";
  }

  try {
    const decoded: any = jwt.verify(
      token,
      PUBLIC_KEY.split("/\\n/").join("\n"),
      JWT_VERIFY_OPTIONS
    );
    return decoded;
  } catch (error) {
    console.log("Error on JWT verify process", error);
    if (error instanceof Error) {
      return error.message.replace(" ", "_").toUpperCase();
    }
    return "INVALID_JWD_TOKEN";
  }
}

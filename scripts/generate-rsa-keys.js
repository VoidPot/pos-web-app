/* eslint-disable no-undef */
import { Command } from "commander";
import { generateKeyPair } from "crypto";
import { readFileSync, writeFileSync, existsSync } from "fs";
import { EOL } from "os";
import { resolve } from "path";

const variables = ["PUBLIC_KEY=", "PRIVATE_KEY=", "PASS_PHRASE="];

const program = new Command();

const envPath = resolve(".env");

const options = program
  .helpOption("-h, --help", "help message")
  .option("-p, --passphrase <string>", "provide a valid passphrase")
  .parse(process.argv)
  .opts();

async function setEnvValues(input) {
  try {
    if (!existsSync(envPath)) {
      writeFileSync(envPath, "");
    }
    // read file from hdd & split if from a line break to a array
    let ENV_VARS = readFileSync(envPath, "utf8").split(EOL);

    const itemsIndex = variables.map((each) => {
      return ENV_VARS.findIndex((e) => e.startsWith(each));
    });

    if (itemsIndex.some((e) => e < 0) && ENV_VARS[ENV_VARS.length - 1] !== "") {
      ENV_VARS.push("");
    }

    variables.forEach((name, i) => {
      const index = itemsIndex[i];
      const key = name.replace("=", "");
      const data = `${key}=${input[key]}`;

      if (index >= 0) {
        ENV_VARS[index] = data;
      } else {
        ENV_VARS.push(data);
      }
    });

    if (itemsIndex.some((e) => e < 0)) {
      ENV_VARS.push("");
    }

    // write everything back to the file system
    writeFileSync(envPath, ENV_VARS.join(EOL));
    return console.log("KEY PAIR ADDED TO THE .ENV FILE ✅ ✅ ✅");
  } catch (error) {
    console.error(error);
    console.error("❌ ❌ ERROR :: KEY PAIR START/END NOT FOUND ❌ ❌");
  }
}

async function generateKeys() {
  // The `generateKeyPairSync` method accepts two arguments:
  // 1. The type ok keys we want, which in this case is "rsa"
  // 2. An object with the properties of the key
  generateKeyPair(
    "rsa",
    {
      // The standard secure default length for RSA keys is 2048 bits
      modulusLength: 2048, // 4096
      // namedCurve: 'secp256k1',
      publicKeyEncoding: {
        type: "pkcs1", // spki
        format: "pem",
      },
      privateKeyEncoding: {
        // first of a family of standards called Public-Key Cryptography Standards
        type: "pkcs1", // pkcs8
        format: "pem",
        // set of rules used to encode the information
        cipher: "aes-256-cbc",
        // tell you how to arrange those rules
        passphrase: options.passphrase || "",
      },
    },
    async (error, publicKey, privateKey) => {
      if (error) {
        console.error("❌ ❌ ", error, " ❌ ❌");
        process.exit(0);
      }

      // For create a multiline string `"${publicKey}"`, `"${privateKey}"` and `"${options.passphrase}"`
      await setEnvValues({
        PUBLIC_KEY: publicKey.split(/\n/).join(/\n/),
        PRIVATE_KEY: privateKey.split(/\n/).join(/\n/),
        PASS_PHRASE: options.passphrase ? options.passphrase : "",
      });

      process.exit(0);
    }
  );
}

generateKeys();

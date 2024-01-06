import * as z from "zod";
import { string } from "./elements";

const email = string({ type: "email" });
const username = string({ type: "username", length: "4-20" });
const password = string({ length: "6-20" });

const schemas = {
  login: z.object({ username, password }),
  register: z.object({ email, username, password }),
};

export type RegisterSchemaValues = z.infer<typeof schemas.register>;
export type LoginSchemaValues = z.infer<typeof schemas.login>;

export default schemas;

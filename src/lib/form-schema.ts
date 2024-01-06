import * as z from "zod";

const messages = {
  required: "Required field",
  validString: "Must be a valid string",
  validEmail: "Must be a valid email address",
  char4to20: "Must be between 4 and 20 characters",
  char6to20: "Must be between 6 and 20 characters",
  usernameRegex: "Use letters, numbers, underscores, and hyphens", // "Can contain letters, numbers, underscores, and hyphens (between)",
};

const email = z
  .string({
    required_error: messages.required,
    invalid_type_error: messages.validString,
  })
  .email({ message: messages.validEmail });

const username = z
  .string({
    required_error: messages.required,
    invalid_type_error: messages.validString,
  })
  .min(4, {
    message: messages.char4to20,
  })
  .max(20, {
    message: messages.char4to20,
  })
  .regex(
    new RegExp(/^(?!-*\-\-)(?!-*\-$)[^\W][\w-]{0,20}$/),
    messages.usernameRegex
  );

const password = z
  .string({
    required_error: messages.required,
    invalid_type_error: messages.validString,
  })
  .min(4, {
    message: messages.char6to20,
  })
  .max(20, {
    message: messages.char6to20,
  });

const formSchema = {
  login: z.object({ username, password }),
  register: z.object({ email, username, password }),
};

export type RegisterFormValues = z.infer<typeof formSchema.register>;
export type LoginFormValues = z.infer<typeof formSchema.login>;

export default formSchema;

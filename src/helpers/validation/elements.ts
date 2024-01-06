import * as z from "zod";
import messages from "./messages";

export const string = (options?: {
  type?: "email" | "username";
  length?: "4-20" | "6-20";
}) => {
  const stringSchema = z.string({
    required_error: messages.required,
    invalid_type_error: messages.valid_email,
  });

  if (!options) {
    return stringSchema;
  }

  if (options.type === "email") {
    stringSchema.email({ message: messages.valid_email });
  }

  if (options.length === "4-20") {
    stringSchema
      .min(4, {
        message: messages.length4to20,
      })
      .max(20, {
        message: messages.length4to20,
      });
  }

  if (options.length === "6-20") {
    stringSchema
      .min(6, {
        message: messages.length6to20,
      })
      .max(20, {
        message: messages.length6to20,
      });
  }

  if (options.type === "username") {
    stringSchema.regex(
      new RegExp(/^(?!-*\-\-)(?!-*\-$)[^\W][\w-]{0,20}$/),
      messages.username_regex
    );
  }

  return stringSchema;
};

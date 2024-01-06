import messages from "@/helpers/validation/messages";

export type ErrorGroup = "googleSignIn" | "signUp" | "default";

export type ErrorType =
  | "USER_NOT_FOUND"
  | "INCORRECT_PASSWORD"
  | "EMAIL_EXIST"
  | "USERNAME_TAKEN"
  | "DEFAULT";

export type ErrorMessage = {
  [key in ErrorGroup]?: {
    [key in ErrorType]?: {
      title: string;
      description?: string;
      variant?: "default" | "destructive";
      action?: "default" | "redirect" | "validation" | "toast";
      path?: string;
    };
  };
};

const errorMessage: ErrorMessage = {
  googleSignIn: {
    USER_NOT_FOUND: {
      title: messages.user_not_exist,
      description:
        "This email id have not been registered to any account, try Google sign up!",
    },
  },
  signUp: {
    EMAIL_EXIST: {
      title: messages.email_taken,
      action: "validation",
      path: "email",
    },
    USERNAME_TAKEN: {
      title: messages.username_taken,
      action: "validation",
      path: "username",
    },
  },
  default: {
    DEFAULT: {
      title: messages.unexpected,
      description: "",
      variant: "destructive",
      action: "default",
    },
  },
};

export default errorMessage;

import messages from "@/validation/messages";

export type ErrorGroup = "login" | "signUp" | "default" | string;

export type ErrorType =
  | "USER_NOT_FOUND"
  | "INCORRECT_PASSWORD"
  | "EMAIL_EXIST"
  | "USERNAME_TAKEN"
  | "NO_PASSWORD_ADDED"
  | "INCORRECT_PASSWORD"
  | "UNAUTHORIZED_NOT_ALLOW"
  | "DEFAULT"
  | string;

export type ErrorMessage = {
  [key in ErrorGroup]?: {
    [key in ErrorType]?: {
      title: string;
      description?: string;
      variant?: "default" | "destructive";
      action?:
        | "default"
        | "redirect"
        | "validation"
        | "toast"
        | "logout-redirect";
      path?: string;
    };
  };
};

const errorMessage: ErrorMessage = {
  login: {
    USER_NOT_FOUND: {
      title: messages.username_not_exist,
      action: "validation",
      path: "username",
    },
    NO_PASSWORD_ADDED: {
      title: messages.username_not_exist,
      action: "validation",
      path: "username",
    },
    INCORRECT_PASSWORD: {
      title: messages.password_incorrect,
      action: "validation",
      path: "username",
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
      action: "toast",
    },
    UNAUTHORIZED_NOT_ALLOW: {
      title: messages.unexpected,
      action: "logout-redirect",
      path: "/",
    },
    JWT_EXPIRED: {
      title: messages.unexpected,
      action: "logout-redirect",
      path: "/",
    },
    JWT_MALFORMED: {
      title: messages.unexpected,
      action: "logout-redirect",
      path: "/",
    },
  },
};

export default errorMessage;

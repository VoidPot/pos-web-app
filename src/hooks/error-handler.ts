import { useToast } from "@/components/ui/use-toast";
import errorMessage, { ErrorGroup, ErrorType } from "@/lib/error-message";
import { UseFormSetError } from "react-hook-form";

const extractGQLError = (error: any) => {
  if (error.name === "ApolloError") {
    const gqlError = error?.graphQLErrors[0] || {};
    return {
      message: (error.message || "") as unknown as ErrorType,
      code: gqlError?.extensions.code || "",
      name: error.name || "",
      query: (gqlError.path?.length
        ? gqlError.path[0].toString()
        : "") as ErrorGroup,
    };
  }
  return {};
};

const extractErrorMessage = (
  group: string = "default",
  type: string = "DEFAULT"
) => {
  const errorGroup = errorMessage[group as ErrorGroup];
  if (errorGroup) {
    if (errorGroup[type as ErrorType]) {
      return errorGroup[type as ErrorType];
    }
    if (errorGroup["DEFAULT"]) {
      return errorGroup["DEFAULT"];
    }
  }
  return errorMessage.default?.DEFAULT;
};

export type UseErrorHandler = {
  name?: string;
  callback?: Function;
  setError?: UseFormSetError<any>;
};

const useErrorHandler = ({
  name = "default",
  callback,
  setError,
}: UseErrorHandler) => {
  const { toast } = useToast();

  const onError = (error?: any) => {
    if (error) {
      console.log(error);
    }
    if (callback) {
      callback();
    }
    const { query, message } = extractGQLError(error);
    const messageData = extractErrorMessage(query || name, message);

    console.log({ error, messageData, query, name, message });

    if (!messageData || !messageData.action || messageData.action === "toast") {
      toast({
        title: messageData?.title,
        description: messageData?.description,
        variant: messageData?.variant || "destructive",
      });
    }

    if (
      setError &&
      messageData &&
      messageData.path &&
      messageData.action === "validation"
    ) {
      setError(messageData.path, {
        type: "custom",
        message: messageData.title,
      });
    }

    if (
      window &&
      messageData &&
      messageData.path &&
      messageData.action === "redirect"
    ) {
      window.location.href = messageData.path;
    }
  };

  return { onError };
};

export default useErrorHandler;

"use client";
import React from "react";
import {
  // GoogleLogin,
  useGoogleOneTapLogin,
  useGoogleLogin,
} from "@react-oauth/google";
import { useMutation } from "@apollo/client";
import { useToast } from "@/components/ui/use-toast";
import { Icons } from "../atoms/icons";
import { Button } from "../ui/button";
import useErrorHandler from "@/hooks/error-handler";
import { GOOGLE_SIGN_IN } from "@/helpers/mutations";

type GoogleAuthProps = {
  mode?: "signIn" | "signUp";
};

function GoogleAuth({ mode = "signIn" }: GoogleAuthProps) {
  const { toast } = useToast();

  const [mutateFunction, { loading, reset }] = useMutation(GOOGLE_SIGN_IN);

  const { onError } = useErrorHandler({
    name: "googleSignIn",
    callback: () => {
      reset();
    },
  });

  const handleSuccess = (
    input: string | undefined,
    selectBy?: string | undefined
  ) => {
    mutateFunction({
      variables: {
        input: input || "",
        selectBy: selectBy,
      },
      onCompleted: (data) => {
        console.log({ data });
        toast({
          title: "Google authentication success",
          description: "Your has been logged in as the google user",
        });
      },
      onError,
    });
  };

  useGoogleOneTapLogin({
    onSuccess: (response) => {
      console.log({ response });
      handleSuccess(response.credential, response.select_by);
    },
    onError,
  });

  // const login = useGoogleLogin({
  //   flow: "auth-code",
  //   onSuccess: async (response) => {
  //     console.log({ response });
  //     handleSuccess(response.code, "btn_code");
  //   },
  //   onError,
  // });

  const login = useGoogleLogin({
    onSuccess: async (response) => {
      console.log({ response });
      handleSuccess(response.access_token, "btn_access_token");
    },
    onError,
  });

  // const proxyClick = () => {
  //   if (document) {
  //     const iframeBtn = document
  //       .querySelector("iframe")
  //       ?.contentDocument?.querySelector('[role="button"]');

  //     console.log({ iframeBtn });
  //   }
  // };

  return (
    <>
      <Button
        className="w-full"
        onClick={() => login()}
        disabled={loading}
        variant={"info"}
      >
        <Icons.google className="mr-2 h-4 w-4" />
        {mode === "signIn" ? "Sign in with Google" : "Sign up with Google"}
      </Button>
      {/* <GoogleLogin
        theme="filled_black"
        shape="circle"
        auto_select={true}
        useOneTap={true}
        ux_mode="popup"
        onSuccess={(response) => {
          console.log({ response });
          handleSuccess(response.credential, response.select_by);
        }}
        promptMomentNotification={(promptMomentNotification) =>
          console.log(promptMomentNotification)
        }
        context="use"
        onError={onError}
        login_uri="/account/google-login"
        native_login_uri="/account/login"
        prompt_parent_id="google_auth"
        cancel_on_tap_outside={true}
      /> */}
    </>
  );
}

export default GoogleAuth;

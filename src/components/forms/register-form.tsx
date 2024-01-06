"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { AnimatePresence } from "framer-motion";
import { useMutation, useLazyQuery } from "@apollo/client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import schemas, { RegisterSchemaValues } from "@/helpers/validation";
import { SIGN_UP } from "@/helpers/mutations";
import useErrorHandler from "@/hooks/error-handler";
import { useEffect } from "react";
import { USERNAME_EXIST, EMAIL_EXIST } from "@/helpers/queries";

const defaultValues: Partial<RegisterSchemaValues> = {};

export function RegisterForm() {
  const form = useForm<RegisterSchemaValues>({
    resolver: zodResolver(schemas.register),
    defaultValues,
    mode: "onSubmit",
  });
  const { setError, watch, clearErrors } = form;
  const [mutateFunction, { loading, reset }] = useMutation(SIGN_UP);

  // const [checkUsername] = useLazyQuery(USERNAME_EXIST, {
  //   onCompleted: ({ usernameExist }) => {
  //     if (usernameExist) {
  //       setError("username", {
  //         type: "custom",
  //         message: "Username already in use",
  //       });
  //     } else {
  //       clearErrors("username");
  //     }
  //   },
  // });

  const { onError } = useErrorHandler({
    name: "signUp",
    callback: () => {
      reset();
    },
    setError,
  });

  const watchUsername = watch("username");

  // useEffect(() => {
  //   if (watchUsername) {
  //     checkUsername({
  //       variables: {
  //         username: watchUsername,
  //       },
  //     });
  //   } else {
  //     clearErrors("username");
  //   }
  // }, [checkUsername, clearErrors, watchUsername]);

  function onSubmit(variables: RegisterSchemaValues) {
    mutateFunction({
      variables,
      onCompleted: (data) => {
        console.log({ data });

        toast({
          title: "You have registered",
          description: (
            <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
              <code className="text-white">
                {JSON.stringify(data, null, 2)}
              </code>
            </pre>
          ),
        });
      },
      onError,
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              {/* <FormLabel>Profile Name</FormLabel> */}
              <FormControl>
                <div className="flex justify-center align-middle items-center relative">
                  <span className="text-base absolute left-3">
                    soclif.com/@
                  </span>
                  <Input
                    placeholder="username"
                    className=" pl-[105px]"
                    autoComplete="username"
                    {...field}
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              {/* <FormLabel>Email</FormLabel> */}
              <FormControl>
                <Input autoComplete="email" placeholder="Email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              {/* <FormLabel>Password</FormLabel> */}
              <FormControl>
                <Input
                  autoComplete="new-password"
                  placeholder="Password"
                  type="password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="w-full mt-8" type="submit" disabled={loading}>
          Next
        </Button>
      </form>
    </Form>
  );
}

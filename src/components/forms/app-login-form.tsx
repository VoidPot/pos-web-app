"use client";

import { useMutation } from "@apollo/client";
import { useRouter } from "next/navigation";
import { setCookie } from "cookies-next";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import schemas, { LoginSchemaValues } from "@/validation";
import { LOGIN } from "@/gql/mutations";
import useErrorHandler from "@/hooks/error-handler";
import { Connection_Role } from "@/__generated__/graphql";
// import { toast } from "../ui/use-toast";

const defaultValues: Partial<LoginSchemaValues> = {};

type AppLoginFormProps = {
  redirect: string;
};

function AppLoginForm({ redirect }: AppLoginFormProps) {
  const router = useRouter();
  const form = useForm<LoginSchemaValues>({
    resolver: zodResolver(schemas.login),
    defaultValues,
    mode: "onSubmit",
  });
  const { setError } = form;
  const [mutateFunction, { reset, loading }] = useMutation(LOGIN);

  const { onError } = useErrorHandler({
    name: "login",
    callback: () => {
      reset();
    },
    setError,
  });

  function onSubmit(variables: LoginSchemaValues) {
    mutateFunction({
      variables,
      onCompleted: (data) => {
        setCookie("token", data.login.payload?.token), {};
        router.push(redirect);
      },
      onError,
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              {/* <FormLabel>Password</FormLabel> */}
              <FormControl>
                <Input
                  placeholder="Username"
                  autoComplete="username"
                  {...field}
                />
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

export default AppLoginForm;

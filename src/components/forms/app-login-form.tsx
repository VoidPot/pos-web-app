"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import cookies from "js-cookie";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import schemas, { LoginSchemaValues } from "@/validation";
import { login } from "@/actions/auth";
import { useRouter } from "next/navigation";
import useErrorHandler from "@/hooks/error-handler";

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

  const { onError } = useErrorHandler({
    name: "login",
    callback: () => {},
    setError,
  });

  async function onSubmit(variables: LoginSchemaValues) {
    const response = await login(variables);
    if (response.status === "success" && response.data?.token) {
      cookies.set("token", response.data?.token);
      router.push(redirect);
    } else {
      onError(response);
    }
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
        <Button className="w-full mt-8" type="submit">
          Next
        </Button>
      </form>
    </Form>
  );
}

export default AppLoginForm;

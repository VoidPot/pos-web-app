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
import schemas, { RegisterSchemaValues } from "@/validation";

const defaultValues: Partial<RegisterSchemaValues> = {};

export function RegisterForm() {
  const form = useForm<RegisterSchemaValues>({
    resolver: zodResolver(schemas.register),
    defaultValues,
    mode: "onSubmit",
  });
  const { setError, watch, clearErrors } = form;
  // const [mutateFunction, { loading, reset }] = useMutation();

  // const { onError } = useErrorHandler({
  //   name: "signUp",
  //   callback: () => {
  //     reset();
  //   },
  //   setError,
  // });

  const watchUsername = watch("username");

  function onSubmit(variables: RegisterSchemaValues) {
    // mutateFunction({
    //   variables,
    //   onCompleted: (data) => {
    //     console.log({ data });
    //     toast({
    //       title: "You have registered",
    //       description: (
    //         <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
    //           <code className="text-white">
    //             {JSON.stringify(data, null, 2)}
    //           </code>
    //         </pre>
    //       ),
    //     });
    //   },
    //   onError,
    // });
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
                    mealpot.app/@
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
        <Button className="w-full mt-8" type="submit">
          Next
        </Button>
      </form>
    </Form>
  );
}

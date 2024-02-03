"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import cookies from "js-cookie";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import schemas, { ProductSchemaValues } from "@/validation";
import { useRouter } from "next/navigation";
import useErrorHandler from "@/hooks/error-handler";
import { useEffect } from "react";
import { addProduct } from "@/actions/product";

type ProductFormProps = {
  id?: number;
  defaultValues?: Partial<ProductSchemaValues>;
  categories: { value: string; label: string }[];
};

function ProductForm({
  id,
  defaultValues = {},
  categories = [],
}: ProductFormProps) {
  console.log({ defaultValues, categories, id });
  const isEdit = id && id !== 0 ? true : false;
  // const router = useRouter();
  const form = useForm<ProductSchemaValues>({
    resolver: zodResolver(schemas.login),
    defaultValues,
    mode: "onSubmit",
  });

  const { setError, reset, setValue } = form;

  // const { onError } = useErrorHandler({
  //   name: "login",
  //   callback: () => {},
  //   setError,
  // });

  async function onSubmit(variables: ProductSchemaValues) {
    console.log({ isEdit, variables });
    if (isEdit) {
    } else {
      const create = await addProduct("a-canteen", variables);
      console.log({ create });
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              {/* <FormLabel>Password</FormLabel> */}
              <FormControl>
                <Input placeholder="Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="deck"
          render={({ field }) => (
            <FormItem>
              {/* <FormLabel>Password</FormLabel> */}
              <FormControl>
                <Input placeholder="Description" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="categoryId"
          render={({ field }) => (
            <FormItem>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {categories.map((e, i) => (
                    <SelectItem key={i} value={e.value}>
                      {e.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="w-full mt-8" type="submit">
          Submit
        </Button>
      </form>
    </Form>
  );
}

export default ProductForm;

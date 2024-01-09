"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import * as z from "zod";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";

const FormSchema = z.object({
  store: z.string({
    required_error: "Please select a store.",
  }),
});

type Store = {
  value: string;
  label: string;
};

export function MyStoresForm({ stores }: { stores: Store[] }) {
  const router = useRouter();
  const [disabled, setDisabled] = useState(false);
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  const { watch } = form;
  const selected = watch("store");

  function onSubmit(input: z.infer<typeof FormSchema>) {
    setDisabled(true);
    router.push(`/store?slug=${input?.store}`);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="store"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              {/* <FormLabel>Language</FormLabel> */}
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      role="combobox"
                      className={cn(
                        "w-full justify-between",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value
                        ? stores.find((store) => store.value === field.value)
                            ?.label
                        : "Select store"}
                      <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-[200px] p-0">
                  <Command>
                    <CommandInput
                      placeholder="Search stores..."
                      className="h-9"
                    />
                    <CommandEmpty>No store found.</CommandEmpty>
                    <CommandGroup>
                      {stores.map((store) => (
                        <CommandItem
                          value={store.label}
                          key={store.value}
                          onSelect={() => {
                            form.setValue("store", store.value);
                          }}
                        >
                          {store.label}
                          <CheckIcon
                            className={cn(
                              "ml-auto h-4 w-4",
                              store.value === field.value
                                ? "opacity-100"
                                : "opacity-0"
                            )}
                          />
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </Command>
                </PopoverContent>
              </Popover>
              <FormDescription>
                Select one of the store to launch the application.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          width={"full"}
          disabled={disabled || !Boolean(selected)}
        >
          Submit
        </Button>
      </form>
    </Form>
  );
}

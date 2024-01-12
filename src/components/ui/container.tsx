import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const containerVariants = cva("", {
  variants: {
    variant: {
      default: "",
      screen_flex_row: "flex min-h-fill w-full h-full",
      sidebar: "",
    },
    size: {
      default: "",
    },
    align: {
      default: "w-[",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
    align: "default",
  },
});

export interface ContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof containerVariants> {
  asChild?: boolean;
}

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "div";
    return (
      <Comp
        className={cn(containerVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Container.displayName = "Container";

export { Container, containerVariants };

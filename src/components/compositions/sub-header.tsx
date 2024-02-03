"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { IoAddCircle } from "react-icons/io5";
import clsx from "clsx";

function SubHeader({
  hed,
  dek,
  onClick,
  variant = "default",
}: {
  hed: string;
  dek: string;
  onClick?: () => any;
  variant: "default" | "sub";
}) {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <div className="flex justify-between">
      <div>
        <h2
          className={clsx("font-medium", {
            "text-xl": variant === "default",
            "text-lg": variant === "sub",
          })}
        >
          {hed}
        </h2>
        <p
          className={clsx("text-slate-500", {
            "pt-2 text-base": variant === "default",
            "pt-1 text-sm": variant === "sub",
          })}
        >
          {dek}
        </p>
      </div>
      {variant === "default" && (
        <Button
          className="flex justify-end gap-2 font-normal"
          onClick={handleClick}
        >
          <span>New</span>
          <IoAddCircle className="h-6 w-6" />
        </Button>
      )}
    </div>
  );
}

export default SubHeader;

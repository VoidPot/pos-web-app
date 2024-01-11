import React from "react";

import BrandSideBySide from "@/components/brand/side-by-side";
import { UserActionDropdown } from "@/components/compositions/user-actions-dropdown";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ThemeModeToggle } from "@/components/compositions/theme-mode-toggle";

function SlugLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col justify-between align-middle items-center min-h-fill px-6">
      <div className="p-6 grid grid-cols-1 justify-center gap-4">
        <div className="flex gap-2 justify-center align-middle items-center border border-secondary rounded-lg shadow-sm py-4 px-2">
          <Avatar className="cursor-pointer select-none bg-secondary">
            <AvatarImage src="https://github.com/shasdcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="flex flex-col text-secondary-foreground justify-center align-middle items-start">
            <p className="text-md">Mani Raja</p>
            <span className="text-xs font-semibold">Admin</span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 justify-center">
          <ThemeModeToggle />
          <Button variant={"outline"}>Logout</Button>
        </div>
      </div>

      <div className="grow w-full my-6 flex flex-col justify-center align-middle items-center gap-4">
        <BrandSideBySide className="h-10 mb-10" />
        <div></div>
        {children}
      </div>
    </div>
  );
}

export default SlugLayout;

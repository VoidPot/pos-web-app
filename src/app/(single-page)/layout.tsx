import React from "react";

import BrandSideBySide from "@/components/brand/side-by-side";
import { UserActionDropdown } from "@/components/compositions/user-actions-dropdown";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ThemeModeToggle } from "@/components/compositions/theme-mode-toggle";
import { Anchor } from "@/components/ui/anchor";
import Link from "next/link";
import BrandStackSlogan from "@/components/brand/stack-with-slogan";

function StoresLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col justify-between align-middle items-center min-h-fill px-4 md:px-6">
      <div className="flex justify-between w-full align-middle items-center py-2">
        <div className="flex gap-2 rounded-xl justify-center align-middle items-center select-none">
          <Avatar className="cursor-pointer select-none border-secondary-foreground border">
            <AvatarImage src="https://github.com/shasdcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="flex flex-col text-secondary-foreground justify-center align-middle items-start">
            <p className="text-md">Mani Raja</p>
            <span className="text-xs font-semibold">Admin</span>
          </div>
        </div>
        <div className="h-auto hidden md:flex">
          <BrandSideBySide className="h-8" />
        </div>

        <div className="flex justify-center align-middle items-center gap-2">
          <ThemeModeToggle />
          <Link legacyBehavior href={"/logout"}>
            <Anchor variant={"outline"}>Logout</Anchor>
          </Link>
        </div>
      </div>

      <div className="grow w-full my-10 flex flex-col justify-center align-middle items-center gap-8">
        {children}
      </div>
    </div>
  );
}

export default StoresLayout;

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
    <div className="flex flex-col justify-between align-middle items-center container-min-h-fill px-4">
      {/* <div className="h-16 w-full flex justify-between align-middle items-center top-0 left-0 right-0 bg-secondary px-4">
        <div className="absolute left-0 right-0 h-16 flex justify-center align-middle items-center">
      <h5>A Canteen</h5>
    </div>
      </div> */}

      {/* <UserActionDropdown /> */}
      <div className="absolute left-6 top-4 flex gap-2 rounded-xl justify-center align-middle items-center select-none">
        <Avatar className="cursor-pointer select-none border-secondary-foreground border">
          <AvatarImage src="https://github.com/shasdcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="flex flex-col text-secondary-foreground justify-center align-middle items-start">
          <p className="text-md">Mani Raja</p>
          <span className="text-xs font-semibold">Admin</span>
        </div>
      </div>

      <div className="absolute right-6 top-4 flex justify-center align-middle items-center gap-4">
        <ThemeModeToggle />
        <Link legacyBehavior href={"/logout"}>
          <Anchor variant={"outline"}>Logout</Anchor>
        </Link>
      </div>

      <div className="grow w-full my-10 flex flex-col justify-center align-middle items-center gap-8">
        <div className="h-auto md:absolute top-5">
          <BrandStackSlogan className="h-32" />
        </div>
        {children}
      </div>
    </div>
  );
}

export default StoresLayout;

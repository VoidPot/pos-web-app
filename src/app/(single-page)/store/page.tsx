"use client";

import ToggleApps from "@/components/compositions/toggle-apps";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function Store() {
  const searchParams = useSearchParams();
  const slug = searchParams.get("slug");

  useEffect(() => {
    if (!slug) {
      window.location.href = "/stores";
    }
  }, [slug]);

  return (
    <>
      <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center align-middle items-center">
        <Avatar className="cursor-pointer select-none w-24 h-24 md:h-40 md:w-40 md:text-6xl text-4xl">
          <AvatarImage src="https://github.com/shasdcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

        <div className="flex flex-col text-secondary-foreground justify-center align-middle items-center md:items-start gap-4">
          <div className="flex flex-col justify-center align-middle items-center md:items-start">
            <p className="text-2xl">Super Spicey Canteen</p>
            <span className="text-lg font-semibold">sup-canteen</span>
          </div>
          <div className="flex flex-col justify-center align-middle items-center md:items-start">
            <span className="text-sm">102, Gandhi Nagar</span>
            <span className="text-sm">Tiruvannamalai</span>
          </div>
        </div>
      </div>

      <ToggleApps slug={slug || ""} />
    </>
  );
}

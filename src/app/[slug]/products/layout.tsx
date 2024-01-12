import type { Metadata } from "next";
import Link from "next/link";
import { ThemeModeToggle } from "@/components/compositions/theme-mode-toggle";
import BrandStackSlogan from "@/components/brand/stack-with-slogan";
import { Container } from "@/components/ui/container";
import BrandStack from "@/components/brand/stack";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { BiRestaurant } from "react-icons/bi";
import { IoRestaurantOutline } from "react-icons/io5";
import { Button } from "@/components/ui/button";
import { FiPrinter } from "react-icons/fi";
import { FaKitchenSet } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
import { TbDeviceIpadMinus } from "react-icons/tb";

export const metadata: Metadata = {
  title: "POS | MealPot.app",
  description: "MealPot Point Of Sale application",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Container variant={"screen_flex_row"}>
      <Container className="w-[200px] flex justify-center flex-col align-middle items-center py-8 px-4">
        <Container className="grow">
          <IoRestaurantOutline className="m-auto w-1/4 h-auto mb-2" />
          <Container className="text-center">
            <p className="text-sm font-semibold ">TastyTidbits Tavern</p>
            <p className="text-xs text-slate-600 pt-1">
              1234 NW Bobcat Lane, St. Robert, MO 65584-5678
            </p>
          </Container>
          <Separator className="my-4" />
          <Separator className="my-4" />
          <Container className="flex flex-col gap-2 text-center">
            <p className="text-base font-semibold ">Applications</p>
            <Button variant={"ghost"} className="flex gap-2">
              <FiPrinter className="h-6 w-6" /> POS
            </Button>
            <Button variant={"ghost"} className="flex gap-2">
              <TbDeviceIpadMinus className="h-6 w-6" /> CAP
            </Button>
            <Button variant={"ghost"} className="flex gap-2">
              <FiPrinter className="h-6 w-6" /> KDS
            </Button>
            <Button variant={"ghost"} className="flex gap-2">
              <FaCartShopping className="h-6 w-6" /> POD
            </Button>
          </Container>
          <Separator className="my-4" />
        </Container>
        <Separator className="my-4" />

        <Container className="w-full">
          <div className="flex gap-2 justify-center align-middle items-center">
            <Avatar className="cursor-pointer select-none bg-secondary-foreground">
              <AvatarImage
                src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=3220&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="@shadcn"
              />
              <AvatarFallback className="bg-secondary-foreground text-secondary">
                CN
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col text-secondary-foreground justify-center align-middle items-start">
              <p className="text-base font-semibold ">Mani Raja</p>
              <span className="text-sm text-slate-600">Admin</span>
            </div>
          </div>
        </Container>
        <Separator className="my-4" />
        <BrandStack className="w-2/4" />
      </Container>
      <Container className="border-l-2 border-secondary">{children}</Container>
    </Container>
  );
}

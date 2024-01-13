import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import BrandStack from "@/components/brand/stack";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import Icon, { IconKey } from "@/components/atoms/icon";
import MenuItem from "@/components/atoms/menu-item";

type Menu = {
  icon: IconKey;
  label: string;
};

const AppMenus: Menu[] = [
  {
    icon: "FiPrinter",
    label: "Billing / Orders",
  },
  {
    icon: "TbDeviceIpadMinus",
    label: "Table Orders",
  },
  {
    icon: "MdSoupKitchen",
    label: "Kitchen Display",
  },
  {
    icon: "FaCartShopping",
    label: "Customer Display",
  },
];

const SettingMenus: Menu[] = [
  {
    icon: "RiAccountPinCircleFill",
    label: "Account",
  },
  {
    icon: "MdEventAvailable",
    label: "Availability",
  },
  {
    icon: "IoFastFoodSharp",
    label: "Products",
  },
  {
    icon: "FaTags",
    label: "Tags",
  },
];

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
      <Container className=" w-2/12 flex justify-center flex-col align-middle items-center py-8 px-4 border-r-2 border-secondary">
        <Container className="grow">
          <Icon
            className="m-auto w-1/4 h-auto mb-2 text-primary"
            name="IoRestaurantOutline"
          />
          <Container className="text-center">
            <p className="text-sm font-semibold ">TastyTidbits Tavern</p>
            <p className="text-xs text-slate-600 pt-1">
              1234 NW Bobcat Lane, St. Robert, MO 65584-5678
            </p>
          </Container>
          <Separator className="my-8" />
          <Container className="flex flex-col gap-2 text-right">
            <p className="text-base font-semibold px-4">Applications</p>
            {AppMenus.map((each, key) => (
              <MenuItem {...each} key={key} />
            ))}
          </Container>
          <Separator className="my-4" />
          <Container className="flex flex-col gap-2 text-right">
            <p className="text-base font-semibold px-4">Settings</p>
            {SettingMenus.map((each, key) => (
              <MenuItem {...each} key={key} />
            ))}
            <Separator className="my-2" />

            <MenuItem icon="IoLogOut" label="Logout" />
          </Container>
        </Container>

        <Separator className="my-4" />
        <Container className="w-full">
          <div className="flex gap-2 justify-end align-middle items-center px-4">
            <div className="flex flex-col text-secondary-foreground justify-center align-middle items-end">
              <p className="text-base font-semibold ">John Wick</p>
              <span className="text-sm text-slate-600">Admin</span>
            </div>
            <Avatar className="cursor-pointer select-none bg-secondary-foreground">
              <AvatarImage
                src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=3220&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="@shadcn"
              />
              <AvatarFallback className="bg-secondary-foreground text-secondary">
                CN
              </AvatarFallback>
            </Avatar>
          </div>
        </Container>
        <Separator className="my-4" />
        <BrandStack className="w-full h-14" />
      </Container>
      {children}
    </Container>
  );
}

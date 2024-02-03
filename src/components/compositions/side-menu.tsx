import { Container } from "@/components/ui/container";
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

function SideMenu() {
  return (
    <Container className="grow">
      <Icon
        className="m-auto w-1/4 mb-2 text-primary h-auto"
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
  );
}

export default SideMenu;

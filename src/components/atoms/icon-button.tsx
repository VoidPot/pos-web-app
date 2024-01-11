import { FiPrinter } from "react-icons/fi";
import { FaKitchenSet } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
import { TbDeviceIpadMinus } from "react-icons/tb";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { Anchor } from "../ui/anchor";
import Link from "next/link";
import { Button } from "../ui/button";

const IconList = {
  FiPrinter,
  FaKitchenSet,
  FaCartShopping,
  TbDeviceIpadMinus,
};

interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  iconClass?: string;
  icon: keyof typeof IconList;
}

export function IconButton({
  label,
  icon,
  iconClass,
  children,
  ...props
}: IconButtonProps) {
  const IconComp = IconList[icon];

  return (
    <Button
      variant="secondary"
      size={"auto"}
      className="flex flex-col p-4"
      {...props}
    >
      {children}
      <IconComp className="h-10 w-10" />
      <p className="text-lg font-bold ">{label}</p>
    </Button>
  );
}

export default IconButton;

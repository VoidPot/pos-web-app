"use client";

import { FiPrinter } from "react-icons/fi";
import { FaKitchenSet } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
import { TbDeviceIpadMinus } from "react-icons/tb";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

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
  redirectPath?: string;
}

export function IconButton({
  label,
  icon,
  iconClass,
  children,
  redirectPath,
  onClick,
  ...props
}: IconButtonProps) {
  const router = useRouter();
  const IconComp = IconList[icon];

  const onClickHandler = (event: any) => {
    console.log({ event, redirectPath });
    if (onClick) {
      onClick(event);
    }
    if (redirectPath) {
      router.push(redirectPath);
    }
  };

  return (
    <Button
      variant="secondary"
      size={"auto"}
      className="flex flex-col p-4"
      onClick={onClickHandler}
      {...props}
    >
      {children}
      <IconComp className="h-10 w-10" />
      <p className="text-lg font-bold ">{label}</p>
    </Button>
  );
}

export default IconButton;

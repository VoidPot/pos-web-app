import React from "react";
import { BiRestaurant } from "react-icons/bi";
import { IoRestaurantOutline } from "react-icons/io5";
import { FiPrinter } from "react-icons/fi";
import { FaKitchenSet } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
import { TbDeviceIpadMinus } from "react-icons/tb";
import { RiAccountPinCircleFill } from "react-icons/ri";
import { MdSoupKitchen } from "react-icons/md";
import { MdEventAvailable } from "react-icons/md";
import { IoFastFoodSharp } from "react-icons/io5";
import { FaTags } from "react-icons/fa6";
import { IoLogOut } from "react-icons/io5";

const icons = {
  BiRestaurant,
  IoRestaurantOutline,
  FiPrinter,
  FaKitchenSet,
  TbDeviceIpadMinus,
  FaCartShopping,
  RiAccountPinCircleFill,
  MdSoupKitchen,
  MdEventAvailable,
  IoFastFoodSharp,
  FaTags,
  IoLogOut,
};

export type IconKey = keyof typeof icons;

type IconProps = {
  className?: string;
  name: keyof typeof icons;
};

function Icon(props: IconProps) {
  const IconComp = icons[props.name];
  return <IconComp />;
}

export default Icon;

import { FiPrinter } from "react-icons/fi";
import { FaKitchenSet } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
import { RiAccountCircleLine } from "react-icons/ri";
import { TbDeviceIpadMinus } from "react-icons/tb";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { Anchor } from "../ui/anchor";
import Link from "next/link";

export function ToggleApps({ slug }: { slug: string }) {
  return (
    <div className="w-full max-w-sm md:max-w-5xl flex gap-3 text-secondary-foreground flex-wrap justify-center align-middle select-none py-8 flex-col">
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase ">
          <span className="bg-background px-2 text-muted-foreground">
            Switch between applications
          </span>
        </div>
      </div>
      <div className="flex flex-row justify-center flex-wrap gap-4 md:gap-6 pt-8">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link legacyBehavior href={`/cap?slug=${slug}`}>
                <Anchor variant="ghost" size={"auto"} className="flex flex-col">
                  <TbDeviceIpadMinus className="h-8 w-8 md:h-16 md:w-16" />
                  <p className="text-lg font-extrabold ">Captain</p>
                </Anchor>
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>
                Quick Order Taking, Push Order from table to kitchen directly
              </p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link legacyBehavior href={`/cap?slug=${slug}`}>
                <Anchor variant="ghost" size={"auto"} className="flex flex-col">
                  <FiPrinter className="h-8 w-8 md:h-16 md:w-16" />
                  <p className="text-lg font-extrabold ">POS</p>
                </Anchor>
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>Billing and accounting software</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link legacyBehavior href={`/kds?slug=${slug}`}>
                <Anchor variant="ghost" size={"auto"} className="flex flex-col">
                  <FaKitchenSet className="h-8 w-8 md:h-16 md:w-16" />
                  <p className="text-lg font-extrabold ">KDS</p>
                </Anchor>
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>Kitchen order token display software</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link legacyBehavior href={`/pod?slug=${slug}`}>
                <Anchor variant="ghost" size={"auto"} className="flex flex-col">
                  <FaCartShopping className="h-8 w-8 md:h-16 md:w-16" />
                  <p className="text-lg font-extrabold ">POD</p>
                </Anchor>
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>Public order status display software</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  );
}

export default ToggleApps;

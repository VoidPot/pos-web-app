import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function extractClassNames(className?: string | string[]) {
  if (!className || !className.length) {
    return [""];
  }
  if (typeof className === "string") {
    return [className];
  }
  return className;
}

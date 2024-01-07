import type { Metadata } from "next";
import SideBySideLayout from "@/next-shared/components/layouts/side-by-side";

export const metadata: Metadata = {
  title: "POS | MealPot.app",
  description: "MealPot Point Of Sale application",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SideBySideLayout>{children}</SideBySideLayout>;
}

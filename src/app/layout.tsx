import type { Metadata } from "next";
import { ApolloNextAppProvider } from "@apollo/experimental-nextjs-app-support/ssr";

import { ThemeProvider } from "@/providers/theme-provider";
import { makeClient } from "@/providers/apollo-provider";
import { Toaster } from "@/components/ui/toaster";
import "../styles/globals.scss";

export const metadata: Metadata = {
  title: "MealPot",
  description: "POS application for restaurants",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <ApolloNextAppProvider makeClient={makeClient}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <Toaster />
          </ThemeProvider>
        </ApolloNextAppProvider>
      </body>
    </html>
  );
}

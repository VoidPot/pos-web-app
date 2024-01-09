import Dashboard from "@/next-shared/components/layouts/dashboard";
import React from "react";

function StoresLayout({ children }: { children: React.ReactNode }) {
  return <Dashboard>{children}</Dashboard>;
}

export default StoresLayout;

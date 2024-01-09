import Dashboard from "@/next-shared/components/layouts/dashboard";
import React from "react";

function DashboardLayout({ children }: { children: React.ReactNode }) {
  return <Dashboard>{children}</Dashboard>;
}

export default DashboardLayout;

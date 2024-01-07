import { Connection_Role } from "@/next-shared/__generated__/graphql";
import StoreLogin from "@/next-shared/components/pages/store-login";
import React from "react";

function Dashboard() {
  return (
    <StoreLogin
      redirect="/dashboard"
      roles={[
        Connection_Role.Admin,
        Connection_Role.Biller,
        Connection_Role.Manager,
      ]}
    />
  );
}

export default Dashboard;

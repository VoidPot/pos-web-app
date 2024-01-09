import React from "react";

import BrandSideBySide from "@/components/brand/side-by-side";
import { UserActionDropdown } from "@/components/compositions/user-actions-dropdown";

function StoresLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col justify-center align-middle items-center container-min-h-fill">
      <div className="h-16 w-full fixed flex justify-between align-middle items-center top-0 left-0 right-0 bg-secondary px-4">
        <BrandSideBySide className="h-6" />
        {/* <div className="absolute left-0 right-0 h-16 flex justify-center align-middle items-center">
      <h5>A Canteen</h5>
    </div> */}
        <UserActionDropdown />
      </div>
      <div className="mt-16">{children}</div>
    </div>
  );
}

export default StoresLayout;

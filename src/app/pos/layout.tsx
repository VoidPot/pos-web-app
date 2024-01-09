import React from "react";

function POSLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col justify-center align-middle items-center container-min-h-fill">
      <div className="">{children}</div>
    </div>
  );
}

export default POSLayout;

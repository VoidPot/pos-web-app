"use client";

import { useRouter } from "next/navigation";
import { deleteCookie } from "cookies-next";

function Logout() {
  const router = useRouter();

  deleteCookie("token");
  router.push("/");

  return (
    <div className="grow w-full my-10 flex flex-col justify-center align-middle items-center gap-8">
      <p className="text-md">Logging out you....</p>
    </div>
  );
}

export default Logout;

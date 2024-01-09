"use client";

import { useRouter } from "next/navigation";
import { deleteCookie } from "cookies-next";

function Logout() {
  const router = useRouter();

  deleteCookie("token");
  return router.push("/");
}

export default Logout;

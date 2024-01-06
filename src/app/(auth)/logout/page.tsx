"use client";
import React, { useEffect } from "react";
import { googleLogout } from "@react-oauth/google";

function Logout() {
  useEffect(() => {
    googleLogout();
  }, []);
  return <div>Logout</div>;
}

export default Logout;

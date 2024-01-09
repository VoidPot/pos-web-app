"use client";

import ToggleApps from "@/components/compositions/toggle-apps";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function Store() {
  const searchParams = useSearchParams();
  const slug = searchParams.get("slug");

  useEffect(() => {
    if (!slug) {
      window.location.href = "/stores";
    }
  }, [slug]);

  return (
    <div>
      <ToggleApps slug={slug || ""} />
    </div>
  );
}

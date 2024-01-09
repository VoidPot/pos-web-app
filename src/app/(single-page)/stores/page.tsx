"use client";

import { Suspense, useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { STORES } from "@/gql/queries";
import { useRouter } from "next/navigation";
import useErrorHandler from "@/hooks/error-handler";
import { MyStoresForm } from "@/components/forms/my-stores-form";

function Loading() {
  return <p>Loading....</p>;
}

export default function Stores() {
  const router = useRouter();
  const { onError } = useErrorHandler({ name: "stores" });
  const { data, loading } = useQuery(STORES, {
    onError,
  });

  const stores = data?.stores || [];
  const storesData = stores.map((e) => ({
    label: e?.name || "",
    value: e?.slug || "",
  }));

  useEffect(() => {
    if (data?.stores && data?.stores.length) {
      if (data.stores.length === 1 && data?.stores[0]?.slug) {
        router.push(`/store?slug=${data?.stores[0].slug}`);
      }
    }
  }, [data?.stores, router]);

  if (loading || stores.length === 1) {
    return <p className="text-md">Processing....</p>;
  }

  return (
    <Suspense fallback={<Loading />}>
      <div className="flex flex-col gap-6 justify-center align-middle items-center text-clip">
        <h3 className="md:text-3xl text-2xl font-bold ">My Stores</h3>
        <MyStoresForm stores={storesData} />
      </div>
    </Suspense>
  );
}

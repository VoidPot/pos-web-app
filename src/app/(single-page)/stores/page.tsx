"use client";

import { Suspense, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { STORES } from "@/gql/queries";
import useErrorHandler from "@/hooks/error-handler";
import { MyStoresForm } from "@/components/forms/my-stores-form";

function Loading() {
  return <p>Loading</p>;
}

export default function Stores() {
  const { onError } = useErrorHandler({ name: "stores" });
  const { data } = useQuery(STORES, {
    onError,
  });

  const stores = data?.stores || [];

  const storesData = stores.map((e) => ({
    label: e?.name || "",
    value: e?.slug || "",
  }));

  useEffect(() => {
    const stores = data?.stores;
    if (stores && stores.length === 1 && stores[0]?.slug) {
      window.location.href = `/store?slug=${stores[0].slug}`;
    }
  }, [data?.stores]);

  return (
    <Suspense fallback={<Loading />}>
      <div className="flex flex-col gap-6">
        <h3 className="md:text-3xl text-2xl font-bold ">My Stores</h3>
        <MyStoresForm stores={storesData} />
      </div>
    </Suspense>
  );
}

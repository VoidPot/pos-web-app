"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { Suspense } from "react";

function Loading() {
  return <p>Loading</p>;
}

export default function StoreCard({ store }: { store: any }) {
  return (
    <Suspense fallback={<Loading />}>
      <Card className="w-full max-w-[250px]">
        <CardHeader className="text-center">
          <CardTitle>{store?.name}</CardTitle>
          <CardDescription>
            {store?.slug}
            {store?.phone}
            {store?.email}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button width={"full"}>Select</Button>
        </CardContent>
      </Card>
    </Suspense>
  );
}

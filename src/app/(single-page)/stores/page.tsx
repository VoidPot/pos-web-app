import { redirect } from "next/navigation";
import { MyStoresForm } from "@/components/forms/my-stores-form";
import { getStores } from "@/services/store";

async function getData() {
  const stores = await getStores();

  // if (stores.length === 1) {
  //   redirect(`/${stores[0].slug}`);
  // }

  const storesData = stores.map((e) => ({
    label: e?.name || "",
    value: e?.slug || "",
  }));

  return storesData;
}

export default async function Stores() {
  const stores = await getData();

  return (
    <div className="flex flex-col gap-6 justify-center align-middle items-center text-clip">
      <h3 className="md:text-3xl text-2xl font-bold ">My Stores</h3>
      <MyStoresForm stores={stores} />
    </div>
  );
}

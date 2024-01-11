import IconButton from "@/components/atoms/icon-button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getStore } from "@/services/store";
import { redirect } from "next/navigation";

export default async function Store({ params }: { params: { slug: string } }) {
  const store = await getStore(params.slug);

  if (!store || !store.id) {
    redirect("/stores");
  }

  return (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        {/* <Avatar className="cursor-pointer select-none w-16 h-16 text-3xl">
          <AvatarImage src={store.} alt="@shadcn" />
          <AvatarFallback>{store.name.slice(0, 1)}</AvatarFallback>
        </Avatar> */}
        <CardTitle>{store.name}</CardTitle>
        <CardDescription>
          {store.addresses.line1} {store.addresses.line2}{" "}
          {store.addresses.state} {store.addresses.pincode}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="relative mb-4">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              Select the APP
            </span>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <IconButton label="CAP" icon="TbDeviceIpadMinus" />
          <IconButton label="POS" icon="FiPrinter" />
          <IconButton label="KDS" icon="FaKitchenSet" />
          <IconButton label="POD" icon="FaCartShopping" />
        </div>
      </CardContent>
    </Card>
  );
}

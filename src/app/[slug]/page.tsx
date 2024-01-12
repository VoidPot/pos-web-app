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
import BrandSideBySide from "@/components/brand/side-by-side";
import { Button } from "@/components/ui/button";
import { ThemeModeToggle } from "@/components/compositions/theme-mode-toggle";

export default async function Store({ params }: { params: { slug: string } }) {
  const store = await getStore(params.slug);

  if (!store || !store.id) {
    redirect("/stores");
  }

  return (
    <div className="flex flex-col justify-between align-middle items-center min-h-fill px-6">
      <div className="p-6 grid grid-cols-1 justify-center gap-4">
        <div className="flex gap-2 justify-center align-middle items-center border border-secondary rounded-lg shadow-sm py-4 px-2">
          <Avatar className="cursor-pointer select-none bg-secondary">
            <AvatarImage src="https://github.com/shasdcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="flex flex-col text-secondary-foreground justify-center align-middle items-start">
            <p className="text-md">Mani Raja</p>
            <span className="text-xs font-semibold">Admin</span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 justify-center">
          <ThemeModeToggle />
          <Button variant={"outline"}>Logout</Button>
        </div>
      </div>

      <div className="grow w-full my-6 flex flex-col justify-center align-middle items-center gap-4">
        <BrandSideBySide className="h-10 mb-10" />
        <div></div>

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
              <IconButton
                label="CAP"
                icon="TbDeviceIpadMinus"
                redirectPath={`/${store.slug}/cap`}
              />
              <IconButton
                label="POS"
                icon="FiPrinter"
                redirectPath={`/${store.slug}/pos`}
              />
              <IconButton
                label="KDS"
                icon="FaKitchenSet"
                redirectPath={`/${store.slug}/kds`}
              />
              <IconButton
                label="POD"
                icon="FaCartShopping"
                redirectPath={`/${store.slug}/pod`}
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

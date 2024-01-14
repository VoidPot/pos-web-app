import AppLoginForm from "@/components/forms/app-login-form";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Separator } from "@/components/ui/separator";
import { getProducts } from "@/services/product";
import { IoAddCircle } from "react-icons/io5";

export default async function Products() {
  const products = await getProducts();

  return (
    <Container className="flex justify-start align-top items-start py-8 grow w-full">
      <Container className="flex flex-col w-7/12 border-r-2 border-secondary h-full px-6 gsp-6">
        <div className="flex justify-between">
          <div>
            <h2 className="text-xl font-medium">Manage Products</h2>
            <p className="text-base text-slate-500 pt-2">
              Create, Edit and Delete your products
            </p>
          </div>
          <Button className="flex justify-end gap-2 font-normal">
            <span>New</span>
            <IoAddCircle className="h-6 w-6" />
          </Button>
        </div>

        <Separator className="my-8" />

        <div className="grid grid-cols-3 gap-4 flex-wrap">
          {products.map((product, key) => (
            <div
              key={key}
              className="flex flex-col border rounded-xl border-slate-400 p-4"
            >
              <h5 className="text-md font-semibold">{product.name}</h5>
              <p className="text-sm">{product.deck}</p>
            </div>
          ))}
        </div>
      </Container>
      <Container></Container>
    </Container>
  );
}

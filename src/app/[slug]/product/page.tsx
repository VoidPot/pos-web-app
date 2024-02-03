import Product from "@/components/compositions/product";
import { Container } from "@/components/ui/container";
import { getCategories } from "@/services/category";
import { getProducts } from "@/services/product";

export default async function ProductsPage() {
  const products = await getProducts();
  const categories = await getCategories();

  return (
    <Container className="flex justify-start align-top items-start py-8 grow w-full">
      <Product products={products as any} categories={categories as any} />
    </Container>
  );
}

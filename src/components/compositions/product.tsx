"use client";
import React, { useMemo, useState } from "react";
import ProductList from "@/components/compositions/product-list";
import SubHeader from "@/components/compositions/sub-header";
import { Container } from "@/components/ui/container";
import { Separator } from "@/components/ui/separator";
import ProductForm from "../forms/product-form";

function Product({ products, categories }: { products: any; categories: any }) {
  const [selected, setSelected] = useState(0);

  const handleSelected = (id?: number) => {
    if (!id) {
      setSelected(0);
    } else {
      const product = products.find((e: any) => e.id === id);
      if (product) {
        setSelected(product.id);
      }
    }
  };

  const categorySelect = React.useMemo(
    () =>
      categories.map((e: { id: any; name: any }) => ({
        value: e.id.toString(),
        label: e.name,
      })),
    [categories]
  );

  return (
    <>
      <Container className="flex flex-col w-full border-r-2 border-secondary h-full px-6 gsp-6">
        <SubHeader
          hed="Manage Products"
          dek="Create, Edit and Delete your products"
          variant={"default"}
          onClick={() => handleSelected()}
        />

        <Separator className="my-8" />
        <ProductList
          products={products as any}
          selected={selected}
          onClick={(id) => handleSelected(id)}
        />
      </Container>
      <Container className="flex flex-col gap-6 justify-center align-middle items-start w-4/12 h-full p-6">
        {!selected && (
          <>
            <SubHeader
              hed="Add Products"
              dek="You can add/create a new product here"
              variant="sub"
            />
            <ProductForm categories={categorySelect} />
          </>
        )}
        {products.map(
          (e: { id: number; name: any; deck: any; categoryId: number }) => {
            if (e.id === selected) {
              return (
                <>
                  <SubHeader
                    hed="Edit Products"
                    dek={`You are editing the product which id is ${e.id}`}
                    variant="sub"
                  />
                  <ProductForm
                    id={e.id}
                    categories={categorySelect}
                    defaultValues={{
                      name: e.name || "",
                      deck: e.deck || "",
                      categoryId: e.categoryId.toString() || "",
                    }}
                  />
                </>
              );
            }
            return <></>;
          }
        )}
      </Container>
    </>
  );
}

export default Product;

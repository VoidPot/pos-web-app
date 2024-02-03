"use client";
import clsx from "clsx";
import React from "react";

function ProductList({
  products,
  className,
  selected = 0,
  onClick,
}: {
  className?: string;
  products: {
    name: string;
    deck?: string;
    id: number;
  }[];
  selected?: number;
  onClick?: (id: number) => any;
}) {
  const handleClick = (id: number) => {
    if (onClick) {
      onClick(id);
    }
  };

  return (
    <div
      className={clsx("grid grid-cols-3 gap-4 flex-wrap", {
        className: Boolean(className),
      })}
    >
      {products.map((product, key) => (
        <div
          key={key}
          onClick={() => handleClick(product.id)}
          className={clsx(
            "flex flex-col border rounded-xl border-slate-400 p-4 cursor-pointer",
            {
              "border-secondary outline outline-offset-2 outline-primary":
                product.id === Number(selected),
              "hover:border-secondary hover:bg-secondary":
                product.id !== Number(selected),
            }
          )}
        >
          <h5 className="text-md font-semibold">{product.name || ""}</h5>
          <p className="text-sm">{product.deck || ""}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductList;

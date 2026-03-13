import getProductsByBrand from "@/service/API/getProductByBrand";
import React from "react";
import ProductCard from "./../../_components/ProductCard/ProductCard";
import EmptyProducts from "@/app/_components/EmptyProducts/EmptyProducts";

export default async function page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const data = await getProductsByBrand(id);
  console.log(data);

return (
  <>
    {data.length === 0 ? (
      <EmptyProducts />
    ) : (
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
          {data.map((item) => (
            <ProductCard key={item._id} product={item} />
          ))}
        </div>
      </div>
    )}
  </>
);
}

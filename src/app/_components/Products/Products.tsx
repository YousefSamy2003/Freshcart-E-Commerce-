import { getAllProducts } from "@/service/API/getAllProducts";
import React from "react";
import ProductCard from "../ProductCard/ProductCard";

export default async function Products() {
  const data = await getAllProducts();
  console.log(data);
  return (
    <div className="container mx-auto my-5">
      <h2 className="flex items-center gap-2 text-3xl font-bold text-gray-800 mb-5">
        <span className="w-1 h-7 bg-green-600 rounded-full inline-block "></span>
        Featured <span className="text-green-600">Products</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 w-full">
        {data.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
}

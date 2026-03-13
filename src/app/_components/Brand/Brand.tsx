import React from "react";
import PageHero from "../PageHero/PageHero";
import getAllBrands from "@/service/API/getAllBrand";
import BrandCard from "./BrandComponent/BrandCard";

export default async function Brand() {
  const brands = await getAllBrands();
  console.log(brands);

return (
  <>
    <PageHero
      title="Top Brands"
      breadcrumb="Top Brands"
      subtitle="Shop from your favorite brands"
    />

    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {brands.map((brand) => (
          <BrandCard key={brand._id} brand={brand} />
        ))}
      </div>
    </div>
  </>
);
}

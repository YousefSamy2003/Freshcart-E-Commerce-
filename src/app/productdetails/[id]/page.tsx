import React from "react";
import ProductDetails from "./../../_components/ProductDetails/ProductDetails";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  console.log(id);
  return (
    <>
      <ProductDetails id={id} />
    </>
  );
}

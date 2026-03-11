import React from "react";
import Products from "./_components/Products/Products";
import Categories from "./_components/Categories/Categories";


export default function page() {
  return (
    <>
      <Categories></Categories>
      {/* products  */}
      <Products />
    </>
  );
}

import React from "react";
import Products from "./_components/Products/Products";
import Categories from "./_components/Categories/Categories";
import NewsletterSection from "./_components/NewsletterSection/Newsletter";
import HeroSlider from "./_components/Slider/Slider";
import { cookies } from "next/headers";

export default async function page() {
  const cookie = await cookies();

  const token = cookie.get("token")?.value;

  return (
    <>
      <HeroSlider></HeroSlider>
      {/* Category */}
      <Categories></Categories>
      {/* products  */}
      <Products />

      <NewsletterSection></NewsletterSection>
    </>
  );
}

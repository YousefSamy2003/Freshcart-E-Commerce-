import React from "react";
import Products from "./_components/Products/Products";
import Categories from "./_components/Categories/Categories";
import NewsletterSection from "./_components/NewsletterSection/Newsletter";
import HeroSlider from "./_components/Slider/Slider";





export default function page() {
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

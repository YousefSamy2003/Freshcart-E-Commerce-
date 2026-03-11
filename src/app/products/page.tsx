import React from 'react'
import Products from '../_components/Products/Products'
import PageHero from '../_components/PageHero/PageHero'


export default function page() {
  return (
 <>
<PageHero
  title="All Products"
  subtitle="Explore our complete product collection"
  breadcrumb="All Products"
/>

 <Products></Products>
 </>
)
}

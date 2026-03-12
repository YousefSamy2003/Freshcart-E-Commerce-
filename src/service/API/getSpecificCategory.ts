import { ProductInterface } from "@/interfaces/Products.interface";

async function getSpecificCategory(id: string):Promise<ProductInterface []>  {
  try {
    const data = await fetch(
      `https://ecommerce.routemisr.com/api/v1/products?category=${id}`,
    );
    if (data.ok) {
      const response = await data.json();
      return response.data;
    } else {
      throw new Error("something went wrong");
    }
  } catch (err) {
    throw new Error("something went wrong");
  }
}
export default getSpecificCategory;

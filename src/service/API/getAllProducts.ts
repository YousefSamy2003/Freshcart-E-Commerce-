import { ProductInterface } from "@/interfaces/Products.interface";

export async function getAllProducts(): Promise<ProductInterface[]> {
  try {
    const data = await fetch("https://ecommerce.routemisr.com/api/v1/products" ,{
        cache:"force-cache"
    });
    if (data?.ok) {
      const response = await data.json();
      return response.data;
    } else {
      throw new Error("something went wrong");
    }
  } catch (err) {
    throw new Error("something went wrong");
  }
}

import { AllBrandsInterface } from "@/interfaces/AllBrands.interface";

async function getAllBrands(): Promise<AllBrandsInterface[]> {
  try {
    const data = await fetch("https://ecommerce.routemisr.com/api/v1/brands");
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
export default getAllBrands;
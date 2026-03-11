import { CatInterface } from "@/interfaces/Category.interface";

export async function getAllCategories():Promise <CatInterface[]> {
  try {
    const data = await fetch(
      "https://ecommerce.routemisr.com/api/v1/categories",
      {
        cache: "force-cache",
      },
    );
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

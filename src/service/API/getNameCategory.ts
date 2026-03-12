import { NameCategoryInterface } from "@/interfaces/nameCategort.interface";


async function getNameCategory(id: string):Promise<NameCategoryInterface>  {
  try {
    const data = await fetch(
      `https://ecommerce.routemisr.com/api/v1/categories/${id}`,
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
export default getNameCategory;

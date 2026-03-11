import axios from "axios";

export async function getSpecificProduct(id: string) {
  try {
    const data = await fetch(
      `https://ecommerce.routemisr.com/api/v1/products/${id}`,
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


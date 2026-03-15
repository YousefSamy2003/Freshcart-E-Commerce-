"use server";

import { RegisterFormData } from "@/app/(auth)/register/register.schema";
import axios from "axios";

export async function RegisterFun(data: RegisterFormData) {
  const res = await axios.post(
    "https://ecommerce.routemisr.com/api/v1/auth/signup",
    data,
  );

  return res.data;
}

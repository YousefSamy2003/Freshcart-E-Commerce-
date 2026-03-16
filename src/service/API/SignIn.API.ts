"use server";

import { RegisterFormData } from "@/app/(auth)/register/register.schema";
import axios from "axios";
import { cookies } from "next/headers";

export async function LoginFun(data: RegisterFormData) {
  const res = await axios.post(
    "https://ecommerce.routemisr.com/api/v1/auth/signin",
    data,
  );

  const cookie = await cookies();
  cookie.set("token", res.data.token, {
    httpOnly: true,
  });
  return res.data;
}

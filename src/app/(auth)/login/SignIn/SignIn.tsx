"use client";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useState } from "react";
import { FiMail, FiLock, FiEye, FiEyeOff } from "react-icons/fi";
import {
  FaTruck,
  FaShieldAlt,
  FaClock,
  FaStar,
  FaLock,
  FaUsers,
} from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { SiFacebook } from "react-icons/si";
import singinImage from "../../../../assets/signin.png";
import Image from "next/image";
import { loginSchema, LoginSchemaType } from "./login.scheme";
import { LoginFun } from "@/service/API/SignIn.API";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { Spinner } from "@/components/ui/spinner";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const router = useRouter();

  const { handleSubmit, control, reset } = useForm<LoginSchemaType>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function mySubmit(data: LoginSchemaType) {
    setLoading(true);
    try {
      const res = await LoginFun(data);
      toast.success("Login successfully! 🎉");
      reset();
      setTimeout(() => {
        router.push("/products");
      }, 1000);
    } catch (err: any) {
      toast.error(err?.response?.data?.message || "Something went wrong"); // ← الـ message الفعلي
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-4xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* ── Left Panel ── */}
        <div className="flex flex-col items-center text-center gap-4">
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 w-full">
            <Image
              src={singinImage}
              alt="FreshCart"
              className="w-64 mx-auto object-contain"
              width={300}
              height={300}
            />
          </div>
          <h2 className="text-xl font-bold text-gray-900 leading-snug">
            FreshCart - Your One-Stop Shop for Fresh Products
          </h2>
          <p className="text-sm text-gray-400">
            Join thousands of happy customers who trust FreshCart for their
            daily grocery needs
          </p>
          <div className="flex items-center justify-center gap-5 flex-wrap">
            <span className="flex items-center gap-1.5 text-xs text-gray-600">
              <FaTruck className="text-green-500" size={13} /> Free Delivery
            </span>
            <span className="flex items-center gap-1.5 text-xs text-gray-600">
              <FaShieldAlt className="text-green-500" size={13} /> Secure
              Payment
            </span>
            <span className="flex items-center gap-1.5 text-xs text-gray-600">
              <FaClock className="text-green-500" size={13} /> 24/7 Support
            </span>
          </div>
        </div>

        {/* ── Right Panel ── */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          {/* Header */}
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-1">
              <span className="text-green-600">Fresh</span>Cart
            </h1>
            <h2 className="text-lg font-bold text-gray-900">Welcome Back!</h2>
            <p className="text-sm text-gray-400 mt-1">
              Sign in to continue your fresh shopping experience
            </p>
          </div>

          {/* Social buttons */}
          <div className="flex flex-col gap-3 mb-5">
            <button className="flex items-center justify-center gap-3 border border-gray-200 hover:bg-gray-50 rounded-xl py-2.5 text-sm font-medium text-gray-700 transition-colors w-full">
              <FcGoogle size={18} /> Continue with Google
            </button>
            <button className="flex items-center justify-center gap-3 border border-gray-200 hover:bg-gray-50 rounded-xl py-2.5 text-sm font-medium text-gray-700 transition-colors w-full">
              <SiFacebook size={18} className="text-blue-600" /> Continue with
              Facebook
            </button>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-3 mb-5">
            <hr className="flex-1 border-gray-200" />
            <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest">
              or continue with email
            </span>
            <hr className="flex-1 border-gray-200" />
          </div>

          <form
            onSubmit={handleSubmit(mySubmit)}
            className="flex flex-col gap-4"
          >
            {/* Email */}
            <Controller
              name="email"
              control={control}
              render={({ field, fieldState }) => (
                <div>
                  <label className="text-xs font-semibold text-gray-700 mb-1 block">
                    Email Address
                  </label>
                  <div className="relative">
                    <FiMail
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                      size={15}
                    />
                    <input
                      {...field}
                      type="email"
                      placeholder="mohamedsamy@gmail.com"
                      className={`w-full bg-blue-50 border rounded-xl pl-9 pr-4 py-2.5 text-sm focus:outline-none focus:ring-1 transition ${
                        fieldState.invalid
                          ? "border-red-400 focus:border-red-400 focus:ring-red-400"
                          : "border-gray-200 focus:border-green-500 focus:ring-green-500"
                      }`}
                    />
                  </div>
                  {fieldState.invalid && (
                    <p className="text-xs text-red-500 mt-1">
                      {fieldState.error?.message}
                    </p>
                  )}
                </div>
              )}
            />

            {/* Password */}
            <Controller
              name="password"
              control={control}
              render={({ field, fieldState }) => (
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="text-xs font-semibold text-gray-700">
                      Password
                    </label>
                    <Link
                      href="/forgot-password"
                      className="text-xs text-green-600 hover:underline"
                    >
                      Forgot Password?
                    </Link>
                  </div>
                  <div className="relative">
                    <FiLock
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                      size={15}
                    />
                    <input
                      {...field}
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      className={`w-full bg-blue-50 border rounded-xl pl-9 pr-10 py-2.5 text-sm focus:outline-none focus:ring-1 transition ${
                        fieldState.invalid
                          ? "border-red-400 focus:border-red-400 focus:ring-red-400"
                          : "border-gray-200 focus:border-green-500 focus:ring-green-500"
                      }`}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? (
                        <FiEyeOff size={15} />
                      ) : (
                        <FiEye size={15} />
                      )}
                    </button>
                  </div>
                  {fieldState.invalid && (
                    <p className="text-xs text-red-500 mt-1">
                      {fieldState.error?.message}
                    </p>
                  )}
                </div>
              )}
            />

            {/* Keep me signed in */}
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="accent-green-600" />
              <span className="text-xs text-gray-500">Keep me signed in</span>
            </label>

            {/* Submit */}
         <button
  type="submit"
  disabled={isLoading}
  className="w-full bg-green-600 hover:bg-green-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-xl transition-colors flex items-center justify-center"
>
  {isLoading ? <Spinner /> : "Sign In"}
</button>

            {/* Sign up link */}
            <p className="text-center text-sm text-gray-400">
              New to FreshCart?{" "}
              <Link
                href="/register"
                className="text-green-600 font-medium hover:underline"
              >
                Create an account
              </Link>
            </p>

            {/* Trust badges */}
            <div className="flex items-center justify-center gap-5 pt-2 border-t border-gray-100 flex-wrap">
              <span className="flex items-center gap-1.5 text-xs text-gray-400">
                <FaLock size={11} /> SSL Secured
              </span>
              <span className="flex items-center gap-1.5 text-xs text-gray-400">
                <FaUsers size={11} /> 50K+ Users
              </span>
              <span className="flex items-center gap-1.5 text-xs text-gray-400">
                <FaStar size={11} /> 4.9 Rating
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

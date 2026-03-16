"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FiUser,
  FiMail,
  FiLock,
  FiPhone,
  FiEye,
  FiEyeOff,
  FiUserPlus,
} from "react-icons/fi";
import { FaStar, FaTruck, FaShieldAlt, FaMedal } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { SiFacebook } from "react-icons/si";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Resolver } from "dns";
import { RegisterFormData, registerSchema } from "./register.schema";
import { RegisterFun } from "@/service/API/Register.API";
import { any } from "zod";
import { toast } from "react-toastify";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Spinner } from "@/components/ui/spinner";

const perks = [
  {
    icon: <FaMedal />,
    title: "Premium Quality",
    desc: "Premium quality products sourced from trusted suppliers.",
  },
  {
    icon: <FaTruck />,
    title: "Fast Delivery",
    desc: "Same-day delivery available in most areas",
  },
  {
    icon: <FaShieldAlt />,
    title: "Secure Shopping",
    desc: "Your data and payments are completely secure",
  },
];

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const {
    handleSubmit,
    register,
    control,
    reset,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
      agree: false,
    },
  });

  const router = useRouter();
  async function mySubmit(data: RegisterFormData) {
    setLoading(true);
    try {
      const res = await RegisterFun(data);
      toast.success("Account created successfully! 🎉");
      setTimeout(() => {
        router.push("/login");
      }, 2000);
      reset();
    } catch (err: any) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  }
  /*

{
    "name": "Ahmed Abd Al-Muti",
    "email":"ahmedmuttii4012@gmail.com",
    "password":"Ahmed@123",
    "rePassword":"Ahmed@123",
    "phone":"01010700701"
}
  */
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* ── Left Panel ── */}
        <div className="flex flex-col gap-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              Welcome to <span className="text-green-600">FreshCart</span>
            </h1>
            <p className="text-sm text-gray-500 leading-relaxed">
              Join thousands of happy customers who enjoy fresh groceries
              delivered right to their doorstep.
            </p>
          </div>

          {/* Perks */}
          <div className="flex flex-col gap-4">
            {perks.map((perk) => (
              <div key={perk.title} className="flex items-start gap-4">
                <div className="bg-green-600 text-white p-3 rounded-full shrink-0 text-sm">
                  {perk.icon}
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-800">
                    {perk.title}
                  </p>
                  <p className="text-xs text-gray-500">{perk.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Testimonial */}
          <div className="border border-gray-100 rounded-2xl p-5 bg-white shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-orange-200 flex items-center justify-center text-orange-600 font-bold text-sm shrink-0">
                SJ
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-800">
                  Sarah Johnson
                </p>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400" size={12} />
                  ))}
                </div>
              </div>
            </div>
            <p className=" text-[13px] font-medium text-gray-600 italic leading-relaxed">
              "FreshCart has transformed my shopping experience. The quality of
              the products is outstanding, and the delivery is always on time.
              Highly recommend !"
            </p>
          </div>
        </div>

        {/* ── Right Panel: Form ── */}
        <form action="" onSubmit={handleSubmit(mySubmit)}>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
            <div className="text-center mb-6">
              <h2 className="text-xl font-bold text-gray-900">
                Create Your Account
              </h2>
              <p className="text-sm text-gray-400 mt-1">
                Start your fresh journey with us today
              </p>
            </div>

            {/* Social buttons */}
            <div className="grid grid-cols-2 gap-3 mb-5">
              <button className="flex items-center justify-center gap-2 border border-gray-200 hover:bg-gray-50 rounded-xl py-2.5 text-sm font-medium text-gray-700 transition-colors">
                <FcGoogle size={18} /> Google
              </button>
              <button className="flex items-center justify-center gap-2 border border-gray-200 hover:bg-gray-50 rounded-xl py-2.5 text-sm font-medium text-gray-700 transition-colors">
                <SiFacebook size={18} className="text-blue-600" /> Facebook
              </button>
            </div>

            <div className="flex items-center gap-3 mb-5">
              <hr className="flex-1 border-gray-200" />
              <span className="text-xs text-gray-400">or</span>
              <hr className="flex-1 border-gray-200" />
            </div>

            <div className="flex flex-col gap-4">
              {/* Name */}
              <div>
                <label className="text-xs font-semibold text-gray-700 mb-1 block">
                  Name *
                </label>
                <div className="relative">
                  <FiUser
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                    size={15}
                  />
                  <Controller
                    name="name"
                    control={control}
                    render={({ field, fieldState }) => (
                      <div>
                        <div className="relative">
                          <FiUser
                            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                            size={15}
                          />
                          <input
                            {...field}
                            placeholder="Ali"
                            className={`w-full border rounded-xl pl-9 pr-4 py-2.5 text-sm focus:outline-none focus:ring-1 transition ${
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
                </div>
              </div>

              {/* Email */}
              <div>
                <Controller
                  name="email"
                  control={control}
                  render={({ field, fieldState }) => (
                    <div>
                      <label className="text-xs font-semibold text-gray-700 mb-1 block">
                        Email *
                      </label>
                      <div className="relative">
                        <FiMail
                          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                          size={15}
                        />
                        <input
                          {...field}
                          type="email"
                          placeholder="ali@example.com"
                          className={`w-full border rounded-xl pl-9 pr-4 py-2.5 text-sm focus:outline-none focus:ring-1 transition ${
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
              </div>

              {/* Password */}
              <div>
                <div className="relative">
                  <Controller
                    name="password"
                    control={control}
                    render={({ field, fieldState }) => (
                      <div>
                        <label className="text-xs font-semibold text-gray-700 mb-1 block">
                          Password *
                        </label>
                        <div className="relative">
                          <FiLock
                            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                            size={15}
                          />
                          <input
                            {...field}
                            type={showPassword ? "text" : "password"}
                            placeholder="create a strong password"
                            className={`w-full border rounded-xl pl-9 pr-10 py-2.5 text-sm focus:outline-none focus:ring-1 transition ${
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
                </div>
                <p className="text-xs text-gray-400 mt-1">
                  Must be at least 8 characters with numbers and symbols
                </p>
              </div>

              {/* Confirm Password */}
              <div>
                <Controller
                  name="rePassword"
                  control={control}
                  render={({ field, fieldState }) => (
                    <div>
                      <label className="text-xs font-semibold text-gray-700 mb-1 block">
                        Confirm Password *
                      </label>
                      <div className="relative">
                        <FiLock
                          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                          size={15}
                        />
                        <input
                          {...field}
                          type={showConfirm ? "text" : "password"}
                          placeholder="confirm your password"
                          className={`w-full border rounded-xl pl-9 pr-10 py-2.5 text-sm focus:outline-none focus:ring-1 transition ${
                            fieldState.invalid
                              ? "border-red-400 focus:border-red-400 focus:ring-red-400"
                              : "border-gray-200 focus:border-green-500 focus:ring-green-500"
                          }`}
                        />
                        <button
                          type="button"
                          onClick={() => setShowConfirm(!showConfirm)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        >
                          {showConfirm ? (
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
              </div>

              {/* Phone */}
              <div>
                <Controller
                  name="phone"
                  control={control}
                  render={({ field, fieldState }) => (
                    <div>
                      <label className="text-xs font-semibold text-gray-700 mb-1 block">
                        Phone Number *
                      </label>
                      <div className="relative">
                        <FiPhone
                          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                          size={15}
                        />
                        <input
                          {...field}
                          type="tel"
                          placeholder="+1 234 567 8900"
                          className={`w-full border rounded-xl pl-9 pr-4 py-2.5 text-sm focus:outline-none focus:ring-1 transition ${
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
              </div>

              {/* Terms */}
              <label className="flex items-start gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  {...register("agree", {
                    required: "You must agree to the terms",
                  })}
                  className="mt-0.5 accent-green-600"
                />
                <span className="text-xs text-gray-500">
                  I agree to the{" "}
                  <Link
                    href="/terms"
                    className="text-green-600 hover:underline"
                  >
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/privacy"
                    className="text-green-600 hover:underline"
                  >
                    Privacy Policy
                  </Link>{" "}
                  *
                </span>
              </label>
              {errors?.agree && errors.agree && (
                <p className="text-xs text-red-500 mt-1">
                  {errors?.agree?.message}
                </p>
              )}

              {/* Submit */}
              <button className="flex items-center justify-center gap-2 w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-xl transition-colors">
                <FiUserPlus size={16} />
                {isLoading ? <Spinner /> : "Create My Account"}
              </button>

              <p className="text-center text-sm text-gray-400">
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="text-green-600 font-medium hover:underline"
                >
                  Sign In
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

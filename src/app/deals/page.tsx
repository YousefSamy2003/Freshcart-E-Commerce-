"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { FiArrowLeft, FiHome } from "react-icons/fi"
import { FiShoppingCart } from "react-icons/fi"
import { FaApple, FaLeaf, FaSeedling } from "react-icons/fa"

const destinations = [
  { label: "All Products", href: "/products" },
  { label: "Categories", href: "/categories" },
  { label: "Today's Deals", href: "/deals" },
  { label: "Contact Us", href: "/contact" },
]

export default function NotFound() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 relative overflow-hidden">

      {/* ── Decorative floating icons ── */}
      <FaApple className="absolute top-16 left-16 text-green-200" size={28} />
      <FaLeaf className="absolute top-32 right-24 text-green-200" size={20} />
      <FaSeedling className="absolute bottom-24 left-10 text-green-200" size={22} />
      <FaSeedling className="absolute bottom-16 right-20 text-green-200" size={30} />
      <FaLeaf className="absolute top-1/2 left-32 text-green-100" size={16} />
      <FaApple className="absolute top-1/3 right-10 text-green-100" size={14} />

      {/* ── Main content ── */}
      <div className="flex flex-col items-center text-center gap-6 max-w-lg z-10">

        {/* Cart icon with 404 badge */}
        <div className="relative">
          <div className="bg-white rounded-3xl shadow-md p-8 flex items-center justify-center w-36 h-36">
            <FiShoppingCart className="text-green-500" size={60} />
          </div>
          {/* 404 badge */}
          <div className="absolute -top-3 -right-3 bg-green-500 text-white text-sm font-bold w-12 h-12 rounded-full flex items-center justify-center shadow-md">
            404
          </div>
        </div>

        {/* Smile dots */}
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-gray-300" />
          <span className="w-6 h-2 rounded-full border-b-2 border-gray-300" />
          <span className="w-2 h-2 rounded-full bg-gray-300" />
        </div>

        {/* Text */}
        <div>
          <h1 className="text-4xl font-black text-gray-900 mb-3">
            Oops! Nothing Here
          </h1>
          <p className="text-sm text-gray-400 leading-relaxed">
            Looks like this page went out of stock! Don't worry,
            <br />
            there's plenty more fresh content to explore.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-3 flex-wrap justify-center">
          <Link
            href="/"
            className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-6 py-3 rounded-full transition-colors"
          >
            <FiHome size={15} />
            Go to Homepage
          </Link>
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 border border-gray-200 hover:bg-gray-100 text-gray-700 text-sm font-semibold px-6 py-3 rounded-full transition-colors"
          >
            <FiArrowLeft size={15} />
            Go Back
          </button>
        </div>

        {/* Popular destinations */}
        <div className="bg-white border border-gray-100 rounded-2xl shadow-sm px-6 py-5 w-full">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">
            Popular Destinations
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            {destinations.map((d) => (
              <Link
                key={d.label}
                href={d.href}
                className="text-sm text-green-600 hover:bg-green-50 border border-gray-200 px-4 py-1.5 rounded-full transition-colors"
              >
                {d.label}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

"use client";

import { useState } from "react";
import {
  FiPackage,
  FiStar,
  FiTruck,
  FiRefreshCw,
  FiShield,
  FiCheck,
} from "react-icons/fi";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { BsBoxSeam } from "react-icons/bs";

// ─── Tab: Product Details ────────────────────────────────────────────────────
function ProductDetailsTab({ product }) {
  const features = [
    "Premium Quality Product",
    "100% Authentic Guarantee",
    "Fast & Secure Packaging",
    "Quality Tested",
  ];

  const info = [
    { label: "Category", value: product?.category?.name || "Women's Fashion" },
    {
      label: "Subcategory",
      value: product?.subcategory?.[0]?.name || "Women's Clothing",
    },
    { label: "Brand", value: product?.brand?.name || "DeFacto" },
    { label: "Items Sold", value: `${product?.sold || 25233}+ sold` },
  ];

  return (
    <div className="flex flex-col gap-5">
      <div>
        <h3 className="text-base font-bold text-gray-900 mb-1">
          About this Product
        </h3>
        <p className="text-sm text-gray-500">
          {product?.description ||
            "Material Polyester Blend Colour Name Multicolour Department Women"}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Product Information */}
        <div className="bg-gray-50 rounded-xl p-5">
          <h4 className="text-sm font-semibold text-gray-800 mb-4">
            Product Information
          </h4>
          <div className="flex flex-col gap-3">
            {info.map((item) => (
              <div
                key={item.label}
                className="flex items-center justify-between"
              >
                <span className="text-sm text-gray-400">{item.label}</span>
                <span className="text-sm font-semibold text-gray-700">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Key Features */}
        <div className="bg-gray-50 rounded-xl p-5">
          <h4 className="text-sm font-semibold text-gray-800 mb-4">
            Key Features
          </h4>
          <div className="flex flex-col gap-3">
            {features.map((f) => (
              <div key={f} className="flex items-center gap-2">
                <FiCheck className="text-green-500 shrink-0" size={15} />
                <span className="text-sm text-gray-600">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Tab: Reviews ────────────────────────────────────────────────────────────
function ReviewsTab({ product }) {
  const rating = product?.ratingsAverage || 4.2;
  const total = product?.ratingsQuantity || 12;

  const breakdown = [
    { star: 5, pct: 25 },
    { star: 4, pct: 60 },
    { star: 3, pct: 25 },
    { star: 2, pct: 5 },
    { star: 1, pct: 5 },
  ];

  return (
    <div className="flex flex-col gap-6">
      {/* Rating summary */}
      <div className="flex flex-col sm:flex-row gap-8 items-start sm:items-center border-b border-gray-100 pb-6">
        {/* Average score */}
        <div className="shrink-0 text-center">
          <p className="text-5xl font-bold text-gray-900">{rating}</p>
          <div className="flex items-center justify-center gap-0.5 my-2">
            {[1, 2, 3, 4].map((i) => (
              <FaStar key={i} className="text-yellow-400" size={16} />
            ))}
            <FaStarHalfAlt className="text-yellow-400" size={16} />
          </div>
          <p className="text-xs text-gray-400">Based on {total} reviews</p>
        </div>

        {/* Bars */}
        <div className="flex-1 w-full flex flex-col gap-2">
          {breakdown.map(({ star, pct }) => (
            <div key={star} className="flex items-center gap-3">
              <span className="text-xs text-gray-400 w-10 shrink-0">
                {star} star
              </span>
              <div className="flex-1 bg-gray-200 rounded-full h-2 overflow-hidden">
                <div
                  className="bg-yellow-400 h-2 rounded-full"
                  style={{ width: `${pct}%` }}
                />
              </div>
              <span className="text-xs text-gray-400 w-8 text-right shrink-0">
                {pct}%
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Empty state */}
      <div className="flex flex-col items-center gap-2 py-8 text-gray-400">
        <FaRegStar size={36} />
        <p className="text-sm">Customer reviews will be displayed here.</p>
        <button className="text-sm text-green-600 hover:underline font-medium">
          Write a Review
        </button>
      </div>
    </div>
  );
}

// ─── Tab: Shipping & Returns ──────────────────────────────────────────────────
function ShippingTab() {
  const shipping = [
    "Free shipping on orders over $50",
    "Standard delivery: 3-5 business days",
    "Express delivery available (1-2 business days)",
    "Track your order in real-time",
  ];

  const returns = [
    "30-day hassle-free returns",
    "Full refund or exchange available",
    "Free return shipping on defective items",
    "Easy online return process",
  ];

  return (
    <div className="flex flex-col gap-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Shipping */}
        <div className="bg-green-50 rounded-xl p-5">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-green-600 p-2 rounded-full">
              <FiTruck className="text-white" size={18} />
            </div>
            <h4 className="text-sm font-bold text-gray-800">
              Shipping Information
            </h4>
          </div>
          <div className="flex flex-col gap-2.5">
            {shipping.map((item) => (
              <div key={item} className="flex items-start gap-2">
                <FiCheck className="text-green-500 shrink-0 mt-0.5" size={14} />
                <span className="text-sm text-gray-600">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Returns */}
        <div className="bg-green-50 rounded-xl p-5">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-green-600 p-2 rounded-full">
              <FiRefreshCw className="text-white" size={18} />
            </div>
            <h4 className="text-sm font-bold text-gray-800">
              Returns & Refunds
            </h4>
          </div>
          <div className="flex flex-col gap-2.5">
            {returns.map((item) => (
              <div key={item} className="flex items-start gap-2">
                <FiCheck className="text-green-500 shrink-0 mt-0.5" size={14} />
                <span className="text-sm text-gray-600">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Buyer Protection */}
      <div className="flex items-start gap-4 bg-gray-50 rounded-xl p-5">
        <div className="bg-gray-200 p-2.5 rounded-full shrink-0">
          <FiShield className="text-gray-600" size={20} />
        </div>
        <div>
          <h4 className="text-sm font-bold text-gray-800 mb-1">
            Buyer Protection Guarantee
          </h4>
          <p className="text-sm text-gray-500">
            Get a full refund if your order doesn't arrive or isn't as
            described. We ensure your shopping experience is safe and secure.
          </p>
        </div>
      </div>
    </div>
  );
}

// ─── Main Tabs Component ──────────────────────────────────────────────────────
export default function ProductTabs({ product }) {
  const [activeTab, setActiveTab] = useState("details");

  const tabs = [
    { id: "details", label: "Product Details", icon: <BsBoxSeam size={14} /> },
    {
      id: "reviews",
      label: `Reviews (${product?.ratingsQuantity || 12})`,
      icon: <FiStar size={14} />,
    },
    {
      id: "shipping",
      label: "Shipping & Returns",
      icon: <FiTruck size={14} />,
    },
  ];

  return (
    <div className="container mx-auto p-6  bg-white rounded-2xl border border-gray-100 shadow-sm my-5 ">
      {/* Tab headers */}
      <div className="flex border-b border-gray-100 ">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-6 py-4 text-sm font-medium whitespace-nowrap transition-colors border-b-2 -mb-px ${
              activeTab === tab.id
                ? "text-green-600 border-green-600"
                : "text-gray-500 border-transparent hover:text-gray-700"
            }`}
          >
            <span
              className={
                activeTab === tab.id ? "text-green-600" : "text-gray-400"
              }
            >
              {tab.icon}
            </span>
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div className="p-6">
        {activeTab === "details" && <ProductDetailsTab product={product} />}
        {activeTab === "reviews" && <ReviewsTab product={product} />}
        {activeTab === "shipping" && <ShippingTab />}
      </div>
    </div>
  );
}

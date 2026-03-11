"use client";

import { useState } from "react";
import {
  FiMinus,
  FiPlus,
  FiShoppingCart,
  FiHeart,
  FiShare2,
  FiTruck,
  FiRefreshCw,
  FiShield,
} from "react-icons/fi";
import { BsLightningChargeFill } from "react-icons/bs";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { getSpecificProduct } from "@/service/API/getProductDetails";

export default function ProductDetailsClient({ product }) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const images = product.images || [];
  const price = product.price;

  return (
    <div className="container mx-auto my-5 ">
      <div className="flex flex-col md:flex-row gap-8 bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
        {/* Images */}
        <div className="md:w-80 shrink-0 flex flex-col gap-3">
          <div className="border border-gray-100 rounded-xl flex items-center justify-center h-72 overflow-hidden">
            <img
              src={images[selectedImage]}
              alt={product.title}
              className="object-contain h-full w-full"
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            {images.map((img, i) => (
              <button
                key={i}
                onClick={() => setSelectedImage(i)}
                className={`border-2 rounded-lg overflow-hidden w-16 h-16 shrink-0 transition-colors ${
                  selectedImage === i ? "border-blue-500" : "border-gray-200"
                }`}
              >
                <img
                  src={img}
                  alt={`thumb-${i}`}
                  className="object-cover w-full h-full"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Info */}
        <div className="flex-1 flex flex-col gap-4">
          {/* Badges */}
          <div className="flex gap-2">
            <span className="text-xs font-medium text-green-700 bg-green-50 border border-green-200 px-3 py-1 rounded-full">
              {product.category?.name}
            </span>
            <span className="text-xs font-medium text-gray-600 bg-gray-100 border border-gray-200 px-3 py-1 rounded-full">
              {product.brand?.name}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-2xl font-bold text-gray-900">{product.title}</h1>

          {/* Rating */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  size={15}
                  className={
                    i < Math.round(product.ratingsAverage)
                      ? "text-yellow-400"
                      : "text-gray-200"
                  }
                />
              ))}
            </div>
            <span className="text-sm text-gray-500">
              {product.ratingsAverage} ({product.ratingsQuantity} reviews)
            </span>
          </div>

          {/* Price */}
          <p className="text-2xl font-bold text-gray-900">{price} EGP</p>

          {/* Stock */}
          <div className="flex items-center gap-1.5 text-green-600 text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-green-500 inline-block" />
            {product.quantity > 0 ? "In Stock" : "Out of Stock"}
          </div>

          <hr className="border-gray-100" />

          {/* Description */}
          <p className="text-sm text-gray-500 leading-relaxed">
            {product.description}
          </p>

          {/* Quantity */}
          <div>
            <p className="text-sm font-medium text-gray-700 mb-2">Quantity</p>
            <div className="flex items-center gap-4">
              <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="px-3 py-2 text-gray-600 hover:bg-gray-50"
                >
                  <FiMinus size={14} />
                </button>
                <span className="px-4 py-2 text-sm font-semibold border-x border-gray-200">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="px-3 py-2 text-gray-600 hover:bg-gray-50"
                >
                  <FiPlus size={14} />
                </button>
              </div>
              <span className="text-sm text-gray-400">
                {product.quantity} available
              </span>
            </div>
          </div>

          {/* Total */}
          <div className="flex items-center justify-between bg-gray-50 rounded-xl px-5 py-3">
            <span className="text-sm text-gray-500 font-medium">
              Total Price:
            </span>
            <span className="text-lg font-bold text-green-600">
              {(price * quantity).toFixed(2)} EGP
            </span>
          </div>

          {/* Buttons ... same as before */}
        </div>
      </div>
    </div>
  );
}

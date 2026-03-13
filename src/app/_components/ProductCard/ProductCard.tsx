"use client";

import { useState } from "react";
import { FiHeart, FiRefreshCw, FiEye, FiPlus } from "react-icons/fi";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { ProductInterface } from "@/interfaces/Products.interface";
import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ product }: { product: ProductInterface }) {
  const [imgIndex, setImgIndex] = useState(0);

  const images = product?.images?.length > 0
    ? product.images
    : [product?.imageCover];

  const handleRotate = () => {
    setImgIndex((prev) => (prev + 1) % images.length);
  };

  const rating = Math.round(product?.ratingsAverage * 2) / 2;
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <div className="relative bg-white rounded-2xl shadow-sm border border-gray-100 p-4 w-full group">

      {/* Action icons */}
      <div className="absolute top-3 right-3 flex flex-col gap-2 z-10">
        <button className="p-2 bg-white rounded-full shadow-sm hover:text-green-600 transition-colors">
          <FiHeart size={16} />
        </button>
        <button
          onClick={handleRotate}
          className="p-2 bg-white rounded-full shadow-sm hover:text-green-600 transition-colors"
        >
          <FiRefreshCw size={16} />
        </button>
        <Link
          href={`/productdetails/${product?._id}`}
          className="p-2 bg-white rounded-full shadow-sm hover:text-green-600 transition-colors"
        >
          <FiEye size={16} />
        </Link>
      </div>

      {/* Product Image */}
      <div className="flex items-center justify-center mb-4 h-44 overflow-hidden">
        <Image
          key={imgIndex}
          src={images[imgIndex]}
          alt={product?.title}
          width={500}
          height={500}
          className="w-40 mx-auto object-contain transition-all duration-300"
        />
      </div>

      {/* Category */}
      <p className="text-xs text-gray-400 mb-1">{product?.category?.name}</p>

      {/* Title */}
      <h3 className="text-sm font-semibold text-gray-800 mb-2">{product?.title}</h3>

      {/* Rating */}
      <div className="flex items-center gap-1 mb-3">
        {[...Array(fullStars)].map((_, i) => (
          <FaStar key={i} className="text-yellow-400" size={14} />
        ))}
        {hasHalfStar && <FaStarHalfAlt className="text-yellow-400" size={14} />}
        <span className="text-xs text-gray-500 ml-1">
          {rating} ({product?.ratingsQuantity})
        </span>
      </div>

      {/* Price + Add to cart */}
      <div className="flex items-center justify-between">
        {product?.priceAfterDiscount ? (
          <div className="flex items-center gap-2">
            <span className="text-base font-bold text-gray-900">
              {product?.priceAfterDiscount} EGP
            </span>
            <span className="line-through text-xs text-gray-500">
              {product?.price} EGP
            </span>
          </div>
        ) : (
          <span className="text-base font-bold text-gray-900">
            {product?.price} EGP
          </span>
        )}
        <button className="bg-green-600 hover:bg-green-700 text-white p-2 rounded-full transition-colors">
          <FiPlus size={18} />
        </button>
      </div>

    </div>
  );
}
// "use client";

// import { useState } from "react";
// import {
//   FiMinus,
//   FiPlus,
//   FiShoppingCart,
//   FiHeart,
//   FiShare2,
//   FiTruck,
//   FiRefreshCw,
//   FiShield,
// } from "react-icons/fi";
// import { BsLightningChargeFill } from "react-icons/bs";
// import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
// import { getSpecificProduct } from "@/service/API/getProductDetails";

// export default async function ProductDetails({ id }) {
//   let data =await getSpecificProduct(id);
//   console.log(data);

//   const images = [
//     "https://via.placeholder.com/400x400?text=Image+1",
//     "https://via.placeholder.com/400x400?text=Image+2",
//     "https://via.placeholder.com/400x400?text=Image+3",
//     "https://via.placeholder.com/400x400?text=Image+4",
//   ];
//   const [selectedImage, setSelectedImage] = useState(0);
//   const [quantity, setQuantity] = useState(1);
//   const price = 191;

//   const dec = () => setQuantity((q) => Math.max(1, q - 1));
//   const inc = () => setQuantity((q) => q + 1);

//   return (
//     <div className="container mx-auto p-6">
//       <div className="flex flex-col md:flex-row gap-8 bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
//         {/* ── Left: Images ── */}
//         <div className="md:w-80 shrink-0 flex flex-col gap-3">
//           {/* Main image */}
//           <div className="border border-gray-100 rounded-xl flex items-center justify-center h-72 overflow-hidden">
//             <img
//               src={images[selectedImage]}
//               alt="Product"
//               className="object-contain h-full w-full"
//             />
//           </div>

//           {/* Thumbnails */}
//           <div className="flex gap-2">
//             {images.map((img, i) => (
//               <button
//                 key={i}
//                 onClick={() => setSelectedImage(i)}
//                 className={`border-2 rounded-lg overflow-hidden w-16 h-16 shrink-0 transition-colors ${
//                   selectedImage === i
//                     ? "border-blue-500"
//                     : "border-gray-200 hover:border-gray-300"
//                 }`}
//               >
//                 <img
//                   src={img}
//                   alt={`thumb-${i}`}
//                   className="object-cover w-full h-full"
//                 />
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* ── Right: Info ── */}
//         <div className="flex-1 flex flex-col gap-4">
//           {/* Badges */}
//           <div className="flex gap-2">
//             <span className="text-xs font-medium text-green-700 bg-green-50 border border-green-200 px-3 py-1 rounded-full">
//               Women's Fashion
//             </span>
//             <span className="text-xs font-medium text-gray-600 bg-gray-100 border border-gray-200 px-3 py-1 rounded-full">
//               DeFacto
//             </span>
//           </div>

//           {/* Title */}
//           <h1 className="text-2xl font-bold text-gray-900">Woman Shawl</h1>

//           {/* Rating */}
//           <div className="flex items-center gap-2">
//             <div className="flex items-center gap-0.5">
//               <FaStar className="text-yellow-400" size={15} />
//               <FaStar className="text-yellow-400" size={15} />
//               <FaStar className="text-yellow-400" size={15} />
//               <FaStar className="text-yellow-400" size={15} />
//               <FaStarHalfAlt className="text-yellow-400" size={15} />
//             </div>
//             <span className="text-sm text-gray-500">4.2 (12 reviews)</span>
//           </div>

//           {/* Price */}
//           <p className="text-2xl font-bold text-gray-900">{price} EGP</p>

//           {/* In Stock */}
//           <div className="flex items-center gap-1.5 text-green-600 text-sm font-medium">
//             <span className="w-2 h-2 rounded-full bg-green-500 inline-block" />
//             In Stock
//           </div>

//           {/* Divider */}
//           <hr className="border-gray-100" />

//           {/* Description */}
//           <p className="text-sm text-gray-500 leading-relaxed">
//             Material Polyester Blend &nbsp;·&nbsp; Colour Name Multicolour
//             &nbsp;·&nbsp; Department Women
//           </p>

//           {/* Quantity */}
//           <div>
//             <p className="text-sm font-medium text-gray-700 mb-2">Quantity</p>
//             <div className="flex items-center gap-4">
//               <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden">
//                 <button
//                   onClick={dec}
//                   className="px-3 py-2 text-gray-600 hover:bg-gray-50 transition-colors"
//                 >
//                   <FiMinus size={14} />
//                 </button>
//                 <span className="px-4 py-2 text-sm font-semibold text-gray-800 border-x border-gray-200">
//                   {quantity}
//                 </span>
//                 <button
//                   onClick={inc}
//                   className="px-3 py-2 text-gray-600 hover:bg-gray-50 transition-colors"
//                 >
//                   <FiPlus size={14} />
//                 </button>
//               </div>
//               <span className="text-sm text-gray-400">225 available</span>
//             </div>
//           </div>

//           {/* Total Price */}
//           <div className="flex items-center justify-between bg-gray-50 rounded-xl px-5 py-3">
//             <span className="text-sm text-gray-500 font-medium">
//               Total Price:
//             </span>
//             <span className="text-lg font-bold text-green-600">
//               {(price * quantity).toFixed(2)} EGP
//             </span>
//           </div>

//           {/* CTA Buttons */}
//           <div className="flex gap-3">
//             <button className="flex-1 flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-xl transition-colors">
//               <FiShoppingCart size={18} />
//               Add to Cart
//             </button>
//             <button className="flex-1 flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 text-white font-semibold py-3 rounded-xl transition-colors">
//               <BsLightningChargeFill size={16} />
//               Buy Now
//             </button>
//           </div>

//           {/* Wishlist + Share */}
//           <div className="flex gap-3">
//             <button className="flex-1 flex items-center justify-center gap-2 border border-gray-200 hover:bg-gray-50 text-gray-700 text-sm font-medium py-2.5 rounded-xl transition-colors">
//               <FiHeart size={16} />
//               Add to Wishlist
//             </button>
//             <button className="border border-gray-200 hover:bg-gray-50 text-gray-600 p-2.5 rounded-xl transition-colors">
//               <FiShare2 size={16} />
//             </button>
//           </div>

//           {/* Trust badges */}
//           <div className="flex flex-wrap gap-4 pt-2">
//             <div className="flex items-center gap-2 text-sm text-gray-600">
//               <div className="bg-green-50 p-2 rounded-full">
//                 <FiTruck className="text-green-600" size={16} />
//               </div>
//               <div>
//                 <p className="font-medium text-gray-800 leading-tight">
//                   Free Delivery
//                 </p>
//                 <p className="text-xs text-gray-400">Orders over 550</p>
//               </div>
//             </div>
//             <div className="flex items-center gap-2 text-sm text-gray-600">
//               <div className="bg-green-50 p-2 rounded-full">
//                 <FiRefreshCw className="text-green-600" size={16} />
//               </div>
//               <div>
//                 <p className="font-medium text-gray-800 leading-tight">
//                   30 Days Return
//                 </p>
//                 <p className="text-xs text-gray-400">Money back</p>
//               </div>
//             </div>
//             <div className="flex items-center gap-2 text-sm text-gray-600">
//               <div className="bg-green-50 p-2 rounded-full">
//                 <FiShield className="text-green-600" size={16} />
//               </div>
//               <div>
//                 <p className="font-medium text-gray-800 leading-tight">
//                   Secure Payment
//                 </p>
//                 <p className="text-xs text-gray-400">100% Protected</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import { getSpecificProduct } from "@/service/API/getProductDetails";
import ProductDetailsClient from "../ProductDetailsClient/ProductDetailsClient";
import ProductTabs from "../ProductTabs/ProductTabs";

export default async function ProductDetails({ id }) {
  const data = await getSpecificProduct(id);
  return (
    <>
      <ProductDetailsClient product={data} />
      <ProductTabs product={data} />
    </>
  );
}

import Link from "next/link"
import { BsBoxSeam } from "react-icons/bs"

export default function EmptyProducts() {
  return (
    <div className="h-screen flex items-center justify-center">
        <div className="flex flex-col items-center justify-center py-20 gap-4">

      {/* Icon */}
      <div className="bg-gray-100 p-5 rounded-full">
        <BsBoxSeam className="text-gray-400" size={32} />
      </div>

      {/* Text */}
      <div className="text-center">
        <h3 className="text-base font-bold text-gray-800 mb-1">No Products Found</h3>
        <p className="text-sm text-gray-400">No products match your current filters.</p>
      </div>

      {/* Button */}
      <Link
        href="/products"
        className="bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-6 py-2.5 rounded-full transition-colors"
      >
        View All Products
      </Link>

    </div>
    </div>
  )
}
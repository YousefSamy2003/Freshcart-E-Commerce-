import { getAllCategories } from "@/service/API/getAllCategories";
import Link from "next/link";

import { FiArrowRight } from "react-icons/fi";
import CategoryCard from "../CategoryCard/CategoryCard";

export default async function Categories() {
  const data = await getAllCategories();

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="flex items-center gap-2 text-xl font-bold text-gray-800">
          <span className="w-1 h-7 bg-green-600 rounded-full inline-block" />
          Shop By <span className="text-green-600">Category</span>
        </h2>
        <Link
          href="/categories"
          className="flex items-center gap-1 text-sm text-green-600 hover:text-green-700 font-medium transition-colors"
        >
          View All Categories
          <FiArrowRight size={16} />
        </Link>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {data.map((cat) => (
          <Link key={cat._id} href={`/categories/${cat._id}`}>
            <CategoryCard cat={cat} />
          </Link>
        ))}
      </div>
    </div>
  );
}

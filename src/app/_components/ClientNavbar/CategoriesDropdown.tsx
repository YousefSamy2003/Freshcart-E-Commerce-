// _components/CategoriesDropdown.tsx
import { getAllCategories } from "@/service/API/getAllCategories";
import Link from "next/link";

export default async function CategoriesDropdown() {
  const categories = await getAllCategories();

  return (
    <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50">
      <Link
        href="/categories"
        className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors font-medium border-b border-gray-100 mb-1"
      >
        All Categories
      </Link>
      {categories.map((cat) => (
        <Link
          key={cat._id}
          href={`/categories/${cat._id}`}
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors"
        >
          {cat.name}
        </Link>
      ))}
    </div>
  );
}
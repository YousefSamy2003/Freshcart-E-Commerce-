import { CatInterface } from "@/interfaces/Category.interface";

export default function CategoryCard({ cat }: { cat: CatInterface }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow cursor-pointer p-4 flex flex-col items-center gap-3 group">
      
      {/* Image */}
      <div className="w-full h-32 flex items-center justify-center">
        <img
          src={cat.image}
          alt={cat.name}
          className="object-contain h-full group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Name */}
      <p className="text-sm font-medium text-gray-700">{cat.name}</p>

    </div>
  );
}
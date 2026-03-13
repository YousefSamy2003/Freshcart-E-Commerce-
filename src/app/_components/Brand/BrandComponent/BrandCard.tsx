import { AllBrandsInterface } from "@/interfaces/AllBrands.interface";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

export default function BrandCard({ brand }: { brand: AllBrandsInterface }) {
  return (
    <Link
      href={`/brands/${brand._id}`}
      className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 p-4 flex flex-col items-center gap-3 cursor-pointer"
    >
      {/* Image */}
      <div className="w-full rounded-xl flex items-center justify-center h-36 overflow-hidden transition-colors duration-300">
        <Image
          src={brand.image}
          alt={brand.name}
          width={200}
          height={200}
          className="object-contain h-20 w-full px-4 group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Name */}
      <p className="text-sm font-medium group-hover:text-green-400 transition-colors">
        {brand.name}
      </p>

      {/* View Products — shows on hover */}
      <span className="text-xs text-green-400 font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -mt-1">
        View Products <FiArrowRight size={12} />
      </span>
    </Link>
  );
}
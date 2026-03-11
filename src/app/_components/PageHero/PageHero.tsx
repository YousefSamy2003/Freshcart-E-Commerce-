import { Link } from "lucide-react";
import { BsBoxSeam } from "react-icons/bs";

// Reusable version
export default function PageHero({
  title,
  subtitle,
  breadcrumb,
}: {
  title: string;
  subtitle: string;
  breadcrumb: string;
}) {
  return (
    <div className="bg-gradient-to-r from-green-500 to-green-400 py-8 px-6">
      <div className="container mx-auto">
        <div className="flex items-center gap-2 text-white/80 text-sm mb-4">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-white font-semibold">{breadcrumb}</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="bg-white/20 p-3 rounded-2xl">
            <BsBoxSeam className="text-white" size={28} />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white">{title}</h1>
            <p className="text-white/80 text-sm mt-0.5">{subtitle}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

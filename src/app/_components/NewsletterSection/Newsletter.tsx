import { FiMail, FiArrowRight, FiTruck, FiTag } from "react-icons/fi"
import { FaApple, FaGooglePlay, FaStar, FaLeaf } from "react-icons/fa"

export default function NewsletterSection() {
  return (
    <section className="bg-gray-50 py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* ── Left: Newsletter ── */}
          <div className="bg-white rounded-3xl p-8 flex flex-col gap-5 border border-gray-100 shadow-sm">

            {/* Badge */}
            <div className="flex items-center gap-3">
              <div className="bg-green-500 p-3 rounded-2xl">
                <FiMail className="text-white" size={20} />
              </div>
              <div>
                <p className="text-xs font-bold text-green-600 uppercase tracking-widest">Newsletter</p>
                <p className="text-xs text-gray-400">50,000+ subscribers</p>
              </div>
            </div>

            {/* Title */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 leading-snug">
                Get the Freshest Updates{" "}
                <span className="text-green-500">Delivered Free</span>
              </h2>
              <p className="text-sm text-gray-400 mt-2">
                Weekly recipes, seasonal offers & exclusive member perks.
              </p>
            </div>

            {/* Perks */}
            <div className="flex flex-wrap gap-2">
              {[
                { icon: <FaLeaf size={12} />, label: "Fresh Picks Weekly" },
                { icon: <FiTruck size={12} />, label: "Free Delivery Codes" },
                { icon: <FiTag size={12} />, label: "Members-Only Deals" },
              ].map((perk) => (
                <span
                  key={perk.label}
                  className="flex items-center gap-1.5 text-xs text-gray-600 border border-gray-200 rounded-full px-3 py-1.5"
                >
                  <span className="text-green-500">{perk.icon}</span>
                  {perk.label}
                </span>
              ))}
            </div>

            {/* Input */}
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="you@example.com"
                className="flex-1 border border-gray-200 rounded-full px-5 py-3 text-sm focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition"
              />
              <button className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-6 py-3 rounded-full transition-colors whitespace-nowrap">
                Subscribe <FiArrowRight size={15} />
              </button>
            </div>

            <p className="text-xs text-gray-400">
              ✳️ Unsubscribe anytime. No spam, ever.
            </p>
          </div>

          {/* ── Right: Mobile App ── */}
          <div className="bg-gray-900 rounded-3xl p-8 flex flex-col gap-5">

            {/* Badge */}
            <span className="flex items-center gap-2 bg-green-600/20 text-green-400 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full w-fit">
              <FiTag size={12} /> Mobile App
            </span>

            {/* Title */}
            <div>
              <h2 className="text-2xl font-bold text-white leading-snug">
                Shop Faster on Our App
              </h2>
              <p className="text-sm text-gray-400 mt-2">
                Get app-exclusive deals & 15% off your first order.
              </p>
            </div>

            {/* Store buttons */}
            <div className="flex flex-col gap-3">
              <button className="flex items-center gap-4 bg-gray-800 hover:bg-gray-700 text-white rounded-2xl px-5 py-3.5 transition-colors w-full">
                <FaApple size={24} />
                <div className="text-left">
                  <p className="text-[10px] text-gray-400 uppercase tracking-widest">Download on</p>
                  <p className="text-sm font-bold">App Store</p>
                </div>
              </button>
              <button className="flex items-center gap-4 bg-gray-800 hover:bg-gray-700 text-white rounded-2xl px-5 py-3.5 transition-colors w-full">
                <FaGooglePlay size={22} />
                <div className="text-left">
                  <p className="text-[10px] text-gray-400 uppercase tracking-widest">Get it on</p>
                  <p className="text-sm font-bold">Google Play</p>
                </div>
              </button>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" size={14} />
                ))}
              </div>
              <span className="text-sm text-gray-400">4.9 · 100K+ downloads</span>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
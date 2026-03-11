import Link from "next/link";
import {
  FiTruck,
  FiRefreshCw,
  FiShield,
  FiHeadphones,
  FiPhone,
  FiMail,
  FiMapPin,
} from "react-icons/fi";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaCcVisa,
  FaCcMastercard,
  FaCcPaypal,
} from "react-icons/fa";

const badges = [
  {
    icon: <FiTruck size={22} />,
    title: "Free Shipping",
    sub: "On orders over 500 EGP",
  },
  {
    icon: <FiRefreshCw size={22} />,
    title: "Easy Returns",
    sub: "14-day return policy",
  },
  {
    icon: <FiShield size={22} />,
    title: "Secure Payment",
    sub: "100% secure checkout",
  },
  {
    icon: <FiHeadphones size={22} />,
    title: "24/7 Support",
    sub: "Contact us anytime",
  },
];

const links = {
  Shop: [
    { label: "All Products", href: "/shop" },
    { label: "Categories", href: "/categories" },
    { label: "Brands", href: "/brands" },
    { label: "Electronics", href: "/categories/electronics" },
    { label: "Men's Fashion", href: "/categories/mens-fashion" },
    { label: "Women's Fashion", href: "/categories/womens-fashion" },
  ],
  Account: [
    { label: "My Account", href: "/account" },
    { label: "Order History", href: "/account/orders" },
    { label: "Wishlist", href: "/wishlist" },
    { label: "Shopping Cart", href: "/cart" },
    { label: "Sign In", href: "/login" },
    { label: "Create Account", href: "/register" },
  ],
  Support: [
    { label: "Contact Us", href: "/contact" },
    { label: "Help Center", href: "/help" },
    { label: "Shipping Info", href: "/shipping" },
    { label: "Returns & Refunds", href: "/returns" },
    { label: "Track Order", href: "/track" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Cookie Policy", href: "/cookies" },
  ],
};

const socials = [
  { icon: <FaFacebookF size={14} />, href: "https://facebook.com" },
  { icon: <FaTwitter size={14} />, href: "https://twitter.com" },
  { icon: <FaInstagram size={14} />, href: "https://instagram.com" },
  { icon: <FaYoutube size={14} />, href: "https://youtube.com" },
];

export default function Footer() {
  return (
    <footer>
      {/* ── Trust Badges ── */}
      <div className=" bg-green-50 border-b border-green-100  ">
        <div className="container mx-auto px-4 py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {badges.map((b) => (
              <div key={b.title} className="flex items-center gap-3">
                <div className="bg-green-100 text-green-600 p-2.5 rounded-full shrink-0">
                  {b.icon}
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-800">
                    {b.title}
                  </p>
                  <p className="text-xs text-gray-500">{b.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Main Footer ── */}
      <div className="bg-gray-900 text-gray-400">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-10">
            {/* Brand col */}
            <div className="lg:col-span-2 flex flex-col gap-5">
              <Link
                href="/"
                className="inline-flex items-center gap-2 bg-gray-800 border border-gray-700 px-4 py-2 rounded-xl w-fit"
              >
                <FiTruck className="text-green-500" size={20} />
                <span className="text-white font-bold text-lg">
                  Fresh<span className="text-green-500">Cart</span>
                </span>
              </Link>

              <p className="text-sm leading-relaxed">
                FreshCart is your one-stop destination for quality products.
                From fashion to electronics, we bring you the best brands at
                competitive prices with a seamless shopping experience.
              </p>

              {/* Contact */}
              <div className="flex flex-col gap-2 text-sm">
                <Link
                  href="tel:+18001234567"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <FiPhone className="text-green-500 shrink-0" size={14} />
                  +1 (800) 123-4567
                </Link>
                <Link
                  href="mailto:support@freshcart.com"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <FiMail className="text-green-500 shrink-0" size={14} />
                  support@freshcart.com
                </Link>
                <span className="flex items-center gap-2">
                  <FiMapPin className="text-green-500 shrink-0" size={14} />
                  123 Commerce Street, New York, NY 10001
                </span>
              </div>

              {/* Social */}
              <div className="flex items-center gap-2">
                {socials.map((s, i) => (
                  <Link
                    key={i}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full border border-gray-700 flex items-center justify-center hover:border-green-500 hover:text-green-500 transition-colors"
                  >
                    {s.icon}
                  </Link>
                ))}
              </div>
            </div>

            {/* Link columns */}
            {Object.entries(links).map(([title, items]) => (
              <div key={title}>
                <h4 className="text-white font-semibold text-sm mb-4">
                  {title}
                </h4>
                <ul className="flex flex-col gap-2.5">
                  {items.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="text-sm hover:text-green-400 transition-colors"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* ── Bottom Bar ── */}
        <div className="border-t border-gray-800">
          <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-gray-500">
              © 2026 FreshCart. All rights reserved.
            </p>
            <div className="flex items-center gap-3 text-gray-500">
              <FaCcVisa size={28} />
              <FaCcMastercard size={28} />
              <FaCcPaypal size={28} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

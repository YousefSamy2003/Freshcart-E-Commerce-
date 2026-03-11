"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  FiSearch,
  FiHeart,
  FiShoppingCart,
  FiUser,
  FiUserPlus,
  FiPhone,
  FiMail,
  FiTruck,
  FiGift,
  FiX,
  FiMenu,
  FiChevronDown,
  FiHeadphones,
} from "react-icons/fi";
import logo from "../../../assets/Images/fresh-logo.svg";
import Image from "next/image";
import { getAllCategories } from "@/service/API/getAllCategories";
import { Category } from "@/interfaces/Products.interface";
import { CatInterface } from "@/interfaces/Category.interface";
// ─── Inline SVG Logo (cart icon) ───────────────────────────────────────────
function CartLogo() {
  return (
    <>
      <Image src={logo} alt="logo " />
    </>
  );
}

// ─── Top Bar ────────────────────────────────────────────────────────────────
function TopBar() {
  return (
    <div className="bg-gray-800 text-gray-300 text-xs hidden md:block ">
      <div className="container mx-auto px-4 py-2 flex flex-wrap items-center justify-between gap-y-1">
        {/* Left promo items */}
        <div className="flex items-center gap-5">
          <span className="flex items-center gap-1.5">
            <FiTruck className="text-green-400" />
            Free Shipping on Orders 500 EGP
          </span>
          <span className="hidden sm:flex items-center gap-1.5">
            <FiGift className="text-green-400" />
            New Arrivals Daily
          </span>
        </div>
        {/* Right contact + auth */}
        <div className="flex items-center gap-4">
          <a
            href="tel:+18001234567"
            className="hidden md:flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <FiPhone /> +1 (800) 123-4567
          </a>
          <a
            href="mailto:support@freshcart.com"
            className="hidden md:flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <FiMail /> support@freshcart.com
          </a>
          <span className="hidden md:block w-px h-3 bg-gray-600" />
          <Link
            href="/login"
            className="flex items-center gap-1 hover:text-white transition-colors"
          >
            <FiUser size={12} /> Sign In
          </Link>
          <Link
            href="/register"
            className="flex items-center gap-1 hover:text-white transition-colors"
          >
            <FiUserPlus size={12} /> Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}

// ─── Main Navbar ─────────────────────────────────────────────────────────────
export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [categories, setCategories] = useState([]);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Shop", href: "/products" },
    {
      label: "Categories",
      href: "/categories",
      hasDropdown: true,
      dropdown: [
        "All Categories",
        "Electronics",
        "Fashion",
        "Grocery",
        "Health & Beauty",
        "Home & Garden",
      ],
    },
    { label: "Brands", href: "/brands" },
  ];

  useEffect(() => {
    async function fetchCategories() {
      const data = await getAllCategories();
      console.log(data);
      setCategories(data);
    }
    fetchCategories();
  }, []);

  return (
    <>
      {/* ── Top Bar ── */}
      <TopBar />

      {/* ── Main Header ── */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto ">
          <div className="flex items-center gap-4 h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 shrink-0">
              <CartLogo />
            </Link>

            {/* Search bar — hidden on mobile */}
            <div className="hidden md:flex flex-1 max-w-xl mx-2">
              <div className="relative w-full">
                <input
                  type="text"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  placeholder="Search for products, brands and more..."
                  className="w-full border border-gray-200 rounded-full py-2.5 pl-4 pr-12 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition"
                />
                <button className="absolute right-1.5 top-1/2 -translate-y-1/2 bg-green-600 hover:bg-green-700 text-white rounded-full p-2 transition-colors">
                  <FiSearch size={14} />
                </button>
              </div>
            </div>

            {/* Nav Links — large screens only */}
            <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-gray-700 shrink-0">
              {navLinks.map((link) =>
                link.hasDropdown ? (
                  <div key={link.label} className="relative">
                    <button
                      onClick={() => setCategoriesOpen(!categoriesOpen)}
                      className="flex items-center gap-1 hover:text-green-600 transition-colors"
                    >
                      {link.label}
                      <FiChevronDown
                        size={14}
                        className={`transition-transform ${categoriesOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                    {categoriesOpen && (
                      <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50">
                        {/* {link.dropdown.map((item) => (
                          <Link
                            key={item}
                            href={`/products/${item.toLowerCase().replace(/\s+/g, "-")}`}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors"
                          >
                            {item}
                          </Link>
                        ))} */}
                        {/* All Categories */}
                        <Link
                          href="/categories"
                          onClick={() => setCategoriesOpen(false)}
                          className="block px-4 py-2 text-sm font-medium text-gray-800 hover:bg-green-50 hover:text-green-600 transition-colors border-b border-gray-100 mb-1"
                        >
                          All Categories
                        </Link>

                        {/* Dynamic from API */}
                        {categories.map((cat) => (
                          <Link
                            key={cat._id}
                            href={`/categories/${cat._id}`}
                            onClick={() => setCategoriesOpen(false)}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors"
                          >
                            {cat.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="hover:text-green-600 transition-colors"
                  >
                    {link.label}
                  </Link>
                ),
              )}
            </nav>

            {/* Right actions */}
            <div className="flex items-center gap-2 ml-auto shrink-0">
              {/* Support — hidden on small screens */}
              <div className="hidden md:flex items-center gap-2 mr-1">
                <div className="bg-green-50 p-2 rounded-full">
                  <FiHeadphones className="text-green-600" size={18} />
                </div>
                <div className="leading-tight">
                  <p className="text-xs text-gray-400">Support</p>
                  <p className="text-xs font-semibold text-gray-700">
                    24/7 Help
                  </p>
                </div>
              </div>

              {/* Wishlist */}
              <Link
                href="/wishlist"
                className="hidden sm:flex p-2 text-gray-500 hover:text-green-600 hover:bg-green-50 rounded-full transition-colors"
              >
                <FiHeart size={20} />
              </Link>

              {/* Cart */}
              <Link
                href="/cart"
                className="hidden sm:flex p-2 text-gray-500 hover:text-green-600 hover:bg-green-50 rounded-full transition-colors relative"
              >
                <FiShoppingCart size={20} />
                <span className="absolute -top-0.5 -right-0.5 bg-green-600 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  3
                </span>
              </Link>

              {/* Sign In button — hidden on mobile */}
              <Link
                href="/login"
                className="hidden md:flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-4 py-2 rounded-full transition-colors"
              >
                <FiUser size={14} />
                Sign In
              </Link>

              {/* Hamburger — mobile only */}
              <button
                onClick={() => setMobileOpen(true)}
                className="lg:hidden p-2 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-full transition-colors"
                aria-label="Open menu"
              >
                <FiMenu size={22} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ── Mobile Drawer ── */}
      {/* Backdrop */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-50 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Drawer panel */}
      <aside
        className={`fixed top-0 right-0 h-full w-[300px] bg-white z-50 shadow-2xl flex flex-col transition-transform duration-300 lg:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
          <Link
            href="/"
            className="flex items-center gap-2"
            onClick={() => setMobileOpen(false)}
          >
            <CartLogo />
          </Link>
          <button
            onClick={() => setMobileOpen(false)}
            className="p-1.5 text-gray-500 hover:text-gray-800 hover:bg-gray-100 rounded-full transition-colors"
          >
            <FiX size={20} />
          </button>
        </div>

        {/* Search inside drawer */}
        <div className="px-5 py-4 border-b border-gray-100">
          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full border border-gray-200 rounded-full py-2.5 pl-4 pr-10 text-sm focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
            />
            <button className="absolute right-1.5 top-1/2 -translate-y-1/2 bg-green-600 text-white rounded-full p-2">
              <FiSearch size={13} />
            </button>
          </div>
        </div>

        {/* Nav links */}
        <nav className="flex-1 overflow-y-auto px-5 py-4 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-between py-2.5 px-3 text-sm font-medium text-gray-700 rounded-lg hover:bg-green-50 hover:text-green-600 transition-colors"
            >
              {link.label}
              {link.hasDropdown && <FiChevronDown size={14} />}
            </a>
          ))}

          <div className="border-t border-gray-100 pt-3 mt-3 space-y-1">
            <a
              href="/wishlist"
              onClick={() => setMobileOpen(false)}
              className="flex items-center gap-3 py-2.5 px-3 text-sm font-medium text-gray-700 rounded-lg hover:bg-green-50 hover:text-green-600 transition-colors"
            >
              <FiHeart className="text-red-400" size={16} />
              Wishlist
            </a>
            <a
              href="/cart"
              onClick={() => setMobileOpen(false)}
              className="flex items-center gap-3 py-2.5 px-3 text-sm font-medium text-gray-700 rounded-lg hover:bg-green-50 hover:text-green-600 transition-colors"
            >
              <FiShoppingCart className="text-green-600" size={16} />
              Cart
              <span className="ml-auto bg-green-100 text-green-700 text-xs font-bold px-2 py-0.5 rounded-full">
                3
              </span>
            </a>
          </div>
        </nav>

        {/* CTA buttons */}
        <div className="px-5 py-4 border-t border-gray-100 space-y-2">
          <a
            href="/login"
            className="flex items-center justify-center gap-2 w-full bg-green-600 hover:bg-green-700 text-white text-sm font-semibold py-2.5 rounded-full transition-colors"
          >
            <FiUser size={14} /> Sign In
          </a>
          <a
            href="/register"
            className="flex items-center justify-center gap-2 w-full border-2 border-green-600 text-green-600 hover:bg-green-50 text-sm font-semibold py-2.5 rounded-full transition-colors"
          >
            <FiUserPlus size={14} /> Sign Up
          </a>
        </div>

        {/* Support */}
        <div className="px-5 py-4 bg-green-50 border-t border-green-100">
          <div className="flex items-center gap-3">
            <div className="bg-white rounded-full p-2 shadow-sm">
              <FiHeadphones className="text-green-600" size={18} />
            </div>
            <div>
              <p className="text-xs font-semibold text-gray-800">Need Help?</p>
              <a
                href="/support"
                className="text-xs text-green-600 hover:underline"
              >
                Contact Support
              </a>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}

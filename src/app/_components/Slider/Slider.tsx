"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Image from "next/image";
import slide1 from "../../../assets/slider-image-1.jpeg";
import slide2 from "../../../assets/slider-2.jpeg";
import slide3 from "../../../assets/slider-image-3.jpeg";

const slides = [
  {
    id: 1,
    title: "Fresh Products Delivered to your Door",
    subtitle: "Get 20% off your first order",
    image: slide1,
    buttons: [
      { label: "Shop Now", href: "/products", variant: "solid" },
      { label: "View Deals", href: "/deals", variant: "outline" },
    ],
  },
  {
    id: 2,
    title: "Premium Quality Guaranteed",
    subtitle: "Fresh from farm to your table",
    image: slide2,
    buttons: [
      { label: "Shop Now", href: "/products", variant: "solid" },
      { label: "Learn More", href: "/deals", variant: "outline" },
    ],
  },
  {
    id: 3,
    title: "Fast & Free Delivery",
    subtitle: "Same day delivery available",
    image: slide3,
    buttons: [
      { label: "Order Now", href: "/products", variant: "solid" },
      { label: "Delivery Info", href: "/delivery", variant: "outline" },
    ],
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((p) => (p - 1 + slides.length) % slides.length);
  const next = () => setCurrent((p) => (p + 1) % slides.length);

  return (
    <div className="relative w-full h-[300px] md:h-[380px] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, i) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700  ${
            i === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* Background image */}
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover"
            priority={i === 0}
          />

          {/* Green overlay */}
          <div className="absolute inset-0 bg-green-500/60" />

          {/* Content */}
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-8 md:px-16">
              <div className="max-w-md">
                <h1 className="text-2xl md:text-3xl font-bold text-white leading-snug mb-2">
                  {slide.title}
                </h1>
                <p className="text-sm md:text-base text-white/90 mb-6">
                  {slide.subtitle}
                </p>
                <div className="flex gap-3 flex-wrap">
                  {slide.buttons.map((btn) => (
                    <Link
                      key={btn.label}
                      href={btn.href}
                      className={`text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors ${
                        btn.variant === "solid"
                          ? "bg-white text-green-600 hover:bg-gray-100"
                          : "border-2 border-white text-white hover:bg-white/10"
                      }`}
                    >
                      {btn.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Prev button */}
      <button
        onClick={prev}
        className="hidden md:block absolute left-3 top-1/2 -translate-y-1/2 z-20 bg-white/30 hover:bg-white/50 text-white p-2 rounded-full transition-colors"
      >
        <FiChevronLeft size={20} />
      </button>

      {/* Next button */}
      <button
        onClick={next}
        className="hidden md:block absolute right-3 top-1/2 -translate-y-1/2 z-20 bg-white/30 hover:bg-white/50 text-white p-2 rounded-full transition-colors"
      >
        <FiChevronRight size={20} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`transition-all duration-300 rounded-full ${
              i === current
                ? "w-6 h-2 bg-white"
                : "w-2 h-2 bg-white/50 hover:bg-white/75"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

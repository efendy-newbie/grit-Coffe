/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from "react";
import { MENU_ITEMS, BRAND_INFO } from "../data";

export default function Menu() {
  const [selectedCategory] = useState("all");
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (containerRef.current) {
            observer.unobserve(containerRef.current);
          }
        }
      },
      {
        root: null,
        rootMargin: "0px 0px -15% 0px", // Trigger slightly before the grid becomes fully visible
        threshold: 0.05,
      }
    );

    const currentRef = containerRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section id="menu" className="py-20 md:py-24 bg-cream border-t border-sand/30">
      <div className="max-w-[1080px] mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up" style={{ animationDelay: "100ms" }}>
          <span className="text-terracotta text-xs font-semibold uppercase tracking-[0.2em] mb-3 block">
            Crafted Signature
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-[40px] font-bold text-charcoal tracking-tight mb-4">
            The Grit Collection
          </h2>
          <p className="font-sans text-sm md:text-base text-text-secondary max-w-md mx-auto">
            Four signatures. One attitude. Meticulously pulled, brewed, and served.
          </p>
        </div>

        {/* Bento Grid */}
        <div
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr"
          id="menu-bento-grid"
        >
          {/* 1. LARGE SIGNATURE CARD (2x2 layout on desktop) */}
          {MENU_ITEMS.filter((item) => item.size === "large").map((item, index) => (
            <div
              key={item.id}
              className={`rounded-md overflow-hidden shadow-md border border-sand bg-white relative flex flex-col justify-end p-6 md:p-8 min-h-[350px] md:min-h-[500px] md:col-span-2 md:row-span-2 group transition-[opacity,transform] duration-[1400ms] [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
              }`}
              style={{ transitionDelay: `${(index + 1) * 140}ms` }}
              id={`menu-card-${item.id}`}
            >
              {/* Full Background Image */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-[800ms] ease-out group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                {/* Gradient Overlay for excellent text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent opacity-90" />
              </div>

              {/* Highlight Badge */}
              <div className="absolute top-4 left-4 z-10 bg-terracotta text-white text-[10px] uppercase tracking-widest font-bold py-1 px-3 rounded-full shadow-sm">
                {item.badge}
              </div>

              {/* Text Side (At the Bottom) */}
              <div className="relative z-10 text-white flex flex-col justify-end h-full">
                <span className="text-xs font-semibold text-terracotta uppercase tracking-[0.15em] mb-2 block">
                  Our Masterpiece
                </span>
                <h3 className="font-serif text-3xl md:text-4xl font-bold text-white mb-3">
                  {item.name}
                </h3>
                <p className="font-sans text-sm text-white/80 leading-relaxed mb-6 max-w-xl">
                  {item.description}
                </p>

                <div className="flex items-center justify-between border-t border-white/20 pt-4 mt-2">
                  <div>
                    <span className="text-[10px] uppercase text-white/50 tracking-widest block font-medium">Price</span>
                    <span className="font-sans text-xl md:text-2xl font-bold text-white">{item.price}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* 2. SMALL CARD 1 (1x1 on desktop) */}
          {MENU_ITEMS.filter((item) => item.size === "small").slice(0, 1).map((item, index) => (
            <div
              key={item.id}
              className={`bento-card flex flex-col justify-between group transition-[opacity,transform] duration-[1400ms] [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
              }`}
              style={{ transitionDelay: "280ms" }}
              id={`menu-card-${item.id}`}
            >
              <div className="w-full aspect-square overflow-hidden rounded-md mb-4 bg-sand/25">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="flex flex-col flex-grow justify-between">
                <div>
                  <div className="flex justify-between items-baseline mb-2">
                    <h3 className="font-serif text-lg font-bold text-charcoal group-hover:text-terracotta transition-colors duration-200">
                      {item.name}
                    </h3>
                    <span className="font-sans font-bold text-charcoal text-sm shrink-0 ml-2">{item.price}</span>
                  </div>
                  <p className="font-sans text-xs text-text-secondary leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {/* 3. SMALL CARD 2 (1x1 on desktop) */}
          {MENU_ITEMS.filter((item) => item.size === "small").slice(1, 2).map((item, index) => (
            <div
              key={item.id}
              className={`bento-card flex flex-col justify-between group transition-[opacity,transform] duration-[1400ms] [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
              }`}
              style={{ transitionDelay: "420ms" }}
              id={`menu-card-${item.id}`}
            >
              <div className="w-full aspect-square overflow-hidden rounded-md mb-4 bg-sand/25">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="flex flex-col flex-grow justify-between">
                <div>
                  <div className="flex justify-between items-baseline mb-2">
                    <h3 className="font-serif text-lg font-bold text-charcoal group-hover:text-terracotta transition-colors duration-200">
                      {item.name}
                    </h3>
                    <span className="font-sans font-bold text-charcoal text-sm shrink-0 ml-2">{item.price}</span>
                  </div>
                  <p className="font-sans text-xs text-text-secondary leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {/* 4. SMALL CARD 3 (1x1 on desktop) */}
          {MENU_ITEMS.filter((item) => item.size === "small").slice(2, 3).map((item, index) => (
            <div
              key={item.id}
              className={`bento-card flex flex-col justify-between group transition-[opacity,transform] duration-[1400ms] [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
              }`}
              style={{ transitionDelay: "560ms" }}
              id={`menu-card-${item.id}`}
            >
              <div className="w-full aspect-square overflow-hidden rounded-md mb-4 bg-sand/25">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="flex flex-col flex-grow justify-between">
                <div>
                  <div className="flex justify-between items-baseline mb-2">
                    <h3 className="font-serif text-lg font-bold text-charcoal group-hover:text-terracotta transition-colors duration-200">
                      {item.name}
                    </h3>
                    <span className="font-sans font-bold text-charcoal text-sm shrink-0 ml-2">{item.price}</span>
                  </div>
                  <p className="font-sans text-xs text-text-secondary leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {/* 5. LIST MENU CARD (Completes the 3-column bento grid area, 2 columns wide on row 3) */}
          <div
            className={`bento-card md:col-span-2 bg-white flex flex-col justify-between overflow-hidden relative group transition-[opacity,transform] duration-[1400ms] [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
            }`}
            style={{ transitionDelay: "700ms" }}
            id="menu-other-list"
          >
            {/* Background geometric accents */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-terracotta/5 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-sand/20 rounded-full blur-3xl pointer-events-none" />

            <div className="z-10 py-4 w-full">
              <span className="text-charcoal text-xs font-semibold uppercase tracking-[0.15em] mb-3 block opacity-80" id="menu-list-favorites-label">
                Additional Favorites
              </span>
              <h3 className="font-serif text-3xl md:text-4xl lg:text-[40px] font-bold text-charcoal mb-8 tracking-tight leading-tight">
                Our Menu List
              </h3>
              
              {/* Elegant Two-Column List Menu with larger typography and expanded spacing */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6 md:gap-y-8 font-sans text-base">
                <div className="flex flex-col gap-5 md:gap-6">
                  <div className="flex justify-between items-baseline border-b border-sand pb-2">
                    <span className="font-bold text-charcoal text-base md:text-lg">Americano</span>
                    <span className="text-charcoal font-bold text-base md:text-lg">Rp 28k</span>
                  </div>
                  <div className="flex justify-between items-baseline border-b border-sand pb-2">
                    <span className="font-bold text-charcoal text-base md:text-lg">Cappuccino</span>
                    <span className="text-charcoal font-bold text-base md:text-lg">Rp 35k</span>
                  </div>
                  <div className="flex justify-between items-baseline border-b border-sand pb-2">
                    <span className="font-bold text-charcoal text-base md:text-lg">Flat White</span>
                    <span className="text-charcoal font-bold text-base md:text-lg">Rp 35k</span>
                  </div>
                  <div className="flex justify-between items-baseline border-b border-sand pb-2">
                    <span className="font-bold text-charcoal text-base md:text-lg">Caramel Macchiato</span>
                    <span className="text-charcoal font-bold text-base md:text-lg">Rp 42k</span>
                  </div>
                </div>

                <div className="flex flex-col gap-5 md:gap-6">
                  <div className="flex justify-between items-baseline border-b border-sand pb-2">
                    <span className="font-bold text-charcoal text-base md:text-lg">Matcha Latte</span>
                    <span className="text-charcoal font-bold text-base md:text-lg">Rp 40k</span>
                  </div>
                  <div className="flex justify-between items-baseline border-b border-sand pb-2">
                    <span className="font-bold text-charcoal text-base md:text-lg">Chocolate Truffle</span>
                    <span className="text-charcoal font-bold text-base md:text-lg">Rp 38k</span>
                  </div>
                  <div className="flex justify-between items-baseline border-b border-sand pb-2">
                    <span className="font-bold text-charcoal text-base md:text-lg">Charcoal Black Latte</span>
                    <span className="text-charcoal font-bold text-base md:text-lg">Rp 42k</span>
                  </div>
                  <div className="flex justify-between items-baseline border-b border-sand pb-2">
                    <span className="font-bold text-charcoal text-base md:text-lg">Peach Iced Tea</span>
                    <span className="text-charcoal font-bold text-base md:text-lg">Rp 25k</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="z-10 flex flex-wrap items-center gap-x-6 gap-y-2 mt-10 pt-6 border-t border-sand text-xs text-charcoal/60 font-sans">
              <span>* All prices include tax</span>
              <span>• Custom milk alternatives (Oat/Almond) available (+ Rp 5k)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

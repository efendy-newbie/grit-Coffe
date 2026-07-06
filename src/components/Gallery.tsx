/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { GALLERY_ITEMS } from "../data";

export default function Gallery() {
  const handleVisitUs = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="gallery" className="py-20 md:py-24 bg-sand/40 border-t border-b border-sand/30">
      <div className="max-w-[1080px] mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up" style={{ animationDelay: "100ms" }}>
          <span className="text-terracotta text-xs font-semibold uppercase tracking-[0.2em] mb-3 block">
            The Space
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-[40px] font-bold text-charcoal tracking-tight mb-4">
            Built with Grit
          </h2>
          <p className="font-sans text-sm md:text-base text-text-secondary max-w-md mx-auto">
            Every corner tells a story. Walk in, grab a cup, and write yours.
          </p>
        </div>

        {/* Bento Gallery Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr"
          id="gallery-bento-grid"
        >
          {GALLERY_ITEMS.map((item, index) => (
            <div
              key={item.id}
              className={`relative overflow-hidden rounded-md group shadow-md border border-sand bg-white transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-xl hover:border-terracotta/30 ${item.gridSpan} aspect-video md:aspect-auto min-h-[220px] md:min-h-[280px] flex flex-col justify-end p-6 animate-slide-up`}
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
              id={`gallery-item-${item.id}`}
            >
              {/* Background Image */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                {/* Dynamic moody gradient overlay: darker on bottom for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/30 to-transparent opacity-85" />
              </div>

              {/* Text Content Overlay */}
              <div className="relative z-10 text-white">
                <span className="text-[10px] uppercase tracking-widest text-terracotta font-bold mb-1 block">
                  {item.subtitle}
                </span>
                <h3 className="font-serif text-lg md:text-xl font-bold tracking-tight">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Call to Action ("Visit Us") */}
        <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: "600ms" }}>
          <button
            onClick={handleVisitUs}
            className="btn-primary inline-flex items-center gap-2"
            id="gallery-cta"
          >
            <span>Visit Us</span>
          </button>
        </div>
      </div>
    </section>
  );
}

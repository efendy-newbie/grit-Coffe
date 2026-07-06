/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { ArrowDown } from "lucide-react";
import { BRAND_INFO } from "../data";
import heroBaristaImg from "../assets/images/hero_barista_1783338069164.jpg";

export default function Hero() {
  const handleExploreMenu = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const menuSection = document.querySelector("#menu");
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen bg-cream flex items-center pt-24 pb-16 overflow-hidden md:py-24"
    >
      <div className="max-w-[1080px] mx-auto px-4 md:px-6 w-full grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center relative">
        {/* Left Side Copy (40% width in desktop, i.e., 5 columns out of 12) */}
        <div
          id="hero-copy"
          className="md:col-span-5 flex flex-col justify-center text-left relative z-10 animate-slide-up"
          style={{ animationDelay: "100ms" }}
        >
          {/* Subtle Accent Label */}
          <span
            className="text-terracotta text-xs font-semibold uppercase tracking-[0.2em] mb-4 block"
            id="hero-label"
          >
            Specialty Coffee Roasters
          </span>

          {/* Headline (Playfair Display 56px on large screens) */}
          <h1
            className="font-serif text-4xl md:text-5xl lg:text-[56px] leading-[1.1] font-bold text-charcoal tracking-[-0.02em] mb-6"
            id="hero-title"
          >
            Strong Brew.
            <br />
            <span className="text-terracotta">Stronger Grit.</span>
          </h1>

          {/* Subheadline (Inter 18px body large) */}
          <p
            className="font-sans text-base md:text-lg text-text-secondary leading-relaxed mb-8 max-w-md"
            id="hero-subtitle"
          >
            {BRAND_INFO.subtagline}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center" id="hero-cta-group">
            <button
              onClick={handleExploreMenu}
              className="btn-primary flex items-center gap-2 group w-full sm:w-auto justify-center"
              id="hero-cta-primary"
            >
              <span>Explore Menu</span>
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-200" />
            </button>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="btn-outline w-full sm:w-auto text-center justify-center inline-flex items-center"
              id="hero-cta-secondary"
            >
              Visit Us
            </a>
          </div>
        </div>

        {/* Decorative Vertical Terracotta Accent Line (Only on desktop) */}
        <div
          id="hero-divider"
          className="hidden md:block absolute left-[43.5%] top-[10%] bottom-[10%] w-[1px] bg-terracotta/20"
        />

        {/* Right Side Photo (60% width, i.e., 7 columns out of 12) */}
        <div
          id="hero-image-container"
          className="md:col-span-7 relative flex justify-center md:justify-end animate-slide-in-right"
          style={{ animationDelay: "200ms" }}
        >
          {/* Subtle Background Accent Shape (Asymmetric industrial feel) */}
          <div className="absolute -bottom-6 -left-6 w-full h-full bg-sand rounded-sm -z-10 translate-x-2 translate-y-2 opacity-50" />

          {/* Image */}
          <div className="relative overflow-hidden rounded-md shadow-lg border border-sand/40 max-w-full md:max-w-md lg:max-w-lg aspect-[3/4]">
            <img
              src={heroBaristaImg}
              alt="A professional barista pouring hot water to brew single-origin coffee"
              className="w-full h-full object-cover grayscale-[10%] contrast-[105%] hover:scale-105 transition-transform duration-[800ms] ease-out"
              referrerPolicy="no-referrer"
              id="hero-main-img"
            />
            {/* Soft overlay */}
            <div className="absolute inset-0 bg-charcoal/5 pointer-events-none" />
          </div>

          {/* Floating Aesthetic Card (Small touch target with branding element) */}
          <div
            className="absolute bottom-6 -left-4 md:-left-8 bg-white border border-sand shadow-lg p-4 rounded-sm flex items-center gap-3 animate-fade-in"
            style={{ animationDelay: "800ms" }}
            id="hero-floating-badge"
          >
            <div className="w-2 h-2 rounded-full bg-terracotta animate-pulse" />
            <div>
              <p className="text-[10px] uppercase tracking-[0.15em] text-text-secondary font-bold">Today's Roast</p>
              <p className="font-serif text-sm font-bold text-charcoal">Toraja Sapan</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

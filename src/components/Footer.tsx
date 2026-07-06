/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Coffee } from "lucide-react";
import { BRAND_INFO } from "../data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer id="footer" className="bg-charcoal text-white border-t border-white/5 py-12">
      <div className="max-w-[1080px] mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pb-8 border-b border-white/5">
          {/* Logo Brand */}
          <div className="flex items-center gap-2" id="footer-logo">
            <div className="bg-terracotta p-1.5 rounded-sm text-white">
              <Coffee className="w-4 h-4" />
            </div>
            <span className="font-serif font-bold text-base tracking-tight text-white">
              GRIT COFFEE
            </span>
          </div>

          {/* Quick Footer Scroll Navigation */}
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-xs uppercase tracking-widest font-semibold text-white/50" id="footer-nav">
            <a href="#home" onClick={(e) => handleLinkClick(e, "#home")} className="hover:text-terracotta transition-colors duration-150">Home</a>
            <a href="#menu" onClick={(e) => handleLinkClick(e, "#menu")} className="hover:text-terracotta transition-colors duration-150">Menu</a>
            <a href="#gallery" onClick={(e) => handleLinkClick(e, "#gallery")} className="hover:text-terracotta transition-colors duration-150">Gallery</a>
            <a href="#contact" onClick={(e) => handleLinkClick(e, "#contact")} className="hover:text-terracotta transition-colors duration-150">Contact</a>
          </nav>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 text-[11px] text-white/40 font-sans">
          <p id="footer-copyright">
            &copy; {currentYear} {BRAND_INFO.name}. All Rights Reserved. Specialty Coffee Roasters.
          </p>
          <div className="flex gap-4">
            <span className="hover:text-white transition-colors cursor-pointer">Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-white transition-colors cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

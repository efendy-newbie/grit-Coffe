/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { Coffee, Menu as MenuIcon, X } from "lucide-react";

interface HeaderProps {
  activeSection: string;
}

export default function Header({ activeSection }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Menu", href: "#menu" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      id="header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-charcoal/95 text-white shadow-md py-4 backdrop-blur-sm"
          : "bg-transparent text-charcoal py-6"
      }`}
    >
      <div className="max-w-[1080px] mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => handleLinkClick(e, "#home")}
          className="flex items-center gap-2 group"
          id="logo-link"
        >
          <div className="bg-terracotta p-2 rounded-sm text-white group-hover:bg-terracotta-dark transition-colors duration-200">
            <Coffee className="w-5 h-5" id="logo-icon" />
          </div>
          <span
            className="font-serif font-bold text-lg tracking-tight transition-colors duration-200"
            id="logo-text"
          >
            GRIT COFFEE
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8" id="desktop-nav">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`font-sans text-xs uppercase tracking-[0.05em] font-semibold transition-all duration-200 relative py-1 hover:text-terracotta ${
                  isActive
                    ? "text-terracotta"
                    : isScrolled
                    ? "text-white"
                    : "text-charcoal"
                }`}
                id={`nav-link-${link.label.toLowerCase()}`}
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-0 w-full h-[2px] bg-terracotta transition-transform duration-300 origin-left ${
                    isActive ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </a>
            );
          })}
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`md:hidden p-2 focus:outline-none transition-colors duration-200 ${
            isScrolled ? "text-white hover:text-terracotta" : "text-charcoal hover:text-terracotta"
          }`}
          id="mobile-menu-toggle"
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer (Full screen overlay with charcoal bg, white text, large links) */}
      <div
        id="mobile-drawer"
        className={`fixed inset-0 bg-charcoal text-white z-40 flex flex-col justify-center items-center transition-all duration-300 ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-4"
        }`}
      >
        {/* Close Button Inside Drawer */}
        <button
          onClick={() => setIsMobileMenuOpen(false)}
          className="absolute top-6 right-6 p-2 text-white hover:text-terracotta transition-colors duration-200"
          id="mobile-menu-close"
          aria-label="Close mobile menu"
        >
          <X className="w-8 h-8" />
        </button>

        {/* Large Drawer Links */}
        <nav className="flex flex-col gap-8 text-center" id="mobile-nav">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`font-serif text-3xl font-bold tracking-tight transition-all duration-200 hover:text-terracotta ${
                  isActive ? "text-terracotta underline decoration-2 underline-offset-8" : "text-white"
                }`}
                id={`mobile-nav-link-${link.label.toLowerCase()}`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Decorative Tagline inside Mobile Drawer */}
        <div className="absolute bottom-12 text-center text-white/50 px-6">
          <p className="font-serif italic text-sm">"Strong Brew. Stronger Grit."</p>
          <p className="font-sans text-xs uppercase tracking-widest mt-2">Kebayoran Baru, Jakarta</p>
        </div>
      </div>
    </header>
  );
}

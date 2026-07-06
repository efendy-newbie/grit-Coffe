/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = ["home", "menu", "gallery", "contact"];
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px", // Trigger when section occupies the focus area
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-cream selection:bg-terracotta selection:text-white" id="app-root">
      {/* Sticky Header Navigation */}
      <Header activeSection={activeSection} />

      {/* Main Single Page Sections */}
      <main id="main-content">
        {/* Section 1: Hero */}
        <Hero />

        {/* Section 2: Menu */}
        <Menu />

        {/* Section 3: Gallery */}
        <Gallery />

        {/* Section 4: Contact */}
        <Contact />
      </main>

      {/* Footer Block */}
      <Footer />
    </div>
  );
}

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MenuItem, GalleryItem } from "./types";

export const BRAND_INFO = {
  name: "GRIT COFFEE",
  tagline: "Strong Brew. Stronger Grit.",
  subtagline: "Specialty coffee for those who work hard, think bold, and never cut corners.",
  about: "Built on urban grit, we blend bold industrial aesthetics with the warmth of meticulously sourced specialty coffee. We cater to the makers, the thinkers, and the early risers who demand excellence in every cup.",
  hours: [
    { days: "Mon – Sat", time: "7:00 AM – 8:00 PM" },
    { days: "Sunday", time: "8:00 AM – 6:00 PM" }
  ],
  address: "Jl. Kopi Nikmat No. 42, Kebayoran Baru, Jakarta",
  email: "hello@gritcoffee.com",
  phone: "+62 21 555 4321",
  socials: {
    instagram: "https://instagram.com/gritcoffee",
    tiktok: "https://tiktok.com/@gritcoffee",
    twitter: "https://twitter.com/gritcoffee"
  }
};

export const MENU_ITEMS: MenuItem[] = [
  {
    id: "grit-espresso",
    name: "Grit Espresso",
    price: "Rp 35k",
    description: "Our signature double-shot pulled with relentless precision. A heavy-bodied, sweet profile with rich cacao notes and a intense crema finish.",
    image: "/src/assets/images/menu_signature_1783338083646.jpg",
    size: "large",
    badge: "Signature"
  },
  {
    id: "terracotta-latte",
    name: "Terracotta Latte",
    price: "Rp 42k",
    description: "Espresso with steamed milk and a secret blend of warm spices. A comforting, earthy cup with a beautiful reddish-tan hue.",
    image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&q=80&w=600&h=600",
    size: "small"
  },
  {
    id: "charcoal-cold-brew",
    name: "Charcoal Cold Brew",
    price: "Rp 45k",
    description: "Steeped for 18 hours. Smooth, refreshing, low-acidity cold brew served over clear ice for maximum bold energy.",
    image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&q=80&w=600&h=600",
    size: "small"
  },
  {
    id: "sand-matcha",
    name: "Sand Matcha",
    price: "Rp 40k",
    description: "Premium stone-ground Japanese Uji matcha, whisked to perfection and poured over creamy textured oat milk.",
    image: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&q=80&w=600&h=600",
    size: "small"
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "interior-main",
    title: "Main Roastery & Cafe",
    subtitle: "A perfect blend of dark metal and warm wooden tones",
    image: "/src/assets/images/gallery_interior_1783338097371.jpg",
    gridSpan: "md:col-span-2 md:row-span-1"
  },
  {
    id: "workspace-focus",
    title: "Focus-Ready Workspace",
    subtitle: "Ample sockets, quiet corners, and high-speed fiber",
    image: "/src/assets/images/gallery_working_1783338112576.jpg",
    gridSpan: "md:col-span-1 md:row-span-2"
  },
  {
    id: "beans-detail",
    title: "Relentless Sourcing",
    subtitle: "100% Single Origin Arabica beans roasted with grit",
    image: "/src/assets/images/gallery_detail_1783338129531.jpg",
    gridSpan: "md:col-span-1 md:row-span-1"
  },
  {
    id: "barista-pour",
    title: "The Craft of Handpour",
    subtitle: "Every drop measured, timed, and extracted perfectly",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=600&h=800",
    gridSpan: "md:col-span-1 md:row-span-1"
  },
  {
    id: "exterior-vibe",
    title: "Welcoming Front facade",
    subtitle: "Our flagship location in the heart of Kebayoran Baru",
    image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&q=80&w=800&h=600",
    gridSpan: "md:col-span-3 md:row-span-1"
  }
];

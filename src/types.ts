/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface MenuItem {
  id: string;
  name: string;
  price: string;
  description: string;
  image: string;
  size: "large" | "small"; // large is 2x2 bento card, small is 1x1
  badge?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  gridSpan: string; // Tailwind grid span classes
}

export interface ContactFormInput {
  name: string;
  email: string;
  message: string;
}

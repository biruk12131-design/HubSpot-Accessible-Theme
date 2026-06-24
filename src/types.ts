/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Service {
  slug: string;
  title: string;
  iconName: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  benefits: string[];
  pricingRange: string;
  deliveryTime: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  category: string;
}

export interface ValueItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface Milestone {
  id: string;
  year: string;
  title: string;
  description: string;
}

export type PageRoute = 'home' | 'about' | 'services' | 'team' | 'contact' | string; // string for services/[slug]

export interface Testimonial {
  id: string;
  quote: string;
  authorName: string;
  authorRole: string;
  companyName: string;
  avatar: string;
}

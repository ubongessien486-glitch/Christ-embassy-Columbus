import React from 'react';

// Global window extension for GSAP
declare global {
  interface Window {
    gsap: any;
    ScrollTrigger: any;
  }
}

export interface NavLink {
  label: string;
  href: string;
  isButton?: boolean;
}

export interface MinistryCardProps {
  title: string;
  description: string;
  image: string;
  icon?: React.ReactNode;
  span?: string; // Class for grid span
}
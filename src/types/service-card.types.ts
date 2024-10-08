import { StaticImageData } from "next/image";
import React from "react";

export interface ServiceCardProps {
  name: string;
  url: string;
  svg: React.ReactNode;
  slug: string;
  description: string;
  details: ServiceDetailsType;
  theme?: string
}

export interface ServiceDetailsType {
  title: string;
  description: string;
  features: string[];
  images: StaticImageData;
}

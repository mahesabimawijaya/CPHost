export interface ImageFormat {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: string | null;
  size: number;
  width: number;
  height: number;
  sizeInBytes: number;
}

export interface ImageAttributes {
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: {
    large?: ImageFormat;
    medium?: ImageFormat;
    small?: ImageFormat;
    thumbnail?: ImageFormat;
  };
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface ImageData {
  id: number;
  attributes: ImageAttributes;
}

export interface DomainPricing {
  id: number;
  name: string;
  price: number;
}

export interface HeroSection {
  id: number;
  title: string;
  description: string;
  getStartedButton: string;
  youtubeLink: string;
  domainPricing: DomainPricing[];
  backgroundImage: {
    data: ImageData;
  };
  heroImageBackground: {
    data: ImageData;
  };
  heroImage: {
    data: ImageData;
  };
}

export interface Attributes {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  heroSection: HeroSection;
}

export interface Data {
  id: number;
  attributes: Attributes;
}

export interface RootObject {
  data: Data;
  meta: object;
}

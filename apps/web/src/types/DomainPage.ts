export interface IconAttributes {
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: null; // Adjust this based on your actual response
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string; // The URL for the icon image
  previewUrl: string | null;
  provider: string;
  provider_metadata: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface IconData {
  data: {
    id: number;
    attributes: IconAttributes;
  };
}

export interface Attributes {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  popularDomainSection: IPopularDomainSection;
}

export interface IPopularDomainSection {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  popularDomainCard: PopularDomainCard[];
}

export interface PopularDomainCard {
  id: number;
  logo: IconData;
  promo: string;
  price: number;
  description: string;
  btn: string;
}

export interface Data {
  id: number;
  attributes: Attributes;
}

export interface RootObject {
  data: Data;
  meta: object;
}

export interface DomainResponse {
  data: Data;
  meta: object;
}

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

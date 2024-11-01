export interface RootObject {
  data: Root;
}

export interface Root {
  id: number;
  attributes: Attributes;
}

export interface Attributes {
  description: string;
  phoneNumber: string;
  email: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  logo: Logo;
  link: Link[];
  creditCardImages: CreditCardImages;
  backgroundImage: BackgroundImage;
}

export interface Logo {
  data: Data;
}

export interface Data {
  id: number;
  attributes: LogoAttributes;
}

export interface LogoAttributes {
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: null;
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

export interface Link {
  id: number;
  label: string;
  url: string;
  subLink: SubLink[];
}

export interface SubLink {
  id: number;
  label: string;
  url: string;
}

export interface CreditCardImages {
  data: CreditCardImageData[];
}

export interface CreditCardImageData {
  id: number;
  attributes: CreditCardImageAttributes;
}

export interface CreditCardImageAttributes {
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: null;
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

export interface BackgroundImage {
  data: BackgroundImageData;
}

export interface BackgroundImageData {
  id: number;
  attributes: BackgroundImageAttributes;
}

export interface BackgroundImageAttributes {
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: Formats;
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

export interface Formats {
  large: ImageFormat;
  small: ImageFormat;
  medium: ImageFormat;
  thumbnail: ImageFormat;
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

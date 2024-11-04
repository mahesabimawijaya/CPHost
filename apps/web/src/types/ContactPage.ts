export interface IconAttributes {
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
  contactUsFormSection: IContactUsFormSection;
  ourSupportSection: IOurSupportSection;
}

export interface OurSupportCard {
  id: number;
  title: string;
  description: string;
  icon: IconData;
}

export interface IOurSupportSection {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  ourSupportCard: OurSupportCard[];
}

export interface IContactUsFormSection {
  id: number;
  title: string;
  bgImage: IconData;
}

export interface FeedbackCard {
  id: number;
  review: string;
  reviewerName: string;
  reviewerJob: string;
  rating: number;
  image: IconData;
}

export interface Data {
  id: number;
  attributes: Attributes;
}

export interface ContactUsResponse {
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

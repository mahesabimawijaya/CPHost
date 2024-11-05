export interface ImageFormats {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: string | null;
  size: number;
  width: number;
  height: number;
  sizeInBytes?: number;
}

export interface ImageDataAttributes {
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: {
    thumbnail?: ImageFormats;
    small?: ImageFormats;
    medium?: ImageFormats;
    large?: ImageFormats;
  } | null;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: unknown | null;
  createdAt: string;
  updatedAt: string;
}

export interface ImageData {
  id: number;
  attributes: ImageDataAttributes;
}

export interface ISubHeroSection {
  id: number;
  title: string;
  image: {
    data: ImageData;
  };
  backgroundImage: {
    data: ImageData;
  };
}

export interface AboutUsSection {
  id: number;
  title: string;
  description: string;
  globalCustomers: number;
  successCase: number;
  largeImage: {
    data: ImageData;
  };
  mediumImage: {
    data: ImageData;
  };
  smallImage: {
    data: ImageData;
  };
}

export interface BestHostingBenefits {
  id: number;
  benefit: string;
}

export interface BestHostingSection {
  id: number;
  title: string;
  description: string;
  pricingButton: string;
  subtitle: string;
  bestHostingBenefits: BestHostingBenefits[];
  image: {
    data: ImageData;
  };
}

export interface ReviewCard {
  id: number;
  reviewText: string;
  user: string;
  profession: string;
  rating: number;
}

export interface ReviewSection {
  id: number;
  image: {
    data: ImageData;
  };
  reviewCard: ReviewCard[];
  backgroundImage: {
    data: ImageData;
  };
}

export interface ITeamCard {
  id: number;
  name: string;
  profession: string;
  image: {
    data: ImageData;
  };
}

export interface ITeamSection {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  teamCard: ITeamCard[];
}

export interface Attributes {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  subHeroSection: ISubHeroSection;
  aboutUsSection: AboutUsSection;
  bestHostingSection: BestHostingSection;
  reviewSection: ReviewSection;
  teamSection: ITeamSection;
}

export interface Data {
  id: number;
  attributes: Attributes;
}

export interface AboutUsResponse {
  data: Data;
  meta: Record<string, unknown>;
}

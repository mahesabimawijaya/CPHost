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

export interface IRecommendationSection {
  id: number;
  title: string;
  companyTitle: string;
  companyLogo: IconData;
  companyIcon: CompanyIcon[];
}

export interface CompanyIcon {
  id: number;
  logo: IconData;
}

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

export interface BestHosting {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  pricingButton: string;
  image: {
    data: ImageData;
  };
  bestHostingBenefits: BestHostingBenefits[];
}

export interface BestHostingBenefits {
  id: number;
  benefit: string;
}

export interface Faq {
  id: number;
  title: string;
  subtitle: string;
  image: {
    data: ImageData;
  };
  questionLists: QuestionList[];
}

export interface QuestionList {
  id: number;
  question: string;
  answer: string;
}

export interface Attributes {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  subHeroSection: ISubHeroSection;
  recommendationSection: IRecommendationSection;
  bestHostingSection: BestHosting;
  faqSection: Faq;
}

export interface Data {
  id: number;
  attributes: Attributes;
}

export interface ServiceResponse {
  data: Data;
  meta: Record<string, unknown>;
}

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

export interface FeatureImageData {
  data: ImageData;
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

export interface IFeature {
  id: number;
  title: string;
  description: string;
  image: FeatureImageData;
}

export interface FeatureSection {
  id: number;
  features: IFeature[];
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

export interface PlanAttributes {
  name: string;
  description: string;
  storage: number;
  backup: string;
  ssl: boolean;
  monitoring: boolean;
  domain: boolean;
  price: number;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface PlanData {
  id: number;
  attributes: PlanAttributes;
}

export interface Plans {
  data: PlanData[];
}

export interface Period {
  id: number;
  benefit: string;
}

export interface PlanSection {
  id: number;
  title: string;
  period: Period[];
  backgroundImage: {
    data: ImageData;
  };
  plans: Plans;
}

export interface Attributes {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  heroSection: HeroSection;
  featureSection: FeatureSection;
  aboutUsSection: AboutUsSection;
  pricingSection: PlanSection;
}

export interface Data {
  id: number;
  attributes: Attributes;
}

export interface RootObject {
  data: Data;
  meta: object;
}

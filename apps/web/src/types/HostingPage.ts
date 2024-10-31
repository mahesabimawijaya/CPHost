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
    attributes: IconAttributes; // This is the structure of the icon data
  };
}

export interface WhyChooseUsCard {
  id: number;
  title: string;
  description: string;
  icon: IconData;
}

export interface IWhyChooseUsSection {
  id: number;
  title: string;
  subtitle: string;
  whyChooseUsCard: WhyChooseUsCard[];
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

export interface Attributes {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  whyChooseUsSection: IWhyChooseUsSection;
  recommendationSection: IRecommendationSection;
  clientFeedbackSection: IClientFeedbackSection;
}

export interface IClientFeedbackSection {
  id: number;
  title: string;
  subtitle: string;
  feedbackCard: FeedbackCard[];
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

export interface RootObject {
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

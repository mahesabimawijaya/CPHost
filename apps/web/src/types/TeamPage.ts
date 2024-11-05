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
  teamSection: ITeamSection;
}

export interface Data {
  id: number;
  attributes: Attributes;
}

export interface TeamResponse {
  data: Data;
  meta: Record<string, unknown>;
}

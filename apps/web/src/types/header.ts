export interface NavbarResponse {
  data: NavbarData;
}

export interface NavbarData {
  id: number;
  attributes: NavbarAttributes;
}

export interface NavbarAttributes {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  logo: MediaData;
  darkLogo: MediaData;
  searchLogo: MediaData;
  burgerMenuLogo: MediaData;
  topBar: ITopBar;
  link: ILink[];
}

export interface MediaData {
  data: {
    id: number;
    attributes: MediaAttributes;
  };
}

export interface MediaAttributes {
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  createdAt: string;
  updatedAt: string;
}

export interface ITopBar {
  id: number;
  email: string;
  phoneNumber: string;
  promoText: string;
  liveChat: string;
  login: string;
  emailLogo: MediaData;
  phoneLogo: MediaData;
  liveChatLogo: MediaData;
  loginLogo: MediaData;
}

export interface ILink {
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

import { ContactUsResponse } from "../../types/ContactPage";
import { DomainResponse } from "../../types/DomainPage";
import { FooterResponse } from "../../types/Footer";
import { NavbarResponse } from "../../types/Header";
import { HostingResponse } from "../../types/HostingPage";
import { RootObject } from "../../types/LandingPage";

export interface StrapiState {
  header: NavbarResponse | null;
  footer: FooterResponse | null;
  landingPage: RootObject | null;
  aboutUsPage: null;
  contactUsPage: ContactUsResponse | null;
  domainPage: DomainResponse | null;
  faqPage: null;
  hostingPage: HostingResponse | null;
  newsGridPage: null;
  newsDetailsPage: null;
  pricingPage: null;
  servicesPage: null;
  teamPage: null;
  loading: boolean;
  error: string;
}

export const initialState: StrapiState = {
  header: null,
  footer: null,
  landingPage: null,
  aboutUsPage: null,
  contactUsPage: null,
  domainPage: null,
  faqPage: null,
  hostingPage: null,
  newsGridPage: null,
  newsDetailsPage: null,
  pricingPage: null,
  servicesPage: null,
  teamPage: null,
  loading: false,
  error: "",
};

export const initialUser = {
  id: "",
  email: "",
  password: "",
  role: "",
  firstName: "",
  lastName: "",
};

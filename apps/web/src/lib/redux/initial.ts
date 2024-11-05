import { AboutUsResponse } from "../../types/AboutUsPage";
import { DomainResponse } from "../../types/DomainPage";
import { FooterResponse } from "../../types/Footer";
import { NavbarResponse } from "../../types/Header";
import { TemplateData, LandingPageResponse } from "../../types/LandingPage";
import { ServiceResponse } from "../../types/ServicePage";
import { TeamResponse } from "../../types/TeamPage";

export interface StrapiState {
  header: NavbarResponse | null;
  footer: FooterResponse | null;
  landingPage: LandingPageResponse | null;
  aboutUsPage: AboutUsResponse | null;
  contactUsPage: null;
  domainPage: DomainResponse | null;
  faqPage: null;
  hostingPage: null;
  newsGridPage: null;
  newsDetailsPage: null;
  pricingPage: null;
  servicesPage: ServiceResponse | null;
  teamPage: TeamResponse | null;
  templates: {
    data: TemplateData[] | [];
  };
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
  templates: {
    data: [],
  },
  loading: false,
  error: "",
};

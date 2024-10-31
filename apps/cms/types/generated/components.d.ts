import type { Schema, Attribute } from '@strapi/strapi';

export interface NavbarTopBar extends Schema.Component {
  collectionName: 'components_navbar_top_bars';
  info: {
    displayName: 'Top Bar';
    description: '';
  };
  attributes: {
    email: Attribute.Email & Attribute.Required;
    phoneNumber: Attribute.String & Attribute.Required;
    promoText: Attribute.String & Attribute.Required;
    liveChat: Attribute.String & Attribute.Required;
    login: Attribute.String & Attribute.Required;
    emailLogo: Attribute.Media<'images'> & Attribute.Required;
    phoneLogo: Attribute.Media<'images'> & Attribute.Required;
    liveChatLogo: Attribute.Media<'images'> & Attribute.Required;
    loginLogo: Attribute.Media<'images'> & Attribute.Required;
  };
}

export interface NavbarSubLink extends Schema.Component {
  collectionName: 'components_navbar_sub_links';
  info: {
    displayName: 'Sub Link';
  };
  attributes: {
    label: Attribute.String & Attribute.Required;
    url: Attribute.String & Attribute.Required;
  };
}

export interface NavbarLink extends Schema.Component {
  collectionName: 'components_navbar_links';
  info: {
    displayName: 'Link';
    description: '';
  };
  attributes: {
    label: Attribute.String & Attribute.Required;
    url: Attribute.String & Attribute.Required;
    subLink: Attribute.Component<'navbar.sub-link', true>;
  };
}

export interface IconsRecCompanyIcons extends Schema.Component {
  collectionName: 'components_icons_rec_company_icons';
  info: {
    displayName: 'Rec Company Icons';
  };
  attributes: {
    logo: Attribute.Media<'images'> & Attribute.Required;
  };
}

export interface LandingPageHeroSection extends Schema.Component {
  collectionName: 'components_landing_page_hero_sections';
  info: {
    displayName: 'Hero Section';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    getStartedButton: Attribute.String & Attribute.Required;
    domainPricing: Attribute.Component<'components.domain-pricing', true> &
      Attribute.Required;
    backgroundImage: Attribute.Media<'images'> & Attribute.Required;
    heroImageBackground: Attribute.Media<'images'> & Attribute.Required;
    heroImage: Attribute.Media<'images'> & Attribute.Required;
    youtubeLink: Attribute.String;
  };
}

export interface ComponentsDomainPricing extends Schema.Component {
  collectionName: 'components_components_domain_pricings';
  info: {
    displayName: 'Domain Pricing';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    price: Attribute.Decimal & Attribute.Required;
  };
}

export interface HostingPageWhyChooseUsSection extends Schema.Component {
  collectionName: 'components_hosting_page_why_choose_us_sections';
  info: {
    displayName: 'Why Choose Us Section';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    subtitle: Attribute.String & Attribute.Required;
    whyChooseUsCard: Attribute.Component<'cards.why-choose-us-card', true>;
  };
}

export interface HostingPageRecommendationSection extends Schema.Component {
  collectionName: 'components_hosting_page_recommendation_sections';
  info: {
    displayName: 'Recommendation Section';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    companyTitle: Attribute.String & Attribute.Required;
    companyLogo: Attribute.Media<'images'> & Attribute.Required;
    companyIcon: Attribute.Component<'icons.rec-company-icons', true>;
  };
}

export interface HostingPageClientFeedbackSection extends Schema.Component {
  collectionName: 'components_hosting_page_client_feedback_sections';
  info: {
    displayName: 'Client Feedback Section';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    subtitle: Attribute.String & Attribute.Required;
    feedbackCard: Attribute.Component<'cards.client-feedback-card', true>;
  };
}

export interface CardsWhyChooseUsCard extends Schema.Component {
  collectionName: 'components_cards_why_choose_us_cards';
  info: {
    displayName: 'Why Choose Us Card';
  };
  attributes: {
    icon: Attribute.Media<'images'> & Attribute.Required;
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
  };
}

export interface CardsPopularDomainCard extends Schema.Component {
  collectionName: 'components_cards_popular_domain_cards';
  info: {
    displayName: 'Popular Domain Card';
  };
  attributes: {
    logo: Attribute.Media<'images'> & Attribute.Required;
    promo: Attribute.String & Attribute.Required;
    price: Attribute.Decimal & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    btn: Attribute.String & Attribute.Required;
  };
}

export interface CardsClientFeedbackCard extends Schema.Component {
  collectionName: 'components_cards_client_feedback_cards';
  info: {
    displayName: 'Client Feedback Card';
  };
  attributes: {
    review: Attribute.Text & Attribute.Required;
    image: Attribute.Media<'images'> & Attribute.Required;
    reviewerName: Attribute.String & Attribute.Required;
    reviewerJob: Attribute.String & Attribute.Required;
    rating: Attribute.Integer & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'navbar.top-bar': NavbarTopBar;
      'navbar.sub-link': NavbarSubLink;
      'navbar.link': NavbarLink;
      'icons.rec-company-icons': IconsRecCompanyIcons;
      'landing-page.hero-section': LandingPageHeroSection;
      'components.domain-pricing': ComponentsDomainPricing;
      'hosting-page.why-choose-us-section': HostingPageWhyChooseUsSection;
      'hosting-page.recommendation-section': HostingPageRecommendationSection;
      'hosting-page.client-feedback-section': HostingPageClientFeedbackSection;
      'cards.why-choose-us-card': CardsWhyChooseUsCard;
      'cards.popular-domain-card': CardsPopularDomainCard;
      'cards.client-feedback-card': CardsClientFeedbackCard;
    }
  }
}

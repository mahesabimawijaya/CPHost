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

export interface LandingPageFeatureSection extends Schema.Component {
  collectionName: 'components_landing_page_feature_sections';
  info: {
    displayName: 'Feature Section';
  };
  attributes: {
    features: Attribute.Component<'components.feature', true>;
  };
}

export interface LandingPageAboutUsSection extends Schema.Component {
  collectionName: 'components_landing_page_about_us_sections';
  info: {
    displayName: 'About Us Section';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    globalCustomers: Attribute.Integer & Attribute.Required;
    successCase: Attribute.Integer & Attribute.Required;
    largeImage: Attribute.Media<'images'> & Attribute.Required;
    mediumImage: Attribute.Media<'images'> & Attribute.Required;
    smallImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Attribute.Required;
  };
}

export interface ComponentsFeature extends Schema.Component {
  collectionName: 'components_components_features';
  info: {
    displayName: 'Feature';
    description: '';
  };
  attributes: {
    image: Attribute.Media<'images'> & Attribute.Required;
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
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

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'navbar.top-bar': NavbarTopBar;
      'navbar.sub-link': NavbarSubLink;
      'navbar.link': NavbarLink;
      'landing-page.hero-section': LandingPageHeroSection;
      'landing-page.feature-section': LandingPageFeatureSection;
      'landing-page.about-us-section': LandingPageAboutUsSection;
      'components.feature': ComponentsFeature;
      'components.domain-pricing': ComponentsDomainPricing;
    }
  }
}

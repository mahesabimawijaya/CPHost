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

export interface ListDomainPriceTableHead extends Schema.Component {
  collectionName: 'components_list_domain_price_table_heads';
  info: {
    displayName: 'Domain Price Table Head';
  };
  attributes: {
    head1: Attribute.String & Attribute.Required;
    head2: Attribute.String & Attribute.Required;
    head3: Attribute.String & Attribute.Required;
    head4: Attribute.String & Attribute.Required;
  };
}

export interface ListDomainPriceList extends Schema.Component {
  collectionName: 'components_list_domain_price_lists';
  info: {
    displayName: 'Domain Price List';
  };
  attributes: {
    domainLogo: Attribute.Media<'images'> & Attribute.Required;
    registerFee: Attribute.Decimal & Attribute.Required;
    transferFee: Attribute.Decimal & Attribute.Required;
    renewFee: Attribute.Decimal & Attribute.Required;
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

export interface DomainPagePopularDomainSection extends Schema.Component {
  collectionName: 'components_domain_page_popular_domain_sections';
  info: {
    displayName: 'Popular Domain Section';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    subtitle: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    popularDomainCard: Attribute.Component<'cards.popular-domain-card', true>;
  };
}

export interface DomainPageDomainListSection extends Schema.Component {
  collectionName: 'components_domain_page_domain_list_sections';
  info: {
    displayName: 'Domain List Section';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    subtitle: Attribute.String & Attribute.Required;
    description: Attribute.String;
    tableHead: Attribute.Component<'list.domain-price-table-head'> &
      Attribute.Required;
    tableContent: Attribute.Component<'list.domain-price-list', true> &
      Attribute.Required;
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
      'list.domain-price-table-head': ListDomainPriceTableHead;
      'list.domain-price-list': ListDomainPriceList;
      'icons.rec-company-icons': IconsRecCompanyIcons;
      'landing-page.hero-section': LandingPageHeroSection;
      'domain-page.popular-domain-section': DomainPagePopularDomainSection;
      'domain-page.domain-list-section': DomainPageDomainListSection;
      'hosting-page.why-choose-us-section': HostingPageWhyChooseUsSection;
      'hosting-page.recommendation-section': HostingPageRecommendationSection;
      'hosting-page.client-feedback-section': HostingPageClientFeedbackSection;
      'components.domain-pricing': ComponentsDomainPricing;
      'cards.why-choose-us-card': CardsWhyChooseUsCard;
      'cards.popular-domain-card': CardsPopularDomainCard;
      'cards.client-feedback-card': CardsClientFeedbackCard;
    }
  }
}

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

export interface TeamPageTeamSection extends Schema.Component {
  collectionName: 'components_team_page_team_sections';
  info: {
    displayName: 'Team Section';
  };
  attributes: {
    teamCard: Attribute.Component<'card.team-card', true> & Attribute.Required;
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

export interface ComponentsEnumeratedList extends Schema.Component {
  collectionName: 'components_components_enumerated_lists';
  info: {
    displayName: 'Enumerated List';
  };
  attributes: {
    question: Attribute.String & Attribute.Required;
    answer: Attribute.Text & Attribute.Required;
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

export interface ComponentsBestHostingBenefit extends Schema.Component {
  collectionName: 'components_components_best_hosting_benefits';
  info: {
    displayName: 'Best Hosting Benefit';
  };
  attributes: {
    benefit: Attribute.String & Attribute.Required;
  };
}

export interface LandingPageServiceSection extends Schema.Component {
  collectionName: 'components_landing_page_service_sections';
  info: {
    displayName: 'Service Section';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    templates: Attribute.Relation<
      'landing-page.service-section',
      'oneToMany',
      'api::template.template'
    >;
  };
}

export interface LandingPageReviewSection extends Schema.Component {
  collectionName: 'components_landing_page_review_sections';
  info: {
    displayName: 'Review Section';
  };
  attributes: {
    image: Attribute.Media<'images'> & Attribute.Required;
    reviewCard: Attribute.Component<'card.review-card', true>;
  };
}

export interface LandingPagePricingSection extends Schema.Component {
  collectionName: 'components_landing_page_pricing_sections';
  info: {
    displayName: 'Pricing Section';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    plans: Attribute.Relation<
      'landing-page.pricing-section',
      'oneToMany',
      'api::plan.plan'
    >;
    backgroundImage: Attribute.Media<'images'> & Attribute.Required;
    period: Attribute.Component<'components.best-hosting-benefit', true> &
      Attribute.Required;
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

export interface LandingPageFaqSection extends Schema.Component {
  collectionName: 'components_landing_page_faq_sections';
  info: {
    displayName: 'FAQ Section';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    questionLists: Attribute.Component<'components.enumerated-list', true> &
      Attribute.Required;
    image: Attribute.Media<'images'> & Attribute.Required;
  };
}

export interface LandingPageContactUs extends Schema.Component {
  collectionName: 'components_landing_page_contact_uses';
  info: {
    displayName: 'Contact Us';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    talkToButton: Attribute.String & Attribute.Required;
  };
}

export interface LandingPageBestHostingSection extends Schema.Component {
  collectionName: 'components_landing_page_best_hosting_sections';
  info: {
    displayName: 'Best Hosting Section';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    bestHostingBenefits: Attribute.Component<
      'components.best-hosting-benefit',
      true
    > &
      Attribute.Required;
    pricingButton: Attribute.String & Attribute.Required;
    image: Attribute.Media<'images'> & Attribute.Required;
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

export interface CardTeamCard extends Schema.Component {
  collectionName: 'components_card_team_cards';
  info: {
    displayName: 'Team Card';
  };
  attributes: {
    image: Attribute.Media<'images'> & Attribute.Required;
    name: Attribute.String & Attribute.Required;
    profession: Attribute.String & Attribute.Required;
  };
}

export interface CardReviewCard extends Schema.Component {
  collectionName: 'components_card_review_cards';
  info: {
    displayName: 'Review Card';
  };
  attributes: {
    reviewText: Attribute.Text & Attribute.Required;
    user: Attribute.String & Attribute.Required;
    profession: Attribute.String & Attribute.Required;
    rating: Attribute.Integer &
      Attribute.SetMinMax<
        {
          min: 1;
          max: 5;
        },
        number
      >;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'navbar.top-bar': NavbarTopBar;
      'navbar.sub-link': NavbarSubLink;
      'navbar.link': NavbarLink;
      'team-page.team-section': TeamPageTeamSection;
      'components.feature': ComponentsFeature;
      'components.enumerated-list': ComponentsEnumeratedList;
      'components.domain-pricing': ComponentsDomainPricing;
      'components.best-hosting-benefit': ComponentsBestHostingBenefit;
      'landing-page.service-section': LandingPageServiceSection;
      'landing-page.review-section': LandingPageReviewSection;
      'landing-page.pricing-section': LandingPagePricingSection;
      'landing-page.hero-section': LandingPageHeroSection;
      'landing-page.feature-section': LandingPageFeatureSection;
      'landing-page.faq-section': LandingPageFaqSection;
      'landing-page.contact-us': LandingPageContactUs;
      'landing-page.best-hosting-section': LandingPageBestHostingSection;
      'landing-page.about-us-section': LandingPageAboutUsSection;
      'card.team-card': CardTeamCard;
      'card.review-card': CardReviewCard;
    }
  }
}

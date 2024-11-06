import type { Schema, Attribute } from '@strapi/strapi';

export interface NewsDetailsPageNewsPost extends Schema.Component {
  collectionName: 'components_components_news_posts';
  info: {
    displayName: 'Post';
    description: '';
  };
  attributes: {
    writer: Attribute.String & Attribute.Required;
    date: Attribute.Date & Attribute.Required;
    category: Attribute.String & Attribute.Required;
    image: Attribute.Media<'images'> & Attribute.Required;
    title: Attribute.String & Attribute.Required;
    content1: Attribute.Text & Attribute.Required;
    quote: Attribute.Text & Attribute.Required;
    content2: Attribute.Text & Attribute.Required;
    attachment1: Attribute.Media<'images'> & Attribute.Required;
    attachment2: Attribute.Media<'images'> & Attribute.Required;
    content3: Attribute.Text & Attribute.Required;
    tag: Attribute.Component<'components.news-tag', true>;
  };
}

export interface NewsDetailsPageNewsComment extends Schema.Component {
  collectionName: 'components_cards_news_comments';
  info: {
    displayName: 'Comment';
    description: '';
  };
  attributes: {
    image: Attribute.Media<'images'> & Attribute.Required;
    name: Attribute.String & Attribute.Required;
    date: Attribute.DateTime & Attribute.Required;
    rating: Attribute.Integer & Attribute.Required;
    comment: Attribute.Text & Attribute.Required;
  };
}

export interface NewsGridPageNewsGridSection extends Schema.Component {
  collectionName: 'components_news_grid_page_news_grid_sections';
  info: {
    displayName: 'News Grid Section';
  };
  attributes: {
    newsGridCard: Attribute.Component<'cards.news-grid-card', true>;
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

export interface LandingPageTemplateSection extends Schema.Component {
  collectionName: 'components_landing_page_template_sections';
  info: {
    displayName: 'Template Section';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    subtitle: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    templates: Attribute.Relation<
      'landing-page.template-section',
      'oneToMany',
      'api::template.template'
    >;
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

export interface LandingPageOurNewsSection extends Schema.Component {
  collectionName: 'components_landing_page_our_news_sections';
  info: {
    displayName: 'Our News Section';
  };
  attributes: {
    subtitle: Attribute.String & Attribute.Required;
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    newsGridCard: Attribute.Component<'cards.news-grid-card', true>;
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

export interface IconsRecCompanyIcons extends Schema.Component {
  collectionName: 'components_icons_rec_company_icons';
  info: {
    displayName: 'Rec Company Icons';
  };
  attributes: {
    logo: Attribute.Media<'images'> & Attribute.Required;
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

export interface ContactUsPageOurSupportSection extends Schema.Component {
  collectionName: 'components_contact_us_page_our_support_sections';
  info: {
    displayName: 'Our Support Section';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    subtitle: Attribute.String & Attribute.Required;
    description: Attribute.String & Attribute.Required;
    ourSupportCard: Attribute.Component<'cards.our-support-card', true>;
  };
}

export interface ContactUsPageContactUsFormSection extends Schema.Component {
  collectionName: 'components_contact_us_page_contact_us_form_sections';
  info: {
    displayName: 'Contact Us Form Section';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    bgImage: Attribute.Media<'images'> & Attribute.Required;
  };
}

export interface ComponentsNewsTag extends Schema.Component {
  collectionName: 'components_components_news_tags';
  info: {
    displayName: 'News Tag';
  };
  attributes: {
    tag: Attribute.String & Attribute.Required;
  };
}

export interface ComponentsNewsCategories extends Schema.Component {
  collectionName: 'components_components_news_categories';
  info: {
    displayName: 'News Categories';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    number: Attribute.Integer & Attribute.Required;
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

export interface CardsOurSupportCard extends Schema.Component {
  collectionName: 'components_cards_our_support_cards';
  info: {
    displayName: 'Our Support Card';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    desc: Attribute.String & Attribute.Required;
    icon: Attribute.Media<'images'> & Attribute.Required;
  };
}

export interface CardsNewsGridCard extends Schema.Component {
  collectionName: 'components_cards_news_grid_cards';
  info: {
    displayName: 'News Grid Card';
  };
  attributes: {
    image: Attribute.Media<'images'> & Attribute.Required;
    category: Attribute.String & Attribute.Required;
    date: Attribute.Date & Attribute.Required;
    title: Attribute.String & Attribute.Required;
    writerImage: Attribute.Media<'images'> & Attribute.Required;
    writerName: Attribute.String & Attribute.Required;
    writerPos: Attribute.String & Attribute.Required;
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

export interface CardTemplateCard extends Schema.Component {
  collectionName: 'components_card_template_cards';
  info: {
    displayName: 'Template Card';
  };
  attributes: {
    icon: Attribute.Media<'images'> & Attribute.Required;
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
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
      'news-details-page.news-post': NewsDetailsPageNewsPost;
      'news-details-page.news-comment': NewsDetailsPageNewsComment;
      'news-grid-page.news-grid-section': NewsGridPageNewsGridSection;
      'team-page.team-section': TeamPageTeamSection;
      'list.domain-price-table-head': ListDomainPriceTableHead;
      'list.domain-price-list': ListDomainPriceList;
      'navbar.top-bar': NavbarTopBar;
      'navbar.sub-link': NavbarSubLink;
      'navbar.link': NavbarLink;
      'landing-page.template-section': LandingPageTemplateSection;
      'landing-page.service-section': LandingPageServiceSection;
      'landing-page.review-section': LandingPageReviewSection;
      'landing-page.pricing-section': LandingPagePricingSection;
      'landing-page.our-news-section': LandingPageOurNewsSection;
      'landing-page.hero-section': LandingPageHeroSection;
      'landing-page.feature-section': LandingPageFeatureSection;
      'landing-page.faq-section': LandingPageFaqSection;
      'landing-page.contact-us': LandingPageContactUs;
      'landing-page.best-hosting-section': LandingPageBestHostingSection;
      'landing-page.about-us-section': LandingPageAboutUsSection;
      'icons.rec-company-icons': IconsRecCompanyIcons;
      'hosting-page.why-choose-us-section': HostingPageWhyChooseUsSection;
      'hosting-page.recommendation-section': HostingPageRecommendationSection;
      'hosting-page.client-feedback-section': HostingPageClientFeedbackSection;
      'domain-page.popular-domain-section': DomainPagePopularDomainSection;
      'domain-page.domain-list-section': DomainPageDomainListSection;
      'contact-us-page.our-support-section': ContactUsPageOurSupportSection;
      'contact-us-page.contact-us-form-section': ContactUsPageContactUsFormSection;
      'components.news-tag': ComponentsNewsTag;
      'components.news-categories': ComponentsNewsCategories;
      'components.feature': ComponentsFeature;
      'components.enumerated-list': ComponentsEnumeratedList;
      'components.domain-pricing': ComponentsDomainPricing;
      'components.best-hosting-benefit': ComponentsBestHostingBenefit;
      'cards.why-choose-us-card': CardsWhyChooseUsCard;
      'cards.popular-domain-card': CardsPopularDomainCard;
      'cards.our-support-card': CardsOurSupportCard;
      'cards.news-grid-card': CardsNewsGridCard;
      'cards.client-feedback-card': CardsClientFeedbackCard;
      'card.template-card': CardTemplateCard;
      'card.team-card': CardTeamCard;
      'card.review-card': CardReviewCard;
    }
  }
}

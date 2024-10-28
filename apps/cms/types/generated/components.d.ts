import type { Schema, Attribute } from '@strapi/strapi';

export interface NavbarTopBar extends Schema.Component {
  collectionName: 'components_navbar_top_bars';
  info: {
    displayName: 'Top Bar';
  };
  attributes: {
    emailLogo: Attribute.Media<'images'> & Attribute.Required;
    email: Attribute.Email & Attribute.Required;
    phoneLogo: Attribute.Media<'images'> & Attribute.Required;
    phoneNumber: Attribute.String & Attribute.Required;
    promoText: Attribute.String & Attribute.Required;
    liveChatLogo: Attribute.Media<'images'> & Attribute.Required;
    liveChat: Attribute.String & Attribute.Required;
    loginLogo: Attribute.Media<'images'> & Attribute.Required;
    login: Attribute.String & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'navbar.top-bar': NavbarTopBar;
    }
  }
}

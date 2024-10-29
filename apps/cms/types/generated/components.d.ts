import type { Schema, Attribute } from "@strapi/strapi";

export interface NavbarTopBar extends Schema.Component {
  collectionName: "components_navbar_top_bars";
  info: {
    displayName: "Top Bar";
    description: "";
  };
  attributes: {
    email: Attribute.Email & Attribute.Required;
    phoneNumber: Attribute.String & Attribute.Required;
    promoText: Attribute.String & Attribute.Required;
    liveChat: Attribute.String & Attribute.Required;
    login: Attribute.String & Attribute.Required;
    emailLogo: Attribute.Media<"images"> & Attribute.Required;
    phoneLogo: Attribute.Media<"images"> & Attribute.Required;
    liveChatLogo: Attribute.Media<"images"> & Attribute.Required;
    loginLogo: Attribute.Media<"images"> & Attribute.Required;
  };
}

export interface NavbarSubLink extends Schema.Component {
  collectionName: "components_navbar_sub_links";
  info: {
    displayName: "Sub Link";
  };
  attributes: {
    label: Attribute.String & Attribute.Required;
    url: Attribute.String & Attribute.Required;
  };
}

export interface NavbarLink extends Schema.Component {
  collectionName: "components_navbar_links";
  info: {
    displayName: "Link";
    description: "";
  };
  attributes: {
    label: Attribute.String & Attribute.Required;
    url: Attribute.String & Attribute.Required;
    subLink: Attribute.Component<"navbar.sub-link", true>;
  };
}

declare module "@strapi/types" {
  export module Shared {
    export interface Components {
      "navbar.top-bar": NavbarTopBar;
      "navbar.sub-link": NavbarSubLink;
      "navbar.link": NavbarLink;
    }
  }
}

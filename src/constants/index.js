import { facebook, instagram, linkedin, twitter } from "../assets";


export const shop = {
   name: "Real Sparkler",
   tagline: "Gemstone Company & Luxury Pieces.",
   phone: "+1 617 465 8768",
};

export const navLinksLeft = [
   {
      id: "rare-gemstones",
      title: "Rare Gemstones",
      url: "/rare-gemstones",
   },
   {
      id: "handmade-jewelry",
      title: "Handmade Jewelry",
      url: "/handmade-jewelry",
   },
];

export const navLinksRight = [
   {
      id: "ruby",
      title: "RUBY",
      url: "/gem/ruby",
   },
   {
      id: "spinel",
      title: "SPINEL",
      url: "/gem/spinel",
   },
   {
      id: "sapphire",
      title: "SAPPHIRE",
      url: "/gem/sapphire",
   },
   // {
   //    id: "aquamarine",
   //    title: "AQUAMARINE",
   //    url: "/gem/aquamarine",
   // },
   // {
   //    id: "tsavorite",
   //    title: "Tsavorite",
   //    url: "/gem/tsavorite",
   // },
];


export const navLinksMore = [
   {
      id: "about-company",
      title: "About The Company",
      url: "/about-company",
   },
   {
      id: "why-us",
      title: "Why Choose Us?",
      url: "/why-us",
   },
   {
      id: "world-wide-shipping",
      title: "World Wide Shipping",
      url: "/world-wide-shipping",
   }
];



export const navLinks = {
   ...navLinksLeft,
   ...navLinksRight,
   ...navLinksMore,
};


export const shopAbout = {
   story: "Real Sparkler",
   tagline: "Gemstone Company & Luxury Pieces.",
   phone: "+1 617 465 8768",
};


export const footerLinks = [
   {
      title: "Useful Links",
      links: [
         {
            name: "Content",
            link: "https://www.hoobank.com/content/",
         },
         {
            name: "How it Works",
            link: "https://www.hoobank.com/how-it-works/",
         },
         {
            name: "Create",
            link: "https://www.hoobank.com/create/",
         },
         {
            name: "Explore",
            link: "https://www.hoobank.com/explore/",
         },
         {
            name: "Terms & Services",
            link: "https://www.hoobank.com/terms-and-services/",
         },
      ],
   },
   {
      title: "Community",
      links: [
         {
            name: "Help Center",
            link: "https://www.hoobank.com/help-center/",
         },
         {
            name: "Partners",
            link: "https://www.hoobank.com/partners/",
         },
         {
            name: "Suggestions",
            link: "https://www.hoobank.com/suggestions/",
         },
         {
            name: "Blog",
            link: "https://www.hoobank.com/blog/",
         },
         {
            name: "Newsletters",
            link: "https://www.hoobank.com/newsletters/",
         },
      ],
   },
   {
      title: "Partner",
      links: [
         {
            name: "Our Partner",
            link: "https://www.hoobank.com/our-partner/",
         },
         {
            name: "Become a Partner",
            link: "https://www.hoobank.com/become-a-partner/",
         },
      ],
   },
];


export const socialMedia = [
   {
      id: "social-media-1",
      icon: instagram,
      link: "https://www.instagram.com/",
   },
   {
      id: "social-media-2",
      icon: facebook,
      link: "https://www.facebook.com/",
   },
   {
      id: "social-media-3",
      icon: twitter,
      link: "https://www.twitter.com/",
   },
   {
      id: "social-media-4",
      icon: linkedin,
      link: "https://www.linkedin.com/",
   },
];
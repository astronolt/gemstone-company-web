import { facebook, instagram, linkedin, twitter } from "../assets";


export const shop = {
   name: "Real Sparkler",
   tagline: "Gemstone Company & Luxury Pieces.",
   phone: "+1 801 618 0360",
   year: 2000,
};

export const navLinksLeft = [
   {
      id: "rare-gemstones",
      title: "Rare Gemstones",
      url: "/gems/rare-gemstones",
   },
   {
      id: "handmade-jewelry",
      title: "Handmade Jewelry",
      url: "/gems/handmade-jewelry",
   },
];

export const navLinksRight = [
   {
      id: "ruby",
      title: "RUBY",
      url: "/gems/ruby",
   },
   {
      id: "spinel",
      title: "SPINEL",
      url: "/gems/spinel",
   },
   {
      id: "sapphire",
      title: "SAPPHIRE",
      url: "/gems/sapphire",
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
            link: "/",
         },
         {
            name: "How it Works",
            link: "/",
         },
         {
            name: "Create",
            link: "/",
         },
         {
            name: "Explore",
            link: "/",
         },
         {
            name: "Terms & Services",
            link: "/",
         },
      ],
   },
   {
      title: "Community",
      links: [
         {
            name: "Help Center",
            link: "/",
         },
         {
            name: "Partners",
            link: "/",
         },
         {
            name: "Suggestions",
            link: "/",
         },
         {
            name: "Blog",
            link: "/",
         },
         {
            name: "Newsletters",
            link: "/",
         },
      ],
   },
   {
      title: "Partner",
      links: [
         {
            name: "Our Partner",
            link: "/",
         },
         {
            name: "Become a Partner",
            link: "/",
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
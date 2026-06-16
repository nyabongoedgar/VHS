export type SectorIcon =
  | "global-trade"
  | "hospitality"
  | "real-estate"
  | "education"
  | "floriculture"
  | "media"
  | "finance"
  | "recruitment"
  | "foundation";

export type TradeDivision = {
  title: string;
  summary: string;
  features: string[];
  link: string;
  image: string;
};

export type HoldingSector = {
  id: string;
  title: string;
  summary: string;
  description: string;
  image: string;
  icon: SectorIcon;
  highlights: string[];
  divisions?: TradeDivision[];
};

export const holdingSectors: HoldingSector[] = [
  {
    id: "global-trade",
    title: "Global Trade & Commodities",
    summary: "International trade across precious metals, agriculture, construction, and specialty coffee.",
    description:
      "Our global trade division connects Uganda's producers and resources to buyers worldwide. From certified farm partnerships to port logistics, we manage the full chain — sourcing, quality control, documentation, and delivery — with international compliance at every step.",
    image: "https://images.unsplash.com/photo-1606185540834-d6e7483ee1a4?w=1080",
    icon: "global-trade",
    highlights: [
      "Precious metals trading with certified assurance",
      "Agricultural produce and cold-chain logistics",
      "Construction materials at project scale",
      "Specialty coffee export to global markets",
    ],
    divisions: [
      {
        title: "Precious Metals",
        summary: "Gold, silver, and precious metals trading with certified quality assurance and international compliance.",
        features: ["Gold and silver trading", "Certified quality assurance", "Secure handling and transport", "International compliance"],
        link: "/contact",
        image: "https://images.unsplash.com/photo-1718752773283-de1f92513671",
      },
      {
        title: "Agricultural Produce",
        summary: "Grains, fresh produce, and agricultural commodities from Uganda's fertile lands to global buyers.",
        features: ["Grains and cereals", "Fresh fruits and vegetables", "Organic and conventional options", "Cold chain logistics available"],
        link: "/contact",
        image: "https://images.unsplash.com/photo-1560493676-04071c5f467b",
      },
      {
        title: "Construction Materials",
        summary: "Cement, steel, timber, and finishing materials for residential and commercial projects at any scale.",
        features: ["Cement and aggregates", "Steel and reinforcement", "Timber and wood products", "Bulk delivery options"],
        link: "/contact",
        image: "https://images.unsplash.com/photo-1508450859948-4e04fabaa4ea",
      },
      {
        title: "Coffee Supply & Export",
        summary: "Specialty Arabica and Robusta beans sourced from certified farms and exported to international markets.",
        features: ["Arabica and Robusta varieties", "Quality grading and sorting", "Export documentation and logistics", "Direct farm partnerships"],
        link: "/coffee-supply",
        image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e",
      },
    ],
  },
  {
    id: "hospitality",
    title: "Hospitality",
    summary: "Hotels, lodging, and guest experiences that elevate East African tourism.",
    description:
      "We invest in hospitality assets and guest experiences that showcase Uganda as a destination — from accommodation and dining to leisure facilities that meet international standards for comfort, service, and reliability.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1080",
    icon: "hospitality",
    highlights: ["Hotels and resort development", "Lodging and guest services", "Tourism and leisure experiences", "East African hospitality standards"],
  },
  {
    id: "real-estate",
    title: "Real Estate",
    summary: "Property development, management, and investment across residential and commercial markets.",
    description:
      "Our real estate interests span residential, commercial, and mixed-use development — shaping Uganda's urban landscape through projects that combine practical value with long-term investment quality.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1080",
    icon: "real-estate",
    highlights: ["Residential and commercial development", "Property management", "Mixed-use projects", "Strategic land investment"],
  },
  {
    id: "education",
    title: "Education",
    summary: "Learning institutions and training programs that build skills for tomorrow's workforce.",
    description:
      "We support education and skills development that prepares Uganda's workforce for a competitive global economy — from formal learning to professional training that creates opportunity at every level.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1080",
    icon: "education",
    highlights: ["Learning institutions", "Professional training programs", "Workforce skills development", "Community education initiatives"],
  },
  {
    id: "floriculture",
    title: "Floriculture",
    summary: "Flower cultivation and export, connecting Uganda's blooms to global markets.",
    description:
      "Uganda's climate and altitude create ideal conditions for floriculture. We cultivate and export premium flowers, connecting local growers to international buyers with quality grading and reliable logistics.",
    image: "https://images.unsplash.com/photo-1490759847868-880eda7851e5?w=1080",
    icon: "floriculture",
    highlights: ["Flower cultivation and export", "Quality grading and packaging", "Global market access", "Grower partnerships"],
  },
  {
    id: "media-advertising",
    title: "Media & Advertising",
    summary: "Brand strategy, creative campaigns, and media solutions for businesses and communities.",
    description:
      "Our media and advertising interests help businesses and communities tell their stories — through brand strategy, creative campaigns, and media platforms that reach audiences across Uganda and beyond.",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1080",
    icon: "media",
    highlights: ["Brand strategy and identity", "Creative advertising campaigns", "Media platforms and content", "Corporate communications"],
  },
  {
    id: "finance-insurance",
    title: "Finance & Insurance",
    summary: "Financial services and insurance solutions that protect and grow our partners' interests.",
    description:
      "We provide financial services and insurance solutions designed to protect assets, manage risk, and support growth — giving our partners and communities the confidence to invest and expand.",
    image: "https://images.unsplash.com/photo-1554224311-0a1a5880ce38?w=1080",
    icon: "finance",
    highlights: ["Financial services", "Insurance and risk management", "Investment support", "Partner asset protection"],
  },
  {
    id: "recruitment",
    title: "Recruitment",
    summary: "Talent acquisition and workforce solutions linking skilled professionals with opportunity.",
    description:
      "We connect skilled professionals with employers locally and internationally — building workforce pipelines that match Uganda's talent with the opportunities they deserve, at home and abroad.",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1080",
    icon: "recruitment",
    highlights: ["Talent acquisition", "Workforce placement", "International recruitment", "Skills-to-opportunity matching"],
  },
  {
    id: "foundation",
    title: "Foundation",
    summary: "Community initiatives and social impact programs that give back across Uganda.",
    description:
      "Through our foundation, we invest in community initiatives and social impact programs — supporting livelihoods, education access, and sustainable development in the communities where we operate.",
    image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=1080",
    icon: "foundation",
    highlights: ["Community development programs", "Social impact initiatives", "Livelihood support", "Sustainable local investment"],
  },
];

export const featuredSectorIds = ["global-trade", "hospitality", "real-estate", "finance-insurance"];

export function getSectorById(id: string): HoldingSector | undefined {
  return holdingSectors.find((s) => s.id === id);
}

export const globalTradeSector = holdingSectors.find((s) => s.id === "global-trade")!;

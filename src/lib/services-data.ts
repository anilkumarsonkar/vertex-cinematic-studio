export type Service = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  accent: "electric" | "cinema" | "neon" | "gold";
  icon: string;
  offerings: string[];
};

export const services: Service[] = [
  {
    slug: "video-production",
    title: "Video Production",
    tagline: "Cinema-grade storytelling, end to end.",
    description:
      "From commercial shoots to brand films, we produce visuals that captivate audiences and elevate brands.",
    accent: "cinema",
    icon: "Film",
    offerings: [
      "Commercial Shoots",
      "Corporate Films",
      "Product Shoots",
      "Brand Films",
      "Real Estate Shoots",
      "Event Coverage",
      "Drone Shoots",
      "Photography",
    ],
  },
  {
    slug: "video-editing",
    title: "Video Editing",
    tagline: "Cuts that move people, frames that sell.",
    description:
      "Post-production crafted to amplify your story — from reels to long-form, with color, sound, and motion.",
    accent: "electric",
    icon: "Scissors",
    offerings: [
      "Professional Video Editing",
      "Reels Editing",
      "Corporate Editing",
      "YouTube Editing",
      "Color Grading",
      "Motion Graphics",
      "Sound Design",
      "Short-form Content Editing",
    ],
  },
  {
    slug: "graphics-design",
    title: "Graphics Designing",
    tagline: "Brand systems built to be unforgettable.",
    description:
      "Identities, packaging, and creatives that translate strategy into beautiful, recognizable design.",
    accent: "neon",
    icon: "Palette",
    offerings: [
      "Logo Design",
      "Brand Identity Design",
      "Packaging Design",
      "Social Media Creatives",
      "Brochure Design",
      "UI/UX Design",
      "Marketing Collateral",
      "Print Design",
      "Business Cards",
      "Presentation Design",
    ],
  },
  {
    slug: "social-media-marketing",
    title: "Social Media Marketing",
    tagline: "Growth engines for modern brands.",
    description:
      "Full-funnel social — strategy, content, paid media, and community — engineered for measurable scale.",
    accent: "gold",
    icon: "TrendingUp",
    offerings: [
      "Social Media Management",
      "Content Strategy",
      "Growth Marketing",
      "Paid Advertising",
      "Lead Generation",
      "Community Management",
      "Analytics & Reporting",
      "Influencer Campaigns",
    ],
  },
  {
    slug: "website-development",
    title: "Website Development",
    tagline: "Sites and software that perform.",
    description:
      "Marketing sites, web apps, and platforms — engineered for speed, conversion, and beautiful detail.",
    accent: "electric",
    icon: "Code2",
    offerings: [
      "Full Stack Development",
      "Landing Pages",
      "Corporate Websites",
      "E-Commerce Websites",
      "SaaS Platforms",
      "Web Applications",
      "Mobile App Development",
      "CRM & Dashboard Development",
    ],
  },
  {
    slug: "3d-cgi",
    title: "3D & CGI",
    tagline: "Worlds rendered in pixel-perfect light.",
    description:
      "Product CGI, architectural visualization, and immersive WebGL experiences built with cinematic craft.",
    accent: "neon",
    icon: "Box",
    offerings: [
      "Product CGI",
      "3D Product Animation",
      "Architectural Visualization",
      "Motion Graphics",
      "VFX",
      "CGI Commercials",
      "Unreal Engine Experiences",
      "Interactive 3D Experiences",
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);

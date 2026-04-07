export interface BrandAsset {
  name: string;
  src: string;
  alt: string;
}

const base = import.meta.env.BASE_URL;

export const slicLogo: BrandAsset = {
  name: "SLIC",
  src: `${base}Logos/SLIC logo.jpg`,
  alt: "SLIC logo",
};

export const collaborationLogos: BrandAsset[] = [
  {
    name: "UWN (PMU-A)",
    src: `${base}Logos/uwn_pmu_a_logo.jpeg`,
    alt: "UWN (PMU-A) logo",
  },
  {
    name: "depa Thailand",
    src: `${base}Logos/depa_logo.jpg`,
    alt: "Digital Economy Promotion Agency logo",
  },
  {
    name: "Smart City Thailand",
    src: `${base}Logos/smart_city_thailand_logo.jpg`,
    alt: "Smart City Thailand Office logo",
  },
  {
    name: "AXIOM AI",
    src: `${base}Logos/axiom_ai_logo.png`,
    alt: "AXIOM AI logo",
  },
];


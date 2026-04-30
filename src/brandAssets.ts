import { asset } from "./assetPath";

export interface BrandAsset {
  name: string;
  src: string;
  alt: string;
}

export const slicLogo: BrandAsset = {
  name: "SLIC",
  src: asset("Logos/SLIC logo.jpg"),
  alt: "SLIC logo",
};

export const collaborationLogos: BrandAsset[] = [
  {
    name: "UWN (PMU-A)",
    src: asset("Logos/uwn_pmu_a_logo.jpeg"),
    alt: "UWN (PMU-A) logo",
  },
  {
    name: "depa Thailand",
    src: asset("Logos/depa_logo.jpg"),
    alt: "Digital Economy Promotion Agency logo",
  },
  {
    name: "Smart City Thailand",
    src: asset("Logos/smart_city_thailand_logo.jpg"),
    alt: "Smart City Thailand Office logo",
  },
  {
    name: "AXIOM AI",
    src: asset("Logos/axiom_ai_logo.png"),
    alt: "AXIOM AI logo",
  },
];


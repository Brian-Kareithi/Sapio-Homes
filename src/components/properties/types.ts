export interface SearchFilters {
  type: string;
  budget: string;
  sqft: string;
}

export interface Project {
  code: string;
  name: string;
  type: string;
  location: string;
  status: string;
  tags: string[];
}

export interface Apartment {
  id: string;
  code: string;
  name: string;
  size: string;
  price: string;
  status: string;
  statusColor: string;
  features: string[];
  floorRange: [number, number];
  description: string;
  tags: string[];
}

export const projects: Project[] = [
  { code: "01", name: "Park Road Residency", type: "1 Bedroom · Furnished", location: "Park Road, Nairobi", status: "Selling Now", tags: ["1bed", "furnished", "park-road"] },
  { code: "02", name: "Westway Apartments",  type: "Studio · 1BR · 2BR",    location: "Westlands, Nairobi", status: "Ongoing 2026", tags: ["studio", "1bed", "2bed", "westlands"] },
  { code: "03", name: "Nyayo View Suites",   type: "Studio · 1 Bedroom",    location: "Nairobi West",       status: "Sold Out",   tags: ["studio", "1bed", "nairobi-west"] },
  { code: "04", name: "Hillside Gardens",    type: "3 & 4 Bedroom",         location: "Parklands",          status: "Completed",  tags: ["3bed", "4bed", "parklands"] },
  { code: "05", name: "Balozi Suites",       type: "Studio · 1 Bedroom",    location: "South B",            status: "Sold Out",   tags: ["studio", "1bed", "south-b"] },
  { code: "06", name: "The Reveal",          type: "Studio · 1 Bedroom",    location: "Kilimani",           status: "Sold Out",   tags: ["studio", "1bed", "kilimani"] },
];

export const apartments: Apartment[] = [
  {
    id: "studio",
    code: "01",
    name: "Studio Suite",
    size: "32 – 38 m²",
    price: "from KSh 3.9M",
    status: "Available",
    statusColor: "#d4a847",
    features: ["Floor-to-ceiling windows", "Smart climate control", "Custom millwork", "City skyline view"],
    floorRange: [0, 8],
    description: "Compact, considered living — every centimetre engineered for light and efficiency.",
    tags: ["studio"],
  },
  {
    id: "one",
    code: "02",
    name: "One Bedroom Residence",
    size: "52 – 64 m²",
    price: "from KSh 6.4M",
    status: "Selling Now",
    statusColor: "#22c55e",
    features: ["Open-plan kitchen", "Private balcony", "Engineered oak flooring", "Built-in wardrobes"],
    floorRange: [9, 18],
    description: "The most sought-after typology — a full home scaled down to its pure essence with a private balcony.",
    tags: ["1bed"],
  },
  {
    id: "two",
    code: "03",
    name: "Two Bedroom Sky Residence",
    size: "88 – 104 m²",
    price: "from KSh 11.8M",
    status: "Limited",
    statusColor: "#ef4444",
    features: ["Panoramic glazing", "Ensuite master suite", "Marble kitchen island", "Twin balconies", "Rooftop pool access"],
    floorRange: [19, 24],
    description: "Upper-floor sky residences with commanding views across the Nairobi skyline and exclusive rooftop amenities.",
    tags: ["2bed"],
  },
];

export function parseSearchFilters(hash: string): SearchFilters | null {
  if (!hash || !hash.startsWith("#properties")) return null;
  const qs = hash.includes("?") ? hash.split("?")[1] : "";
  if (!qs) return null;
  const params = new URLSearchParams(qs);
  const type = params.get("type") || "";
  const budget = params.get("budget") || "";
  const sqft = params.get("sqft") || "";
  if (!type && !budget && !sqft) return null;
  return { type, budget, sqft };
}

export function matchFilters(project: Project, filters: SearchFilters): boolean {
  const { type, budget } = filters;
  if (type && !project.tags.includes(type)) return false;
  if (budget && project.status === "Sold Out") return false;
  return true;
}

export function matchApartmentFilters(apartment: Apartment, filters: SearchFilters): boolean {
  const { type } = filters;
  if (type && !apartment.tags.includes(type)) return false;
  return true;
}

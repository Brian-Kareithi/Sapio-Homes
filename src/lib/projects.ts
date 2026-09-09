export interface UnitPlan {
  name: string;
  beds: string;
  size: string;
  price: string;
  deposit?: string;
  installment?: string;
  term?: string;
}

export interface ProjectDetail {
  slug: string;
  code: string;
  name: string;
  tagline: string;
  location: string;
  neighborhood: string;
  unitSummary: string;
  status: "Selling Now" | "Off-Plan" | "Completed" | "Sold Out";
  completion: string;
  priceFrom: string;
  image: string;
  overview: string[];
  units: UnitPlan[];
  amenities: string[];
  investment: { label: string; value: string }[];
  nearby?: { label: string; distance: string }[];
}

/**
 * Project data compiled from sapiohome.com (Park Road Residency, Hillside Gardens,
 * Westway Apartments) plus the firm's completed / sold-out portfolio.
 */
export const projects: ProjectDetail[] = [
  {
    slug: "park-road-residency",
    code: "01",
    name: "Park Road Residency",
    tagline: "Invest in a tenant's paradise",
    location: "Park Road, Nairobi",
    neighborhood: "Ngara · 3–5 km from the CBD",
    unitSummary: "1 Bedroom · Furnished",
    status: "Selling Now",
    completion: "September 2026",
    priceFrom: "KES 4.5M",
    image: "https://ppkfgsakvcijmmhjwbcz.supabase.co/storage/v1/object/public/Photos/real%20estate%20one.jpg",
    overview: [
      "Affordable luxury apartments with generous layouts and expansive spaces — fitted kitchens, dedicated laundry, abundant natural light and smart storage throughout.",
      "A managed, income-first building minutes from the city centre, engineered for strong occupancy and a projected return on investment of 10% or more.",
    ],
    units: [
      {
        name: "Middle Unit",
        beds: "1 Bed · 1 Bath",
        size: "550 sq ft",
        price: "KES 4.5M",
        deposit: "30% of price",
        installment: "Flexible",
        term: "24 months",
      },
      {
        name: "Corner Unit",
        beds: "1 Bed · 1 Bath",
        size: "700 sq ft",
        price: "KES 5.0M",
        deposit: "30% of price",
        installment: "Flexible",
        term: "24 months",
      },
    ],
    amenities: [
      "Fully equipped rooftop gym",
      "Reliable borehole water system",
      "24/7 CCTV surveillance",
      "Maximum 6 units per floor",
      "Dedicated laundry areas",
      "Onsite café and minimart",
      "High-speed elevators",
      "Ample secure parking",
      "Sectional-title ownership",
      "Fully managed rental service",
    ],
    investment: [
      { label: "Reservation fee", value: "KES 100,000" },
      { label: "Deposit", value: "30% of unit price" },
      { label: "Balance", value: "24-month installments" },
      { label: "Projected ROI", value: "10%+" },
    ],
  },
  {
    slug: "westway-apartments",
    code: "02",
    name: "Westway Apartments",
    tagline: "Sheltered from the city's hustle and noise",
    location: "Little Bombay, Nairobi West",
    neighborhood: "Nairobi West",
    unitSummary: "Executive Studio · 1BR · 2BR",
    status: "Off-Plan",
    completion: "May 2028",
    priceFrom: "KES 3.0M",
    image: "https://ppkfgsakvcijmmhjwbcz.supabase.co/storage/v1/object/public/Photos/real%20estate%20two.jpg",
    overview: [
      "Designed for a homely feel, Westway fuses the Sapio spatial ethos with contemporary architecture and high-end finishes.",
      "Sixteen floors of 11 units each — a vertical neighbourhood built for owner-occupiers and investors chasing 10–12% annual rental yields at 0% interest.",
    ],
    units: [
      {
        name: "Executive Studio",
        beds: "Studio",
        size: "312 sq ft",
        price: "KES 3.0M",
      },
      {
        name: "One Bedroom",
        beds: "1 Bed",
        size: "517 sq ft",
        price: "KES 5.2M",
        deposit: "KES 1.6M",
        installment: "KES 100,000 / mo",
        term: "36 months",
      },
      {
        name: "Two Bedroom",
        beds: "2 Bed",
        size: "818 sq ft",
        price: "KES 8.0M",
        deposit: "KES 2.4M",
        installment: "KES 155,556 / mo",
        term: "36 months",
      },
    ],
    amenities: [
      "High-speed lifts",
      "24/7 security with CCTV",
      "Secure parking",
      "Rooftop chill zone",
      "Borehole with backup water",
      "Standby generator",
      "Fire safety systems",
      "Kids' play area",
    ],
    investment: [
      { label: "Annual rental yield", value: "10–12%" },
      { label: "Interest rate", value: "0%" },
      { label: "Projected capital gain", value: "20–30%" },
      { label: "Expected monthly rent", value: "KES 50,000–65,000" },
    ],
  },
  {
    slug: "hillside-gardens",
    code: "03",
    name: "Hillside Gardens",
    tagline: "Artfully designed, meticulously set",
    location: "Parklands, Nairobi",
    neighborhood: "Parklands",
    unitSummary: "3 & 4 Bedroom",
    status: "Completed",
    completion: "Delivered",
    priceFrom: "Sold Out",
    image: "https://ppkfgsakvcijmmhjwbcz.supabase.co/storage/v1/object/public/Photos/real%20estate%20three.jpg",
    overview: [
      "A spectacular 13-floor development of spacious 3 and 4 bedroom residences, set within one of Nairobi's most sought-after locations with stunning views.",
      "Now fully delivered and occupied — a reference point for the quality and finish buyers can expect across the Sapio portfolio.",
    ],
    units: [
      { name: "3 Bedroom", beds: "3 Bed", size: "On request", price: "Sold Out" },
      { name: "4 Bedroom", beds: "4 Bed", size: "On request", price: "Sold Out" },
    ],
    amenities: [
      "Round-the-clock camera surveillance",
      "Rooftop entertainment area with panoramic views",
      "Fitness centre with elevated views",
      "Backup generator",
      "Borehole water system",
      "Children's playground",
    ],
    investment: [
      { label: "Status", value: "Completed & occupied" },
      { label: "Floors", value: "13" },
    ],
    nearby: [
      { label: "Supermarket", distance: "200 m" },
      { label: "Bus station", distance: "150 m" },
      { label: "University", distance: "250 m" },
      { label: "Hospital", distance: "500 m" },
      { label: "Park", distance: "1.5 km" },
      { label: "Airport", distance: "2.8 km" },
    ],
  },
  {
    slug: "nyayo-view-suites",
    code: "04",
    name: "Nyayo View Suites",
    tagline: "Where the portfolio began",
    location: "Nairobi West",
    neighborhood: "Nairobi West",
    unitSummary: "Studio · 1 Bedroom",
    status: "Sold Out",
    completion: "Delivered",
    priceFrom: "Sold Out",
    image: "https://ppkfgsakvcijmmhjwbcz.supabase.co/storage/v1/object/public/Photos/real%20estate%20four.jpg",
    overview: [
      "An early Sapio development of compact studios and one-bedroom suites in Nairobi West — sold out on the strength of smart layouts and premium finishes.",
    ],
    units: [
      { name: "Studio", beds: "Studio", size: "On request", price: "Sold Out" },
      { name: "1 Bedroom", beds: "1 Bed", size: "On request", price: "Sold Out" },
    ],
    amenities: ["Secure parking", "CCTV surveillance", "Backup water", "Managed rentals"],
    investment: [{ label: "Status", value: "Sold Out" }],
  },
  {
    slug: "balozi-suites",
    code: "05",
    name: "Balozi Suites",
    tagline: "Compact living, done right",
    location: "South B, Nairobi",
    neighborhood: "South B",
    unitSummary: "Studio · 1 Bedroom",
    status: "Sold Out",
    completion: "Delivered",
    priceFrom: "Sold Out",
    image: "https://ppkfgsakvcijmmhjwbcz.supabase.co/storage/v1/object/public/Photos/real%20estate%20two.jpg",
    overview: [
      "Studios and one-bedroom homes in South B, close to schools, hospitals and transport links — fully sold and now under Sapio management.",
    ],
    units: [
      { name: "Studio", beds: "Studio", size: "On request", price: "Sold Out" },
      { name: "1 Bedroom", beds: "1 Bed", size: "On request", price: "Sold Out" },
    ],
    amenities: ["Secure parking", "CCTV surveillance", "Backup water", "Managed rentals"],
    investment: [{ label: "Status", value: "Sold Out" }],
  },
  {
    slug: "the-reveal",
    code: "06",
    name: "The Reveal",
    tagline: "A statement in Kilimani",
    location: "Kilimani, Nairobi",
    neighborhood: "Kilimani",
    unitSummary: "Studio · 1 Bedroom",
    status: "Sold Out",
    completion: "Delivered",
    priceFrom: "Sold Out",
    image: "https://ppkfgsakvcijmmhjwbcz.supabase.co/storage/v1/object/public/Photos/real%20estate%20one.jpg",
    overview: [
      "A boutique Kilimani development of studios and one-bedroom apartments — sold out ahead of completion.",
    ],
    units: [
      { name: "Studio", beds: "Studio", size: "On request", price: "Sold Out" },
      { name: "1 Bedroom", beds: "1 Bed", size: "On request", price: "Sold Out" },
    ],
    amenities: ["Secure parking", "CCTV surveillance", "Backup water", "Managed rentals"],
    investment: [{ label: "Status", value: "Sold Out" }],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export const availableProjects = projects.filter(
  (p) => p.status === "Selling Now" || p.status === "Off-Plan",
);

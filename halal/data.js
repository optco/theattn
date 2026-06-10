// ============================================================
//  HALAL RESTAURANTS CONFIG
//  File renamed to data.js as requested.
// ============================================================
const RESTAURANTS = [
  // --- Original Entries ---
  {
    name: "Bismillah Grill",
    cuisine: "Pakistani",
    address: "12 Commissioner St, Johannesburg CBD, 2001",
    lat: -26.2041,
    lng: 28.0473,
    phone: "+27 11 333 1234",
    notes: "SANHA certified · Dine-in & takeaway",
    tags: ["Dine-in", "Takeaway"]
  },
  {
    name: "Al Barakah Kitchen",
    cuisine: "Arab",
    address: "45 Jan Smuts Ave, Rosebank, Johannesburg, 2196",
    lat: -26.1461,
    lng: 28.0417,
    phone: "+27 11 447 9900",
    notes: "Family-friendly · No alcohol on premises",
    tags: ["Dine-in", "Delivery"]
  },
  {
    name: "Spice Route Indian",
    cuisine: "Indian",
    address: "88 Rivonia Rd, Sandton, Johannesburg, 2196",
    lat: -26.1076,
    lng: 28.0567,
    phone: "+27 11 784 5500",
    notes: "Fully halal · Vegetarian options available",
    tags: ["Dine-in", "Takeaway", "Delivery"]
  },
  {
    name: "Istanbul Kebab House",
    cuisine: "Turkish",
    address: "23 Main Rd, Fordsburg, Johannesburg, 2092",
    lat: -26.2099,
    lng: 28.0213,
    phone: "+27 11 838 7700",
    notes: "MJC certified",
    tags: ["Dine-in", "Takeaway"]
  },
  {
    name: "Nasi Lemak Corner",
    cuisine: "Malay",
    address: "7 Tyrwhitt Ave, Rosebank, Johannesburg, 2196",
    lat: -26.1480,
    lng: 28.0440,
    phone: "+27 11 880 3322",
    notes: "Halal certified · Open late",
    tags: ["Dine-in", "Takeaway"]
  },

  // --- Johannesburg Expansion ---
  {
    name: "Mosso Savour Turkish Luxury",
    cuisine: "Turkish / Fine Dining",
    address: "Sandton City, Rivonia Rd, Sandton, 2196",
    lat: -26.1084,
    lng: 28.0523,
    phone: "+27 11 784 0122",
    notes: "Luxury dining · Intricate chef shows · Halal certified",
    tags: ["Dine-in", "Fine Dining"]
  },
  {
    name: "Pigalle By Villamoura",
    cuisine: "Seafood / Portuguese / Grill",
    address: "U332, Sandton City, Rivonia Rd, Sandton, 2196",
    lat: -26.1092,
    lng: 28.0538,
    phone: "+27 11 884 8832",
    notes: "Halal certified · High-end seafood and steaks · Elegant ambiance",
    tags: ["Dine-in", "Fine Dining"]
  },
  {
    name: "Lokkum Norwood",
    cuisine: "Turkish / Grill",
    address: "73 Grant Ave, Norwood, Johannesburg, 2192",
    lat: -26.1585,
    lng: 28.0772,
    phone: "+27 11 483 1004",
    notes: "SANHA certified · Shisha lounge on-site · Signature kebabs",
    tags: ["Dine-in", "Takeaway"]
  },
  {
    name: "Dosa Hut Fordsburg",
    cuisine: "South Indian",
    address: "42 Central Rd, Fordsburg, Johannesburg, 2092",
    lat: -26.2065,
    lng: 28.0241,
    phone: "+27 11 836 0053",
    notes: "Highly rated South Indian specialties · Casual dining",
    tags: ["Dine-in", "Takeaway", "Delivery"]
  },
  {
    name: "Doppio Zero Lakefield",
    cuisine: "Italian / Mediterranean",
    address: "Lakefield Junction, 15 Lakefield Ave, Benoni, 1501",
    lat: -26.1824,
    lng: 28.2981,
    phone: "+27 10 593 4561",
    notes: "SANHA certified · The only fully halal branch in Gauteng",
    tags: ["Dine-in", "Takeaway"]
  },

  // --- Cape Town Expansion ---
  {
    name: "The Andalousse Moroccan Restaurant",
    cuisine: "Moroccan",
    address: "72 Woodstock Main Rd, Woodstock, Cape Town, 7925",
    lat: -33.9298,
    lng: 18.4485,
    phone: "+27 21 447 0314",
    notes: "Authentic Moroccan tajines · MJC approved · Family-friendly",
    tags: ["Dine-in", "Takeaway"]
  },
  {
    name: "Biesmiellah Restaurant",
    cuisine: "Cape Malay",
    address: "2 Wale St & Rose St, Bo-Kaap, Cape Town, 8001",
    lat: -33.9219,
    lng: 18.4146,
    phone: "+27 21 423 0850",
    notes: "MJC certified · Strict no-alcohol policy · Iconic Bo-Kaap spot",
    tags: ["Dine-in", "Takeaway"]
  },
  {
    name: "Saray Restaurant",
    cuisine: "Turkish",
    address: "Cnr Somerset Road & Ebenezer Rd, Green Point, Cape Town, 8005",
    lat: -33.9114,
    lng: 18.4172,
    phone: "+27 21 418 1609",
    notes: "Fully Halal · Authentic wood-fired Turkish bread and grills",
    tags: ["Dine-in", "Takeaway"]
  },

  // --- Durban Expansion ---
  {
    name: "Caminettos Overport",
    cuisine: "Italian / Pizza",
    address: "131 Sparks Rd, Overport, Durban, 4067",
    lat: -29.8335,
    lng: 30.9952,
    phone: "+27 31 207 8632",
    notes: "SANHA certified · Highly popular gourmet pizzas · Prayer room available",
    tags: ["Dine-in", "Takeaway", "Delivery"]
  },
  {
    name: "Sunkist Muito Bom",
    cuisine: "East African / Portuguese / Grill",
    address: "29 Lennox Road, Berea, Durban, 4001",
    lat: -29.8412,
    lng: 31.0210,
    phone: "+27 78 655 8754",
    notes: "SANHA certified · Famous for flame-grilled Portuguese chicken",
    tags: ["Dine-in", "Takeaway"]
  },
  {
    name: "J-Mo's Musgrave",
    cuisine: "South African / Italian / Grill",
    address: "141 Musgrave Road, Berea, Durban, 4001",
    lat: -29.8488,
    lng: 31.0065,
    phone: "+27 31 201 1234",
    notes: "Halal certified · Broad menu featuring steaks and burgers",
    tags: ["Dine-in", "Takeaway"]
  }
];

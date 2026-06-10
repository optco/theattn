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
    address: "Sandton City, Rivonia Rd, Sandton, Johannesburg, 2196",
    lat: -26.1084,
    lng: 28.0523,
    phone: "+27 10 634 5777",
    notes: "Luxury dining · Intricate chef shows · Halal certified",
    tags: ["Dine-in", "Fine Dining"]
  },
  {
    name: "Pigalle By Villamoura",
    cuisine: "Seafood / Portuguese / Grill",
    address: "U332, Sandton City, Rivonia Rd, Sandton, Johannesburg, 2196",
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

  // --- Johannesburg (Additional) ---
  {
    name: "Ghazal North Indian Restaurant",
    cuisine: "North Indian",
    address: "Shop 28, Coachmans Crossing, Peter Place, Bryanston, Sandton, 2191",
    lat: -26.0570,
    lng: 28.0130,
    phone: "+27 11 706 9412",
    notes: "Popular Indian fine dining · Halal certified · Multiple awards",
    tags: ["Dine-in", "Takeaway"]
  },
  {
    name: "Thava Indian Restaurant",
    cuisine: "Indian",
    address: "Cnr The Avenue & Grove Rd, Norwood, Johannesburg, 2192",
    lat: -26.1545,
    lng: 28.0740,
    phone: "+27 11 728 2826",
    notes: "Authentic Indian cuisine · Halal certified · Multiple branches",
    tags: ["Dine-in", "Takeaway", "Delivery"]
  },
  {
    name: "Ozzy's at The Monarch Hotel",
    cuisine: "International / Fine Dining",
    address: "167 Oxford Rd, Rosebank, Johannesburg, 2196",
    lat: -26.1420,
    lng: 28.0460,
    phone: "+27 10 025 8838",
    notes: "Upscale halal dining · Courtyard seating · Innovative menu",
    tags: ["Dine-in", "Fine Dining"]
  },
  {
    name: "Alta Gracia",
    cuisine: "Fusion / Grills / Steakhouse",
    address: "0A Edel Rd, Atlas Junction, Beyers Park, Boksburg, 1459",
    lat: -26.2150,
    lng: 28.2580,
    phone: "+27 76 821 9233",
    notes: "Fine dining halal excellence · Stylish lounge · Balcony shisha",
    tags: ["Dine-in", "Fine Dining"]
  },
  {
    name: "Pera Rosebank",
    cuisine: "Turkish / Grill",
    address: "Shop 01, 39 Bath Ave, Rosebank, Johannesburg, 2196",
    lat: -26.1450,
    lng: 28.0430,
    phone: "+27 78 663 1120",
    notes: "SANHA certified · Turkish grill & shisha lounge · Authentic mezze",
    tags: ["Dine-in", "Takeaway"]
  },
  {
    name: "Istanbul Kebab Melrose Arch",
    cuisine: "Turkish",
    address: "Shop 5, The Arch, Melrose Square, The High St, Melrose, 2076",
    lat: -26.1395,
    lng: 28.0620,
    phone: "+27 10 023 2700",
    notes: "SANHA certified · Complimentary starters · Iskender Kebab specialty",
    tags: ["Dine-in", "Takeaway"]
  },
  {
    name: "Calistos Rosebank",
    cuisine: "Portuguese / Seafood",
    address: "The Zone @ Rosebank, 177 Oxford Rd, Rosebank, Johannesburg, 2196",
    lat: -26.1440,
    lng: 28.0445,
    phone: "+27 11 268 5924",
    notes: "SANHA certified · Portuguese flame-grilled chicken · Seafood specialist",
    tags: ["Dine-in", "Takeaway", "Delivery"]
  },
  {
    name: "Narang Restaurant",
    cuisine: "Syrian / Middle Eastern",
    address: "40 7th Avenue, Cnr 3rd Ave, Parktown North, Randburg, 2193",
    lat: -26.1350,
    lng: 28.0170,
    phone: "+27 69 977 7949",
    notes: "Muslim owned · Authentic Syrian cuisine · Shawarma & kunafa specialist",
    tags: ["Dine-in", "Takeaway", "Delivery"]
  },
  {
    name: "RocoMamas Melrose Halaal",
    cuisine: "American / Burgers",
    address: "Melrose Arch, Johannesburg, 2076",
    lat: -26.1390,
    lng: 28.0610,
    phone: "+27 11 051 4781",
    notes: "SANHA certified · The only halal RocoMamas · Smash burgers & ribs",
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

  // --- Cape Town (Additional) ---
  {
    name: "The Bo-Kaap Kombuis",
    cuisine: "Cape Malay",
    address: "7 August Street, Schotsche Kloof, Cape Town, 8001",
    lat: -33.9235,
    lng: 18.4130,
    phone: "+27 21 422 5446",
    notes: "Traditional Cape Malay dishes · Halal fish curry · Family-run",
    tags: ["Dine-in", "Takeaway"]
  },
  {
    name: "Eastern Food Bazaar",
    cuisine: "Multi-Cuisine / Street Food",
    address: "96 Longmarket St, Cape Town City Centre, 8001",
    lat: -33.9210,
    lng: 18.4190,
    phone: "+27 21 461 2458",
    notes: "All 10 stalls halal · Indian, Chinese, Turkish, Cape Malay · Affordable",
    tags: ["Dine-in", "Takeaway"]
  },
  {
    name: "The Village Buffet",
    cuisine: "Multi-Cuisine / Buffet",
    address: "102 Long St, Cape Town City Centre, 8001",
    lat: -33.9220,
    lng: 18.4180,
    phone: "+27 21 422 3186",
    notes: "Halal certified · Hall-styled buffet · Indian, Pizza, Seafood, Sushi",
    tags: ["Dine-in", "Buffet"]
  },
  {
    name: "District Café",
    cuisine: "Café / Grill",
    address: "115 Roodebloem Rd, Woodstock, Cape Town, 7925",
    lat: -33.9310,
    lng: 18.4470,
    phone: "+27 21 447 3444",
    notes: "Family-operated halal café · Breakfast, burgers, grills & desserts",
    tags: ["Dine-in", "Takeaway"]
  },
  {
    name: "Gold Restaurant",
    cuisine: "African",
    address: "15 Bennett Street, Green Point, Cape Town, 8005",
    lat: -33.9120,
    lng: 18.4150,
    phone: "+27 21 421 4653",
    notes: "14-course African food safari · Live music & drumming · Halal-friendly",
    tags: ["Dine-in", "Fine Dining"]
  },
  {
    name: "The Butcher's Wife",
    cuisine: "Steakhouse / Grill",
    address: "15 Belgravia Road, Belgravia, Cape Town, 7945",
    lat: -34.0020,
    lng: 18.4620,
    phone: "+27 21 696 2007",
    notes: "Prime halal steaks · Meats from own halal butcheries · Since 1975",
    tags: ["Dine-in", "Fine Dining"]
  },
  {
    name: "Sabria's Restaurant",
    cuisine: "South African / Fine Dining",
    address: "119 Ottery Road, Wynberg, Cape Town, 7800",
    lat: -34.0130,
    lng: 18.4650,
    phone: "+27 21 761 5247",
    notes: "One of CT's first halal fine dining · Prime grills, curries & seafood",
    tags: ["Dine-in", "Fine Dining"]
  },
  {
    name: "Bibi's Kitchen",
    cuisine: "Cape Malay / Indian",
    address: "Broad Road, Wynberg, Cape Town, 7800",
    lat: -34.0110,
    lng: 18.4670,
    phone: "+27 21 761 8365",
    notes: "25+ year legacy · Famous for homemade pastries & prawn chaat",
    tags: ["Dine-in", "Takeaway"]
  },
  {
    name: "126 Cape Kitchen & Café",
    cuisine: "Malay / Indian Fusion",
    address: "126 Buitengracht St, Cape Town City Centre, 8001",
    lat: -33.9225,
    lng: 18.4155,
    phone: "+27 21 214 1234",
    notes: "Hyatt Regency · Fully halal certified · Bo-Kaap location · Modern twist",
    tags: ["Dine-in", "Takeaway"]
  },
  {
    name: "The Happy Uncles",
    cuisine: "Fine Dining",
    address: "100 Voortrekker Road, Salt River, Cape Town, 7925",
    lat: -33.9350,
    lng: 18.4520,
    phone: "+27 79 929 5322",
    notes: "SA's 1st fully halal fine dining · Tasting menu · Award-winning",
    tags: ["Dine-in", "Fine Dining"]
  },
  {
    name: "Saray V&A Waterfront",
    cuisine: "Turkish / Kurdish",
    address: "Shop G01, Clocktower Building, V&A Waterfront, Cape Town, 8001",
    lat: -33.9035,
    lng: 18.4210,
    phone: "+27 66 430 3391",
    notes: "Strictly halal · Authentic Turkish-Kurdish · Iskender & kavurma",
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
  },

  // --- Durban (Additional) ---
  {
    name: "Simply Asia Gateway",
    cuisine: "Thai / Asian Fusion",
    address: "Shop G010, Gateway Theatre of Shopping, 1 Palm Blvd, Umhlanga Ridge, 4319",
    lat: -29.7263,
    lng: 31.0669,
    phone: "+27 31 584 7518",
    notes: "Halal certified · Thai & Asian cuisine · Sushi available · Family-friendly",
    tags: ["Dine-in", "Takeaway", "Delivery"]
  },
  {
    name: "The Little India Restaurant",
    cuisine: "Indian",
    address: "155 Musgrave Road, Musgrave, Berea, Durban, 4001",
    lat: -29.8475,
    lng: 31.0070,
    phone: "+27 31 201 1121",
    notes: "Top-rated Indian in Durban · Authentic curries & bunny chow",
    tags: ["Dine-in", "Takeaway"]
  },
  {
    name: "Smokin' Joe's",
    cuisine: "American / Burgers",
    address: "54 Cowey Road, Morningside, Durban, 4001",
    lat: -29.8380,
    lng: 31.0180,
    phone: "+27 31 309 1568",
    notes: "Muslim owned · Ranked 12th best burger joint in the world · Knockout burgers",
    tags: ["Dine-in", "Takeaway", "Delivery"]
  },
  {
    name: "CaneCutters",
    cuisine: "Indian / Durban Curry",
    address: "53 Helen Joseph Road, Davenport, Glenwood, Durban, 4083",
    lat: -29.8420,
    lng: 30.9980,
    phone: "+27 31 201 1234",
    notes: "Authentic Durban-style curries · Famous bunny chow · Halal",
    tags: ["Dine-in", "Takeaway"]
  },
  {
    name: "Canvas Grill",
    cuisine: "Steakhouse / Seafood",
    address: "Shop R21, Park Square, Umhlanga, Durban, 4320",
    lat: -29.7280,
    lng: 31.0830,
    phone: "+27 31 201 3096",
    notes: "Strictly halal fine dining · Premium steaks & seafood · Upscale ambiance",
    tags: ["Dine-in", "Fine Dining"]
  },
  {
    name: "Jack's Grill Co",
    cuisine: "Seafood / Grill",
    address: "295 Florida Road, Morningside, Durban, 4001",
    lat: -29.8350,
    lng: 31.0200,
    phone: "+27 31 521 0250",
    notes: "Halal seafood & grill specialist · Fresh catch · Family dining",
    tags: ["Dine-in", "Takeaway"]
  },

  // --- Pretoria Expansion (NEW) ---
  {
    name: "Geet Indian Restaurant",
    cuisine: "Indian / Fine Dining",
    address: "547 Fehrsen St, Brooklyn, Pretoria, 0181",
    lat: -25.7460,
    lng: 28.2250,
    phone: "+27 12 460 3199",
    notes: "Premier Indian fine dining · Halal menu · Distinctive tandoori specialties",
    tags: ["Dine-in", "Fine Dining"]
  },
  {
    name: "Mochachos Chicken Hatfield",
    cuisine: "Portuguese / Chicken",
    address: "Shop 1, Cnr Hilda & Burnett St, Hatfield Plaza, Pretoria, 0028",
    lat: -25.7530,
    lng: 28.2320,
    phone: "+27 12 004 2412",
    notes: "SANHA certified · Flame-grilled Portuguese chicken · Casual dining",
    tags: ["Dine-in", "Takeaway", "Delivery"]
  },
  {
    name: "Simply Asia Erasmia",
    cuisine: "Thai / Asian Fusion",
    address: "514 Main Road, Erasmia, Centurion, Pretoria, 0183",
    lat: -25.8109,
    lng: 28.0966,
    phone: "+27 12 880 7786",
    notes: "Halal certified · Largest Simply Asia branch · Thai, sushi & bubble tea",
    tags: ["Dine-in", "Takeaway", "Delivery"]
  },
  {
    name: "Royal Tikka Flame Grill",
    cuisine: "Pakistani / Grill",
    address: "Pretoria North, Pretoria, 0182",
    lat: -25.6950,
    lng: 28.1850,
    phone: "+27 12 545 6789",
    notes: "Halal certified · Late-night dining · Fresh tikka & grilled specialties",
    tags: ["Dine-in", "Takeaway"]
  }
];

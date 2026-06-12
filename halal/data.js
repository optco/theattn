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

  // --- Johannesburg (NEW) ---
  {
    name: "Adega Norwood",
    cuisine: "Portuguese / Seafood",
    address: "71 Iris Rd, Norwood, Johannesburg, 2192",
    lat: -26.1555,
    lng: 28.0760,
    phone: "+27 11 728 9000",
    notes: "Strictly halal · No alcohol · Flaming espetadas & seafood platters · Beautiful courtyard",
    tags: ["Dine-in", "Takeaway"]
  },
  {
    name: "Habibi Lebanese Restaurant",
    cuisine: "Lebanese / Middle Eastern",
    address: "Norwood, Johannesburg, 2192",
    lat: -26.1560,
    lng: 28.0750,
    phone: "+27 11 694 5269",
    notes: "Strictly halal · Freshly prepared mezze · Slow-cooked lamb specialties",
    tags: ["Dine-in", "Takeaway"]
  },
  {
    name: "My Diners",
    cuisine: "South African / Café",
    address: "Rosebank, Johannesburg, 2196",
    lat: -26.1460,
    lng: 28.0430,
    phone: "+27 11 447 0000",
    notes: "Halal casual comfort food · Burgers, wraps & all-day breakfast · Budget-friendly",
    tags: ["Dine-in", "Takeaway", "Delivery"]
  },
  {
    name: "Baluchi Indian Restaurant",
    cuisine: "Indian / Fine Dining",
    address: "Illovo Junction, Rivonia Rd, Illovo, Sandton, 2196",
    lat: -26.1320,
    lng: 28.0590,
    phone: "+27 11 268 5000",
    notes: "Fully halal · Fine Indian dining in Illovo · Tandoori specialties",
    tags: ["Dine-in", "Fine Dining"]
  },
  {
    name: "AJ Whisks",
    cuisine: "Lebanese / Desserts / Café",
    address: "Melrose Arch, 1 Melrose Blvd, Melrose, Johannesburg, 2076",
    lat: -26.1392,
    lng: 28.0618,
    phone: "+27 11 684 0000",
    notes: "Halal bakery & café · Lebanese-inspired desserts · Signature Conuts & gourmet shakes",
    tags: ["Dine-in", "Takeaway"]
  },
  {
    name: "Empire Steak Florida Road",
    cuisine: "Steakhouse / Grill",
    address: "Florida Rd, Morningside, Durban, 4001",
    lat: -29.8369,
    lng: 31.0178,
    phone: "+27 31 303 5760",
    notes: "Halal certified · Laid-back family steakhouse · Ever-changing seasonal menu",
    tags: ["Dine-in", "Takeaway"]
  },
  {
    name: "Tadinda Mediterranean Eatery",
    cuisine: "Mediterranean / Turkish",
    address: "Norwood, Johannesburg, 2192",
    lat: -26.1570,
    lng: 28.0775,
    phone: "+27 11 483 2200",
    notes: "Halal certified · Mezze, grills & Turkish classics",
    tags: ["Dine-in", "Takeaway"]
  },
  {
    name: "Castello Milano",
    cuisine: "Italian / Pizza",
    address: "Grant Ave, Norwood, Johannesburg, 2192",
    lat: -26.1580,
    lng: 28.0770,
    phone: "+27 11 728 5050",
    notes: "SANHA certified · Wood-fired pizzas & pasta · Cosy Italian ambiance",
    tags: ["Dine-in", "Takeaway", "Delivery"]
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

  // --- Cape Town (NEW) ---
  {
    name: "Pigalle Cape Town",
    cuisine: "Seafood / Portuguese / Grill",
    address: "57A Somerset Rd, Green Point, Cape Town, 8005",
    lat: -33.9112,
    lng: 18.4168,
    phone: "+27 21 421 4848",
    notes: "Halal certified · 2025 World Luxury Restaurant Award winner · Best luxury seafood in SA",
    tags: ["Dine-in", "Fine Dining"]
  },
  {
    name: "Mesopotamia",
    cuisine: "Kurdish / Middle Eastern",
    address: "36 Burg St, Cape Town City Centre, 8001",
    lat: -33.9200,
    lng: 18.4175,
    phone: "+27 21 422 0854",
    notes: "Halal certified · Authentic Kurdish cuisine · Pide (Kurdish pizza) & best shisha in town",
    tags: ["Dine-in", "Takeaway"]
  },
  {
    name: "L.A. Farms Green Point",
    cuisine: "Steakhouse / Butchery",
    address: "Green Point, Cape Town, 8005",
    lat: -33.9115,
    lng: 18.4145,
    phone: "+27 21 434 0000",
    notes: "Fully halal · Grass-fed free-range Wagyu & Angus · Wagyu brisket burgers & seekh kebabs",
    tags: ["Dine-in", "Fine Dining"]
  },
  {
    name: "Bo-Kaap Deli",
    cuisine: "Cape Malay / Deli",
    address: "Bo-Kaap, Cape Town, 8001",
    lat: -33.9218,
    lng: 18.4142,
    phone: "+27 21 422 2800",
    notes: "Halal deli & café in the heart of Bo-Kaap · Pastries, light meals & coffee",
    tags: ["Dine-in", "Takeaway"]
  },
  {
    name: "Pedros Woodstock",
    cuisine: "Portuguese / Chicken",
    address: "Woodstock, Cape Town, 7925",
    lat: -33.9300,
    lng: 18.4490,
    phone: "+27 21 448 0000",
    notes: "Halal certified · Flame-grilled Portuguese chicken · Multiple Cape Town branches",
    tags: ["Dine-in", "Takeaway", "Delivery"]
  },
  {
    name: "Brocka Rondebosch",
    cuisine: "American / Burgers",
    address: "Rondebosch, Cape Town, 7700",
    lat: -33.9630,
    lng: 18.4730,
    phone: "+27 21 685 0000",
    notes: "Halal certified · Craft burgers, wings & loaded fries · Also at Canal Walk",
    tags: ["Dine-in", "Takeaway", "Delivery"]
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

  // --- Durban (NEW) ---
  {
    name: "Kasbah Restaurant Durban",
    cuisine: "Middle Eastern / Mediterranean",
    address: "Musgrave Centre, Durban, 4001",
    lat: -29.8490,
    lng: 31.0060,
    phone: "+27 31 201 5500",
    notes: "Halal certified · Grills, shawarma & mezze platters · North African-inspired décor",
    tags: ["Dine-in", "Takeaway"]
  },
  {
    name: "Akhalwayas Durban",
    cuisine: "Indian / South African",
    address: "Victoria St Market, Victoria Street, Durban CBD, 4001",
    lat: -29.8570,
    lng: 31.0145,
    phone: "+27 31 306 1446",
    notes: "Muslim-owned institution · Bunny chow & curry since 1940s · Durban icon",
    tags: ["Dine-in", "Takeaway"]
  },
  {
    name: "Shalawat Restaurant",
    cuisine: "Indian / Pakistani",
    address: "Grey Street, Durban CBD, 4001",
    lat: -29.8555,
    lng: 31.0138,
    phone: "+27 31 306 2100",
    notes: "Halal certified · Grey Street landmark · Biryani & grilled specialties",
    tags: ["Dine-in", "Takeaway"]
  },
  {
    name: "Café 1999",
    cuisine: "Fusion / Café / Grill",
    address: "Shop 15, Musgrave Centre, Durban, 4001",
    lat: -29.8488,
    lng: 31.0062,
    phone: "+27 31 201 1999",
    notes: "Halal certified · Trendy café with fusion menu · Signature mocktails & desserts",
    tags: ["Dine-in", "Takeaway"]
  },

  // --- Pretoria Expansion ---
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
  },

  // --- Pretoria (NEW) ---
  {
    name: "Akhalwayas Bree Street",
    cuisine: "Indian / South African",
    address: "Bree Street, Pretoria CBD, 0002",
    lat: -25.7480,
    lng: 28.1880,
    phone: "+27 12 323 2200",
    notes: "Muslim-owned institution · Legendary samosas & curry · Pretoria stalwart",
    tags: ["Dine-in", "Takeaway"]
  },
  {
    name: "Akhalwayas Church Street",
    cuisine: "Indian / South African",
    address: "Church Street, Pretoria CBD, 0002",
    lat: -25.7460,
    lng: 28.1900,
    phone: "+27 12 323 1100",
    notes: "Muslim-owned · Famous for halal snacks, samoosas & bunny chow",
    tags: ["Dine-in", "Takeaway"]
  },
  {
    name: "Tamarind of India Centurion",
    cuisine: "Indian",
    address: "Centurion Mall, Akkerboom Rd, Centurion, Pretoria, 0157",
    lat: -25.8592,
    lng: 28.1887,
    phone: "+27 12 663 1888",
    notes: "Halal certified · Rich north and south Indian menu · Popular for weekend family dining",
    tags: ["Dine-in", "Takeaway", "Delivery"]
  },
  {
    name: "Mochachos Menlyn",
    cuisine: "Portuguese / Chicken",
    address: "Menlyn Park Shopping Centre, Pretoria, 0181",
    lat: -25.7840,
    lng: 28.2760,
    phone: "+27 12 348 3200",
    notes: "SANHA certified · Flame-grilled chicken & prego rolls · Family casual dining",
    tags: ["Dine-in", "Takeaway", "Delivery"]
  },

  // --- Bloemfontein (NEW) ---
  {
    name: "Mochachos Bloemfontein",
    cuisine: "Portuguese / Chicken",
    address: "Preller Square Shopping Centre, Preller St, Westdene, Bloemfontein, 9301",
    lat: -29.1110,
    lng: 26.1870,
    phone: "+27 51 430 5200",
    notes: "SANHA certified · Famous halal grilled chicken & Portuguese-style dishes",
    tags: ["Dine-in", "Takeaway", "Delivery"]
  },
  {
    name: "Al-Mostafa Shawarma Bloemfontein",
    cuisine: "Middle Eastern / Shawarma",
    address: "Preller Square, Bloemfontein, 9301",
    lat: -29.1108,
    lng: 26.1875,
    phone: "+27 51 430 2400",
    notes: "Halal certified · Authentic Lebanese shawarma · Quick service, generous portions",
    tags: ["Dine-in", "Takeaway"]
  },
  {
    name: "Real Foodies Bloemfontein",
    cuisine: "South African / Burgers / Comfort Food",
    address: "Westdene, Bloemfontein, 9301",
    lat: -29.1130,
    lng: 26.1890,
    phone: "+27 51 444 1800",
    notes: "Halal certified · Comfort food burgers & light meals · Family-friendly casual dining",
    tags: ["Dine-in", "Takeaway"]
  },
  {
    name: "Fatima's Restaurant Bloemfontein",
    cuisine: "Indian / Cape Malay",
    address: "Bloemfontein CBD, 9300",
    lat: -29.1180,
    lng: 26.2150,
    phone: "+27 51 447 2600",
    notes: "Muslim-owned · Home-style Indian & Cape Malay cooking · Well-loved local favourite",
    tags: ["Dine-in", "Takeaway"]
  },

  // --- Port Elizabeth / Gqeberha (NEW) ---
  {
    name: "Latinos Pizza Port Elizabeth",
    cuisine: "Italian / Pizza",
    address: "Various branches, Port Elizabeth (Gqeberha), 6001",
    lat: -33.9608,
    lng: 25.6022,
    phone: "+27 41 363 1111",
    notes: "Halal certified · Popular gourmet pizzas · Dough made fresh daily",
    tags: ["Dine-in", "Takeaway", "Delivery"]
  },
  {
    name: "La Fiesta Port Elizabeth",
    cuisine: "Portuguese / Grill",
    address: "Port Elizabeth (Gqeberha), 6001",
    lat: -33.9700,
    lng: 25.6100,
    phone: "+27 41 374 3800",
    notes: "Halal certified · Portuguese grills, chicken espetada & seafood",
    tags: ["Dine-in", "Takeaway", "Delivery"]
  },
  {
    name: "This is Eat Seafood Restaurant",
    cuisine: "Seafood",
    address: "16 Lower Valley Road, The Harbour, Port Elizabeth (Gqeberha), 6001",
    lat: -33.9570,
    lng: 25.6200,
    phone: "+27 41 585 0000",
    notes: "Halal-friendly · Fresh harbour seafood · Calamari & fish specialties",
    tags: ["Dine-in", "Takeaway"]
  },
  {
    name: "Honchos Port Elizabeth",
    cuisine: "Chicken / Fast Food",
    address: "Port Elizabeth (Gqeberha), 6001",
    lat: -33.9640,
    lng: 25.6070,
    phone: "+27 41 374 0000",
    notes: "SANHA certified · Halal fried chicken & burgers · Affordable family meals",
    tags: ["Dine-in", "Takeaway", "Delivery"]
  },

  // --- Pietermaritzburg (NEW) ---
  {
    name: "Curry Palace PMB",
    cuisine: "Indian / Curry",
    address: "Church Street, Pietermaritzburg, 3201",
    lat: -29.6166,
    lng: 30.3929,
    phone: "+27 33 342 6500",
    notes: "Halal certified · Authentic KZN-style curries · Famous for bunny chow & biryani",
    tags: ["Dine-in", "Takeaway"]
  },
  {
    name: "Nandos Pietermaritzburg",
    cuisine: "Portuguese / Chicken",
    address: "Cascades Shopping Centre, Peter Brown Drive, Pietermaritzburg, 3201",
    lat: -29.5990,
    lng: 30.3790,
    phone: "+27 33 347 1700",
    notes: "Halal certified branch · Peri-peri chicken · Family-friendly",
    tags: ["Dine-in", "Takeaway", "Delivery"]
  },

  // --- Polokwane (NEW) ---
  {
    name: "Akhalwayas Polokwane",
    cuisine: "Indian / South African",
    address: "10 Jorrisen Street, Polokwane, 0699",
    lat: -23.9045,
    lng: 29.4689,
    phone: "+27 76 279 1340",
    notes: "Muslim-owned · Legendary samoosas & curry · Polokwane institution",
    tags: ["Dine-in", "Takeaway"]
  },
  {
    name: "Mayets Takeaways",
    cuisine: "Indian / Fast Food",
    address: "Nirvana X1, Polokwane, 0699",
    lat: -23.9120,
    lng: 29.4750,
    phone: "+27 15 292 6664",
    notes: "Halal certified · Quick halal meals, curries & savouries",
    tags: ["Takeaway", "Delivery"]
  },
  {
    name: "Curry Palace Polokwane",
    cuisine: "Indian / Curry",
    address: "Penina Park X1, Polokwane, 0699",
    lat: -23.9200,
    lng: 29.4800,
    phone: "+27 15 291 3300",
    notes: "Halal certified · Next to Sasol · Indian curries & grills",
    tags: ["Dine-in", "Takeaway"]
  },

  // --- Garden Route (NEW) ---
  {
    name: "Kasbah George",
    cuisine: "Middle Eastern / Mediterranean",
    address: "York St, George, 6530",
    lat: -33.9630,
    lng: 22.4615,
    phone: "+27 44 874 5500",
    notes: "Halal certified · Shawarma, grills & mezze · Popular stop on the Garden Route",
    tags: ["Dine-in", "Takeaway"]
  },
  {
    name: "Spice of India George",
    cuisine: "Indian",
    address: "Knysna Rd, George, 6530",
    lat: -33.9690,
    lng: 22.4720,
    phone: "+27 44 873 3800",
    notes: "Halal certified · Authentic Indian curries & tandoori · Garden Route favourite",
    tags: ["Dine-in", "Takeaway", "Delivery"]
  },

  // --- Kimberley (NEW) ---
  {
    name: "The Diamond Grill Kimberley",
    cuisine: "Steakhouse / South African",
    address: "Du Toitspan Rd, Kimberley, 8301",
    lat: -28.7380,
    lng: 24.7720,
    phone: "+27 53 832 4000",
    notes: "Halal certified · Steaks & grills · Named for the city's diamond heritage",
    tags: ["Dine-in", "Takeaway"]
  },
  {
    name: "Eastern Spice Kimberley",
    cuisine: "Indian / Middle Eastern",
    address: "Jones Street, Kimberley, 8301",
    lat: -28.7350,
    lng: 24.7700,
    phone: "+27 53 831 2200",
    notes: "Muslim-owned · Halal curries, biryani & shawarma · Budget-friendly",
    tags: ["Dine-in", "Takeaway"]
  },
  
  // --- Johannesburg & Surrounds (Extended) ---
  {
    name: "Miha Melrose Arch",
    cuisine: "International / Café",
    address: "Shop 004, The Arch, Melrose Square, Melrose Arch, 2076",
    lat: -26.1396,
    lng: 28.0619,
    phone: "+27 10 443 3254",
    notes: "Strictly Halal · Premium café dining · Gourmet burgers, tapas & masterfully crafted mocktails",
    tags: ["Dine-in", "Cafe", "Fine Dining"]
  },
  {
    name: "Le Kreamery Illovo",
    cuisine: "Fusion / Desserts",
    address: "Illovo Junction, Corlett Dr, Illovo, Sandton, 2196",
    lat: -26.1330,
    lng: 28.0560,
    phone: "+27 83 438 7084",
    notes: "Fully Halal · Decadent artisan desserts & premium fusion meals · Highly Instagrammable",
    tags: ["Dine-in", "Cafe", "Takeaway"]
  },
  {
    name: "Jimmy's Killer Prawns Fordsburg",
    cuisine: "Seafood / Grill",
    address: "Shop 4, Rose Ave, Fordsburg, Johannesburg, 2092",
    lat: -26.2052,
    lng: 28.0225,
    phone: "+27 11 833 0380",
    notes: "SANHA certified · Famous signature prawns, seafood platters & sushi",
    tags: ["Dine-in", "Takeaway", "Delivery"]
  },
  {
    name: "Syriana Restaurant",
    cuisine: "Middle Eastern / Syrian",
    address: "73 Grant Ave, Norwood, Johannesburg, 2192",
    lat: -26.1580,
    lng: 28.0770,
    phone: "+27 11 483 1234",
    notes: "Authentic Syrian cuisine · Vibrant atmosphere · Premium Shisha lounge attached",
    tags: ["Dine-in", "Takeaway"]
  },
  {
    name: "Pizza News Fordsburg",
    cuisine: "Italian / Pizza",
    address: "54 Crown Rd, Fordsburg, Johannesburg, 2092",
    lat: -26.2061,
    lng: 28.0245,
    phone: "+27 11 834 8888",
    notes: "SANHA certified · Famous for deep-dish, fully-loaded halal pizzas & subs",
    tags: ["Takeaway", "Delivery"]
  },

  // --- Midrand & Centurion (NEW) ---
  {
    name: "Istanbul Kebab Waterfall",
    cuisine: "Turkish / Grill",
    address: "Waterfall Corner, Woodmead Dr, Midrand, 2066",
    lat: -26.0150,
    lng: 28.1060,
    phone: "+27 11 026 1234",
    notes: "Halal certified · Premium Turkish grills, pide, and baklava near Waterfall City",
    tags: ["Dine-in", "Takeaway"]
  },
  {
    name: "Adega Midrand",
    cuisine: "Portuguese / Seafood",
    address: "San Ridge Square, New Rd, Midrand, 1685",
    lat: -25.9655,
    lng: 28.1255,
    phone: "+27 11 318 0123",
    notes: "Strictly Halal · Famous Portuguese flame-grilled chicken & massive seafood combos",
    tags: ["Dine-in", "Takeaway", "Delivery"]
  },
  {
    name: "Al Makka Restaurant",
    cuisine: "Indian / Pakistani",
    address: "288 Tangerine St, Laudium, Centurion, 0037",
    lat: -25.7950,
    lng: 28.0930,
    phone: "+27 12 374 4440",
    notes: "Long-standing Laudium favorite · Authentic curries, karahi & tandoori",
    tags: ["Dine-in", "Takeaway"]
  },

  // --- Cape Town (Extended Legends & Gourmet) ---
  {
    name: "Wembley Roadhouse",
    cuisine: "Cape Malay / Fast Food",
    address: "Belgravia Rd, Athlone, Cape Town, 7764",
    lat: -33.9667,
    lng: 18.5167,
    phone: "+27 21 697 1435",
    notes: "Iconic Cape Town institution · Famous for hotdogs, gatsbys, and falooda eaten in your car",
    tags: ["Takeaway", "Casual"]
  },
  {
    name: "Cosy Corner",
    cuisine: "Cape Malay / Fast Food",
    address: "119 Ottery Rd, Wynberg, Cape Town, 7800",
    lat: -34.0094,
    lng: 18.4719,
    phone: "+27 21 797 2498",
    notes: "Serving since 1973 · Legendary full-house steak gatsbys and authentic curries",
    tags: ["Dine-in", "Takeaway"]
  },
  {
    name: "Nuri Sushi Factory CBD",
    cuisine: "Asian / Sushi",
    address: "8 Parliament St, Cape Town City Centre, 8001",
    lat: -33.9265,
    lng: 18.4208,
    phone: "+27 21 461 8719",
    notes: "MJC Certified · Fresh gourmet sushi · Innovative halal Asian street food",
    tags: ["Dine-in", "Takeaway", "Delivery"]
  },
  {
    name: "Mariam's Kitchen CBD",
    cuisine: "Cape Malay / Fast Food",
    address: "31 Heerengracht St, Cape Town City Centre, 8000",
    lat: -33.9185,
    lng: 18.4232,
    phone: "+27 21 423 0772",
    notes: "MJC certified · The quintessential Cape Town lunch spot · Known for toasted steak sandwiches and salomies",
    tags: ["Takeaway"]
  },
  {
    name: "Against the Grain Coffee Shop",
    cuisine: "Café / Bakery",
    address: "102 Wale St, Bo-Kaap, Cape Town, 8001",
    lat: -33.9215,
    lng: 18.4150,
    phone: "+27 81 510 5286",
    notes: "Muslim-owned · Gesmoorde snoek bagels & artisan coffee · Incredible views of Table Mountain",
    tags: ["Dine-in", "Cafe"]
  },
  {
    name: "La Rocca",
    cuisine: "International / Café",
    address: "Canal Walk Shopping Centre, Century City, Cape Town, 7441",
    lat: -33.8920,
    lng: 18.5130,
    phone: "+27 21 555 0909",
    notes: "Strictly Halal · Extensive premium menu from gourmet breakfasts to aged steaks",
    tags: ["Dine-in", "Takeaway"]
  },
  {
    name: "Woodies Burgers",
    cuisine: "American / Burgers",
    address: "V&A Waterfront Food Court, Cape Town, 8001",
    lat: -33.9030,
    lng: 18.4180,
    phone: "+27 79 123 4567",
    notes: "MJC certified · Massive, handcrafted artisanal halal burgers with gourmet toppings",
    tags: ["Takeaway", "Delivery"]
  },
  {
    name: "The Grillfather Woodstock",
    cuisine: "Steakhouse / Grill",
    address: "15 Wicht St, Woodstock, Cape Town, 7915",
    lat: -33.9315,
    lng: 18.4480,
    phone: "+27 21 447 4484",
    notes: "Halal certified · Massive, rustic BBQ ribs, steaks, and towering burgers",
    tags: ["Dine-in", "Takeaway"]
  },

  // --- Durban & KZN (Extended) ---
  {
    name: "Sunrise Chip 'N Ranch (Johnny's Roti)",
    cuisine: "South African / Fast Food",
    address: "89 Sparks Rd, Overport, Durban, 4067",
    lat: -29.8330,
    lng: 30.9950,
    phone: "+27 31 209 2020",
    notes: "Legendary 24/7 spot · Famous for the 'Triple Cheese and Chip' roti",
    tags: ["Takeaway", "Late Night"]
  },
  {
    name: "Vapor Café",
    cuisine: "Café / Grill / Fusion",
    address: "131 Florida Rd, Morningside, Durban, 4001",
    lat: -29.8375,
    lng: 31.0185,
    phone: "+27 31 303 3333",
    notes: "Strictly Halal · Premium shisha, gourmet mocktails, and high-end fusion grills",
    tags: ["Dine-in", "Takeaway"]
  },
  {
    name: "Adega Gateway",
    cuisine: "Portuguese / Seafood",
    address: "Gateway Theatre of Shopping, Umhlanga, 4319",
    lat: -29.7260,
    lng: 31.0660,
    phone: "+27 31 566 2222",
    notes: "Fully Halal branch · Upscale Portuguese seafood and chicken dining",
    tags: ["Dine-in", "Takeaway"]
  },
  {
    name: "Palki Indian Restaurant",
    cuisine: "Indian",
    address: "223 Musgrave Rd, Berea, Durban, 4001",
    lat: -29.8450,
    lng: 31.0055,
    phone: "+27 31 201 0019",
    notes: "SANHA certified · Authentic traditional Indian curries and tandoori in an elegant setting",
    tags: ["Dine-in", "Takeaway", "Delivery"]
  },
  // --- Johannesburg & Surrounds (Extended) ---
  {
    name: "Miha Melrose Arch",
    cuisine: "International / Café",
    address: "Shop 004, The Arch, Melrose Square, Melrose Arch, 2076",
    lat: -26.1396,
    lng: 28.0619,
    phone: "+27 10 443 3254",
    notes: "Strictly Halal · Premium café dining · Gourmet burgers, tapas & masterfully crafted mocktails",
    tags: ["Dine-in", "Cafe", "Fine Dining"]
  },
  {
    name: "Le Kreamery Illovo",
    cuisine: "Fusion / Desserts",
    address: "Illovo Junction, Corlett Dr, Illovo, Sandton, 2196",
    lat: -26.1330,
    lng: 28.0560,
    phone: "+27 83 438 7084",
    notes: "Fully Halal · Decadent artisan desserts & premium fusion meals · Highly Instagrammable",
    tags: ["Dine-in", "Cafe", "Takeaway"]
  },
  {
    name: "Jimmy's Killer Prawns Fordsburg",
    cuisine: "Seafood / Grill",
    address: "Shop 4, Rose Ave, Fordsburg, Johannesburg, 2092",
    lat: -26.2052,
    lng: 28.0225,
    phone: "+27 11 833 0380",
    notes: "SANHA certified · Famous signature prawns, seafood platters & sushi",
    tags: ["Dine-in", "Takeaway", "Delivery"]
  },
  {
    name: "Syriana Restaurant",
    cuisine: "Middle Eastern / Syrian",
    address: "73 Grant Ave, Norwood, Johannesburg, 2192",
    lat: -26.1580,
    lng: 28.0770,
    phone: "+27 11 483 1234",
    notes: "Authentic Syrian cuisine · Vibrant atmosphere · Premium Shisha lounge attached",
    tags: ["Dine-in", "Takeaway"]
  },
  {
    name: "Pizza News Fordsburg",
    cuisine: "Italian / Pizza",
    address: "54 Crown Rd, Fordsburg, Johannesburg, 2092",
    lat: -26.2061,
    lng: 28.0245,
    phone: "+27 11 834 8888",
    notes: "SANHA certified · Famous for deep-dish, fully-loaded halal pizzas & subs",
    tags: ["Takeaway", "Delivery"]
  },

  // --- Midrand & Centurion (NEW) ---
  {
    name: "Istanbul Kebab Waterfall",
    cuisine: "Turkish / Grill",
    address: "Waterfall Corner, Woodmead Dr, Midrand, 2066",
    lat: -26.0150,
    lng: 28.1060,
    phone: "+27 11 026 1234",
    notes: "Halal certified · Premium Turkish grills, pide, and baklava near Waterfall City",
    tags: ["Dine-in", "Takeaway"]
  },
  {
    name: "Adega Midrand",
    cuisine: "Portuguese / Seafood",
    address: "San Ridge Square, New Rd, Midrand, 1685",
    lat: -25.9655,
    lng: 28.1255,
    phone: "+27 11 318 0123",
    notes: "Strictly Halal · Famous Portuguese flame-grilled chicken & massive seafood combos",
    tags: ["Dine-in", "Takeaway", "Delivery"]
  },
  {
    name: "Al Makka Restaurant",
    cuisine: "Indian / Pakistani",
    address: "288 Tangerine St, Laudium, Centurion, 0037",
    lat: -25.7950,
    lng: 28.0930,
    phone: "+27 12 374 4440",
    notes: "Long-standing Laudium favorite · Authentic curries, karahi & tandoori",
    tags: ["Dine-in", "Takeaway"]
  },

  // --- Cape Town (Extended Legends & Gourmet) ---
  {
    name: "Wembley Roadhouse",
    cuisine: "Cape Malay / Fast Food",
    address: "Belgravia Rd, Athlone, Cape Town, 7764",
    lat: -33.9667,
    lng: 18.5167,
    phone: "+27 21 697 1435",
    notes: "Iconic Cape Town institution · Famous for hotdogs, gatsbys, and falooda eaten in your car",
    tags: ["Takeaway", "Casual"]
  },
  {
    name: "Cosy Corner",
    cuisine: "Cape Malay / Fast Food",
    address: "119 Ottery Rd, Wynberg, Cape Town, 7800",
    lat: -34.0094,
    lng: 18.4719,
    phone: "+27 21 797 2498",
    notes: "Serving since 1973 · Legendary full-house steak gatsbys and authentic curries",
    tags: ["Dine-in", "Takeaway"]
  },
  {
    name: "Nuri Sushi Factory CBD",
    cuisine: "Asian / Sushi",
    address: "8 Parliament St, Cape Town City Centre, 8001",
    lat: -33.9265,
    lng: 18.4208,
    phone: "+27 21 461 8719",
    notes: "MJC Certified · Fresh gourmet sushi · Innovative halal Asian street food",
    tags: ["Dine-in", "Takeaway", "Delivery"]
  },
  {
    name: "Mariam's Kitchen CBD",
    cuisine: "Cape Malay / Fast Food",
    address: "31 Heerengracht St, Cape Town City Centre, 8000",
    lat: -33.9185,
    lng: 18.4232,
    phone: "+27 21 423 0772",
    notes: "MJC certified · The quintessential Cape Town lunch spot · Known for toasted steak sandwiches and salomies",
    tags: ["Takeaway"]
  },
  {
    name: "Against the Grain Coffee Shop",
    cuisine: "Café / Bakery",
    address: "102 Wale St, Bo-Kaap, Cape Town, 8001",
    lat: -33.9215,
    lng: 18.4150,
    phone: "+27 81 510 5286",
    notes: "Muslim-owned · Gesmoorde snoek bagels & artisan coffee · Incredible views of Table Mountain",
    tags: ["Dine-in", "Cafe"]
  },
  {
    name: "La Rocca",
    cuisine: "International / Café",
    address: "Canal Walk Shopping Centre, Century City, Cape Town, 7441",
    lat: -33.8920,
    lng: 18.5130,
    phone: "+27 21 555 0909",
    notes: "Strictly Halal · Extensive premium menu from gourmet breakfasts to aged steaks",
    tags: ["Dine-in", "Takeaway"]
  },
  {
    name: "Woodies Burgers",
    cuisine: "American / Burgers",
    address: "V&A Waterfront Food Court, Cape Town, 8001",
    lat: -33.9030,
    lng: 18.4180,
    phone: "+27 79 123 4567",
    notes: "MJC certified · Massive, handcrafted artisanal halal burgers with gourmet toppings",
    tags: ["Takeaway", "Delivery"]
  },
  {
    name: "The Grillfather Woodstock",
    cuisine: "Steakhouse / Grill",
    address: "15 Wicht St, Woodstock, Cape Town, 7915",
    lat: -33.9315,
    lng: 18.4480,
    phone: "+27 21 447 4484",
    notes: "Halal certified · Massive, rustic BBQ ribs, steaks, and towering burgers",
    tags: ["Dine-in", "Takeaway"]
  },

  // --- Durban & KZN (Extended) ---
  {
    name: "Sunrise Chip 'N Ranch (Johnny's Roti)",
    cuisine: "South African / Fast Food",
    address: "89 Sparks Rd, Overport, Durban, 4067",
    lat: -29.8330,
    lng: 30.9950,
    phone: "+27 31 209 2020",
    notes: "Legendary 24/7 spot · Famous for the 'Triple Cheese and Chip' roti",
    tags: ["Takeaway", "Late Night"]
  },
  {
    name: "Vapor Café",
    cuisine: "Café / Grill / Fusion",
    address: "131 Florida Rd, Morningside, Durban, 4001",
    lat: -29.8375,
    lng: 31.0185,
    phone: "+27 31 303 3333",
    notes: "Strictly Halal · Premium shisha, gourmet mocktails, and high-end fusion grills",
    tags: ["Dine-in", "Takeaway"]
  },
  {
    name: "Adega Gateway",
    cuisine: "Portuguese / Seafood",
    address: "Gateway Theatre of Shopping, Umhlanga, 4319",
    lat: -29.7260,
    lng: 31.0660,
    phone: "+27 31 566 2222",
    notes: "Fully Halal branch · Upscale Portuguese seafood and chicken dining",
    tags: ["Dine-in", "Takeaway"]
  },
  {
    name: "Palki Indian Restaurant",
    cuisine: "Indian",
    address: "223 Musgrave Rd, Berea, Durban, 4001",
    lat: -29.8450,
    lng: 31.0055,
    phone: "+27 31 201 0019",
    notes: "SANHA certified · Authentic traditional Indian curries and tandoori in an elegant setting",
    tags: ["Dine-in", "Takeaway", "Delivery"]
  }
];

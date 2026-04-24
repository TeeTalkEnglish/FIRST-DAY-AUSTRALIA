// =============================================
// SECTION SORT GAME — game-data.js
// scenario5-grocery/section-game/
// PACKED with Aussie vocab, slang & cultural tips!
// =============================================

// =============================================
// SUPERMARKET SECTIONS
// =============================================

const SECTIONS = [
  {
    id: 'produce',
    name: 'Fruit & Veg',
    icon: '🥦',
    color: '#e8f5e9',
    borderColor: '#43a047',
    hint: 'Fresh fruit and veggies — usually the first section near the entrance. Aussies say "fruit and veg" not "vegetables".',
    aussieNote: 'In Australia, this section is always called "Fruit & Veg" — never "produce" like in America!'
  },
  {
    id: 'meat',
    name: 'Meat & Seafood',
    icon: '🥩',
    color: '#ffebee',
    borderColor: '#e53935',
    hint: 'The deli counter, butcher section, and seafood. Aussies love their snags and lamb chops!',
    aussieNote: 'The person behind the counter is called the "butcher" even in a supermarket. Say "Can I grab..." to order.'
  },
  {
    id: 'dairy',
    name: 'Dairy & Fridge',
    icon: '🧀',
    color: '#e3f2fd',
    borderColor: '#1e88e5',
    hint: 'Milk, cheese, yoghurt, eggs, butter — in the cold fridges along the back wall.',
    aussieNote: 'Australians spell it "yoghurt" not "yogurt". And cheddar cheese is called "tasty cheese"!'
  },
  {
    id: 'bakery',
    name: 'Bakery & Bread',
    icon: '🍞',
    color: '#fff8e1',
    borderColor: '#f9a825',
    hint: 'Bread, rolls, cakes, pies, sausage rolls — often near the entrance so you smell it!',
    aussieNote: 'Aussies LOVE meat pies and sausage rolls! A "sausage roll" is sausage meat wrapped in pastry.'
  },
  {
    id: 'pantry',
    name: 'Pantry & Dry Goods',
    icon: '🥫',
    color: '#fff3e0',
    borderColor: '#ef6c00',
    hint: 'Rice, pasta, cans, sauces, spices, oil, Vegemite — the middle aisles.',
    aussieNote: 'The "Asian food aisle" is in this section — you\'ll find soy sauce, fish sauce, rice noodles, and more.'
  },
  {
    id: 'frozen',
    name: 'Frozen Foods',
    icon: '🧊',
    color: '#e0f2f1',
    borderColor: '#00897b',
    hint: 'Frozen meals, ice cream, frozen veggies, pizza, party pies — freezer section.',
    aussieNote: 'Frozen "party pies" and "sausage rolls" are a staple at every Aussie party!'
  },
  {
    id: 'drinks',
    name: 'Drinks',
    icon: '🥤',
    color: '#f3e5f5',
    borderColor: '#8e24aa',
    hint: 'Water, juice, soft drink, cordial, coffee, tea — usually a full aisle.',
    aussieNote: 'Aussies say "soft drink" not "soda" or "pop". Cordial is a sweet syrup you mix with water.'
  },
  {
    id: 'snacks',
    name: 'Snacks & Biscuits',
    icon: '🍪',
    color: '#fff8e1',
    borderColor: '#ff8f00',
    hint: 'Chips, biscuits, lollies, chocolate, muesli bars — the snack aisle!',
    aussieNote: 'In Australia: "chips" = crisps AND hot chips. "Biscuits" = cookies. "Lollies" = all candy/sweets!'
  },
  {
    id: 'household',
    name: 'Household & Personal Care',
    icon: '🧹',
    color: '#fce4ec',
    borderColor: '#d81b60',
    hint: 'Cleaning products, toilet paper, shampoo, toothpaste — non-food aisles.',
    aussieNote: 'Australians call the toilet "the loo" or "the dunny" (slang). Toilet paper is sometimes called "dunny roll"!'
  },
  {
    id: 'deli',
    name: 'Deli & Ready Meals',
    icon: '🥪',
    color: '#e8eaf6',
    borderColor: '#5c6bc0',
    hint: 'Sliced meats (smallgoods), cooked chickens, salads, dips, olives — near the meat section.',
    aussieNote: 'A hot roast chicken from the deli is called a "chook" — "grab a chook for dinner" is very common!'
  }
];

// =============================================
// DIFFICULTY TAGS:
// 'easy'   — Common items any shopper would know
// 'medium' — Less obvious items, some Aussie vocab
// 'hard'   — Uniquely Australian items, Aussie-only
//            vocab, cultural knowledge needed
// =============================================

const ALL_ITEMS = [

  // ===================================================
  // 🥦 PRODUCE — FRUIT & VEG
  // ===================================================

  // --- Easy produce ---
  {
    name: 'Bananas',
    emoji: '🍌',
    section: 'produce',
    difficulty: 'easy',
    hint: 'A popular yellow fruit. Queensland grows most of Australia\'s bananas!',
    aussieVocab: null
  },
  {
    name: 'Apples',
    emoji: '🍎',
    section: 'produce',
    difficulty: 'easy',
    hint: 'Red or green crunchy fruit. Pink Lady and Granny Smith were invented in Australia!',
    aussieVocab: 'Pink Lady = a popular Aussie apple variety, invented in Western Australia'
  },
  {
    name: 'Carrots',
    emoji: '🥕',
    section: 'produce',
    difficulty: 'easy',
    hint: 'Orange root vegetable. Sold loose or in bags.',
    aussieVocab: null
  },
  {
    name: 'Potatoes',
    emoji: '🥔',
    section: 'produce',
    difficulty: 'easy',
    hint: 'Aussies say "SPUD" for potato! "Grab some spuds" = buy some potatoes.',
    aussieVocab: 'Spud = potato 🥔'
  },
  {
    name: 'Tomatoes',
    emoji: '🍅',
    section: 'produce',
    difficulty: 'easy',
    hint: 'Aussies pronounce it "tuh-MAH-toe" (not "tuh-MAY-toe" like Americans).',
    aussieVocab: 'Tomato sauce = ketchup in Australia!'
  },
  {
    name: 'Onions',
    emoji: '🧅',
    section: 'produce',
    difficulty: 'easy',
    hint: 'Brown, red, or white. Always in the fruit & veg section.',
    aussieVocab: null
  },

  // --- Medium produce ---
  {
    name: 'Broccoli',
    emoji: '🥦',
    section: 'produce',
    difficulty: 'medium',
    hint: 'Green tree-shaped veggie. Also look for "broccolini" — thinner and longer.',
    aussieVocab: 'Broccolini = thinner, longer version of broccoli, very popular in Aus'
  },
  {
    name: 'Lettuce',
    emoji: '🥬',
    section: 'produce',
    difficulty: 'medium',
    hint: 'Iceberg and cos (romaine) are the most popular types in Australia.',
    aussieVocab: 'Cos lettuce = what Americans call "romaine"'
  },
  {
    name: 'Avocados',
    emoji: '🥑',
    section: 'produce',
    difficulty: 'medium',
    hint: 'Australians are OBSESSED with avo! "Smashed avo on toast" is the most famous Aussie brekkie.',
    aussieVocab: 'Avo = avocado (always shortened!) / Smashed avo = mashed avocado on toast'
  },
  {
    name: 'Sweet Potato',
    emoji: '🍠',
    section: 'produce',
    difficulty: 'medium',
    hint: 'Australians love sweet potato! They roast it, mash it, or make chips.',
    aussieVocab: 'Kumara = another name for sweet potato (from New Zealand)'
  },
  {
    name: 'Mandarins',
    emoji: '🍊',
    section: 'produce',
    difficulty: 'medium',
    hint: 'Very popular winter fruit. Kids take them to school. Cheap and sweet May to September.',
    aussieVocab: null
  },
  {
    name: 'Mangoes',
    emoji: '🥭',
    section: 'produce',
    difficulty: 'medium',
    hint: 'Aussies go CRAZY for mangoes in summer (Dec-Feb)! A Christmas favourite.',
    aussieVocab: 'Mango season = summer (Dec-Feb) — a big deal in Australia!'
  },

  // --- Hard produce (Aussie-specific names!) ---
  {
    name: 'Capsicum',
    emoji: '🫑',
    section: 'produce',
    difficulty: 'hard',
    hint: 'THIS IS AN IMPORTANT AUSSIE WORD! What Americans call "bell pepper" — Australians call "CAPSICUM". You MUST learn this word!',
    aussieVocab: 'Capsicum = bell pepper 🫑 (NEVER say "bell pepper" in Australia!)'
  },
  {
    name: 'Rocket',
    emoji: '🥬',
    section: 'produce',
    difficulty: 'hard',
    hint: 'Not a spaceship! 🚀 "Rocket" is the Aussie name for ARUGULA — a peppery salad leaf. Used in salads and on pizza.',
    aussieVocab: 'Rocket = arugula (peppery green salad leaf) — very common in Aussie cafés!'
  },
  {
    name: 'Coriander',
    emoji: '🌿',
    section: 'produce',
    difficulty: 'hard',
    hint: 'Aussies call the WHOLE plant "coriander" — not "cilantro" like Americans. The leaf AND the seed are both "coriander".',
    aussieVocab: 'Coriander = cilantro (the fresh leaf AND the dried seed — one word for both!)'
  },
  {
    name: 'Spring Onions (Shallots)',
    emoji: '🧅',
    section: 'produce',
    difficulty: 'hard',
    hint: 'In Australia, spring onions are often called "SHALLOTS" — confusing because in other countries shallots are different!',
    aussieVocab: 'Shallots = spring onions / green onions in Australia (different from French shallots!)'
  },
  {
    name: 'Cos Lettuce',
    emoji: '🥬',
    section: 'produce',
    difficulty: 'hard',
    hint: 'What Americans call "romaine lettuce" — Australians call "COS lettuce". Tall, crunchy, used in Caesar salads.',
    aussieVocab: 'Cos = romaine lettuce'
  },
  {
    name: 'Broccolini',
    emoji: '🥦',
    section: 'produce',
    difficulty: 'hard',
    hint: 'A thinner, longer version of broccoli with small florets. Very trendy in Aussie restaurants. It\'s actually an Australian invention!',
    aussieVocab: 'Broccolini = a broccoli hybrid actually developed in Australia! Long thin stems with small heads.'
  },
  {
    name: 'Chillies',
    emoji: '🌶️',
    section: 'produce',
    difficulty: 'hard',
    hint: 'Australians spell it "CHILLI" with double L (not "chili"). Fresh chillies are in the fruit & veg section.',
    aussieVocab: 'Chilli = the Australian/British spelling (double L, not single like American "chili")'
  },
  {
    name: 'Silverbeet',
    emoji: '🥬',
    section: 'produce',
    difficulty: 'hard',
    hint: 'A leafy green similar to Swiss chard. Aussies call it "SILVERBEET". Common in Aussie home cooking.',
    aussieVocab: 'Silverbeet = Swiss chard (the Australian name for this leafy green)'
  },
  {
    name: 'Kipfler Potatoes',
    emoji: '🥔',
    section: 'produce',
    difficulty: 'hard',
    hint: 'Small, finger-shaped waxy potatoes — very popular in Australia for roasting. You\'ll see them labelled "kipfler" in the spud section.',
    aussieVocab: 'Kipfler = a small finger-shaped potato, great for roasting. Aussies love their kipflers!'
  },
  {
    name: 'Witlof',
    emoji: '🥬',
    section: 'produce',
    difficulty: 'hard',
    hint: 'What some countries call "endive" or "chicory" — Australians call it "WITLOF". A bitter salad leaf used in fancy salads.',
    aussieVocab: 'Witlof = Belgian endive / chicory (the Aussie name)'
  },

  // ===================================================
  // 🥩 MEAT & SEAFOOD
  // ===================================================

  // --- Easy meat ---
  {
    name: 'Chicken Breast',
    emoji: '🍗',
    section: 'meat',
    difficulty: 'easy',
    hint: 'Lean white meat. Very popular. Aussies call chicken "chook"!',
    aussieVocab: 'Chook = chicken (slang). "I\'ll cook a chook tonight"'
  },
  {
    name: 'Beef Mince',
    emoji: '🥩',
    section: 'meat',
    difficulty: 'easy',
    hint: 'Ground beef is called "MINCE" in Australia! Used for bolognese, meat pies, and rissoles.',
    aussieVocab: 'Mince = ground meat (NEVER say "ground beef" in Australia!)'
  },
  {
    name: 'Sausages',
    emoji: '🌭',
    section: 'meat',
    difficulty: 'easy',
    hint: 'Aussies call sausages "SNAGS"! Essential for a BBQ.',
    aussieVocab: 'Snags = sausages 🌭'
  },

  // --- Medium meat ---
  {
    name: 'Lamb Chops',
    emoji: '🍖',
    section: 'meat',
    difficulty: 'medium',
    hint: 'Australia is FAMOUS for lamb! Lamb chops on the BBQ is a classic. Very popular at Australia Day.',
    aussieVocab: 'Lamb chops on the barbie = classic Aussie BBQ'
  },
  {
    name: 'Bacon Rashers',
    emoji: '🥓',
    section: 'meat',
    difficulty: 'medium',
    hint: 'In Australia, slices of bacon are called "RASHERS". "Short cut rashers" are the lean ones.',
    aussieVocab: 'Rashers = slices of bacon / Short cut = lean bacon without the fatty tail'
  },
  {
    name: 'Pork Chops',
    emoji: '🥩',
    section: 'meat',
    difficulty: 'medium',
    hint: 'Thick pork slices with bone. "Chops" is the Aussie word for thick-cut meat on the bone.',
    aussieVocab: 'Chops = thick slices of meat on the bone (pork chops, lamb chops)'
  },
  {
    name: 'Chicken Thigh Fillets',
    emoji: '🍗',
    section: 'meat',
    difficulty: 'medium',
    hint: 'Boneless chicken thighs. More flavour than breast. Great for stir-fries and curries.',
    aussieVocab: null
  },

  // --- Hard meat (Aussie-specific!) ---
  {
    name: 'Snags (Beef)',
    emoji: '🌭',
    section: 'meat',
    difficulty: 'hard',
    hint: '"SNAGS" is the Aussie word for sausages! Beef snags are the classic BBQ choice. "Bunnings snag" = sausage from the hardware store charity BBQ!',
    aussieVocab: 'Snags = sausages / Bunnings sausage sizzle = charity BBQ outside a hardware store (iconic Aussie tradition!)'
  },
  {
    name: 'Scotch Fillet Steak',
    emoji: '🥩',
    section: 'meat',
    difficulty: 'hard',
    hint: 'What Americans call "ribeye" — Australians call "SCOTCH FILLET". A premium steak cut for the barbie!',
    aussieVocab: 'Scotch fillet = ribeye steak (the Aussie name for this premium cut)'
  },
  {
    name: 'Prawns',
    emoji: '🦐',
    section: 'meat',
    difficulty: 'hard',
    hint: 'NEVER say "shrimp" in Australia! They\'re called PRAWNS. "Prawns on the barbie" is the real saying. Christmas prawns are a big tradition!',
    aussieVocab: 'Prawns = shrimp 🦐 (Aussies NEVER say "shrimp"!) Christmas prawns = a holiday tradition!'
  },
  {
    name: 'Rissoles',
    emoji: '🥩',
    section: 'meat',
    difficulty: 'hard',
    hint: 'RISSOLES are seasoned meat patties made from mince, onion, and breadcrumbs. Very old-school Aussie home cooking. Your nan makes them!',
    aussieVocab: 'Rissoles = homemade meat patties from mince — classic Aussie comfort food / Nan = grandma'
  },
  {
    name: 'Kransky Sausage',
    emoji: '🌭',
    section: 'meat',
    difficulty: 'hard',
    hint: 'A thick smoked European-style sausage — very popular at Aussie BBQs. Fancier than regular snags!',
    aussieVocab: 'Kransky = thick smoked sausage, the "fancy snag" at Australian BBQs'
  },
  {
    name: 'Barramundi',
    emoji: '🐟',
    section: 'meat',
    difficulty: 'hard',
    hint: 'An iconic AUSTRALIAN fish! "Barra" is caught in Northern Australia. It\'s the most famous Aussie fish — white, flaky, and delicious.',
    aussieVocab: 'Barra / Barramundi = Australia\'s most famous fish 🐟 "Caught a barra!" = fishing achievement'
  },
  {
    name: 'Lamb Shanks',
    emoji: '🍖',
    section: 'meat',
    difficulty: 'hard',
    hint: 'Slow-cooked lamb leg — a classic Aussie winter meal. "Shanks" = the lower leg cut. Cooked low and slow until falling off the bone.',
    aussieVocab: 'Shanks = lower leg meat cut, slow-cooked for hours in an Aussie winter warmer'
  },
  {
    name: 'Kangaroo Steak',
    emoji: '🦘',
    section: 'meat',
    difficulty: 'hard',
    hint: 'Yes, Australians EAT kangaroo! It\'s lean, healthy, and sustainable. Sold in most supermarkets. Very low fat, high protein.',
    aussieVocab: 'Kangaroo meat = sold in Aussie supermarkets! 🦘 Very lean and high in protein. Usually in the specialty meat section.'
  },
  {
    name: 'Crocodile Sausages',
    emoji: '🐊',
    section: 'meat',
    difficulty: 'hard',
    hint: 'Exotic Aussie meat! Crocodile sausages are sold in some supermarkets and butchers — especially in Queensland and Northern Territory.',
    aussieVocab: 'Croc snags = crocodile sausages 🐊 — uniquely Australian!'
  },
  {
    name: 'Lamb Cutlets',
    emoji: '🍖',
    section: 'meat',
    difficulty: 'hard',
    hint: 'Fancy lamb chops with the bone Frenched (cleaned). "Cutlets" sounds posher than "chops" — same section though!',
    aussieVocab: 'Cutlets = chops with the bone trimmed and cleaned (fancier presentation)'
  },

  // ===================================================
  // 🧀 DAIRY & FRIDGE
  // ===================================================

  // --- Easy dairy ---
  {
    name: 'Milk',
    emoji: '🥛',
    section: 'dairy',
    difficulty: 'easy',
    hint: 'Blue lid = full cream. Light blue = skim. Green = lite/reduced fat.',
    aussieVocab: 'Full cream = whole milk / Lite milk = reduced fat'
  },
  {
    name: 'Eggs (Dozen)',
    emoji: '🥚',
    section: 'dairy',
    difficulty: 'easy',
    hint: 'Sold near dairy. "Free range" is very popular in Aus. A "dozen" = 12.',
    aussieVocab: 'Free range = chickens can roam outside (Aussies prefer this)'
  },
  {
    name: 'Butter',
    emoji: '🧈',
    section: 'dairy',
    difficulty: 'easy',
    hint: 'For cooking and toast. Always in the fridge section.',
    aussieVocab: null
  },

  // --- Medium dairy ---
  {
    name: 'Greek Yoghurt',
    emoji: '🥛',
    section: 'dairy',
    difficulty: 'medium',
    hint: 'Thick creamy yoghurt. Note: Aussies spell it "YOGHURT" not "yogurt".',
    aussieVocab: 'Yoghurt = Australian/British spelling (not "yogurt")'
  },
  {
    name: 'Sour Cream',
    emoji: '🥛',
    section: 'dairy',
    difficulty: 'medium',
    hint: 'Used on nachos, baked potatoes (jacket potatoes), and tacos.',
    aussieVocab: 'Jacket potato = baked potato (Aussie/British term)'
  },

  // --- Hard dairy (Aussie-specific!) ---
  {
    name: 'Tasty Cheese',
    emoji: '🧀',
    section: 'dairy',
    difficulty: 'hard',
    hint: 'THIS IS IMPORTANT! What the world calls "cheddar" — Australians call "TASTY CHEESE". It\'s the #1 cheese in Australia. You\'ll see it everywhere!',
    aussieVocab: 'Tasty cheese = cheddar cheese 🧀 (THE most common cheese in Australia — always called "tasty"!)'
  },
  {
    name: 'Thickened Cream',
    emoji: '🥛',
    section: 'dairy',
    difficulty: 'hard',
    hint: '"THICKENED CREAM" is the Aussie name for heavy cream. "Pouring cream" = lighter cream. Different names than other countries!',
    aussieVocab: 'Thickened cream = heavy cream / Pouring cream = light cream (Aussie names!)'
  },
  {
    name: 'Halloumi',
    emoji: '🧀',
    section: 'dairy',
    difficulty: 'hard',
    hint: 'A firm cheese you can FRY or GRILL without it melting! Hugely trendy in Australian cafés, BBQs, and brunch places.',
    aussieVocab: 'Halloumi = squeaky cheese you can BBQ 🧀 (extremely popular in modern Australian food!)'
  },
  {
    name: 'Bega Cheese',
    emoji: '🧀',
    section: 'dairy',
    difficulty: 'hard',
    hint: 'BEGA is an iconic Australian cheese brand from the town of Bega in NSW. Their "Bega Tasty" is in every Aussie home.',
    aussieVocab: 'Bega = famous Aussie cheese brand, named after a town in New South Wales'
  },
  {
    name: 'Farmers Union Iced Coffee',
    emoji: '🥛',
    section: 'dairy',
    difficulty: 'hard',
    hint: 'A legendary South Australian iced coffee drink! It OUTSELLS Coca-Cola in South Australia. Found in the dairy fridge, not the drinks aisle!',
    aussieVocab: 'FUIC = Farmers Union Iced Coffee — a cult drink in South Australia that outsells Coke! In the dairy fridge.'
  },

  // ===================================================
  // 🍞 BAKERY & BREAD
  // ===================================================

  // --- Easy bakery ---
  {
    name: 'Sliced Bread',
    emoji: '🍞',
    section: 'bakery',
    difficulty: 'easy',
    hint: 'White, wholemeal, or multigrain. Tip Top is a famous Aussie bread brand.',
    aussieVocab: 'Wholemeal = whole wheat bread (the Aussie term)'
  },
  {
    name: 'Bread Rolls',
    emoji: '🥖',
    section: 'bakery',
    difficulty: 'easy',
    hint: 'Small round breads. Aussies make sandwiches called "sammies" or "sangos" with these!',
    aussieVocab: 'Sanga / Sango / Sammie = sandwich (all common Aussie slang!)'
  },

  // --- Medium bakery ---
  {
    name: 'Wraps / Tortillas',
    emoji: '🫓',
    section: 'bakery',
    difficulty: 'medium',
    hint: 'Flat bread for wrapping. "Wraps" are a hugely popular Aussie lunch option.',
    aussieVocab: null
  },
  {
    name: 'Croissants',
    emoji: '🥐',
    section: 'bakery',
    difficulty: 'medium',
    hint: 'Flaky pastry. Popular for brekkie (breakfast).',
    aussieVocab: 'Brekkie = breakfast (Aussie slang) 🍳'
  },

  // --- Hard bakery (Aussie icons!) ---
  {
    name: 'Meat Pie',
    emoji: '🥧',
    section: 'bakery',
    difficulty: 'hard',
    hint: 'THE most iconic Aussie food! 🇦🇺 A small pastry filled with beef mince and gravy. Every bakery sells them. "A pie and sauce" = meat pie + tomato sauce. Australians eat 270 MILLION meat pies per year!',
    aussieVocab: 'Meat pie = Australia\'s unofficial national food! 🥧 "Pie and sauce" = meat pie with tomato sauce (ketchup)'
  },
  {
    name: 'Sausage Roll',
    emoji: '🥖',
    section: 'bakery',
    difficulty: 'hard',
    hint: 'Sausage mince wrapped in flaky puff pastry. Found at EVERY bakery, party, servo (petrol station), and footy game. Absolutely essential Aussie food!',
    aussieVocab: 'Sausage roll = seasoned mince in puff pastry — Aussie party essential! / Servo = service station (petrol/gas station)'
  },
  {
    name: 'Damper',
    emoji: '🍞',
    section: 'bakery',
    difficulty: 'hard',
    hint: 'Traditional AUSTRALIAN BUSH BREAD! Originally made by stockmen and drovers in the outback over a campfire. Simple — flour, water, salt. A symbol of Australian heritage.',
    aussieVocab: 'Damper = traditional Australian campfire bread / Bush tucker = food from the Australian bush/outback'
  },
  {
    name: 'Lamington Cake',
    emoji: '🍰',
    section: 'bakery',
    difficulty: 'hard',
    hint: 'A cube of sponge cake dipped in chocolate and rolled in desiccated coconut. THE LAMINGTON is an iconic Australian cake! Named after Lord Lamington, Governor of Queensland.',
    aussieVocab: 'Lamington = sponge + chocolate + coconut = Australia\'s national cake! 🍰 July 21 = National Lamington Day!'
  },
  {
    name: 'Vanilla Slice',
    emoji: '🍰',
    section: 'bakery',
    difficulty: 'hard',
    hint: 'Also called a "SNOT BLOCK" (yes, really! Because the custard is snotty-looking 🤣). Layers of pastry with thick custard. Classic Aussie bakery item.',
    aussieVocab: 'Snot block = vanilla slice (Aussie slang!) 🤣 Pastry + custard + icing'
  },
  {
    name: 'Chiko Roll',
    emoji: '🌯',
    section: 'bakery',
    difficulty: 'hard',
    hint: 'A uniquely AUSTRALIAN deep-fried roll filled with vegetables and meat. Invented in Bendigo, Victoria in 1951. Found at fish & chip shops, servos, and frozen sections.',
    aussieVocab: 'Chiko Roll = iconic Australian deep-fried snack, invented in 1951 — a true Aussie classic!'
  },

  // ===================================================
  // 🥫 PANTRY & DRY GOODS
  // ===================================================

  // --- Easy pantry ---
  {
    name: 'Rice',
    emoji: '🍚',
    section: 'pantry',
    difficulty: 'easy',
    hint: 'Found in the Asian food aisle. SunRice is a famous Aussie brand.',
    aussieVocab: null
  },
  {
    name: 'Pasta',
    emoji: '🍝',
    section: 'pantry',
    difficulty: 'easy',
    hint: 'Dry pasta in the pantry aisle. "Spag bol" (spaghetti bolognese) is one of Australia\'s favourite dinners!',
    aussieVocab: 'Spag bol = spaghetti bolognese (very common Aussie dinner!)'
  },
  {
    name: 'Cooking Oil',
    emoji: '🫗',
    section: 'pantry',
    difficulty: 'easy',
    hint: 'Canola oil and vegetable oil in the pantry aisle.',
    aussieVocab: null
  },

  // --- Medium pantry ---
  {
    name: 'Tinned Tomatoes',
    emoji: '🥫',
    section: 'pantry',
    difficulty: 'medium',
    hint: 'Aussies say "TINNED" not "canned"! "Tinned tomatoes" for pasta sauce.',
    aussieVocab: 'Tinned = canned (Aussies say "tinned tomatoes", "tinned tuna", etc.)'
  },
  {
    name: 'Soy Sauce',
    emoji: '🫙',
    section: 'pantry',
    difficulty: 'medium',
    hint: 'In the Asian food aisle.',
    aussieVocab: null
  },
  {
    name: 'Fish Sauce',
    emoji: '🫙',
    section: 'pantry',
    difficulty: 'medium',
    hint: 'Essential for Vietnamese and Thai cooking! In the Asian food aisle.',
    aussieVocab: 'Asian aisle = every Aussie supermarket has a dedicated section for Asian ingredients!'
  },
  {
    name: 'Instant Noodles',
    emoji: '🍜',
    section: 'pantry',
    difficulty: 'medium',
    hint: '"Mi goreng" (Indomie brand) is HUGELY popular with Aussie uni students!',
    aussieVocab: 'Mi goreng = the #1 instant noodles in Australia (every Aussie uni student knows it!)'
  },
  {
    name: 'Peanut Butter',
    emoji: '🥜',
    section: 'pantry',
    difficulty: 'medium',
    hint: 'In the spreads aisle next to Vegemite and jam. Popular on toast.',
    aussieVocab: null
  },

  // --- Hard pantry (Aussie icons!) ---
  {
    name: 'Vegemite',
    emoji: '🫙',
    section: 'pantry',
    difficulty: 'hard',
    hint: '🇦🇺 AUSTRALIA\'S MOST FAMOUS FOOD! Vegemite is a thick, dark brown spread made from yeast extract (a by-product of beer brewing!). It\'s VERY salty with a strong, unique taste. The SECRET is to spread it VERY THINLY on buttered toast. DON\'T eat it with a spoon — you\'ll hate it! Start with just a tiny scrape on hot buttered toast. Most Aussies grow up eating it from babyhood. It was invented in Melbourne in 1922. It\'s in EVERY Australian kitchen. The old jingle says "We\'re happy little Vegemites!"',
    aussieVocab: 'Vegemite = iconic Aussie yeast extract spread 🇦🇺 Dark brown, very salty, spread THINLY on buttered toast. Invented in Melbourne 1922. "Happy little Vegemites" = old jingle every Aussie knows! TIP: butter first, then a THIN scrape of Vegemite!'
  },
  {
    name: 'Milo',
    emoji: '🫙',
    section: 'pantry',
    difficulty: 'hard',
    hint: 'An ICONIC Australian chocolate malt drink powder! 🍫 Mix with cold or hot milk. Every Aussie kid grew up with Milo. Invented in Sydney in 1934. Aussies pronounce it "MY-lo" (not "MEE-lo"!). Fun fact: Aussies eat Milo straight from the tin with a spoon!',
    aussieVocab: 'Milo = chocolate malt powder drink, pronounced "MY-lo" 🍫 Invented in Sydney 1934. "Having a Milo" = Aussie childhood!'
  },
  {
    name: 'Weet-Bix',
    emoji: '🥣',
    section: 'pantry',
    difficulty: 'hard',
    hint: 'Australia\'s #1 breakfast cereal! Wheat biscuits you put in a bowl with milk. "How many Weet-Bix can you eat?" is a famous Aussie challenge. Even the Australian cricket team promotes it!',
    aussieVocab: 'Weet-Bix = iconic Aussie breakfast cereal 🥣 "Weet-Bix kids" = healthy, strong Aussie children (from the ads!)'
  },
  {
    name: 'Chicken Salt',
    emoji: '🧂',
    section: 'pantry',
    difficulty: 'hard',
    hint: 'A uniquely AUSTRALIAN invention! 🇦🇺 Yellow seasoned salt that tastes like chicken. Used on hot chips (fries). You will NOT find this anywhere else in the world! At any fish & chip shop, they\'ll ask "Chicken salt or plain?"',
    aussieVocab: 'Chicken salt = Aussie invention! Yellow salt for chips 🍟 "Chips with chicken salt" = classic Aussie order'
  },
  {
    name: 'Tomato Sauce',
    emoji: '🫙',
    section: 'pantry',
    difficulty: 'hard',
    hint: 'What Americans call "ketchup" — Australians call "TOMATO SAUCE". Goes on EVERYTHING — meat pies, snags, eggs, chips. Don\'t say "ketchup" in Australia!',
    aussieVocab: 'Tomato sauce = ketchup 🍅 (NEVER say "ketchup" in Australia — everyone will know what you mean but it sounds American!)'
  },
  {
    name: 'Bushʼs BBQ Sauce',
    emoji: '🫙',
    section: 'pantry',
    difficulty: 'hard',
    hint: 'BBQ sauce is essential for Aussie barbecues! Goes on snags, chops, steaks — everything at the barbie.',
    aussieVocab: 'BBQ sauce on the barbie = essential Aussie condiment!'
  },
  {
    name: 'Golden Syrup',
    emoji: '🫙',
    section: 'pantry',
    difficulty: 'hard',
    hint: 'A sweet treacle-like syrup used in Aussie baking — especially Anzac biscuits and golden syrup dumplings! CSR is the classic Aussie brand.',
    aussieVocab: 'Golden syrup = key ingredient in Anzac biscuits (Australia\'s most famous biscuit recipe!)'
  },
  {
    name: 'Worcestershire Sauce',
    emoji: '🫙',
    section: 'pantry',
    difficulty: 'hard',
    hint: 'Aussies pronounce this "WUSS-ter-sheer" sauce — NOT "wor-chester-shire"! Used in pies, rissoles, and marinades.',
    aussieVocab: 'Worcestershire = pronounced "WUSS-ter-sheer" (not how it\'s spelled!) — used in classic Aussie cooking'
  },
  {
    name: 'Lemon Myrtle',
    emoji: '🌿',
    section: 'pantry',
    difficulty: 'hard',
    hint: 'A NATIVE AUSTRALIAN ingredient! 🇦🇺 A bush spice with intense lemon flavour. Part of "bush tucker" (native Australian food). Found in the spice section.',
    aussieVocab: 'Lemon myrtle = native Australian spice / Bush tucker = native Australian food and ingredients 🌿'
  },
  {
    name: 'Wattleseed',
    emoji: '🌰',
    section: 'pantry',
    difficulty: 'hard',
    hint: 'A NATIVE AUSTRALIAN ingredient from the wattle (acacia) tree! 🇦🇺 Tastes like chocolate, coffee, and hazelnut. The wattle is Australia\'s national flower!',
    aussieVocab: 'Wattleseed = native Australian seed with coffee/chocolate flavour / Wattle = Australia\'s national flower! 🌼'
  },

  // ===================================================
  // 🧊 FROZEN FOODS
  // ===================================================

  // --- Easy frozen ---
  {
    name: 'Frozen Peas',
    emoji: '🧊',
    section: 'frozen',
    difficulty: 'easy',
    hint: 'Frozen vegetables — always in the freezer section.',
    aussieVocab: null
  },
  {
    name: 'Ice Cream',
    emoji: '🍦',
    section: 'frozen',
    difficulty: 'easy',
    hint: 'Sweet frozen dessert. Streets and Peters are Aussie ice cream brands.',
    aussieVocab: null
  },

  // --- Medium frozen ---
  {
    name: 'Fish Fingers',
    emoji: '🐟',
    section: 'frozen',
    difficulty: 'medium',
    hint: 'Called "FISH FINGERS" in Australia (not "fish sticks")! A kids\' favourite.',
    aussieVocab: 'Fish fingers = fish sticks (the Aussie/British name)'
  },
  {
    name: 'Frozen Dumplings',
    emoji: '🥟',
    section: 'frozen',
    difficulty: 'medium',
    hint: 'Asian dumplings in the freezer. "Dim sims" are an Australian-Chinese invention!',
    aussieVocab: 'Dim sim = Australian-Chinese invention! Larger and chunkier than dim sum.'
  },
  {
    name: 'Frozen Pizza',
    emoji: '🍕',
    section: 'frozen',
    difficulty: 'medium',
    hint: 'Ready-made pizza — just heat up.',
    aussieVocab: null
  },

  // --- Hard frozen (Aussie icons!) ---
  {
    name: 'Party Pies',
    emoji: '🥧',
    section: 'frozen',
    difficulty: 'hard',
    hint: 'Small MINI meat pies! 🇦🇺 Essential for EVERY Aussie party, BBQ, and kids\' birthday. No Australian celebration is complete without party pies! Sold frozen in boxes of 12 or 24.',
    aussieVocab: 'Party pies = mini meat pies — THE essential Aussie party food! 🥧 "Party pies and sausage rolls" = the ultimate Aussie party combo'
  },
  {
    name: 'Frozen Sausage Rolls',
    emoji: '🥖',
    section: 'frozen',
    difficulty: 'hard',
    hint: 'The partner to party pies! Frozen sausage rolls to bake at home. Together with party pies, they\'re the backbone of every Aussie party.',
    aussieVocab: 'Party pies + sausage rolls = you CANNOT have an Aussie party without both!'
  },
  {
    name: 'Frozen Chips (Hot Chips)',
    emoji: '🍟',
    section: 'frozen',
    difficulty: 'hard',
    hint: 'Oven-bake potato chips. Aussies call french fries "HOT CHIPS" or just "chips". Important: "chips" can mean BOTH crisps AND fries depending on context!',
    aussieVocab: 'Hot chips = french fries 🍟 / Chips = can mean crisps OR fries (context tells you which!)'
  },
  {
    name: 'Golden Gaytime',
    emoji: '🍦',
    section: 'frozen',
    difficulty: 'hard',
    hint: 'An Australian ice cream bar with the BEST name ever! 🤣 Toffee and vanilla ice cream coated in chocolate and biscuit crumbs. A national icon since 1959. Australians absolutely LOVE the funny name.',
    aussieVocab: 'Golden Gaytime = iconic Aussie ice cream 🍦 Streets brand. "You can\'t have a Gaytime on your own!" (actual slogan!) 🤣'
  },
  {
    name: 'Dim Sims (Frozen)',
    emoji: '🥟',
    section: 'frozen',
    difficulty: 'hard',
    hint: 'NOT the same as Chinese dim sum! 🇦🇺 DIM SIMS are an Australian invention — bigger, chunkier, and deep-fried or steamed. Invented in Melbourne in the 1940s by William Wing Young. A classic Aussie takeaway food.',
    aussieVocab: 'Dim sim = uniquely Australian! 🥟 Invented in Melbourne. Deep-fried dim sims from the fish & chip shop = Aussie classic!'
  },
  {
    name: 'Chiko Roll (Frozen)',
    emoji: '🌯',
    section: 'frozen',
    difficulty: 'hard',
    hint: 'An iconic AUSTRALIAN deep-fried roll filled with cabbage, barley, carrot, and meat. Invented in Bendigo, Victoria in 1951. Inspired by Chinese spring rolls. Found frozen or at fish & chip shops.',
    aussieVocab: 'Chiko Roll = iconic Aussie deep-fried snack 🇦🇺 Invented 1951. A true Australian original!'
  },

  // ===================================================
  // 🥤 DRINKS
  // ===================================================

  // --- Easy drinks ---
  {
    name: 'Bottled Water',
    emoji: '💧',
    section: 'drinks',
    difficulty: 'easy',
    hint: 'Tip: Aussie tap water is safe to drink everywhere!',
    aussieVocab: 'Tap water in Australia is safe to drink!'
  },
  {
    name: 'Soft Drink',
    emoji: '🥤',
    section: 'drinks',
    difficulty: 'easy',
    hint: 'Australians call ALL fizzy drinks "SOFT DRINK" (not "soda" or "pop").',
    aussieVocab: 'Soft drink = soda/pop (the Aussie term for carbonated drinks)'
  },

  // --- Medium drinks ---
  {
    name: 'Tea Bags',
    emoji: '🍵',
    section: 'drinks',
    difficulty: 'medium',
    hint: '"Cuppa" means a cup of tea. "Want a cuppa?" is very common Aussie hospitality.',
    aussieVocab: 'Cuppa = a cup of tea ☕ "Come in and have a cuppa"'
  },
  {
    name: 'Instant Coffee',
    emoji: '☕',
    section: 'drinks',
    difficulty: 'medium',
    hint: 'Aussies are SERIOUS about coffee! The flat white was invented here.',
    aussieVocab: 'Flat white = Aussie coffee invention! Espresso + steamed milk ☕'
  },

  // --- Hard drinks (Aussie-specific!) ---
  {
    name: 'Cordial',
    emoji: '🧃',
    section: 'drinks',
    difficulty: 'hard',
    hint: 'A sweet concentrated syrup you DILUTE with water. Very popular in Aussie homes. Cottees is the classic brand. Every Aussie kid grew up drinking cordial! Raspberry flavour is the most popular.',
    aussieVocab: 'Cordial = sweet syrup concentrate mixed with water — every Aussie kid grew up on this!'
  },
  {
    name: 'Ginger Beer',
    emoji: '🍺',
    section: 'drinks',
    difficulty: 'hard',
    hint: 'A NON-ALCOHOLIC fizzy ginger drink (despite the name "beer"!). Bundaberg Ginger Beer is a famous Aussie brand from Queensland. Very refreshing in hot weather!',
    aussieVocab: 'Ginger beer = non-alcoholic ginger soft drink 🍺 Bundaberg = famous Aussie brand from QLD'
  },
  {
    name: 'Iced Coffee (Oak)',
    emoji: '🧋',
    section: 'drinks',
    difficulty: 'hard',
    hint: 'Pre-made flavoured milk/iced coffee in a carton. Oak, Dare, and Farmers Union are big brands. Aussie tradies (tradesmen) LOVE iced coffee — it\'s a stereotype!',
    aussieVocab: 'Tradie = tradesman/tradesperson (plumber, electrician, etc.) — they LOVE their iced coffee! / Oak / Dare = popular Aussie flavoured milk brands'
  },
  {
    name: 'Lemon, Lime & Bitters',
    emoji: '🍋',
    section: 'drinks',
    difficulty: 'hard',
    hint: 'A classic AUSTRALIAN drink! Lemonade + lime juice + Angostura bitters. Abbreviated "LLB". A very Aussie thing to order at a pub when you\'re not drinking alcohol.',
    aussieVocab: 'LLB = Lemon, Lime & Bitters — a classic Aussie non-alcoholic pub drink 🍋'
  },
  {
    name: 'Solo',
    emoji: '🍋',
    section: 'drinks',
    difficulty: 'hard',
    hint: 'An AUSTRALIAN lemon soft drink! "Light on the fizz" is its slogan. Much more lemon-y than Sprite. A uniquely Aussie drink.',
    aussieVocab: 'Solo = Australian lemon drink 🍋 "Light on the fizz" (less carbonated than most soft drinks)'
  },
  {
    name: 'Passiona',
    emoji: '🧃',
    section: 'drinks',
    difficulty: 'hard',
    hint: 'An Australian passionfruit soft drink. Classic old-school Aussie drink, been around since 1920s!',
    aussieVocab: 'Passiona = Aussie passionfruit soft drink since the 1920s!'
  },

  // ===================================================
  // 🍪 SNACKS & BISCUITS
  // ===================================================

  // --- Easy snacks ---
  {
    name: 'Chocolate',
    emoji: '🍫',
    section: 'snacks',
    difficulty: 'easy',
    hint: 'Cadbury is the most popular chocolate brand in Australia.',
    aussieVocab: null
  },
  {
    name: 'Chips (Packet)',
    emoji: '🍟',
    section: 'snacks',
    difficulty: 'easy',
    hint: 'Potato crisps in a packet. In Australia they\'re just called "chips"!',
    aussieVocab: 'Chips = BOTH packet crisps AND hot fries! Context tells you which.'
  },

  // --- Medium snacks ---
  {
    name: 'Muesli Bars',
    emoji: '🥜',
    section: 'snacks',
    difficulty: 'medium',
    hint: 'Called "MUESLI BARS" in Australia (not "granola bars"). Popular school lunchbox snack.',
    aussieVocab: 'Muesli bar = granola bar'
  },
  {
    name: 'Lollies',
    emoji: '🍬',
    section: 'snacks',
    difficulty: 'medium',
    hint: 'ALL candy and sweets are called "LOLLIES" in Australia! Not just lollipops — ALL sweets! Allen\'s is the classic brand.',
    aussieVocab: 'Lollies = ALL candy/sweets 🍬 "The lolly aisle" = the candy section'
  },

  // --- Hard snacks (Aussie icons!) ---
  {
    name: 'Tim Tams',
    emoji: '🍫',
    section: 'snacks',
    difficulty: 'hard',
    hint: 'Australia\'s #1 BISCUIT (cookie)! 🇦🇺 Two chocolate malted biscuits with chocolate cream filling, coated in chocolate. Made by Arnott\'s. Australians are OBSESSED. The "TIM TAM SLAM" = bite both ends off and use it as a straw to drink tea or coffee! Mind-blowing.',
    aussieVocab: 'Tim Tam = Australia\'s most famous biscuit 🍫 / Tim Tam Slam = bite both ends, use as a straw for hot drinks! ☕ / Biscuit = cookie in Australia'
  },
  {
    name: 'Shapes (BBQ)',
    emoji: '🍘',
    section: 'snacks',
    difficulty: 'hard',
    hint: 'ARNOTT\'S SHAPES are iconic Aussie flavoured crackers! BBQ Shapes, Pizza Shapes, Chicken Crimpy. BBQ Shapes are the most popular — every Aussie has an opinion about them!',
    aussieVocab: 'Shapes = iconic Aussie crackers by Arnott\'s 🍘 "BBQ Shapes" = the best flavour (fight anyone who disagrees!)'
  },
  {
    name: 'Fairy Bread Sprinkles',
    emoji: '✨',
    section: 'snacks',
    difficulty: 'hard',
    hint: '"FAIRY BREAD" = white bread + butter + hundreds and thousands (rainbow sprinkles). Served at EVERY Aussie kids\' birthday party! The sprinkles are called "hundreds and thousands".',
    aussieVocab: 'Fairy bread = buttered bread with sprinkles 🧈🍞✨ (EVERY Aussie birthday party!) / Hundreds and thousands = rainbow sprinkles'
  },
  {
    name: 'Anzac Biscuits',
    emoji: '🍪',
    section: 'snacks',
    difficulty: 'hard',
    hint: 'A famous Australian biscuit made with oats, coconut, golden syrup, and butter. Named after the ANZAC soldiers (Australia & New Zealand Army Corps, WW1). A symbol of Australian remembrance. Made around Anzac Day (April 25).',
    aussieVocab: 'Anzac biscuits = oat & coconut biscuits 🍪 ANZAC = Australian and New Zealand Army Corps / Anzac Day = April 25 (national remembrance day)'
  },
  {
    name: 'Freddo Frog',
    emoji: '🐸',
    section: 'snacks',
    difficulty: 'hard',
    hint: 'A small Cadbury chocolate shaped like a frog! 🐸 Every Aussie kid\'s favourite treat. Sold near the checkout. The price of a Freddo is how Aussies measure inflation — "Back in my day a Freddo was 5 cents!"',
    aussieVocab: 'Freddo = small chocolate frog 🐸 (childhood icon!) "The Freddo index" = Aussies joke about tracking the rising price!'
  },
  {
    name: 'Caramello Koala',
    emoji: '🐨',
    section: 'snacks',
    difficulty: 'hard',
    hint: 'A Cadbury chocolate shaped like a koala filled with caramel! 🐨 The companion to the Freddo Frog. Another childhood icon.',
    aussieVocab: 'Caramello Koala = chocolate koala with caramel inside 🐨 (Freddo\'s best mate!)'
  },
  {
    name: 'Twisties',
    emoji: '🧀',
    section: 'snacks',
    difficulty: 'hard',
    hint: 'Cheese-flavoured corn twists — an Aussie classic since 1950! Similar to Cheetos but uniquely Australian. Chicken flavour is also popular.',
    aussieVocab: 'Twisties = Aussie cheese corn snack since 1950 🧀 "Twisties fingers" = the orange stains on your fingers after eating them!'
  },
  {
    name: 'Lamingtons',
    emoji: '🍰',
    section: 'snacks',
    difficulty: 'hard',
    hint: 'Sponge cake coated in chocolate and coconut! 🇦🇺 Australia\'s NATIONAL CAKE. Sometimes filled with cream or jam. Named after Lord Lamington (Governor of Queensland 1896-1901). July 21 = National Lamington Day!',
    aussieVocab: 'Lamington = sponge + chocolate + coconut = Australia\'s national cake! 🍰'
  },
  {
    name: 'Wagon Wheels',
    emoji: '🍪',
    section: 'snacks',
    difficulty: 'hard',
    hint: 'Large round biscuits with marshmallow, jam, and chocolate coating. An Aussie lunchbox classic! "They used to be bigger!" = what every adult Aussie says.',
    aussieVocab: 'Wagon Wheels = large marshmallow-filled biscuits — Aussie lunchbox nostalgia! 🍪'
  },
  {
    name: 'Cheese & Bacon Balls',
    emoji: '🧀',
    section: 'snacks',
    difficulty: 'hard',
    hint: 'Puffy cheese and bacon flavoured snack balls. A classic Aussie party snack — found at every footy game and party!',
    aussieVocab: 'Footy = football (could mean AFL, NRL, or rugby depending on which state!) 🏈'
  },
  {
    name: 'Iced VoVo',
    emoji: '🍪',
    section: 'snacks',
    difficulty: 'hard',
    hint: 'A famous Arnott\'s biscuit with pink icing, a strip of raspberry jam, and coconut on top. So iconic that a former Prime Minister (Kevin Rudd) mentioned them in a speech!',
    aussieVocab: 'Iced VoVo = iconic Arnott\'s biscuit with pink icing & coconut 🍪 (mentioned by a Prime Minister!)'
  },

  // ===================================================
  // 🧹 HOUSEHOLD & PERSONAL CARE
  // ===================================================

  // --- Easy household ---
  {
    name: 'Toilet Paper',
    emoji: '🧻',
    section: 'household',
    difficulty: 'easy',
    hint: 'Bathroom essential. Aussies might call it "loo roll" or "dunny roll"!',
    aussieVocab: 'Loo roll / Dunny roll = toilet paper 🧻 / Loo = toilet / Dunny = outdoor toilet'
  },
  {
    name: 'Shampoo',
    emoji: '🧴',
    section: 'household',
    difficulty: 'easy',
    hint: 'Hair care — personal care aisle.',
    aussieVocab: null
  },
  {
    name: 'Toothpaste',
    emoji: '🪥',
    section: 'household',
    difficulty: 'easy',
    hint: 'Dental care — personal care aisle.',
    aussieVocab: null
  },

  // --- Medium household ---
  {
    name: 'Dish Soap',
    emoji: '🧴',
    section: 'household',
    difficulty: 'medium',
    hint: 'Called "DISHWASHING LIQUID" in Australia. Morning Fresh is the classic brand.',
    aussieVocab: 'Dishwashing liquid = dish soap / "Do the washing up" = wash the dishes'
  },
  {
    name: 'Laundry Detergent',
    emoji: '🧺',
    section: 'household',
    difficulty: 'medium',
    hint: '"Doing the WASHING" = doing laundry in Australian English.',
    aussieVocab: 'The washing = the laundry / "Hang out the washing" = hang clothes on the clothesline'
  },
  {
    name: 'Bin Bags',
    emoji: '🗑️',
    section: 'household',
    difficulty: 'medium',
    hint: 'Called "BIN BAGS" or "bin liners" in Australia (not "trash bags").',
    aussieVocab: 'Bin = trash can / Rubbish = trash / Bin bags = trash bags'
  },

  // --- Hard household (Aussie-specific!) ---
  {
    name: 'Glad Wrap',
    emoji: '📦',
    section: 'household',
    difficulty: 'hard',
    hint: 'Plastic cling wrap. Australians call ALL cling wrap "GLAD WRAP" — even if it\'s a different brand! This is called a "genericised trademark".',
    aussieVocab: 'Glad Wrap = cling wrap / plastic wrap (brand name used as the common word in Aus!)'
  },
  {
    name: 'Alfoil',
    emoji: '📦',
    section: 'household',
    difficulty: 'hard',
    hint: 'Aluminium foil — Aussies call it "ALFOIL"! Another brand name that became the common word. You\'ll see this on shopping lists.',
    aussieVocab: 'Alfoil = aluminium foil (Aussie brand name turned common word!)'
  },
  {
    name: 'Chux Wipes',
    emoji: '🧽',
    section: 'household',
    difficulty: 'hard',
    hint: 'Reusable cleaning cloths — Australians call ALL of them "CHUX" even if they\'re a different brand! Like saying "Glad Wrap" for all cling film.',
    aussieVocab: 'Chux = cleaning wipes/cloths (another Aussie brand name used for all brands!) 🧽'
  },
  {
    name: 'Glen 20',
    emoji: '🧴',
    section: 'household',
    difficulty: 'hard',
    hint: 'An Australian disinfectant spray — VERY popular! Used to spray and kill germs on surfaces. Became even more famous during COVID. "Glen 20 everything!"',
    aussieVocab: 'Glen 20 = iconic Aussie disinfectant spray 🧴 (became a verb during COVID: "Glen 20 it!")'
  },
  {
    name: 'Aerogard',
    emoji: '🦟',
    section: 'household',
    difficulty: 'hard',
    hint: 'Australian insect repellent! 🦟 VERY important in Australia because of the mosquitoes and flies. Every Aussie household has Aerogard. "Slip, Slop, Slap, Spray!" (spray on Aerogard!)',
    aussieVocab: 'Aerogard = Aussie insect repellent 🦟 / "Slip, Slop, Slap, Spray" = sun & insect safety slogan (slip on a shirt, slop on sunscreen, slap on a hat, spray on repellent!)'
  },
  {
    name: 'Banana Boat Sunscreen',
    emoji: '☀️',
    section: 'household',
    difficulty: 'hard',
    hint: 'Sunscreen is ESSENTIAL in Australia! 🇦🇺 Australia has the highest rate of skin cancer in the world. Aussies take sun protection very seriously. "Slip, Slop, Slap" = slip on a shirt, slop on sunscreen, slap on a hat.',
    aussieVocab: 'Slip, Slop, Slap = famous Aussie sun safety campaign ☀️ / Sunnies = sunglasses / "You\'ll get burnt!" = what every Aussie will tell you!'
  },
  {
    name: 'Mortein',
    emoji: '🪳',
    section: 'household',
    difficulty: 'hard',
    hint: 'Australia\'s #1 bug spray brand! For cockroaches, spiders, ants, and flies. "Louie the Fly" is the famous Mortein mascot. Welcome to Australia — we have BIG bugs! 🪳',
    aussieVocab: 'Mortein = iconic Aussie bug killer spray 🪳 / "Louie the Fly" = famous mascot since 1957 / Cockies = cockroaches (Aussie slang)'
  },

  // ===================================================
  // 🥪 DELI & READY MEALS
  // ===================================================

  // --- Easy deli ---
  {
    name: 'Sliced Ham',
    emoji: '🥪',
    section: 'deli',
    difficulty: 'easy',
    hint: 'Sliced deli meats. Ham for sandwiches (sangos!).',
    aussieVocab: 'Sanga = sandwich'
  },

  // --- Medium deli ---
  {
    name: 'Dip & Crackers',
    emoji: '🫕',
    section: 'deli',
    difficulty: 'medium',
    hint: 'Hummus, tzatziki, French onion dip — very popular at Aussie parties with crackers.',
    aussieVocab: null
  },
  {
    name: 'Sushi Packs',
    emoji: '🍱',
    section: 'deli',
    difficulty: 'medium',
    hint: 'Pre-made sushi. Aussies LOVE sushi — it\'s one of the most popular lunch foods!',
    aussieVocab: null
  },

  // --- Hard deli (Aussie-specific!) ---
  {
    name: 'Hot Roast Chook',
    emoji: '🍗',
    section: 'deli',
    difficulty: 'hard',
    hint: 'A whole cooked rotisserie chicken! 🇦🇺 Aussies call chickens "CHOOKS". Only about \$8-12 and feeds the whole family! "Grab a chook from Woolies" is something you\'ll hear all the time.',
    aussieVocab: 'Chook = chicken 🐔 "Grab a chook" = buy a roast chicken / "Chook raffle" = meat raffle at a pub (Aussie tradition!)'
  },
  {
    name: 'Smallgoods (Devon)',
    emoji: '🥪',
    section: 'deli',
    difficulty: 'hard',
    hint: 'Processed deli meats are called "SMALLGOODS" in Australia. "DEVON" is a cheap processed meat loaf (like bologna) — very old-school Aussie. Also called "fritz" in South Australia or "polony" in WA!',
    aussieVocab: 'Smallgoods = deli meats / Devon = bologna meat (called "fritz" in SA, "polony" in WA, "luncheon" in QLD!) — different name in every state!'
  },
  {
    name: 'Kransky Sausage',
    emoji: '🌭',
    section: 'deli',
    difficulty: 'hard',
    hint: 'A thick smoked European-style sausage — very popular at Aussie BBQs. The "fancy snag"! Found in the deli section, pre-cooked.',
    aussieVocab: 'Kransky = thick smoked sausage, the "fancy snag" at BBQs'
  },
  {
    name: 'Coleslaw',
    emoji: '🥗',
    section: 'deli',
    difficulty: 'hard',
    hint: 'Pre-made cabbage salad. THE essential BBQ side dish in Australia alongside bread and onions.',
    aussieVocab: 'Barbie sides = coleslaw + bread + grilled onions + tomato sauce = classic Aussie BBQ'
  },
  {
    name: 'Chicken Schnitzel',
    emoji: '🍗',
    section: 'deli',
    difficulty: 'hard',
    hint: 'Crumbed and fried chicken breast! "Schnitty" is hugely popular in Aussie pubs. "Schnitty night" at the pub = cheap schnitzel night (usually Wednesdays or Thursdays!).',
    aussieVocab: 'Schnitty = schnitzel (Aussie slang!) 🍗 "Parmy" / "Parma" = chicken schnitzel topped with tomato sauce, ham & cheese (the MOST popular pub meal in Australia!)'
  },
  {
    name: 'Dagwood Dog (Pluto Pup)',
    emoji: '🌭',
    section: 'deli',
    difficulty: 'hard',
    hint: 'A battered sausage on a stick! Called a "DAGWOOD DOG" in most of Australia, but "PLUTO PUP" in Queensland and WA. Famous at the Royal Easter Show and country fairs.',
    aussieVocab: 'Dagwood dog / Pluto pup = corn dog (battered sausage on a stick) — a showground classic! 🎪'
  }
];

// =============================================
// DIFFICULTY CONFIG
// =============================================

const LEVEL_CONFIG = {
  easy: {
    count: 15,
    filter: 'easy',
    label: 'Easy — Common Items',
    description: 'Everyday items any shopper would recognise'
  },
  medium: {
    count: 25,
    filter: 'medium',
    label: 'Medium — Learning Aussie Words',
    description: 'Items with some Australian vocabulary to learn'
  },
  hard: {
    count: 40,
    filter: 'hard',
    label: 'Hard — Aussie Expert! 🇦🇺',
    description: 'Uniquely Australian items — Vegemite, Tim Tams, snags, meat pies, and more!'
  }
};

// =============================================
// AUSSIE VOCAB GLOSSARY
// Bonus: Extra vocab shown in hints & summary
// =============================================

const AUSSIE_GLOSSARY = [
  { word: 'Arvo', meaning: 'Afternoon — "See you this arvo!"' },
  { word: 'Barbie', meaning: 'BBQ / Barbecue — "Throw some snags on the barbie"' },
  { word: 'Brekkie', meaning: 'Breakfast — "What\'s for brekkie?"' },
  { word: 'Chook', meaning: 'Chicken — "Grab a chook from Woolies"' },
  { word: 'Cuppa', meaning: 'Cup of tea — "Want a cuppa?"' },
  { word: 'Dunny', meaning: 'Toilet (old slang) — "Where\'s the dunny?"' },
  { word: 'Esky', meaning: 'Cooler box / ice chest — for keeping drinks cold at a BBQ' },
  { word: 'Flat white', meaning: 'Espresso + steamed milk — Aussie coffee invention!' },
  { word: 'G\'day', meaning: 'Hello — "G\'day mate!"' },
  { word: 'Hot chips', meaning: 'French fries — "Can I get chips with that?"' },
  { word: 'Lollies', meaning: 'All candy and sweets — not just lollipops!' },
  { word: 'Maccas', meaning: 'McDonald\'s — "Let\'s get Maccas"' },
  { word: 'Mate', meaning: 'Friend — "Thanks mate!" (used for anyone!)' },
  { word: 'Mince', meaning: 'Ground meat — "I need some beef mince"' },
  { word: 'No worries', meaning: '"You\'re welcome" / "It\'s fine" / "No problem"' },
  { word: 'Prawns', meaning: 'Shrimp — NEVER say "shrimp" in Australia!' },
  { word: 'Rashers', meaning: 'Bacon slices — "Two rashers of bacon please"' },
  { word: 'Reckon', meaning: 'Think — "I reckon we need more milk"' },
  { word: 'Sanga', meaning: 'Sandwich — "I\'ll make a sanga for lunch"' },
  { word: 'Servo', meaning: 'Service station / gas station — they sell snacks too!' },
  { word: 'Snags', meaning: 'Sausages — the heart of every Aussie BBQ!' },
  { word: 'Spud', meaning: 'Potato — "Grab some spuds"' },
  { word: 'Ta', meaning: 'Thank you (casual) — "Ta, mate!"' },
  { word: 'Tasty cheese', meaning: 'Cheddar cheese — the Aussie name for it' },
  { word: 'Tinnie', meaning: 'Can of beer — "Grab a tinnie from the esky"' },
  { word: 'Tomato sauce', meaning: 'Ketchup — "Can I have some tomato sauce?"' },
  { word: 'Trolley', meaning: 'Shopping cart — "Grab a trolley" (not a "cart"!)' },
  { word: 'Woolies', meaning: 'Woolworths supermarket — "I\'m going to Woolies"' },
  { word: 'Capsicum', meaning: 'Bell pepper — the Aussie word!' },
  { word: 'Coriander', meaning: 'Cilantro — Aussies call the leaf AND seed "coriander"' },
  { word: 'Rocket', meaning: 'Arugula — peppery salad leaf' },
  { word: 'Loo', meaning: 'Toilet — "Where\'s the loo?"' },
  { word: 'Rubbish', meaning: 'Trash/garbage — "Put it in the rubbish bin"' },
  { word: 'Biscuit', meaning: 'Cookie — "Want a biscuit with your tea?"' },
  { word: 'Chips', meaning: 'BOTH crisps AND fries (context tells you which!)' },
  { word: 'Cheers', meaning: 'Thanks / Goodbye — very casual and common' },
  { word: 'Avo', meaning: 'Avocado — "Smashed avo on toast"' },
  { word: 'Fairy bread', meaning: 'Bread + butter + sprinkles = Aussie party food!' },
  { word: 'Hundreds and thousands', meaning: 'Rainbow sprinkles (for fairy bread!)' },
  { word: 'Chicken salt', meaning: 'Yellow seasoned salt for hot chips — Aussie invention!' },
  { word: 'Glad Wrap', meaning: 'Cling wrap / plastic wrap' },
  { word: 'Alfoil', meaning: 'Aluminium foil' },
  { word: 'Scotch fillet', meaning: 'Ribeye steak' },
  { word: 'Dim sim', meaning: 'Australian-Chinese dumpling — deep fried or steamed' },
  { word: 'Whinge', meaning: 'Complain — "Stop whingeing!"' },
  { word: 'Heaps', meaning: 'A lot / very — "That\'s heaps good!" "Heaps of people"' },
  { word: 'Keen', meaning: 'Eager / interested — "Are you keen?" "Yeah, keen!"' },
  { word: 'Defo', meaning: 'Definitely — "Defo going to the barbie"' },
  { word: 'Thongs', meaning: 'Flip-flops (shoes!) — NOT underwear! "Grab your thongs"' },
  { word: 'Parmy / Parma', meaning: 'Chicken parmigiana — THE most popular pub meal in Australia!' },
  { word: 'Schnitty', meaning: 'Schnitzel — "Tuesday is schnitty night at the pub"' },
  { word: 'Footy', meaning: 'Football (AFL, NRL, or rugby — depends on the state!)' },
  { word: 'Tradie', meaning: 'Tradesperson (plumber, electrician, etc.)' },
  { word: 'Bogan', meaning: 'Unsophisticated person — can be affectionate or insulting!' },
  { word: 'Stoked', meaning: 'Very happy — "I\'m stoked!"' },
  { word: 'Sunnies', meaning: 'Sunglasses — "Where are my sunnies?"' },
  { word: 'Mozzie', meaning: 'Mosquito — "The mozzies are bad tonight!"' },
  { word: 'Bikkie', meaning: 'Biscuit — "Have a bikkie with your cuppa"' },
  { word: 'Choccy', meaning: 'Chocolate — "Want some choccy?"' },
  { word: 'Accadacca', meaning: 'AC/DC — the famous Aussie rock band!' },
  { word: 'Bottle-o', meaning: 'Bottle shop / liquor store — "Going to the bottle-o"' },
  { word: 'Stubby', meaning: 'Small bottle of beer / Also stubby holder = can cooler' },
  { word: 'Ripper', meaning: 'Awesome / great — "That\'s a ripper!"' },
  { word: 'Bloody', meaning: 'Very (emphasis word) — "Bloody oath!" = absolutely!' },
  { word: 'Chunder', meaning: 'Vomit — "I\'m gonna chunder!"' },
  { word: 'Smoko', meaning: 'Work break (originally a smoke break) — "Going on smoko"' },
  { word: 'Dag', meaning: 'A funny/unfashionable person — "You\'re such a dag!"' },
  { word: 'Woop Woop', meaning: 'Middle of nowhere — "They live out in Woop Woop"' },
  { word: 'Bush', meaning: 'The countryside / wilderness — "Going bush" = going to the country' },
  { word: 'Outback', meaning: 'Remote inland Australia — the red desert centre' },
  { word: 'Yarn', meaning: 'A chat — "Come have a yarn" = come have a chat' }
];
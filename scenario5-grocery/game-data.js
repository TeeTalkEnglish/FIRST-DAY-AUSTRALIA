// ============================================
// GAME DATA - Items, Dialogues, Vocabulary
// ============================================

const GAME_DATA = {

  // ----- STORE SECTIONS -----
  sections: [
    { id: 'meat', name: 'Meat & Deli Counter', icon: '🥩', color: '#e53935', description: 'Fresh meats and deli items' },
    { id: 'produce', name: 'Fresh Produce', icon: '🥬', color: '#43a047', description: 'Fruits and vegetables' },
    { id: 'pantry', name: 'Pantry & Asian Foods', icon: '🍚', color: '#ff9800', description: 'Rice, sauces, noodles' },
    { id: 'dairy', name: 'Dairy & Fridge', icon: '🧊', color: '#1976d2', description: 'Milk, eggs, cheese' },
    { id: 'household', name: 'Household & Essentials', icon: '🧴', color: '#7b1fa2', description: 'Toiletries and cleaning' },
    { id: 'drinks', name: 'Drinks', icon: '🥤', color: '#00838f', description: 'Water, juice, coffee' }
  ],

  // ----- PRODUCTS -----
  products: {
    meat: [
      { id: 'm1', name: 'Beef Mince', weight: '500g', price: 7.50, emoji: '🥩', onList: true,
        tip: 'Beef mince is ground beef. Great for spaghetti or meat pies!' },
      { id: 'm2', name: 'Chicken Breast', weight: '1kg', price: 11.00, emoji: '🍗', onList: true,
        tip: 'Chicken breast is skinless and boneless. Very popular in Australia.' },
      { id: 'm3', name: 'Lamb Chops', weight: '500g', price: 12.00, emoji: '🥩', onList: true,
        tip: 'Australians love lamb! These are small cuts from the rib or loin.' },
      { id: 'm4', name: 'Pork Sausages', weight: '500g', price: 6.00, emoji: '🌭', onList: false,
        tip: '"Snags" is Australian slang for sausages. Used in BBQs!' },
      { id: 'm5', name: 'Bacon Rashers', weight: '250g', price: 5.50, emoji: '🥓', onList: false,
        tip: 'Rashers are bacon slices. Aussies eat these for breakfast.' },
      { id: 'm6', name: 'Chicken Thigh Fillets', weight: '1kg', price: 8.00, emoji: '🍗', onList: false,
        tip: 'Thigh fillets are boneless, more flavour than breast.' },
      { id: 'm7', name: 'Scotch Fillet Steak', weight: '400g', price: 16.00, emoji: '🥩', onList: false,
        tip: 'Premium steak cut. Called "ribeye" in some countries.' },
      { id: 'm8', name: 'Lamb Leg Roast', weight: '1.5kg', price: 18.00, emoji: '🍖', onList: false,
        tip: 'A large cut for roasting. Popular for Sunday roast dinners.' },
      { id: 'm9', name: 'Beef Sausages', weight: '500g', price: 6.50, emoji: '🌭', onList: false,
        tip: 'Perfect for "sausage sizzle" — a BBQ fundraiser tradition.' },
      { id: 'm10', name: 'Chicken Wings', weight: '1kg', price: 6.00, emoji: '🍗', onList: false,
        tip: 'Wings are sold by the kilo in Australia.' }
    ],
    produce: [
      { id: 'p1', name: 'Bananas', weight: '1kg', price: 3.50, emoji: '🍌', onList: true },
      { id: 'p2', name: 'Apples (Pink Lady)', weight: '1kg', price: 4.50, emoji: '🍎', onList: false },
      { id: 'p3', name: 'Carrots', weight: '1kg bag', price: 2.00, emoji: '🥕', onList: true },
      { id: 'p4', name: 'Broccoli', weight: 'each', price: 3.00, emoji: '🥦', onList: true },
      { id: 'p5', name: 'Potatoes', weight: '2kg bag', price: 4.50, emoji: '🥔', onList: false },
      { id: 'p6', name: 'Brown Onions', weight: '1kg', price: 2.50, emoji: '🧅', onList: true },
      { id: 'p7', name: 'Tomatoes', weight: '500g', price: 4.00, emoji: '🍅', onList: false },
      { id: 'p8', name: 'Iceberg Lettuce', weight: 'each', price: 2.50, emoji: '🥬', onList: false },
      { id: 'p9', name: 'Garlic', weight: '3 pack', price: 2.00, emoji: '🧄', onList: true },
      { id: 'p10', name: 'Spring Onions', weight: 'bunch', price: 2.00, emoji: '🌿', onList: false }
    ],
    pantry: [
      { id: 'a1', name: 'Jasmine Rice', weight: '5kg', price: 10.00, emoji: '🍚', onList: true,
        tip: 'Look in the Asian food aisle. SunRice is a popular brand.' },
      { id: 'a2', name: 'Fish Sauce', weight: '250ml', price: 3.50, emoji: '🫙', onList: true },
      { id: 'a3', name: 'Soy Sauce', weight: '500ml', price: 3.00, emoji: '🫙', onList: true },
      { id: 'a4', name: 'Instant Noodles', weight: '5 pack', price: 3.50, emoji: '🍜', onList: false },
      { id: 'a5', name: 'Sriracha Sauce', weight: '250ml', price: 4.50, emoji: '🌶️', onList: false },
      { id: 'a6', name: 'Coconut Milk', weight: '400ml', price: 2.00, emoji: '🥥', onList: false },
      { id: 'a7', name: 'Vegetable Oil', weight: '1L', price: 4.00, emoji: '🫗', onList: true },
      { id: 'a8', name: 'Salt', weight: '500g', price: 1.50, emoji: '🧂', onList: true },
      { id: 'a9', name: 'Sugar', weight: '1kg', price: 2.50, emoji: '🍬', onList: false },
      { id: 'a10', name: 'Oyster Sauce', weight: '275ml', price: 3.50, emoji: '🫙', onList: false }
    ],
    dairy: [
      { id: 'd1', name: 'Full Cream Milk', weight: '2L', price: 3.50, emoji: '🥛', onList: true,
        tip: 'In Australia: Full Cream = whole milk, Lite = low fat, Skim = no fat.' },
      { id: 'd2', name: 'Free Range Eggs', weight: '12 pack', price: 5.50, emoji: '🥚', onList: true,
        tip: '"Free range" means the chickens can roam outside. Look for the RSPCA logo.' },
      { id: 'd3', name: 'Butter', weight: '250g', price: 4.00, emoji: '🧈', onList: false },
      { id: 'd4', name: 'Cheese Slices', weight: '24 pack', price: 5.00, emoji: '🧀', onList: false },
      { id: 'd5', name: 'Greek Yoghurt', weight: '1kg', price: 5.50, emoji: '🥛', onList: false },
      { id: 'd6', name: 'Thickened Cream', weight: '300ml', price: 3.00, emoji: '🥛', onList: false }
    ],
    household: [
      { id: 'h1', name: 'Shampoo', weight: '400ml', price: 5.00, emoji: '🧴', onList: true },
      { id: 'h2', name: 'Toothpaste', weight: '130g', price: 4.00, emoji: '🪥', onList: true },
      { id: 'h3', name: 'Toothbrush', weight: '1 pack', price: 3.50, emoji: '🪥', onList: true },
      { id: 'h4', name: 'Body Wash', weight: '500ml', price: 5.50, emoji: '🧼', onList: true },
      { id: 'h5', name: 'Laundry Detergent', weight: '1L', price: 8.00, emoji: '🧺', onList: true },
      { id: 'h6', name: 'Dishwashing Liquid', weight: '500ml', price: 3.50, emoji: '🫧', onList: true },
      { id: 'h7', name: 'Toilet Paper', weight: '4 pack', price: 4.00, emoji: '🧻', onList: true },
      { id: 'h8', name: 'Kitchen Sponges', weight: '3 pack', price: 3.00, emoji: '🧽', onList: false },
      { id: 'h9', name: 'Bin Liners', weight: '30 pack', price: 4.50, emoji: '🗑️', onList: false },
      { id: 'h10', name: 'Hand Sanitiser', weight: '250ml', price: 3.50, emoji: '🧴', onList: false }
    ],
    drinks: [
      { id: 'dr1', name: 'Spring Water', weight: '1.5L', price: 1.00, emoji: '💧', onList: true },
      { id: 'dr2', name: 'Orange Juice', weight: '2L', price: 4.50, emoji: '🍊', onList: false },
      { id: 'dr3', name: 'Instant Coffee', weight: '150g', price: 7.00, emoji: '☕', onList: false },
      { id: 'dr4', name: 'Tea Bags', weight: '50 pack', price: 4.00, emoji: '🍵', onList: false },
      { id: 'dr5', name: 'Coca-Cola', weight: '1.25L', price: 3.00, emoji: '🥤', onList: false },
      { id: 'dr6', name: 'UHT Milk', weight: '1L', price: 2.00, emoji: '🥛', onList: false }
    ]
  },

  // ----- DIALOGUES -----
  dialogues: {
    // Meat counter dialogue
    meatCounter: [
      {
        speaker: 'Butcher Dave',
        avatar: '👨‍🍳',
        role: 'Meat Counter Staff',
        text: "G'day! What can I get for ya today?",
        options: [
          { text: "Hi! Can I please have 500 grams of beef mince?", quality: 'correct',
            feedback: "Perfect! Polite and specific — exactly how to order at the counter." },
          { text: "Give me beef.", quality: 'wrong',
            feedback: "This is too short and sounds rude. Always say 'please' and be specific about what you want and how much." },
          { text: "Hello, I would like some meat please.", quality: 'partial',
            feedback: "Polite, but you need to say WHAT type of meat and HOW MUCH. E.g., '500 grams of beef mince'." }
        ]
      },
      {
        speaker: 'Butcher Dave',
        avatar: '👨‍🍳',
        role: 'Meat Counter Staff',
        text: "No worries! Here's your mince. Anything else, mate?",
        options: [
          { text: "Yes, could I also get a kilo of chicken breast, please?", quality: 'correct',
            feedback: "Great! Using 'could I' is polite, and you specified the amount clearly." },
          { text: "Chicken.", quality: 'wrong',
            feedback: "You need to specify which part (breast, thigh, wings) and how much (500g, 1kg)." },
          { text: "No, that's all. Thank you!", quality: 'correct',
            feedback: "Perfect! Always thank the staff when you're done." }
        ]
      },
      {
        speaker: 'Butcher Dave',
        avatar: '👨‍🍳',
        role: 'Meat Counter Staff',
        text: "We've got some beautiful lamb chops on special today — \$10 a kilo instead of \$12. Would you like some?",
        options: [
          { text: "Yes, please! Can I get 500 grams?", quality: 'correct',
            feedback: "Nice! You took advantage of the 'special' (sale price). Always look for specials!" },
          { text: "What does 'on special' mean?", quality: 'partial',
            feedback: "'On special' means the item is on sale / at a reduced price. It's good to ask if you don't understand!" },
          { text: "No thanks, just the mince and chicken today.", quality: 'correct',
            feedback: "Perfectly fine to say no. You're sticking to your shopping list and budget — smart!" }
        ]
      }
    ],

    // Checkout dialogue
    checkout: [
      {
        speaker: 'Sarah',
        avatar: '👩',
        role: 'Checkout Staff',
        text: "Hi there! Did you find everything okay?",
        options: [
          { text: "Yes, thanks! Everything was easy to find.", quality: 'correct',
            feedback: "Great natural response! This is common small talk at checkout." },
          { text: "...", quality: 'wrong',
            feedback: "In Australia, it's polite to respond to checkout staff. A simple 'Yes, thanks' is fine!" },
          { text: "Yes, but I couldn't find fish sauce. Where is it?", quality: 'correct',
            feedback: "Good! It's fine to ask for help finding items. They might call another staff member to help." }
        ]
      },
      {
        speaker: 'Sarah',
        avatar: '👩',
        role: 'Checkout Staff',
        text: "Do you need a bag? They're 15 cents each.",
        options: [
          { text: "Yes, one bag please.", quality: 'correct',
            feedback: "In Australia, bags are NOT free. They cost 15 cents each. Remember to bring your own bag next time to save money!" },
          { text: "No thanks, I brought my own bag.", quality: 'correct',
            feedback: "Great! Bringing your own bag (called a 'green bag' or reusable bag) is common and saves money." },
          { text: "What? I have to pay for a bag?!", quality: 'partial',
            feedback: "Yes! In Australia, single-use plastic bags are banned. You can buy a reusable bag at the checkout, or bring your own from home." }
        ]
      },
      {
        speaker: 'Sarah',
        avatar: '👩',
        role: 'Checkout Staff',
        text: "That comes to \$47.50. Cash or card?",
        options: [
          { text: "Card, please. Can I tap?", quality: 'correct',
            feedback: "'Tap' means contactless payment (PayPass/PayWave). Very common in Australia — almost everywhere accepts tap!" },
          { text: "I'll pay with EFTPOS.", quality: 'correct',
            feedback: "'EFTPOS' is the Australian name for card payment terminals. You can use debit or credit cards." },
          { text: "Cash, please. Here's \$50.", quality: 'correct',
            feedback: "Cash is fine! Your change would be \$2.50. Some small shops are 'card only' though." }
        ]
      },
      {
        speaker: 'Sarah',
        avatar: '👩',
        role: 'Checkout Staff',
        text: "Would you like the receipt?",
        options: [
          { text: "Yes, please.", quality: 'correct',
            feedback: "Good idea! Keep your receipt in case you need to return something." },
          { text: "No, thanks.", quality: 'correct',
            feedback: "Also fine! Many people skip the receipt. You can also ask for an e-receipt if available." }
        ]
      }
    ],

    // Asking for help
    askingHelp: [
      {
        speaker: 'Store Staff',
        avatar: '🧑‍💼',
        role: 'Floor Staff',
        text: "Can I help you find something?",
        options: [
          { text: "Yes, please. Where can I find the Asian food section?", quality: 'correct',
            feedback: "Clear and polite. The Asian food aisle usually has sauces, rice, and noodles." },
          { text: "Where is rice?", quality: 'partial',
            feedback: "This works, but saying 'Excuse me, where can I find the rice?' is more polite." },
          { text: "No, I'm just looking. Thanks!", quality: 'correct',
            feedback: "Perfectly fine! This is a natural way to decline help." }
        ]
      }
    ]
  },

  // ----- VOCABULARY -----
  vocabulary: [
    { word: "G'day", meaning: "Hello / Good day (very Australian!)" },
    { word: 'Mate', meaning: 'Friend / buddy — used to address anyone' },
    { word: 'No worries', meaning: "It's okay / You're welcome" },
    { word: 'Snags', meaning: 'Sausages (Australian slang)' },
    { word: 'Arvo', meaning: 'Afternoon' },
    { word: 'On special', meaning: 'On sale / discounted price' },
    { word: 'Half price', meaning: '50% off the original price' },
    { word: 'Trolley', meaning: 'Shopping cart (big one with wheels)' },
    { word: 'Basket', meaning: 'Small hand-carried container for shopping' },
        { word: 'Checkout', meaning: 'Where you pay for your items' },
    { word: 'Self-checkout', meaning: 'Machine where you scan and pay by yourself' },
    { word: 'EFTPOS', meaning: 'Electronic card payment system used in Australia' },
    { word: 'Tap', meaning: 'Contactless payment — hold your card near the machine' },
    { word: 'PayWave / PayPass', meaning: 'Brand names for contactless card payment' },
    { word: 'Receipt', meaning: 'The paper proof of your purchase' },
    { word: 'Aisle', meaning: 'A row/corridor between shelves in the store' },
    { word: 'Deli', meaning: 'Section selling sliced meats, cheese, salads' },
    { word: 'Free range', meaning: 'Animals raised with outdoor access' },
    { word: 'Use-by date', meaning: 'The last date the food is safe to eat' },
    { word: 'Best before', meaning: 'The date the food is at its best quality (still safe after)' },
    { word: 'Barcode', meaning: 'The black-and-white lines scanned at checkout' },
    { word: 'Reusable bag', meaning: 'A bag you bring from home to carry shopping' },
    { word: 'Green bag', meaning: 'Australian name for reusable shopping bag' },
    { word: 'Woolies', meaning: 'Nickname for Woolworths supermarket' },
    { word: 'Coles', meaning: 'Major Australian supermarket chain' },
    { word: 'Aldi', meaning: 'Budget-friendly supermarket from Germany, very popular in Australia' },
    { word: 'Unit price', meaning: 'Price per kilo/litre — helps compare value between products' },
    { word: 'Mince', meaning: 'Ground/minced meat (beef mince = ground beef)' },
    { word: 'Rashers', meaning: 'Slices of bacon' },
    { word: 'Scotch fillet', meaning: 'Ribeye steak (premium beef cut)' },
    { word: 'Chops', meaning: 'Meat cut from the rib or loin (lamb chops, pork chops)' },
    { word: 'Fillet', meaning: 'Boneless cut of meat or fish' },
    { word: 'Brekkie', meaning: 'Breakfast (Australian slang)' },
    { word: 'Sausage sizzle', meaning: 'BBQ fundraiser selling sausages in bread, found at Bunnings and events' },
    { word: 'Barbie', meaning: 'BBQ / barbecue (Australian slang)' },
    { word: 'Capsicum', meaning: 'Bell pepper (this is the Australian word!)' },
    { word: 'Rocket', meaning: 'Arugula (leafy green salad vegetable)' },
    { word: 'Coriander', meaning: 'Cilantro (the herb — same plant, Australian name)' },
    { word: 'Zucchini', meaning: 'Courgette (green squash vegetable)' },
    { word: 'Esky', meaning: 'Cooler box / ice chest for keeping drinks cold' }
  ],

  // ----- CULTURAL TIPS -----
  culturalTips: [
    {
      icon: '🛒',
      title: 'Trolley Coin',
      text: "Most trolleys at Coles, Woolworths and Aldi need a \$1 or \$2 coin to unlock. You get the coin back when you return the trolley. Use a basket if you're buying just a few items."
    },
    {
      icon: '🛍️',
      title: 'Bring Your Own Bag (BYO)',
      text: "Single-use plastic bags are banned in all of Australia. Bring reusable bags from home. If you forget, you can buy one at checkout for about 15 cents."
    },
    {
      icon: '⚖️',
      title: 'Weighing Produce',
      text: "Fresh fruit and vegetables are often sold by the kilo. Some items (like avocados or broccoli) are sold 'each'. Look at the label — it will say '/kg' or '/each'."
    },
    {
      icon: '🏷️',
      title: 'Unit Pricing',
      text: "The price tag on the shelf shows two prices: the item price and the 'unit price' (per kg or per litre). Compare unit prices to find the best deal!"
    },
    {
      icon: '💳',
      title: 'Paying at the Register',
      text: "Most Australians pay by card. 'Tap and go' (contactless) is the most common. Minimum spend for card is usually \$0 — you can tap even for small amounts."
    },
    {
      icon: '🤖',
      title: 'Self-Checkout',
      text: "Most supermarkets have self-checkout machines. You scan items yourself and pay by card or cash. Staff are always nearby to help if something goes wrong."
    },
    {
      icon: '📱',
      title: 'Rewards Cards',
      text: "Woolworths has 'Everyday Rewards' and Coles has 'Flybuys'. These are free loyalty cards — you earn points every time you shop. Download the app to get a digital card."
    },
    {
      icon: '🕐',
      title: 'Shopping Hours',
      text: "Most major supermarkets open 6am–midnight every day. Some close earlier on Sundays (around 6pm or 9pm depending on your state). Aldi usually closes at 8pm."
    },
    {
      icon: '🥩',
      title: 'Meat Counter vs Pre-Packed',
      text: "You can buy meat pre-packed from the fridge section OR go to the meat counter and ask for a specific amount. The counter staff (butcher) can also give advice on cuts and cooking."
    },
    {
      icon: '📅',
      title: 'Specials & Catalogues',
      text: "Every week, Coles and Woolworths have new 'specials' (sales). You can check the catalogue online or in the app. 'Half price' specials can save you a lot of money!"
    },
    {
      icon: '🌏',
      title: 'Asian Grocery Stores',
      text: "Most Australian suburbs have Asian grocery stores with better prices and selection for items like rice, fish sauce, soy sauce, noodles, and fresh herbs. Try shops in your local area!"
    },
    {
      icon: '📦',
      title: 'Use-By vs Best Before',
      text: "'Use-by' = must eat before this date (safety). 'Best before' = best quality before this date, but still safe to eat after. Check dates when buying meat and dairy!"
    },
    {
      icon: '🥦',
      title: 'Reduced / Marked Down',
      text: "Items close to their use-by date are often 'reduced' or 'marked down' with a yellow sticker. Great for saving money, but eat them soon!"
    },
    {
      icon: '🐄',
      title: 'Butcher-Specific: Australian Meat Cuts',
      text: "Australian cut names differ from other countries. Scotch fillet = ribeye. Porterhouse = NY strip. Topside = top round. Silverside = bottom round. Snags = sausages. You'll learn these at work!"
    },
    {
      icon: '🧊',
      title: 'Butcher-Specific: Meat Storage',
      text: "In Australia, raw meat must be stored below 5°C in the fridge (or -18°C in the freezer). Always put meat in a separate bag from other groceries. This is also important at your work!"
    }
  ],

  // ----- SHOPPING LISTS (Different difficulty levels) -----
  shoppingLists: {
    easy: {
      name: 'Quick Shop',
      budget: 50,
      description: 'Just a few essential items',
      requiredItems: ['m1', 'p1', 'p3', 'd1', 'd2', 'dr1'],
      dialogues: ['meatCounter', 'checkout']
    },
    medium: {
      name: 'Weekly Groceries',
      budget: 80,
      description: 'A full week of groceries and household items',
      requiredItems: ['m1', 'm2', 'm3', 'p1', 'p3', 'p4', 'p6', 'p9', 'a1', 'a2', 'a3', 'a7', 'a8', 'd1', 'd2', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'h7', 'dr1'],
      dialogues: ['askingHelp', 'meatCounter', 'checkout']
    },
    hard: {
      name: 'First Week in Australia',
      budget: 120,
      description: 'Everything you need for your first week — groceries, cleaning, toiletries',
      requiredItems: ['m1', 'm2', 'm3', 'p1', 'p3', 'p4', 'p6', 'p9', 'a1', 'a2', 'a3', 'a7', 'a8', 'd1', 'd2', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'h7', 'dr1'],
      dialogues: ['askingHelp', 'meatCounter', 'checkout']
    }
  },

  // ----- SELF-CHECKOUT SIMULATION -----
  selfCheckout: {
    steps: [
      {
        instruction: 'Touch the screen to start.',
        options: [
          { text: 'Press "Start"', correct: true },
          { text: 'Scan an item first', correct: false, feedback: 'You need to start the machine first before scanning.' }
        ]
      },
      {
        instruction: 'Scan your first item by holding the barcode under the red light.',
        options: [
          { text: 'Hold barcode under scanner', correct: true },
          { text: 'Type in the price', correct: false, feedback: 'You scan the barcode — the machine reads the price automatically.' }
        ]
      },
      {
        instruction: 'The machine says: "Please place the item in the bagging area."',
        options: [
          { text: 'Put the item in my bag on the right side', correct: true },
          { text: 'Keep the item in my hand', correct: false, feedback: 'The machine uses a scale to check you placed the item down. Always put it in the bagging area.' }
        ]
      },
      {
        instruction: 'You want to buy 3 bananas. They don\'t have a barcode.',
        options: [
          { text: 'Press "Look Up Item" and search for "bananas"', correct: true, feedback: 'Correct! For loose produce, you search by name and the machine will weigh them.' },
          { text: 'Press "Skip" and scan the next item', correct: false, feedback: 'You can\'t skip! For items without a barcode, use the "Look Up Item" button and search.' }
        ]
      },
      {
        instruction: 'You\'ve scanned everything. What next?',
        options: [
          { text: 'Press "Pay Now"', correct: true },
          { text: 'Walk away with my items', correct: false, feedback: 'You need to pay first! Press "Pay Now" and choose your payment method.' }
        ]
      },
      {
        instruction: 'The screen shows: "Card, Cash, or Gift Card?"',
        options: [
          { text: 'Press "Card" and tap my card on the reader', correct: true },
          { text: 'Press "Cash" and insert notes', correct: true, feedback: 'Both card and cash work at self-checkout!' }
        ]
      },
      {
        instruction: 'The machine says: "Do you have a rewards card?"',
        options: [
          { text: 'Scan my Everyday Rewards / Flybuys card', correct: true, feedback: 'You earn points! If you don\'t have one yet, it\'s free to sign up.' },
          { text: 'Press "No" / "Skip"', correct: true, feedback: 'That\'s fine too! You can sign up for a free rewards card anytime.' }
        ]
      },
      {
        instruction: 'Payment complete! The screen says: "Please take your receipt and items."',
        options: [
          { text: 'Take my receipt, grab my bags, and leave', correct: true, feedback: 'Well done! You\'ve completed self-checkout like a pro! 🎉' },
          { text: 'Leave everything and walk away', correct: false, feedback: 'Don\'t forget your bags and receipt! If security needs to check, your receipt proves you paid.' }
        ]
      }
    ]
  },

  // ----- AUSTRALIAN SLANG QUIZ (Bonus) -----
  slangQuiz: [
    {
      question: "A staff member says: \"The snags are on special this arvo.\" What does this mean?",
      options: [
        { text: "The sausages are on sale this afternoon.", correct: true },
        { text: "The snakes are in the store this afternoon.", correct: false },
        { text: "The snacks are gone this evening.", correct: false }
      ]
    },
    {
      question: "Your coworker says: \"I'll grab some chook for the barbie.\" What will they buy?",
      options: [
        { text: "A doll for a barbecue party", correct: false },
        { text: "Chicken for the BBQ", correct: true },
        { text: "Chocolate for a birthday", correct: false }
      ]
    },
    {
      question: "The sign says: \"Capsicum — \$4.90/kg.\" What is capsicum?",
      options: [
        { text: "A type of medicine", correct: false },
        { text: "Bell pepper", correct: true },
        { text: "A type of mushroom", correct: false }
      ]
    },
    {
      question: "A customer asks: \"Where are the rockmelon?\" What are they looking for?",
      options: [
        { text: "Cantaloupe / melon", correct: true },
        { text: "Rocks for the garden", correct: false },
        { text: "Rock music CDs", correct: false }
      ]
    },
    {
      question: "Your boss says: \"Don't forget to check the use-by on the mince.\" What should you check?",
      options: [
        { text: "The weight of the ground beef", correct: false },
        { text: "The expiry date on the ground beef", correct: true },
        { text: "The recipe on the ground beef", correct: false }
      ]
    },
    {
      question: "A sign says: \"BYO bags.\" What does this mean?",
      options: [
        { text: "Bags are free", correct: false },
        { text: "Bring Your Own bags", correct: true },
        { text: "Buy Your Own bags (expensive)", correct: false }
      ]
    },
    {
      question: "A customer says: \"Can I get a kilo of topside, no fat?\" What cut of meat do they want?",
      options: [
        { text: "A beef roast cut (top round), with fat trimmed off", correct: true },
        { text: "The top shelf product with no oil", correct: false },
        { text: "A chicken breast without skin", correct: false }
      ]
    },
    {
      question: "Your colleague says: \"Check the reduced section for markdown chook.\" What should you look for?",
      options: [
        { text: "Discounted chicken close to its use-by date", correct: true },
        { text: "A chicken that has been marked with a pen", correct: false },
        { text: "Chicken that has gone bad", correct: false }
      ]
    }
  ],

  // ----- MONEY REFERENCE -----
  australianMoney: [
    { name: '5 cents', emoji: '🪙', value: 0.05, note: 'Smallest coin in use' },
    { name: '10 cents', emoji: '🪙', value: 0.10, note: '' },
    { name: '20 cents', emoji: '🪙', value: 0.20, note: '' },
    { name: '50 cents', emoji: '🪙', value: 0.50, note: 'Large 12-sided coin' },
    { name: '\$1', emoji: '🪙', value: 1.00, note: 'Gold coloured, used for trolleys' },
    { name: '\$2', emoji: '🪙', value: 2.00, note: 'Small gold coin, also used for trolleys' },
    { name: '\$5 note', emoji: '💵', value: 5.00, note: 'Pink/purple' },
    { name: '\$10 note', emoji: '💵', value: 10.00, note: 'Blue' },
    { name: '\$20 note', emoji: '💵', value: 20.00, note: 'Red/orange' },
    { name: '\$50 note', emoji: '💵', value: 50.00, note: 'Yellow' },
    { name: '\$100 note', emoji: '💵', value: 100.00, note: 'Green — some shops don\'t accept these' }
  ],

  // ----- SCORING -----
  scoring: {
    correctDialogue: 10,
    partialDialogue: 5,
    wrongDialogue: 0,
    itemOnList: 5,
    itemNotOnList: -2,
    underBudget: 15,
    overBudget: -10,
    allListItems: 20,
    selfCheckoutStep: 5,
    slangQuizCorrect: 5
  },

  // ----- ACHIEVEMENT BADGES -----
  achievements: [
    { id: 'first_shop', name: 'First Shop!', icon: '🛒', description: 'Complete your first shopping trip' },
    { id: 'budget_master', name: 'Budget Master', icon: '💰', description: 'Finish under budget' },
    { id: 'full_list', name: 'List Champion', icon: '📋', description: 'Find every item on your shopping list' },
    { id: 'polite_shopper', name: 'Polite Shopper', icon: '😊', description: 'Get all dialogue answers correct' },
    { id: 'meat_expert', name: 'Meat Expert', icon: '🥩', description: 'Correctly order 3 items at the meat counter' },
    { id: 'self_checkout_pro', name: 'Self-Checkout Pro', icon: '🤖', description: 'Complete self-checkout with no errors' },
    { id: 'slang_master', name: 'Slang Master', icon: '🇦🇺', description: 'Get 100% on the Aussie slang quiz' },
    { id: 'savvy_shopper', name: 'Savvy Shopper', icon: '🏷️', description: 'Buy 3 or more items on special' },
    { id: 'speed_shopper', name: 'Speed Shopper', icon: '⚡', description: 'Complete the game in under 5 minutes' }
  ],

   // ----- GAME PHASES -----
  phases: [
    { id: 'welcome', name: 'Welcome', icon: '👋' },
    { id: 'list', name: 'Shopping List', icon: '📋' },
    { id: 'store', name: 'Enter Store', icon: '🏪' },
    { id: 'shopping', name: 'Shopping', icon: '🛒' },
    { id: 'selfCheckout', name: 'Self-Checkout', icon: '🤖' },
    { id: 'checkout', name: 'Checkout', icon: '💳' },
    { id: 'results', name: 'Results', icon: '⭐' }
  ],
  challengeDialogues: {
    meatCounter: [
      {
        speaker: 'Butcher Dave',
        avatar: '👨‍🍳',
        role: 'Meat Counter Staff',
        speak: "Gday! What can I get for ya today?",
        teacherScript: "Say in a friendly Australian accent: Gday! What can I get for ya today?",
        hint: 'The butcher is greeting you. Look at your shopping list and order some meat!',
        type: 'choice',
        options: [
          { text: "Hi! Can I please have 500 grams of beef mince?", quality: 'correct', feedback: 'Perfect! Polite, specific item and amount.' },
          { text: "I want to buy some meat.", quality: 'partial', feedback: 'Too vague. Say WHAT meat and HOW MUCH. Like: 500 grams of beef mince.' },
          { text: "Beef.", quality: 'wrong', feedback: 'Too short! Say the full sentence: Can I please have 500 grams of beef mince?' },
          { text: "Where is the toilet?", quality: 'wrong', feedback: 'Wrong question! The butcher asked what meat you want to buy.' }
        ]
      },
      {
        speaker: 'Butcher Dave',
        avatar: '👨‍🍳',
        role: 'Meat Counter Staff',
        speak: "No worries! Here is your mince. That will be seven fifty. Anything else, mate?",
        teacherScript: "Say: No worries! Here is your mince. That will be seven fifty. Anything else, mate?",
        hint: 'The butcher told you the price and asked if you want anything else. How much was the mince?',
        type: 'amount',
        correctAmount: 7.50,
        tolerance: 0.00,
        followUpType: 'choice',
        followUpOptions: [
          { text: "Yes, could I also get 1 kilo of chicken breast, please?", quality: 'correct', feedback: 'Great! Polite and specific.' },
          { text: "No thanks, that is all. Thank you!", quality: 'correct', feedback: 'Perfectly polite way to finish.' },
          { text: "Chicken.", quality: 'partial', feedback: 'Say how much! Like: 1 kilo of chicken breast, please.' }
        ]
      },
      {
        speaker: 'Butcher Dave',
        avatar: '👨‍🍳',
        role: 'Meat Counter Staff',
        speak: "We have got some beautiful lamb chops on special today. Ten dollars a kilo instead of twelve. Would you like some?",
        teacherScript: "Say: We have got some beautiful lamb chops on special today. Ten dollars a kilo instead of twelve. Would you like some?",
        hint: 'The butcher is offering a special deal. What is the special price per kilo?',
        type: 'amount',
        correctAmount: 10.00,
        tolerance: 0.00,
        followUpType: 'choice',
        followUpOptions: [
          { text: "Yes please! Can I get 500 grams?", quality: 'correct', feedback: 'Great! You understood the offer and gave an amount.' },
          { text: "No thanks, just what I have is fine.", quality: 'correct', feedback: 'Polite way to decline.' },
          { text: "How much is that?", quality: 'partial', feedback: 'The butcher already told you the price! Listen more carefully.' }
        ]
      }
    ],
    checkout: [
      {
        speaker: 'Sarah',
        avatar: '👩',
        role: 'Checkout Staff',
        speak: "Hi there! Did you find everything okay?",
        teacherScript: "Say cheerfully: Hi there! Did you find everything okay?",
        hint: 'The cashier is making small talk. How do you respond?',
        type: 'choice',
        options: [
          { text: "Yes, thanks! I found everything.", quality: 'correct', feedback: 'Natural and friendly! Great response.' },
          { text: "...(say nothing)", quality: 'wrong', feedback: 'In Australia, it is polite to respond! A simple Yes, thanks works.' },
          { text: "Yes, but I could not find fish sauce. Where is it?", quality: 'correct', feedback: 'Good! It is fine to ask for help finding items.' },
          { text: "This shop is very big.", quality: 'partial', feedback: 'A bit random! Just answer: Yes, thanks!' }
        ]
      },
      {
        speaker: 'Sarah',
        avatar: '👩',
        role: 'Checkout Staff',
        speak: "Do you need a bag? They are fifteen cents each.",
        teacherScript: "Say: Do you need a bag? They are fifteen cents each.",
        hint: 'Bags cost money in Australia! How much is one bag?',
        type: 'amount',
        correctAmount: 0.15,
        tolerance: 0.00,
        followUpType: 'choice',
        followUpOptions: [
          { text: "Yes, one bag please.", quality: 'correct', feedback: 'Clear and polite!' },
          { text: "No thanks, I brought my own bag.", quality: 'correct', feedback: 'Smart! Saves money and helps the environment.' },
          { text: "Why do I have to pay for a bag?!", quality: 'partial', feedback: 'In Australia, single-use bags are banned. You buy reusable bags or bring your own.' }
        ]
      },
      {
        speaker: 'Sarah',
        avatar: '👩',
        role: 'Checkout Staff',
        speak: "That comes to forty-seven fifty. Cash or card?",
        teacherScript: "Say: That comes to forty-seven fifty. Cash or card?",
        hint: 'The cashier told you the total. How much do you need to pay?',
        type: 'amount',
        correctAmount: 47.50,
        tolerance: 0.00,
        followUpType: 'choice',
        followUpOptions: [
          { text: "Card, please. Can I tap?", quality: 'correct', feedback: 'Tap means contactless payment. Very common in Australia!' },
          { text: "Cash please. Here is fifty dollars.", quality: 'correct', feedback: 'Good! Your change would be \$2.50.' },
          { text: "I do not have any money.", quality: 'wrong', feedback: 'You need to pay! Choose card or cash.' }
        ]
      },
      {
        speaker: 'Sarah',
        avatar: '👩',
        role: 'Checkout Staff',
        speak: "Would you like the receipt?",
        teacherScript: "Say: Would you like the receipt?",
        hint: 'The cashier is asking about your receipt. What do you say?',
        type: 'choice',
        options: [
          { text: "Yes, please.", quality: 'correct', feedback: 'Good idea! Keep receipts in case you need to return something.' },
          { text: "No, thanks.", quality: 'correct', feedback: 'Also fine! Many people skip the paper receipt.' },
          { text: "What is a receipt?", quality: 'partial', feedback: 'A receipt is the paper proof of what you bought and how much you paid.' }
        ]
      }
    ],
    askingHelp: [
      {
        speaker: 'Store Staff',
        avatar: '🧑‍💼',
        role: 'Floor Staff',
        speak: "Can I help you find something?",
        teacherScript: "Say: Can I help you find something?",
        hint: 'A staff member is offering to help. You need rice and Asian sauces.',
        type: 'choice',
        options: [
          { text: "Yes, please. Where can I find the Asian food section?", quality: 'correct', feedback: 'Clear and polite! The staff will show you the right aisle.' },
          { text: "Where is rice?", quality: 'partial', feedback: 'This works, but saying Excuse me, where can I find the rice? is more polite.' },
          { text: "No, I am just looking. Thanks!", quality: 'correct', feedback: 'Perfectly fine way to decline help.' },
          { text: "(Walk away without answering)", quality: 'wrong', feedback: 'That is rude! Always respond, even just No thanks.' }
        ]
      }
    ]
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = GAME_DATA;
}

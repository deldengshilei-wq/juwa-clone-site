// Site Configuration
export const siteConfig = {
  // Social & Contact Links
  facebook: "https://www.facebook.com/top777",
  telegram: "https://t.me/top777",
  whatsapp: "https://wa.me/1234567890",
  messenger: "https://m.me/top777",
  email: "support@top777.com",
  
  // Floating Social Buttons
  floatingSocial: [
    {
      name: "Telegram",
      url: "https://t.me/top777",
      color: "#0088cc",
      icon: "telegram",
    },
    {
      name: "Messenger",
      url: "https://m.me/top777",
      color: "#0084ff",
      icon: "messenger",
    },
    {
      name: "WhatsApp",
      url: "https://wa.me/1234567890",
      color: "#25D366",
      icon: "whatsapp",
    },
    {
      name: "Live Chat",
      url: "https://livechat.top777.com",
      color: "#ff6b35",
      icon: "chat",
    },
  ],
  
  // Customer Service
  customerService: {
    liveChatUrl: "https://livechat.top777.com",
    supportEmail: "support@top777.com",
    supportHours: "24/7",
  },
  
  // Download Links
  download: {
    android: "https://download.top777.com/android",
    ios: "https://download.top777.com/ios",
    apk: "https://download.top777.com/top777.apk",
  },
  
  // Games Configuration
  games: [
    { name: "45 President", category: "Slots", rtp: 91, image: "https://www.juwa777.com/Games/45%20President.png" },
    { name: "7 Burning HOT", category: "Slots", rtp: 97, image: "https://www.juwa777.com/Games/7%20Burning%20HOT.png" },
    { name: "7 Crystal Clovers", category: "Slots", rtp: 93, image: "https://www.juwa777.com/Games/7%20Crystal%20Clovers.png" },
    { name: "777 Jackpot Inferno", category: "Slots", rtp: 95, image: "https://www.juwa777.com/Games/777%20Jackpot%20Inferno.png" },
    { name: "777 Lucky", category: "Slots", rtp: 96, image: "https://www.juwa777.com/Games/777%20Lucky.png" },
    { name: "Big Bass Bonzana", category: "Fish", rtp: 96, image: "https://www.juwa777.com/Games/Big%20Bass%20Bonzana.png" },
    { name: "Black & White Double", category: "Slots", rtp: 95, image: "https://www.juwa777.com/Games/Black%20&%20White%20Double.png" },
    { name: "Bonus Hot 7's", category: "Slots", rtp: 95, image: "https://www.juwa777.com/Games/Bonus%20Hot%207's.png" },
    { name: "Buffalo Keno", category: "Keno", rtp: 93, image: "https://www.juwa777.com/Games/Buffalo%20Keno.png" },
    { name: "Cash Cow", category: "Slots", rtp: 95, image: "https://www.juwa777.com/Games/Cash%20Cow.png" },
    { name: "Cash Zone", category: "Slots", rtp: 97, image: "https://www.juwa777.com/Games/Cash%20Zone.png" },
    { name: "Cherry Valentine", category: "Slots", rtp: 95, image: "https://www.juwa777.com/Games/Cherry%20Valentine.png" },
    { name: "Deep Sea Predator", category: "Fish", rtp: 96, image: "https://www.juwa777.com/Games/Deep%20Sea%20Predator.png" },
    { name: "Deep Sea", category: "Fish", rtp: 92, image: "https://www.juwa777.com/Games/Deep%20Sea.png" },
    { name: "Diamond Riches", category: "Slots", rtp: 91, image: "https://www.juwa777.com/Games/Diamond%20Riches.png" },
    { name: "Dragon Treasure", category: "Slots", rtp: 94, image: "https://www.juwa777.com/Games/Dragon%20Treasure.png" },
    { name: "Fire Kirin", category: "Fish", rtp: 95, image: "https://www.juwa777.com/Games/Fire%20Kirin.png" },
    { name: "Fortune Panda", category: "Slots", rtp: 96, image: "https://www.juwa777.com/Games/Fortune%20Panda.png" },
    { name: "Golden Dragon", category: "Fish", rtp: 94, image: "https://www.juwa777.com/Games/Golden%20Dragon.png" },
    { name: "Hot Fruits", category: "Slots", rtp: 95, image: "https://www.juwa777.com/Games/Hot%20Fruits.png" },
    { name: "Keno Classic", category: "Keno", rtp: 92, image: "https://www.juwa777.com/Games/Keno%20Classic.png" },
    { name: "Lucky Keno", category: "Keno", rtp: 91, image: "https://www.juwa777.com/Games/Lucky%20Keno.png" },
    { name: "Ocean King", category: "Fish", rtp: 95, image: "https://www.juwa777.com/Games/Ocean%20King.png" },
    { name: "Wild Buffalo", category: "Slots", rtp: 96, image: "https://www.juwa777.com/Games/Wild%20Buffalo.png" },
  ],
  
  // Game Categories for filtering
  gameCategories: ["All", "Slots", "Fish", "Keno", "Hot", "New"],
};

export type Game = typeof siteConfig.games[number];

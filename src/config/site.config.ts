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
      url: "https://www.google.com.hk/",
      color: "#0088cc",
      icon: "telegram",
    },
    {
      name: "Messenger",
      url: "https://www.google.com.hk/",
      color: "#0084ff",
      icon: "messenger",
    },
    {
      name: "WhatsApp",
      url: "",
      color: "#25D366",
      icon: "whatsapp",
    },
    {
      name: "Live Chat",
      url: "",
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
  downLoadUrl: "https://top777.games/",
  // Download Links
  download: {
    android: "https://download.top777.com/android",
    ios: "https://download.top777.com/ios",
    apk: "https://download.top777.com/top777.apk",
  },
  
  // Games Configuration
  games: [
    { name: "7 Burning HOT", category: "Slots", rtp: 97, image: "https://www.juwa777.com/Games/7%20Burning%20HOT.png" },
    { name: "777 Jackpot Inferno", category: "Slots", rtp: 95, image: "https://www.juwa777.com/Games/777%20Jackpot%20Inferno.png" },
    { name: "Big Bass Bonzana", category: "Fish", rtp: 96, image: "https://www.juwa777.com/Games/Big%20Bass%20Bonzana.png" },
    { name: "Buffalo Keno", category: "Keno", rtp: 93, image: "https://www.juwa777.com/Games/Buffalo%20Keno.png" },
    { name: "Cash Cow", category: "Slots", rtp: 95, image: "https://www.juwa777.com/Games/Cash%20Cow.png" },
    { name: "Deep Sea Predator", category: "Fish", rtp: 96, image: "https://www.juwa777.com/Games/Deep%20Sea%20Predator.png" },
    { name: "Diamond Riches", category: "Slots", rtp: 91, image: "https://www.juwa777.com/Games/Diamond%20Riches.png" },
    { name: "Epic Summer", category: "Slots", rtp: 94, image: "https://www.juwa777.com/Games/Epic%20Summer.png" },
    { name: "Fortune Lion", category: "Slots", rtp: 96, image: "https://www.juwa777.com/Games/Fortune%20Lion.png" },
    { name: "Happy Fishing", category: "Fish", rtp: 95, image: "https://www.juwa777.com/Games/Happy%20Fishing.png" },
    { name: "Huge Cash", category: "Slots", rtp: 94, image: "https://www.juwa777.com/Games/Huge%20Cash.png" },
    { name: "King Kong's Rampage", category: "Slots", rtp: 95, image: "https://www.juwa777.com/Games/King%20Kong's%20Rampage.png" },
    { name: "Mega Money Machine", category: "Slots", rtp: 96, image: "https://www.juwa777.com/Games/Mega%20Money%20Machine.png" },
    { name: "Perfect Purple Jackpots", category: "Slots", rtp: 95, image: "https://www.juwa777.com/Games/Perfect%20Purple%20Jackpots.png" },
    { name: "Rainbow Riches", category: "Slots", rtp: 94, image: "https://www.juwa777.com/Games/Rainbow%20Riches.png" },
    { name: "Wild Royale Gold", category: "Slots", rtp: 96, image: "https://www.juwa777.com/Games/Wild%20Royale%20Gold.png" },
  ],
  
  // Game Categories for filtering
  gameCategories: ["All", "Slots", "Fish", "Keno", "Hot", "New"],
};

export type Game = typeof siteConfig.games[number];

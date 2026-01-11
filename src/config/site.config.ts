// Site Configuration
export const siteConfig = {
  // Social & Contact Links
  facebookHome: "https://www.facebook.com/top777",
  facebookService: "https://www.facebook.com/top777",
  agentUrl: "https://www.facebook.com/top777",
  downLoadUrl: "https://top777.games/",

  
  // Floating Social Buttons
  floatingSocial: [
    {
      name: "Telegram",
      url: "https://www.google.com.hk/",
      color: "#0088cc",
      icon: "telegram",
    },
    {
      name: "Facebook",
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
  
  // Games Configuration
  games: [
    { name: "7 Burning HOT", category: "Slots", rtp: 97, image: "/games/7 Burning HOT.png" },
    { name: "777 Jackpot Inferno", category: "Slots", rtp: 95, image: "/games/777 Jackpot Inferno.png" },
    { name: "Big Bass Bonzana", category: "Fish", rtp: 96, image: "/games/Big Bass Bonzana.png" },
    { name: "Buffalo Keno", category: "Keno", rtp: 93, image: "/games/Buffalo Keno.png" },
    { name: "Cash Cow", category: "Slots", rtp: 95, image: "/games/Cash Cow.png" },
    { name: "Deep Sea Predator", category: "Fish", rtp: 96, image: "/games/Deep Sea Predator.png" },
    { name: "Diamond Riches", category: "Slots", rtp: 91, image: "/games/Diamond Riches.png" },
    { name: "Epic Summer", category: "Slots", rtp: 94, image: "/games/Epic Summer.png" },
    { name: "Fortune Lion", category: "Slots", rtp: 96, image: "/games/Fortune Lion.png" },
    { name: "Happy Fishing", category: "Fish", rtp: 95, image: "/games/Happy Fishing.png" },
    { name: "Huge Cash", category: "Slots", rtp: 94, image: "/games/Huge Cash.png" },
    { name: "King Kong's Rampage", category: "Slots", rtp: 95, image: "/games/King Kong's Rampage.png" },
    { name: "Mega Money Machine", category: "Slots", rtp: 96, image: "/games/Mega Money Machine.png" },
    { name: "Perfect Purple Jackpots", category: "Slots", rtp: 95, image: "/games/Perfect Purple Jackpots.png" },
    { name: "Rainbow Riches", category: "Slots", rtp: 94, image: "/games/Rainbow Riches.png" },
    { name: "Wild Royale Gold", category: "Slots", rtp: 96, image: "/games/Wild Royale Gold.png" },
  ],
  
  // Game Categories for filtering
  gameCategories: ["All", "Slots", "Fish", "Keno", "Hot", "New"],
};

export type Game = typeof siteConfig.games[number];

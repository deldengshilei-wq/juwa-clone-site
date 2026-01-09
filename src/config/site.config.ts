// Site Configuration
export const siteConfig = {
  // Social & Contact Links
  facebook: "https://www.facebook.com/top777",
  telegram: "https://t.me/top777",
  whatsapp: "https://wa.me/1234567890",
  messenger: "https://m.me/top777",
  email: "support@top777.com",
  
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
    {
      name: "Lucky Fruits",
      category: "Slots",
      image: "https://images.unsplash.com/photo-1606167668584-78701c57f13d?q=80&w=400&auto=format&fit=crop",
    },
    {
      name: "Ocean Fishing",
      category: "Fishing Games",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=400&auto=format&fit=crop",
    },
    {
      name: "Golden Keno",
      category: "Keno",
      image: "https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?q=80&w=400&auto=format&fit=crop",
    },
    {
      name: "Dragon Tiger",
      category: "Arcade",
      image: "https://images.unsplash.com/photo-1511882150382-421056c89033?q=80&w=400&auto=format&fit=crop",
    },
    {
      name: "Diamond Dazzle",
      category: "Slots",
      image: "https://images.unsplash.com/photo-1551431009-a802eeec77b1?q=80&w=400&auto=format&fit=crop",
    },
    {
      name: "Lucky Wheel",
      category: "Casual Games",
      image: "https://images.unsplash.com/photo-1596838132731-3301c3fd4317?q=80&w=400&auto=format&fit=crop",
    },
  ],
};

export type Game = typeof siteConfig.games[number];

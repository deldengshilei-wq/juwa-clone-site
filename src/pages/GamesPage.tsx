import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingSocial from "@/components/FloatingSocial";
import DownloadCTA from "@/components/DownloadCTA";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { siteConfig } from "@/config/site.config";

const gameCategories = [
  {
    title: "Slot Games",
    description: "Experience classic and modern slot games with various themes, paylines, and bonus features. Our slot collection includes traditional fruit machines, adventure-themed slots, and progressive jackpot games. Each slot game features immersive graphics, engaging sound effects, and exciting bonus rounds.",
    gradient: "from-pink-500 to-rose-600",
  },
  {
    title: "Fish Shooting Games",
    description: "Dive into action-packed fish shooting games where skill and strategy combine for thrilling gameplay. These arcade-style games feature vibrant underwater worlds, various fish species with different point values, and exciting bonus features.",
    gradient: "from-green-500 to-emerald-600",
  },
  {
    title: "Keno Games",
    description: "Enjoy the strategic gameplay of keno, a lottery-style game where you select numbers and watch as winning numbers are drawn. Our keno games offer multiple betting options, various game modes, and different number selection strategies.",
    gradient: "from-yellow-500 to-orange-600",
  },
];

const GamesPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredGames = activeCategory === "All" 
    ? siteConfig.games 
    : activeCategory === "Hot"
    ? siteConfig.games.filter(game => game.rtp >= 96)
    : activeCategory === "New"
    ? siteConfig.games.slice(-6)
    : siteConfig.games.filter(game => game.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-8">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Explore Top777 Games – Slots, Fish Games & Keno
          </h1>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto mb-8">
            Discover over 100 games available in the Top 777 app. Browse our selection of slots, fish shooting games, and keno for entertainment purposes only. Download the Top777 app to access the full games library on Android & iOS.
          </p>
          <Button size="lg" className="gap-2" asChild>
            <a href={siteConfig.downLoadUrl} target="_blank" rel="noopener noreferrer">
              <Sparkles className="h-5 w-5" />
              Download Top777 App
            </a>
          </Button>
        </section>

        {/* Collection Section */}
        <section className="container mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Explore Our Free Social Gaming Collection
          </h2>
          <p className="text-muted-foreground mb-4">
            Top777 offers over 100 games in the app, featuring an extensive library of casino-style social games designed for entertainment purposes only. Our mobile gaming platform features three main categories: classic slot games, action-packed fish shooting games, and strategic keno games. All games are completely free to play. Download the Top 777 app to access and play all games on your Android or iOS device.
          </p>
          <p className="text-muted-foreground mb-12">
            Whether you enjoy the spinning reels of slot machines, the fast-paced action of fish shooting games, or the strategic number selection of keno, our diverse game collection has something for every gaming enthusiast. Each game category offers unique gameplay mechanics, engaging graphics, and entertaining features that provide hours of fun.
          </p>

          {/* Game Categories */}
          <div className="grid md:grid-cols-3 gap-6">
            {gameCategories.map((category) => (
              <div
                key={category.title}
                className={`rounded-xl bg-gradient-to-br ${category.gradient} p-6`}
              >
                <h3 className="text-xl font-bold text-white mb-4">
                  {category.title}
                </h3>
                <p className="text-white/90 text-sm">
                  {category.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* How to Play Section */}
        <section className="container mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold text-foreground mb-8">
            How to Play Top777 Games
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Download the App</h3>
              <p className="text-muted-foreground text-sm">
                First, download and install the Top 777 app on your Android or iOS device. The app is required to access and play all games.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Choose Your Game Category</h3>
              <p className="text-muted-foreground text-sm">
                Once the app is installed, browse our game collection using the filter buttons. Select from All Games, Slots, Fish Games, Keno, Hot Games, or New Games.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Select and Play a Game</h3>
              <p className="text-muted-foreground text-sm">
                Click on any game to start playing. Each game displays its name and RTP percentage. All games are free to play for entertainment purposes only.
              </p>
            </div>
          </div>
        </section>

        {/* Games List Section */}
        <section id="games-list" className="container mx-auto px-4 py-12">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            {siteConfig.gameCategories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
                className="min-w-[80px]"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Games Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {filteredGames.map((game, index) => (
              <div
                key={index}
                className="group relative rounded-xl overflow-hidden bg-card border border-border transition-all hover:scale-105 hover:border-primary cursor-pointer"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={game.image}
                    alt={game.name}
                    className="h-full w-full object-cover transition-transform group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                <div className="p-3 text-center bg-card">
                  <h3 className="text-sm font-semibold text-foreground truncate mb-1">
                    {game.name}
                  </h3>
                  <span className="text-xs text-primary font-medium">
                    RTP {game.rtp}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <DownloadCTA />
      <Footer />
      <FloatingSocial />
    </div>
  );
};

export default GamesPage;

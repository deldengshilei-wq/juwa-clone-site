import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingSocial from "@/components/FloatingSocial";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

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
            <Link to="/blog">
              <Sparkles className="h-5 w-5" />
              Download Top777 App
            </Link>
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
      </main>
      <Footer />
      <FloatingSocial />
    </div>
  );
};

export default GamesPage;

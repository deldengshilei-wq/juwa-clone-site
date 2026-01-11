import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site.config";
import { Link } from "react-router-dom";

const Games = () => {
  // Take first 16 games for display
  const displayGames = siteConfig.games.slice(0, 16);

  return (
    <section id="games" className="bg-background py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-10 text-center text-3xl font-bold text-foreground md:text-4xl">
          Our Games
        </h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {displayGames.map((game, index) => (
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
        <div className="mt-10 text-center">
          <Link to="/games">
            <Button size="lg" className="px-8">
              View All Games
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Games;

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
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8">
          {displayGames.map((game, index) => (
            <div
              key={index}
              className="group cursor-pointer"
            >
              <div className="aspect-square overflow-hidden rounded-xl border-2 border-muted bg-card transition-all duration-300 hover:border-primary hover:shadow-lg hover:shadow-primary/20">
                <img
                  src={game.image}
                  alt={game.name}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
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

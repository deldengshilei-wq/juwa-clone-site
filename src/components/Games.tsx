import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { siteConfig } from "@/config/site.config";

const Games = () => {
  return (
    <section id="games" className="bg-background py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-4 text-center text-3xl font-bold text-foreground md:text-4xl">
          Popular Games
        </h2>
        <p className="mb-12 text-center text-muted-foreground">
          Explore our selection of free social games
        </p>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {siteConfig.games.map((game, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl bg-card transition-transform hover:scale-105"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={game.image}
                  alt={game.name}
                  className="h-full w-full object-cover transition-transform group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4">
                <span className="mb-1 text-xs font-medium text-primary">
                  {game.category}
                </span>
                <h3 className="text-lg font-bold text-foreground">
                  {game.name}
                </h3>
              </div>
              <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity group-hover:opacity-100">
                <Button size="lg" className="gap-2">
                  <Play className="h-5 w-5" />
                  Play Now
                </Button>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button size="lg" variant="outline">
            View All Games
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Games;

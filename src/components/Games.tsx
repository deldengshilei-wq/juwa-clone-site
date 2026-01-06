import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

const games = [
  {
    name: "幸运水果机",
    category: "老虎机",
    image: "https://images.unsplash.com/photo-1606167668584-78701c57f13d?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "海洋捕鱼",
    category: "捕鱼游戏",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "黄金基诺",
    category: "基诺",
    image: "https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "龙虎争霸",
    category: "街机游戏",
    image: "https://images.unsplash.com/photo-1511882150382-421056c89033?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "钻石迷阵",
    category: "老虎机",
    image: "https://images.unsplash.com/photo-1551431009-a802eeec77b1?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "幸运轮盘",
    category: "休闲游戏",
    image: "https://images.unsplash.com/photo-1596838132731-3301c3fd4317?q=80&w=400&auto=format&fit=crop",
  },
];

const Games = () => {
  return (
    <section id="games" className="bg-background py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-4 text-center text-3xl font-bold text-foreground md:text-4xl">
          热门游戏
        </h2>
        <p className="mb-12 text-center text-muted-foreground">
          探索我们精选的免费社交游戏
        </p>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {games.map((game, index) => (
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
                  立即游戏
                </Button>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button size="lg" variant="outline">
            查看全部游戏
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Games;

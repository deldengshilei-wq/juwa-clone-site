import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[600px] overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1596838132731-3301c3fd4317?q=80&w=2070&auto=format&fit=crop')`,
        }}
      />
      
      {/* Overlay */}
      <div className="hero-overlay absolute inset-0" />

      {/* Content */}
      <div className="relative container mx-auto flex min-h-[600px] flex-col justify-center px-4 py-20">
        <div className="max-w-2xl">
          <h1 className="mb-6 text-4xl font-extrabold leading-tight text-foreground md:text-5xl lg:text-6xl">
            Lucky777 – 免费社交游戏平台
            <span className="text-primary"> Android & iOS</span>
          </h1>
          <p className="mb-8 text-lg text-muted-foreground md:text-xl">
            体验无与伦比的游戏品质和客户服务。开始游戏 Lucky777 - 
            拥有超过100款免费社交娱乐游戏的顶级游戏平台。
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="gap-2 glow-red">
              <Sparkles className="h-5 w-5" />
              立即游戏
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              开始体验
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

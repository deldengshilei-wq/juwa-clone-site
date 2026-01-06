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
            Juwa777 – Free Social Gaming App for Android & iOS
          </h1>
          <p className="mb-8 text-lg text-muted-foreground md:text-xl">
            Experience unmatched quality in gameplay and customer service. Play Juwa777 - 
            the premier Juwa game platform with over 100 free social casino games.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="gap-2 glow-red">
              <Sparkles className="h-5 w-5" />
              Play Now
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              Get Started
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

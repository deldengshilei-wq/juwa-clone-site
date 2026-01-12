import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site.config";
import { useEffect, useRef } from "react";

const Hero = () => {
  const installInstanceRef = useRef<any>(null);

  useEffect(() => {
    // Load OpenInstall script
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.charset = "UTF-8";
    script.src = "web/openinstall-c4z4rs.js";
    document.body.appendChild(script);

    // Initialize OpenInstall when script is loaded
    script.onload = () => {
      if (typeof (window as any).OpenInstall !== 'undefined') {
        const OpenInstall = (window as any).OpenInstall;
        const data = OpenInstall.parseUrlParams();
        data['region'] = 'us';
        if (!data['sid']) {
          const m = window.location.pathname.match(/\/vip(\d+)/);
          if (m) data['sid'] = m[1];
        }
        const instance = new OpenInstall({
          appKey: "c4z4rs",
          onready: function() {
            //this.schemeWakeup();
          },
          data
        });
        installInstanceRef.current = instance;
      }
    };

    return () => {
      // Cleanup: remove script when component unmounts
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const handleGetStarted = () => {
    if (installInstanceRef.current) {
      installInstanceRef.current.wakeupOrInstall();
    }
  };

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
            Top777 – Free Social Gaming App for Android & iOS
          </h1>
          <p className="mb-8 text-lg text-muted-foreground md:text-xl">
            Experience unmatched quality in gameplay and customer service. Play Top777 - 
            the premier Top game platform with over 100 free social casino games.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="gap-2 glow-red" asChild>
              <a href={siteConfig.facebookHome} target="_blank" rel="noopener noreferrer">
                <Sparkles className="h-5 w-5" />
                Play Now
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2"
              onClick={handleGetStarted}
            >
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

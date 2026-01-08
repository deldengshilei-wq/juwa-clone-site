import { Button } from "@/components/ui/button";
import { Apple, Smartphone } from "lucide-react";
import { siteConfig } from "@/config/site.config";

const DownloadCTA = () => {
  return (
    <section className="bg-card py-20">
      <div className="container mx-auto px-4">
        <div className="rounded-2xl gradient-red p-8 md:p-12">
          <div className="flex flex-col items-center gap-8 lg:flex-row lg:justify-between">
            <div className="text-center lg:text-left">
              <h2 className="mb-4 text-3xl font-bold text-primary-foreground md:text-4xl">
                Download Juwa777 App Now
              </h2>
              <p className="text-lg text-primary-foreground/80">
                Enjoy 100+ free social casino games on your mobile device
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <a href={siteConfig.download.ios} target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="gap-2 bg-black text-white hover:bg-black/80"
                >
                  <Apple className="h-5 w-5" />
                  App Store
                </Button>
              </a>
              <a href={siteConfig.download.android} target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="gap-2 bg-black text-white hover:bg-black/80"
                >
                  <Smartphone className="h-5 w-5" />
                  Google Play
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadCTA;

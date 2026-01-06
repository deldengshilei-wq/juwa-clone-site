import { Button } from "@/components/ui/button";
import { Apple, Smartphone } from "lucide-react";

const DownloadCTA = () => {
  return (
    <section className="bg-card py-20">
      <div className="container mx-auto px-4">
        <div className="rounded-2xl gradient-red p-8 md:p-12">
          <div className="flex flex-col items-center gap-8 lg:flex-row lg:justify-between">
            <div className="text-center lg:text-left">
              <h2 className="mb-4 text-3xl font-bold text-primary-foreground md:text-4xl">
                立即下载 Lucky777 应用
              </h2>
              <p className="text-lg text-primary-foreground/80">
                在您的手机上畅享100+免费社交游戏
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="gap-2 bg-black text-white hover:bg-black/80"
              >
                <Apple className="h-5 w-5" />
                App Store
              </Button>
              <Button
                size="lg"
                className="gap-2 bg-black text-white hover:bg-black/80"
              >
                <Smartphone className="h-5 w-5" />
                Google Play
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadCTA;

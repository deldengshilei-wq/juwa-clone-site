import { ShieldCheck } from "lucide-react";
import logo from "@/assets/logo.png";

const DownloadCTA = () => {
  return (
    <section className="bg-card py-6">
      <div className="container mx-auto px-4">
        <div className="rounded-xl gradient-red px-6 py-4 md:px-8 md:py-5">
          <div className="flex items-center justify-between">
            {/* Left - Icon & Text */}
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white/30">
                <ShieldCheck className="h-5 w-5 text-white" />
              </div>
              <div>
                <h2 className="text-lg font-bold uppercase tracking-wide text-white md:text-xl">
                  Made to Play Safely
                </h2>
                <p className="text-sm text-white/80">
                  Your safety and enjoyment are our priority.
                </p>
              </div>
            </div>
            
            {/* Right - Logo */}
            <div className="hidden sm:block">
              <img 
                src={logo} 
                alt="Top777 Logo" 
                className="h-12 w-auto drop-shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadCTA;

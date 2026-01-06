import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PromoCards from "@/components/PromoCards";
import Welcome from "@/components/Welcome";
import Features from "@/components/Features";
import Games from "@/components/Games";
import DownloadCTA from "@/components/DownloadCTA";
import Footer from "@/components/Footer";
import FloatingSocial from "@/components/FloatingSocial";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <PromoCards />
        <Welcome />
        <Features />
        <Games />
        <DownloadCTA />
      </main>
      <Footer />
      <FloatingSocial />
    </div>
  );
};

export default Index;

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingSocial from "@/components/FloatingSocial";
import DownloadCTA from "@/components/DownloadCTA";
import { Shield, Users, Zap, Award, HeadphonesIcon, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";
import { siteConfig } from "@/config/site.config";

const features = [
  {
    icon: Shield,
    title: "Safe & Secure",
    description: "Industry-standard security measures to protect your data",
  },
  {
    icon: Users,
    title: "Community Focused",
    description: "Join thousands of players in our gaming community",
  },
  {
    icon: Zap,
    title: "Fast & Reliable",
    description: "Smooth gameplay experience on all devices",
  },
  {
    icon: Award,
    title: "Quality Games",
    description: "Over 100 carefully curated games",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Support",
    description: "Round-the-clock customer assistance",
  },
  {
    icon: Clock,
    title: "Always Available",
    description: "Play anytime, anywhere on mobile",
  },
];

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-8">
        {/* Logo & Title Section */}
        <section className="container mx-auto px-4 py-12 text-center">
          <div className="w-64 mx-auto mb-8">
            <img src={logo} alt="Top777 Logo" className="w-full h-auto max-w-[256px]" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            About Top777 – Your Free Social Gaming Platform
          </h1>
          <p className="text-xl text-primary font-semibold">
            Safe, Fair & Rewarding
          </p>
        </section>

        {/* Welcome Section */}
        <section className="container mx-auto px-4 py-12">
          <div className="bg-card rounded-2xl p-8 border border-border">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Welcome to Top777
            </h2>
            <p className="text-muted-foreground mb-4">
              Top777 is a premier free social gaming platform and mobile gaming app designed for Android and iOS devices. Our online gaming platform offers over 100 exciting casino games and arcade games, including classic slot games, action-packed fish shooting games, and strategic keno experiences. All games are completely free to play and designed for entertainment purposes only.
            </p>
            <p className="text-muted-foreground">
              We provide fun, skill-based gaming experiences that bring players nonstop entertainment. Our mobile gaming platform features engaging gameplay mechanics, immersive graphics, and exciting bonus features. With features like Spin Wheel bonuses, cashback rewards, and hourly lucky draws, Top777 delivers a fun and rewarding gaming experience every time you play. Explore our <Link to="/games" className="text-primary hover:underline">game collection</Link> or read our <Link to="/blog" className="text-primary hover:underline">blog</Link> for gaming tips and updates.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="container mx-auto px-4 py-12">
          <div className="bg-card rounded-2xl p-8 border border-border">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Our Mission
            </h2>
            <p className="text-muted-foreground">
              Our mission is to provide safe, accessible, and engaging gameplay with unmatched customer service. We believe that gaming should be fun, fair, and accessible to everyone. That's why we've created a platform where players can enjoy casino-style games without any real-money gambling or cash payouts. If you have questions, check our <Link to="/faq" className="text-primary hover:underline">FAQ page</Link> or <a href={siteConfig.facebookService} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">contact our support team</a>.
            </p>
          </div>
        </section>

        {/* Features Grid */}
        <section className="container mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
            Why Choose Top777?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-card rounded-xl p-6 border border-border text-center"
              >
                <feature.icon className="h-10 w-10 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <DownloadCTA />
      <Footer />
      <FloatingSocial />
    </div>
  );
};

export default AboutPage;

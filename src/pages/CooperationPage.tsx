import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingSocial from "@/components/FloatingSocial";
import DownloadCTA from "@/components/DownloadCTA";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site.config";
import {
  TrendingUp,
  BarChart3,
  HeadphonesIcon,
  Globe,
  ArrowRight,
  CheckCircle2,
  User,
  FileText,
  Code,
  CreditCard,
} from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
  {
    icon: TrendingUp,
    title: "High Commission",
    description: "Up to 55% revenue share with no hidden fees.",
  },
  {
    icon: BarChart3,
    title: "Real-time Analytics",
    description: "Advanced dashboard to track every click and conversion.",
  },
  {
    icon: HeadphonesIcon,
    title: "Professional Support",
    description: "24/7 dedicated account managers to help you scale.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Multi-currency and localized payment support for worldwide traffic.",
  },
];

const partnershipTracks = [
  {
    icon: User,
    title: "Affiliate",
    description: "For traffic owners and influencers looking to monetize their audience.",
    features: [
      "Competitive commission rates",
      "Marketing materials provided",
      "Real-time tracking dashboard",
      "Weekly payouts available",
    ],
  },
  {
    icon: Code,
    title: "API Integration",
    description: "For game developers and platform providers seeking seamless integration.",
    features: [
      "Comprehensive API documentation",
      "SDK for multiple platforms",
      "Dedicated technical support",
      "Custom integration options",
    ],
  },
  {
    icon: CreditCard,
    title: "Payment Solutions",
    description: "For secure transaction processing partners.",
    features: [
      "Multiple payment gateways",
      "Fraud protection included",
      "Multi-currency support",
      "Instant settlement options",
    ],
  },
];

const steps = [
  {
    icon: User,
    title: "Register",
    description: "Create your partner account in minutes.",
  },
  {
    icon: FileText,
    title: "Review",
    description: "Our team reviews and approves your application.",
  },
  {
    icon: Code,
    title: "Integrate",
    description: "Set up tracking or API integration with our help.",
  },
  {
    icon: TrendingUp,
    title: "Profit",
    description: "Start earning commissions on every conversion.",
  },
];

const CooperationPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-8">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-black via-gray-900 to-background py-20 md:py-32">
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#D4AF37]/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 bg-gradient-to-r from-[#D4AF37] via-yellow-200 to-[#D4AF37] bg-clip-text text-transparent">
                Top777 Global Partnership Program
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                Unlock unlimited earning potential with the world's most reliable entertainment platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-[#D4AF37] hover:bg-[#B8962E] text-black font-semibold text-lg px-8" asChild>
                  <a href={siteConfig.agentUrl} target="_blank" rel="noopener noreferrer">
                    Become a Partner
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why Partner with Top777?
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Join thousands of successful partners earning premium commissions
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 border border-gray-700 hover:border-[#D4AF37] transition-all duration-300 hover:shadow-lg hover:shadow-[#D4AF37]/10"
                >
                  <div className="bg-gradient-to-br from-[#D4AF37]/20 to-[#D4AF37]/5 rounded-lg w-14 h-14 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="h-7 w-7 text-[#D4AF37]" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Tracks */}
        <section className="py-20 bg-gradient-to-b from-background to-gray-900">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Choose Your Partnership Track
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Select the partnership model that best fits your business needs
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8">
              {partnershipTracks.map((track, index) => (
                <motion.div
                  key={track.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 group"
                >
                  <div className="bg-gradient-to-br from-cyan-500/20 to-cyan-500/5 rounded-xl w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <track.icon className="h-8 w-8 text-cyan-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    {track.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {track.description}
                  </p>
                  <ul className="space-y-3 mb-6">
                    {track.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-[#D4AF37] shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Step-by-Step Guide */}
        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                How to Get Started
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Four simple steps to begin your partnership journey
              </p>
            </motion.div>

            <div className="max-w-5xl mx-auto">
              <div className="relative">
                {/* Timeline line */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-[#D4AF37] via-cyan-500 to-[#D4AF37]" />

                {steps.map((step, index) => (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`relative flex items-center mb-12 last:mb-0 ${index % 2 === 0 ? "flex-row md:flex-row-reverse" : ""}`}
                  >
                    {/* Step number */}
                    <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-[#B8962E] rounded-full items-center justify-center text-black font-bold text-lg border-4 border-gray-900 z-10">
                      {index + 1}
                    </div>

                    {/* Content */}
                    <div className={`flex-1 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                      <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700 hover:border-[#D4AF37]/50 transition-all duration-300">
                        <div className={`flex items-center gap-3 mb-3 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                          <step.icon className="h-6 w-6 text-[#D4AF37]" />
                          <h3 className="text-xl font-bold text-foreground">
                            {step.title}
                          </h3>
                        </div>
                        <p className="text-muted-foreground">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Mobile timeline */}
              <div className="md:hidden space-y-6">
                {steps.map((step, index) => (
                  <div key={step.title} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-[#D4AF37] to-[#B8962E] rounded-full items-center justify-center text-black font-bold flex">
                      {index + 1}
                    </div>
                    <div className="flex-1 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-4 border border-gray-700">
                      <div className="flex items-center gap-2 mb-2">
                        <step.icon className="h-5 w-5 text-[#D4AF37]" />
                        <h3 className="text-lg font-bold text-foreground">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-muted-foreground text-sm">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <DownloadCTA />
      <Footer />
      <FloatingSocial />
    </div>
  );
};

export default CooperationPage;

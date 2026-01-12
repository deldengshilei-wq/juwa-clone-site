import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingSocial from "@/components/FloatingSocial";
import DownloadCTA from "@/components/DownloadCTA";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site.config";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import gamingPlatformImg from "@/assets/blog/gaming-platform.jpg";
import paymentGuideImg from "@/assets/blog/payment-guideImg.jpg";
import appDownloadImg from "@/assets/blog/app-download.jpg";
import bonusRewardsImg from "@/assets/blog/bonus-rewards.jpg";
import affiliateImg from "@/assets/blog/join-us.jpg";

const blogPosts = [
  {
    id: 1,
    category: "Platform Guides",
    readTime: "8 min read",
    title: "Top777: Complete Guide to Top777 Gaming Platform",
    description: "Discover Top777 and Top777 - a comprehensive guide to the gaming platform, features, games, and how to get started. Learn about Top777 slots and casino games.",
    date: "January 11, 2026",
    image: gamingPlatformImg,
  },
  {
    id: 2,
    category: "Payment Methods",
    readTime: "4 min read",
    title: "Fast Withdrawals & Deposits: A Guide to Top777 Cashier",
    description: "A complete walkthrough of the payment methods available on Top777. Learn how to deposit and withdraw your winnings quickly using GCash, PayMaya, and more.",
    date: "January 8, 2026",
    image: paymentGuideImg,
  },
  {
    id: 3,
    category: "Getting Started",
    readTime: "5 min read",
    title: "Download Top 777 App: Complete Installation Guide for Android and iOS",
    description: "Step-by-step instructions to download and install the latest version of Top 777 on your Android or iOS device. Get started with over 100 exciting games today.",
    date: "January 7, 2026",
    image: appDownloadImg,
  },
  {
    id: 4,
    category: "Bonuses & Promotions",
    readTime: "6 min read",
    title: "Top 777 No Deposit Bonus: Welcome Offers and Bonus Guide",
    description: "Complete guide to Top 777 bonuses including no deposit bonus offers, welcome bonuses, referral rewards, and daily bonus opportunities.",
    date: "January 5, 2026",
    image: bonusRewardsImg,
  },
  {
    id: 5,
    category: "Affiliate",
    readTime: "5 min read",
    title: "Join Top777 Affiliate Program: Grow Your Wealth Together",
    description: "Looking for a reliable partnership? Join the Top777 Affiliate Program today. Enjoy high commissions, professional support, and real-time tracking.",
    date: "January 12, 2026",
    image: affiliateImg,
    link: siteConfig.agentUrl,
  }
];

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-8">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Top777 Gaming Blog – Tips, Guides & Latest Updates
          </h1>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Expert tips, guides, and insights to enhance your Top777 gaming experience
          </p>
        </section>

        {/* Blog Posts Grid */}
        <section className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="bg-card rounded-2xl overflow-hidden border border-border group hover:border-primary/50 transition-colors"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-sm mb-3">
                    <span className="text-primary font-medium">{post.category}</span>
                    <span className="text-muted-foreground">•</span>
                    <span className="text-muted-foreground">{post.readTime}</span>
                  </div>
                  <h2 className="text-xl font-bold text-foreground mb-3">
                    {post.title}
                  </h2>
                  <p className="text-muted-foreground text-sm mb-4">
                    {post.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground text-sm">{post.date}</span>
                    {post.link && (
                      <Link to="/cooperation">
                        <Button variant="outline" className="border-red-500/50 text-red-400 hover:bg-red-500/10">
                          Join Us Now
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    )}
                  </div>
                </div>
              </article>
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

export default BlogPage;

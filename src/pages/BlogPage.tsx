import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingSocial from "@/components/FloatingSocial";
import { ArrowRight } from "lucide-react";
import gamingPlatformImg from "@/assets/blog/gaming-platform.jpg";
import originStoryImg from "@/assets/blog/origin-story.jpg";
import appDownloadImg from "@/assets/blog/app-download.jpg";
import bonusRewardsImg from "@/assets/blog/bonus-rewards.jpg";

const blogPosts = [
  {
    id: 1,
    category: "Platform Guides",
    readTime: "8 min read",
    title: "Top2: Complete Guide to Top2.0 Gaming Platform",
    description: "Discover Top2 and Top2.0 - a comprehensive guide to the gaming platform, features, games, and how to get started. Learn about Top2 slots and casino games.",
    date: "January 13, 2025",
    image: gamingPlatformImg,
  },
  {
    id: 2,
    category: "Company Story",
    readTime: "6 min read",
    title: "The Origin of Top: How Top777 Came to Life",
    description: "Discover the fascinating story of how Top777 was born during the COVID-19 pandemic, from the Sanskrit word \"Top\" to becoming one of the largest online gaming platforms.",
    date: "December 18, 2024",
    image: originStoryImg,
  },
  {
    id: 3,
    category: "Getting Started",
    readTime: "5 min read",
    title: "Download Top 777 App: Complete Installation Guide for Android and iOS",
    description: "Step-by-step instructions to download and install the latest version of Top 777 on your Android or iOS device. Get started with over 100 exciting games today.",
    date: "January 7, 2025",
    image: appDownloadImg,
  },
  {
    id: 4,
    category: "Bonuses & Promotions",
    readTime: "6 min read",
    title: "Top 777 No Deposit Bonus: Welcome Offers and Bonus Guide",
    description: "Complete guide to Top 777 bonuses including no deposit bonus offers, welcome bonuses, referral rewards, and daily bonus opportunities.",
    date: "January 5, 2025",
    image: bonusRewardsImg,
  },
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
                    <button className="text-primary hover:text-primary/80 inline-flex items-center gap-1 text-sm font-medium">
                      Read more <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
      <FloatingSocial />
    </div>
  );
};

export default BlogPage;

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingSocial from "@/components/FloatingSocial";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle, Mail, HelpCircle, BookOpen, Gamepad2 } from "lucide-react";
import { Link } from "react-router-dom";

const helpLinks = [
  {
    icon: HelpCircle,
    title: "FAQ",
    description: "Payouts, verification, and responsible play.",
    link: "/faq",
    linkText: "Tap to view FAQ →",
  },
  {
    icon: BookOpen,
    title: "Blog & Guides",
    description: "Download guides, troubleshooting tips, and bonus information.",
    link: "/blog",
    linkText: "View blog posts →",
  },
  {
    icon: Gamepad2,
    title: "Browse Games",
    description: "Explore our collection of slots, fish games, and keno.",
    link: "/games",
    linkText: "View all games →",
  },
];

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-8">
        {/* Logo & Title Section */}
        <section className="container mx-auto px-4 py-12 text-center">
          <div className="w-64 h-40 mx-auto mb-8 bg-gradient-to-br from-red-500 to-yellow-500 rounded-2xl flex items-center justify-center">
            <span className="text-4xl font-bold text-white">JUWA</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Contact Juwa777 Support Team
          </h1>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            We're here to help! Whether you have questions about accessing Juwa777 games, need assistance with your account, or want to learn more about our free social gaming platform and features, our support team is ready to assist you.
          </p>
          <p className="text-muted-foreground mt-4">
            For quick answers to common questions, check out our <Link to="/faq" className="text-primary hover:underline">FAQ page</Link> or browse our <Link to="/blog" className="text-primary hover:underline">blog posts</Link> for detailed guides and tips.
          </p>
        </section>

        {/* How to Reach Us */}
        <section className="container mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            How to Reach Us
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Support Hours */}
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Support Hours</h3>
              <p className="text-muted-foreground mb-4">
                Our customer support team is available to assist you with any questions or concerns about the Juwa777 free social gaming platform, mobile gaming app, and online gaming experience.
              </p>
              <p className="text-muted-foreground">
                We typically respond to inquiries within 24-48 hours. For urgent matters, please use the contact form below with detailed information about your issue.
              </p>
            </div>

            {/* What We Can Help With */}
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">What We Can Help With</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Questions about accessing and playing games</li>
                <li>• Account-related inquiries</li>
                <li>• Technical support and troubleshooting</li>
                <li>• Information about our game collection</li>
                <li>• General platform questions</li>
              </ul>
            </div>
          </div>

          {/* Contact Form & Quick Links */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="bg-card rounded-2xl p-8 border border-border">
              <form className="space-y-4">
                <div>
                  <label className="text-sm text-foreground mb-2 block">Name *</label>
                  <Input placeholder="Your full name" />
                </div>
                <div>
                  <label className="text-sm text-foreground mb-2 block">Email *</label>
                  <Input type="email" placeholder="your@email.com" />
                </div>
                <div>
                  <label className="text-sm text-foreground mb-2 block">Phone Number</label>
                  <Input type="tel" placeholder="Your phone number" />
                </div>
                <div>
                  <label className="text-sm text-foreground mb-2 block">Message *</label>
                  <Textarea placeholder="How can we help you?" rows={4} />
                </div>
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Quick Contact Options */}
            <div className="space-y-4">
              <div className="bg-card rounded-xl p-6 border border-border">
                <div className="flex items-center gap-4">
                  <MessageCircle className="h-8 w-8 text-primary" />
                  <div>
                    <h4 className="font-semibold text-foreground">Live chat</h4>
                    <p className="text-muted-foreground text-sm">Chat with an agent 24/7.</p>
                  </div>
                </div>
              </div>
              <div className="bg-card rounded-xl p-6 border border-border">
                <div className="flex items-center gap-4">
                  <Mail className="h-8 w-8 text-primary" />
                  <div>
                    <h4 className="font-semibold text-foreground">Email support</h4>
                    <p className="text-muted-foreground text-sm">juwa@juwa777.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Help Links */}
        <section className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-3 gap-6">
            {helpLinks.map((item) => (
              <Link
                key={item.title}
                to={item.link}
                className="bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-colors group"
              >
                <item.icon className="h-8 w-8 text-primary mb-4" />
                <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                <p className="text-muted-foreground text-sm mb-3">{item.description}</p>
                <span className="text-primary text-sm group-hover:underline">{item.linkText}</span>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
      <FloatingSocial />
    </div>
  );
};

export default ContactPage;

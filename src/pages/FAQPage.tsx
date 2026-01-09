import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingSocial from "@/components/FloatingSocial";
import { Link } from "react-router-dom";

const faqItems = [
  {
    question: "How to Login to Top777",
    answer: "To login to Top777, you need to download and install the app first. Once installed, open the app and enter your username and password. If you don't have an account yet, you'll need to create one through the registration process. Login credentials are typically provided during account setup or by your distributor.",
    troubleshooting: [
      "Verify your username and password are correct",
      "Check your internet connection",
      "Ensure the app is updated to the latest version",
      "Try restarting the app",
      "Contact support if issues persist",
    ],
  },
  {
    question: "Download Top 777 App",
    answer: "To download Top 777, visit our website and get the download link for your device. The app is available for both Android and iOS devices. Most users receive the app through a direct download link or APK file provided by a distributor or agent.",
    troubleshooting: [
      "For Android: Enable 'Install from Unknown Sources' in settings",
      "For iOS: Trust the developer profile in Settings > General",
      "Ensure you have enough storage space",
      "Use a stable internet connection for download",
    ],
  },
  {
    question: "How to Create an Account",
    answer: "Creating a Top777 account is typically done through a distributor or agent who provides you with login credentials. Some users may be able to register directly through the app. Contact our support team if you need help setting up your account.",
    troubleshooting: [],
  },
  {
    question: "Is Top777 Free to Play?",
    answer: "Yes! Top777 is a free social gaming platform designed for entertainment purposes only. All games are free to play. There is no real-money gambling involved, and no cash payouts are offered. The platform is meant purely for fun and entertainment.",
    troubleshooting: [],
  },
  {
    question: "What Games Are Available?",
    answer: "Top777 offers over 100 games including classic slot games, fish shooting games, and keno games. Each category provides unique gameplay experiences with engaging graphics and entertaining features. Download the app to explore our full game library.",
    troubleshooting: [],
  },
  {
    question: "Technical Issues and Troubleshooting",
    answer: "If you're experiencing technical issues with the Top777 app, try the following common solutions:",
    troubleshooting: [
      "Restart the app and try again",
      "Check your internet connection",
      "Update to the latest app version",
      "Clear app cache and data",
      "Reinstall the app if issues persist",
      "Contact our support team for additional help",
    ],
  },
  {
    question: "Contact Support",
    answer: "Our support team is available to help you with any questions or issues. You can reach us through our contact page, live chat, or email at top@top777.com. We typically respond within 24-48 hours.",
    troubleshooting: [],
  },
];

const FAQPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-8">
        {/* Logo & Title Section */}
        <section className="container mx-auto px-4 py-12 text-center">
          <div className="w-64 h-40 mx-auto mb-8 bg-gradient-to-br from-red-500 to-yellow-500 rounded-2xl flex items-center justify-center">
            <span className="text-4xl font-bold text-white">TOP</span>
          </div>
          
          {/* Breadcrumb */}
          <div className="text-muted-foreground mb-4">
            <Link to="/contact" className="hover:text-primary">Contact</Link>
            <span className="mx-2">{">"}</span>
            <span>FAQ</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Frequently Asked Questions About Top777
          </h1>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Find answers to common questions about Top777 free social gaming platform. Learn about our games, how to play, platform features, and more. If you don't find what you're looking for, feel free to <Link to="/contact" className="text-primary hover:underline">contact our support team</Link>.
          </p>
        </section>

        {/* FAQ Content */}
        <section className="container mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            Top777 Frequently Asked Questions
          </h2>

          <div className="max-w-4xl mx-auto space-y-8">
            {faqItems.map((item, index) => (
              <div key={index} className="bg-card rounded-2xl p-8 border border-border">
                <h3 className="text-xl font-bold text-foreground mb-4">
                  {item.question}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {item.answer}
                </p>
                {item.troubleshooting.length > 0 && (
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">
                      Troubleshooting Steps:
                    </h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      {item.troubleshooting.map((step, stepIndex) => (
                        <li key={stepIndex}>{step}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Still have questions? We're here to help!
            </p>
            <Link
              to="/contact"
              className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Contact Support
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingSocial />
    </div>
  );
};

export default FAQPage;

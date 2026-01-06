import { Gamepad2, Shield, Smartphone, Gift, Users, Headphones } from "lucide-react";

const features = [
  {
    icon: Gamepad2,
    title: "100+ Free Games",
    description: "Massive collection of slots, fishing games, keno, and more exciting games",
  },
  {
    icon: Smartphone,
    title: "Mobile First",
    description: "Smooth gaming experience optimized for Android and iOS devices",
  },
  {
    icon: Shield,
    title: "Safe & Secure",
    description: "Advanced security technology to protect your account and gaming data",
  },
  {
    icon: Gift,
    title: "Generous Rewards",
    description: "Daily login rewards, mission rewards, referral bonuses and more",
  },
  {
    icon: Users,
    title: "Social Gaming",
    description: "Play with friends, share the fun, and win more rewards together",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Professional support team available around the clock to help you",
  },
];

const Features = () => {
  return (
    <section className="bg-card py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-foreground md:text-4xl">
          Why Choose Lucky777?
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group rounded-xl bg-background p-6 transition-all hover:glow-red"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

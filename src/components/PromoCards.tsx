import { Button } from "@/components/ui/button";

const promos = [
  {
    label: "First Deposit Bonus",
    title: "100% Welcome",
    subtitle: "Bonus",
    gradient: "gradient-red",
  },
  {
    label: "Second Deposit Bonus",
    title: "50% Reload Bonus",
    subtitle: "",
    gradient: "gradient-orange",
  },
  {
    label: "Play Together, Win Together",
    title: "$50 Referral Bonus",
    subtitle: "",
    gradient: "gradient-gold",
  },
];

const PromoCards = () => {
  return (
    <section className="py-0">
      <div className="grid grid-cols-1 md:grid-cols-3">
        {promos.map((promo, index) => (
          <div
            key={index}
            className={`${promo.gradient} flex flex-col items-center justify-center px-6 py-12 text-center text-primary-foreground`}
          >
            <p className="mb-2 text-sm font-medium opacity-90">{promo.label}</p>
            <h3 className="mb-1 text-3xl font-extrabold md:text-4xl">
              {promo.title}
            </h3>
            {promo.subtitle && (
              <p className="mb-4 text-2xl font-bold md:text-3xl">
                {promo.subtitle}
              </p>
            )}
            <Button
              variant="outline"
              className="mt-4 border-primary-foreground/50 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
            >
              Join Now
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PromoCards;

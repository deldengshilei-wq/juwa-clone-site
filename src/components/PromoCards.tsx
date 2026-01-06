import { Button } from "@/components/ui/button";

const promos = [
  {
    label: "首次充值优惠",
    title: "100% 欢迎",
    subtitle: "奖励",
    gradient: "gradient-red",
  },
  {
    label: "第二次充值优惠",
    title: "50% 续充奖励",
    subtitle: "",
    gradient: "gradient-orange",
  },
  {
    label: "一起玩更有趣",
    title: "¥50 推荐奖励",
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
              立即加入
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PromoCards;

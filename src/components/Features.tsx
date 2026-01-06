import { Gamepad2, Shield, Smartphone, Gift, Users, Headphones } from "lucide-react";

const features = [
  {
    icon: Gamepad2,
    title: "100+ 免费游戏",
    description: "海量老虎机、捕鱼游戏、基诺等精彩游戏等你体验",
  },
  {
    icon: Smartphone,
    title: "移动端优先",
    description: "专为 Android 和 iOS 设备优化的流畅游戏体验",
  },
  {
    icon: Shield,
    title: "安全可靠",
    description: "采用先进的安全技术保护您的账户和游戏数据",
  },
  {
    icon: Gift,
    title: "丰厚奖励",
    description: "每日登录奖励、任务奖励、推荐奖励等你来拿",
  },
  {
    icon: Users,
    title: "社交互动",
    description: "与好友一起游戏，分享快乐，赢取更多奖励",
  },
  {
    icon: Headphones,
    title: "24/7 客服",
    description: "专业客服团队全天候为您提供帮助和支持",
  },
];

const Features = () => {
  return (
    <section className="bg-card py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-foreground md:text-4xl">
          为什么选择 Lucky777?
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

import { Sparkles, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Logo & Description */}
          <div className="md:col-span-1">
            <a href="#" className="mb-4 flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent">
                <Sparkles className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">
                Lucky<span className="text-primary">777</span>
              </span>
            </a>
            <p className="text-sm text-muted-foreground">
              Lucky777 是一个免费社交游戏平台，仅供娱乐目的。
              请理性游戏，18+仅限。
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 font-semibold text-foreground">快速链接</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary">首页</a></li>
              <li><a href="#games" className="hover:text-primary">游戏</a></li>
              <li><a href="#about" className="hover:text-primary">关于我们</a></li>
              <li><a href="#contact" className="hover:text-primary">联系我们</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="mb-4 font-semibold text-foreground">支持</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary">常见问题</a></li>
              <li><a href="#" className="hover:text-primary">帮助中心</a></li>
              <li><a href="#" className="hover:text-primary">隐私政策</a></li>
              <li><a href="#" className="hover:text-primary">服务条款</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="mb-4 font-semibold text-foreground">关注我们</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-background text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-background text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-background text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-background text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>© 2024 Lucky777. 保留所有权利。仅供娱乐目的。</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

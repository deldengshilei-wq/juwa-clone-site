import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Sparkles } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo.png";
import { siteConfig } from "@/config/site.config";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Games", href: "/games" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      {/* Top banner */}
      <div className="bg-primary py-2 text-center text-sm text-primary-foreground">
        <span className="inline-flex items-center gap-2">
          ⚠️ 18+ Only | For Entertainment Purposes Only | Play Responsibly
        </span>
      </div>

      {/* Main header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="Top777 Logo" className="h-10 w-auto object-contain rounded-lg" />
            <span className="text-xl font-bold text-foreground">
              Top<span className="text-primary">777</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === link.href ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden items-center gap-3 md:flex">
            <Button variant="outline" size="sm" asChild>
              <Link to="/faq">FAQ</Link>
            </Button>
            <Button size="sm" className="gap-2" asChild>
              <a href={siteConfig.facebookHome} target="_blank" rel="noopener noreferrer">
                <Sparkles className="h-4 w-4" />
                Play now
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="border-t border-border bg-background md:hidden">
            <nav className="container mx-auto flex flex-col gap-4 px-4 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    location.pathname === link.href ? "text-primary" : "text-muted-foreground"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex flex-col gap-2 pt-4">
                <Button variant="outline" size="sm" asChild>
                  <Link to="/faq" onClick={() => setMobileMenuOpen(false)}>FAQ</Link>
                </Button>
                <Button size="sm" className="gap-2" asChild>
                  <a href={siteConfig.facebookHome} target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)}>
                    <Sparkles className="h-4 w-4" />
                    Play now
                  </a>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;

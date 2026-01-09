import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-muted py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Logo & Description */}
          <div>
            <Link to="/" className="mb-4 flex items-center gap-2">
              <img src={logo} alt="Top777 Logo" className="h-10 w-10 rounded-lg" />
              <span className="text-xl font-bold text-foreground">
                Top<span className="text-primary">777</span>
              </span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Top777 is a free social gaming platform for entertainment purposes only.
              Please play responsibly. 18+ only.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 font-semibold text-foreground">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/" className="hover:text-primary">Home</Link></li>
              <li><Link to="/games" className="hover:text-primary">Games</Link></li>
              <li><Link to="/about" className="hover:text-primary">About Us</Link></li>
              <li><Link to="/blog" className="hover:text-primary">Blog</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="mb-4 font-semibold text-foreground">Support</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/faq" className="hover:text-primary">FAQ</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>© 2024 Top777. All rights reserved. For entertainment purposes only.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

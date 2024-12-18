import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <div className="bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-gray-200/20">
        <ul className="flex items-center gap-6">
          <li>
            <Link to="/" className="text-gray-600 hover:text-primary transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link to="#features" className="text-gray-600 hover:text-primary transition-colors">
              Features
            </Link>
          </li>
          <li>
            <Link to="/how-it-works" className="text-gray-600 hover:text-primary transition-colors">
              How it Works
            </Link>
          </li>
          <li>
            <Button variant="ghost" className="text-primary hover:text-primary-dark">
              Try Now
            </Button>
          </li>
        </ul>
      </div>
    </nav>
  );
};
import { ShoppingCart, Search, Menu, User } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "../contexts/CartContext";

export function Header() {
  const location = useLocation();
  const { totalItems } = useCart();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="md:hidden">
              <Menu className="h-6 w-6" />
            </Button>
            <Link to="/" className="font-bold text-2xl hover:text-primary transition-colors">
              Soumya
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/shop" 
              className={`hover:text-primary transition-colors ${isActive('/shop') ? 'text-primary' : ''}`}
            >
              Shop
            </Link>
            <Link 
              to="/about" 
              className={`hover:text-primary transition-colors ${isActive('/about') ? 'text-primary' : ''}`}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className={`hover:text-primary transition-colors ${isActive('/contact') ? 'text-primary' : ''}`}
            >
              Contact
            </Link>
            <a href="#" className="hover:text-primary transition-colors">Sale</a>
          </nav>

          {/* Search and Actions */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-2">
              <Search className="h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search shoes..." 
                className="w-64"
              />
            </div>
            <Link to="/account">
              <Button variant="ghost" size="sm">
                <User className="h-5 w-5" />
              </Button>
            </Link>
            <Link to="/cart">
              <Button variant="ghost" size="sm" className="relative">
                <ShoppingCart className="h-5 w-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 h-4 w-4 bg-primary text-primary-foreground rounded-full text-xs flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
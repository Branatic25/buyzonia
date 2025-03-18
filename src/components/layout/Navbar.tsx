import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search, ShoppingCart, Heart, User, Menu, X, ChevronDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";

import { useCart } from "@/hooks/use-cart";

const categories = [
  { name: "Smartphones", path: "/category/smartphones" },
  { name: "Laptops", path: "/category/laptops" },
  { name: "Tablets", path: "/category/tablets" },
  { name: "Audio", path: "/category/audio" },
  { name: "TVs", path: "/category/tvs" },
  { name: "Cameras", path: "/category/cameras" },
  { name: "Gaming", path: "/category/gaming" },
  { name: "Accessories", path: "/category/accessories" },
];

export function Navbar() {
  const { items } = useCart();
  const [searchQuery, setSearchQuery] = useState("");
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Navigate to search results page with the query
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="container flex h-16 items-center">
        {/* Logo */}
        <Link to="/" className="mr-4 flex items-center gap-2">
          <span className="text-xl font-bold text-brand-blue">Buyzonia</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:gap-6 lg:gap-10">
          <div className="relative group">
            <button className="flex items-center gap-1">
              Categories <ChevronDown size={16} />
            </button>
            <div className="absolute left-0 top-full z-50 hidden w-56 rounded-md border bg-background p-2 shadow-md group-hover:block">
              <ul className="grid gap-1">
                {categories.map((category) => (
                  <li key={category.path}>
                    <Link
                      to={category.path}
                      className="block rounded-sm px-3 py-2 text-sm hover:bg-muted"
                    >
                      {category.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <Link to="/deals" className="text-foreground hover:text-brand-blue">
            Deals
          </Link>
          <Link to="/new-arrivals" className="text-foreground hover:text-brand-blue">
            New Arrivals
          </Link>
          <Link to="/bestsellers" className="text-foreground hover:text-brand-blue">
            Best Sellers
          </Link>
        </nav>

        {/* Desktop Search */}
        <div className="hidden flex-1 px-4 md:block">
          <form onSubmit={handleSearch} className="relative">
            <Input
              type="search"
              placeholder="Search for products..."
              className="w-full max-w-lg pl-4 pr-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button
              type="submit"
              size="icon"
              variant="ghost"
              className="absolute right-0 top-0 h-full"
            >
              <Search size={18} />
            </Button>
          </form>
        </div>

        {/* Desktop Actions */}
        <div className="ml-auto flex items-center gap-1">
          <Link to="/account" className="hidden md:flex md:h-9 md:w-9 md:items-center md:justify-center md:rounded-full md:hover:bg-muted">
            <User size={20} />
          </Link>
          <Link to="/wishlist" className="hidden md:flex md:h-9 md:w-9 md:items-center md:justify-center md:rounded-full md:hover:bg-muted">
            <Heart size={20} />
          </Link>
          <Link to="/cart" className="relative flex h-9 w-9 items-center justify-center rounded-full hover:bg-muted">
            <ShoppingCart size={20} />
            {items.length > 0 && (
              <Badge variant="destructive" className="absolute -right-1 -top-1 h-5 w-5 p-0 flex items-center justify-center">
                {items.length}
              </Badge>
            )}
          </Link>

          {/* Mobile Search Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setShowMobileSearch(!showMobileSearch)}
          >
            <Search size={20} />
          </Button>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu size={20} />
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="grid gap-6 py-6">
                <Link to="/" className="flex items-center gap-2">
                  <span className="text-xl font-bold text-brand-blue">Buyzonia</span>
                </Link>
                <nav className="grid gap-3">
                  <h3 className="text-sm font-medium">Categories</h3>
                  {categories.map((category) => (
                    <Link
                      key={category.path}
                      to={category.path}
                      className="text-sm text-muted-foreground hover:text-foreground"
                    >
                      {category.name}
                    </Link>
                  ))}
                  <hr className="my-2" />
                  <Link
                    to="/deals"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Deals
                  </Link>
                  <Link
                    to="/new-arrivals"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    New Arrivals
                  </Link>
                  <Link
                    to="/bestsellers"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Best Sellers
                  </Link>
                  <hr className="my-2" />
                  <Link
                    to="/account"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    My Account
                  </Link>
                  <Link
                    to="/wishlist"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Wishlist
                  </Link>
                  <Link
                    to="/orders"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Track Orders
                  </Link>
                  <Link
                    to="/support"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Customer Support
                  </Link>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Mobile Search Bar (conditionally rendered) */}
      {showMobileSearch && (
        <div className="border-t p-2 md:hidden">
          <form onSubmit={handleSearch} className="relative">
            <Input
              type="search"
              placeholder="Search for products..."
              className="w-full pl-4 pr-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button
              type="submit"
              size="icon"
              variant="ghost"
              className="absolute right-0 top-0 h-full"
            >
              <Search size={18} />
            </Button>
          </form>
        </div>
      )}
    </header>
  );
}

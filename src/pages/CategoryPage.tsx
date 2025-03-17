
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Filter, ChevronDown, SlidersHorizontal, X, ShoppingCart } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ProductGrid } from "@/components/products/ProductGrid";
import { getProductsByCategory, categories } from "@/data/products";
import { 
  Sheet, 
  SheetContent, 
  SheetHeader, 
  SheetTitle, 
  SheetTrigger, 
  SheetFooter,
  SheetClose
} from "@/components/ui/sheet";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const CategoryPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const category = categories.find(cat => cat.slug === slug);
  const products = getProductsByCategory(category?.id || "");
  
  const [sortOrder, setSortOrder] = useState("featured");
  const [priceRange, setPriceRange] = useState([0, 3000]);
  const [showFilters, setShowFilters] = useState(false);

  // For demonstration only
  const brands = ["Apple", "Samsung", "Google", "Sony", "Dell", "Canon", "Bose", "Nintendo", "ASUS"];
  
  // This would normally filter products based on the selected filters
  const filteredProducts = products;
  
  if (!category) {
    return (
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="container flex-1 py-16">
          <div className="mx-auto max-w-lg text-center">
            <h1 className="mb-4 text-2xl font-bold">Category Not Found</h1>
            <p className="mb-6 text-muted-foreground">
              Sorry, we couldn't find the category you're looking for.
            </p>
            <Button asChild>
              <Link to="/">Return to Homepage</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="bg-muted py-6">
          <div className="container">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h1 className="text-2xl font-bold md:text-3xl">{category.name}</h1>
                <div className="mt-1 flex items-center text-sm text-muted-foreground">
                  <Link to="/" className="hover:text-foreground">
                    Home
                  </Link>
                  <span className="mx-2">/</span>
                  <span>{category.name}</span>
                </div>
              </div>
              <div className="mt-4 flex items-center sm:mt-0">
                <span className="mr-2 text-sm text-muted-foreground">
                  {filteredProducts.length} products
                </span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="container py-8">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
            {/* Sort & Filter Controls */}
            <div className="flex flex-wrap gap-2">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" className="gap-1">
                    <Filter size={16} />
                    <span className="hidden sm:inline">Filters</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                  <SheetHeader>
                    <SheetTitle>Filters</SheetTitle>
                  </SheetHeader>
                  <div className="py-4">
                    <div className="mb-5">
                      <h4 className="mb-2 text-sm font-semibold">Price Range</h4>
                      <Slider
                        defaultValue={[0, 3000]}
                        max={3000}
                        step={10}
                        onValueChange={(value) => setPriceRange(value)}
                      />
                      <div className="mt-2 flex items-center justify-between text-sm">
                        <span>${priceRange[0]}</span>
                        <span>${priceRange[1]}</span>
                      </div>
                    </div>
                    
                    <Separator className="my-4" />
                    
                    <div className="mb-5">
                      <h4 className="mb-2 text-sm font-semibold">Brands</h4>
                      <div className="space-y-2">
                        {brands.map((brand) => (
                          <div key={brand} className="flex items-center">
                            <Checkbox id={`brand-${brand}`} />
                            <label
                              htmlFor={`brand-${brand}`}
                              className="ml-2 text-sm"
                            >
                              {brand}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <Separator className="my-4" />
                    
                    <div className="mb-5">
                      <h4 className="mb-2 text-sm font-semibold">Availability</h4>
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <Checkbox id="in-stock" />
                          <label htmlFor="in-stock" className="ml-2 text-sm">
                            In Stock
                          </label>
                        </div>
                        <div className="flex items-center">
                          <Checkbox id="on-sale" />
                          <label htmlFor="on-sale" className="ml-2 text-sm">
                            On Sale
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <SheetFooter>
                    <SheetClose asChild>
                      <Button className="w-full">Apply Filters</Button>
                    </SheetClose>
                  </SheetFooter>
                </SheetContent>
              </Sheet>
              
              <Button
                variant={showFilters ? "default" : "outline"}
                className="gap-1"
                onClick={() => setShowFilters(!showFilters)}
              >
                <SlidersHorizontal size={16} />
                <span className="hidden sm:inline">
                  {showFilters ? "Hide Filters" : "Show Filters"}
                </span>
              </Button>
            </div>
            
            {/* Sort Control */}
            <div className="flex items-center">
              <span className="mr-2 text-sm text-muted-foreground">Sort by:</span>
              <Select value={sortOrder} onValueChange={setSortOrder}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort Order" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="newest">Newest First</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="grid gap-8 md:grid-cols-4">
            {/* Filters Sidebar (Desktop) */}
            {showFilters && (
              <div className="hidden md:block">
                <div className="rounded-lg border bg-card p-6">
                  <div className="mb-6">
                    <div className="mb-2 flex items-center justify-between">
                      <h3 className="font-semibold">Filters</h3>
                      <Button variant="ghost" size="sm" className="h-8 px-2">
                        Reset
                      </Button>
                    </div>
                    <Separator className="my-2" />
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="mb-3 text-sm font-semibold">Price Range</h4>
                      <Slider
                        defaultValue={[0, 3000]}
                        max={3000}
                        step={10}
                        onValueChange={(value) => setPriceRange(value)}
                      />
                      <div className="mt-2 flex items-center justify-between text-sm">
                        <span>${priceRange[0]}</span>
                        <span>${priceRange[1]}</span>
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <h4 className="mb-3 text-sm font-semibold">Brands</h4>
                      <div className="space-y-2">
                        {brands.map((brand) => (
                          <div key={brand} className="flex items-center">
                            <Checkbox id={`brand-${brand}-desktop`} />
                            <label
                              htmlFor={`brand-${brand}-desktop`}
                              className="ml-2 text-sm"
                            >
                              {brand}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <h4 className="mb-3 text-sm font-semibold">Availability</h4>
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <Checkbox id="in-stock-desktop" />
                          <label htmlFor="in-stock-desktop" className="ml-2 text-sm">
                            In Stock
                          </label>
                        </div>
                        <div className="flex items-center">
                          <Checkbox id="on-sale-desktop" />
                          <label htmlFor="on-sale-desktop" className="ml-2 text-sm">
                            On Sale
                          </label>
                        </div>
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <Button className="w-full">Apply Filters</Button>
                  </div>
                </div>
              </div>
            )}
            
            {/* Mobile Filters (Active Filters) */}
            {showFilters && (
              <div className="mb-4 md:hidden">
                <div className="rounded-lg border bg-card p-4">
                  <h3 className="mb-2 font-semibold">Active Filters</h3>
                  <div className="flex flex-wrap gap-2">
                    <div className="flex items-center rounded-full bg-muted px-3 py-1 text-xs">
                      Price: $0 - $3000
                      <button className="ml-1">
                        <X size={14} />
                      </button>
                    </div>
                    <div className="flex items-center rounded-full bg-muted px-3 py-1 text-xs">
                      In Stock
                      <button className="ml-1">
                        <X size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {/* Products Grid */}
            <div className={showFilters ? "md:col-span-3" : "md:col-span-4"}>
              {filteredProducts.length === 0 ? (
                <div className="flex flex-col items-center justify-center rounded-lg border bg-card py-16 text-center">
                  <div className="mb-4 rounded-full bg-muted p-3">
                    <ShoppingCart size={24} className="text-muted-foreground" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">No products found</h3>
                  <p className="mb-6 text-muted-foreground">
                    Try adjusting your filters or search terms
                  </p>
                  <Button onClick={() => setShowFilters(true)}>
                    Adjust Filters
                  </Button>
                </div>
              ) : (
                <ProductGrid
                  products={filteredProducts}
                  columns={showFilters ? 3 : 4}
                />
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CategoryPage;

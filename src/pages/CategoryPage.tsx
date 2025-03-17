
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { SlidersHorizontal } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ProductGrid } from "@/components/products/ProductGrid";
import { getProductsByCategory, categories } from "@/data/products";
import { CategoryHeader } from "@/components/category/CategoryHeader";
import { FilterDrawer } from "@/components/category/FilterDrawer";
import { SortControls } from "@/components/category/SortControls";
import { FilterSidebar } from "@/components/category/FilterSidebar";
import { ActiveFilters } from "@/components/category/ActiveFilters";
import { EmptyProductsState } from "@/components/category/EmptyProductsState";

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
        <CategoryHeader 
          categoryName={category.name} 
          productCount={filteredProducts.length} 
        />
        
        <div className="container py-8">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
            {/* Sort & Filter Controls */}
            <div className="flex flex-wrap gap-2">
              <FilterDrawer 
                priceRange={priceRange}
                setPriceRange={setPriceRange}
                brands={brands}
              />
              
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
            <SortControls 
              sortOrder={sortOrder} 
              setSortOrder={setSortOrder} 
            />
          </div>
          
          <div className="grid gap-8 md:grid-cols-4">
            {/* Filters Sidebar (Desktop) */}
            {showFilters && (
              <FilterSidebar 
                priceRange={priceRange}
                setPriceRange={setPriceRange}
                brands={brands}
              />
            )}
            
            {/* Mobile Filters (Active Filters) */}
            {showFilters && (
              <ActiveFilters priceRange={priceRange} />
            )}
            
            {/* Products Grid */}
            <div className={showFilters ? "md:col-span-3" : "md:col-span-4"}>
              {filteredProducts.length === 0 ? (
                <EmptyProductsState onAdjustFilters={() => setShowFilters(true)} />
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

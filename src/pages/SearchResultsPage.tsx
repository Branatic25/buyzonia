
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ProductGrid } from "@/components/products/ProductGrid";
import { searchProducts } from "@/data/products";
import { EmptyProductsState } from "@/components/category/EmptyProductsState";
import { useNavigate } from "react-router-dom";

const SearchResultsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get("q") || "";
  
  const [searchResults, setSearchResults] = useState(searchProducts(query));

  useEffect(() => {
    // Update search results when query changes
    setSearchResults(searchProducts(query));
  }, [query]);

  const handleAdjustSearch = () => {
    // Navigate back to home page
    navigate("/");
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 py-12">
        <div className="container">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Search Results</h1>
            {query && (
              <p className="text-muted-foreground">
                Results for "{query}"
              </p>
            )}
          </div>
          
          {searchResults.length > 0 ? (
            <ProductGrid 
              products={searchResults}
              title=""
              subtitle=""
            />
          ) : (
            <EmptyProductsState onAdjustFilters={handleAdjustSearch} />
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SearchResultsPage;

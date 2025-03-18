
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ProductGrid } from "@/components/products/ProductGrid";
import { getBestSellerProducts } from "@/data/products";

const BestSellersPage = () => {
  const bestSellerProducts = getBestSellerProducts();

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 py-12">
        <div className="container">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Best Sellers</h1>
            <p className="text-muted-foreground">
              Our most popular products that customers love.
            </p>
          </div>
          
          {bestSellerProducts.length > 0 ? (
            <ProductGrid 
              products={bestSellerProducts}
              title=""
              subtitle=""
            />
          ) : (
            <div className="text-center py-12">
              <p>No best sellers data available at the moment. Check back soon!</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BestSellersPage;

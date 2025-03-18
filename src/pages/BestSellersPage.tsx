
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ProductGrid } from "@/components/products/ProductGrid";
import { getBestSellerProducts } from "@/data/products";

const BestSellersPage = () => {
  const bestSellerProducts = getBestSellerProducts();

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 bg-gradient-to-b from-background to-muted/30 py-16">
        <div className="container">
          <div className="mb-10 text-center">
            <div className="mx-auto mb-3 w-fit rounded-full bg-brand-green/10 px-4 py-1 text-sm font-medium text-brand-green">
              Customer Favorites
            </div>
            <h1 className="text-3xl font-bold mb-2">Best Sellers</h1>
            <p className="text-muted-foreground mx-auto max-w-2xl">
              Our most popular products that customers love. Trusted by thousands and highly rated.
            </p>
          </div>
          
          {bestSellerProducts.length > 0 ? (
            <ProductGrid 
              products={bestSellerProducts}
              title=""
              subtitle=""
            />
          ) : (
            <div className="text-center py-12 bg-muted/50 rounded-xl">
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

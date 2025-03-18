
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ProductGrid } from "@/components/products/ProductGrid";
import { products } from "@/data/products";

const DealsPage = () => {
  // Filter products with discounts
  const discountedProducts = products.filter(product => product.discount && product.discount > 0)
    .sort((a, b) => (b.discount || 0) - (a.discount || 0));

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 py-12">
        <div className="container">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Deals & Discounts</h1>
            <p className="text-muted-foreground">
              Take advantage of our limited-time discounts on popular products.
            </p>
          </div>
          
          {discountedProducts.length > 0 ? (
            <ProductGrid 
              products={discountedProducts}
              title=""
              subtitle=""
            />
          ) : (
            <div className="text-center py-12">
              <p>No deals available at the moment. Check back soon!</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DealsPage;

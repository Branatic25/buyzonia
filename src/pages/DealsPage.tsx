
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
      <main className="flex-1 bg-gradient-to-b from-background to-muted/30 py-16">
        <div className="container">
          <div className="mb-10 text-center">
            <div className="mx-auto mb-3 w-fit rounded-full bg-brand-red/10 px-4 py-1 text-sm font-medium text-brand-red">
              Limited Time Offers
            </div>
            <h1 className="text-3xl font-bold mb-2">Deals & Discounts</h1>
            <p className="text-muted-foreground mx-auto max-w-2xl">
              Take advantage of our limited-time discounts on popular products. Great tech at unbeatable prices.
            </p>
          </div>
          
          {discountedProducts.length > 0 ? (
            <ProductGrid 
              products={discountedProducts}
              title=""
              subtitle=""
            />
          ) : (
            <div className="text-center py-12 bg-muted/50 rounded-xl">
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

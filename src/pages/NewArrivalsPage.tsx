
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ProductGrid } from "@/components/products/ProductGrid";
import { getNewProducts } from "@/data/products";

const NewArrivalsPage = () => {
  const newProducts = getNewProducts();

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 bg-gradient-to-b from-background to-muted/30 py-16">
        <div className="container">
          <div className="mb-10 text-center">
            <div className="mx-auto mb-3 w-fit rounded-full bg-brand-blue/10 px-4 py-1 text-sm font-medium text-brand-blue">
              Just Launched
            </div>
            <h1 className="text-3xl font-bold mb-2">New Arrivals</h1>
            <p className="text-muted-foreground mx-auto max-w-2xl">
              Check out our latest products that just hit the shelves. Be the first to experience cutting-edge technology.
            </p>
          </div>
          
          {newProducts.length > 0 ? (
            <ProductGrid 
              products={newProducts}
              title=""
              subtitle=""
            />
          ) : (
            <div className="text-center py-12 bg-muted/50 rounded-xl">
              <p>No new arrivals at the moment. Check back soon!</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NewArrivalsPage;

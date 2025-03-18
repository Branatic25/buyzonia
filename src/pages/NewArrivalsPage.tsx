
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ProductGrid } from "@/components/products/ProductGrid";
import { getNewProducts } from "@/data/products";

const NewArrivalsPage = () => {
  const newProducts = getNewProducts();

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 py-12">
        <div className="container">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">New Arrivals</h1>
            <p className="text-muted-foreground">
              Check out our latest products that just hit the shelves.
            </p>
          </div>
          
          {newProducts.length > 0 ? (
            <ProductGrid 
              products={newProducts}
              title=""
              subtitle=""
            />
          ) : (
            <div className="text-center py-12">
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

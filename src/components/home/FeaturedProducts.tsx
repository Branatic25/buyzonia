
import { ProductGrid } from "@/components/products/ProductGrid";
import { getFeaturedProducts } from "@/data/products";

export function FeaturedProducts() {
  const featuredProducts = getFeaturedProducts().slice(0, 4);
  
  return (
    <div className="bg-muted py-12 md:py-16">
      <div className="container">
        <ProductGrid 
          products={featuredProducts}
          title="Featured Products"
          subtitle="Our handpicked selection of premium electronics"
        />
      </div>
    </div>
  );
}

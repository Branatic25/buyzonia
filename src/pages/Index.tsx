
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroBanner } from "@/components/home/HeroBanner";
import { CategoryShowcase } from "@/components/home/CategoryShowcase";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { PromoBanners } from "@/components/home/PromoBanners";
import { CartProvider } from "@/hooks/use-cart";
import { getTrendingProducts, getBestSellerProducts } from "@/data/products";
import { ProductGrid } from "@/components/products/ProductGrid";

const Index = () => {
  const trendingProducts = getTrendingProducts().slice(0, 4);
  const bestSellerProducts = getBestSellerProducts().slice(0, 4);

  return (
    <CartProvider>
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">
          <HeroBanner />
          <CategoryShowcase />
          <FeaturedProducts />
          
          <div className="bg-background py-12 md:py-16">
            <div className="container">
              <ProductGrid 
                products={trendingProducts}
                title="Trending Now"
                subtitle="See what our customers are loving this season"
              />
            </div>
          </div>
          
          <PromoBanners />
          
          <div className="bg-muted py-12 md:py-16">
            <div className="container">
              <ProductGrid 
                products={bestSellerProducts}
                title="Best Sellers"
                subtitle="Our most popular products based on sales"
              />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
};

export default Index;

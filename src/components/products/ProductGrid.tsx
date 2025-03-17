
import { Product } from "@/data/products";
import { ProductCard } from "./ProductCard";

interface ProductGridProps {
  products: Product[];
  title?: string;
  subtitle?: string;
  columns?: number;
}

export function ProductGrid({ 
  products, 
  title, 
  subtitle,
  columns = 4 
}: ProductGridProps) {
  const getColumnClass = () => {
    switch(columns) {
      case 2: return 'sm:grid-cols-2';
      case 3: return 'sm:grid-cols-2 lg:grid-cols-3';
      case 5: return 'sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5';
      case 6: return 'sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6';
      default: return 'sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4';
    }
  };

  return (
    <div>
      {(title || subtitle) && (
        <div className="mb-6 text-center md:mb-8">
          {title && <h2 className="text-2xl font-bold md:text-3xl">{title}</h2>}
          {subtitle && <p className="mt-2 text-muted-foreground">{subtitle}</p>}
        </div>
      )}
      
      <div className={`grid grid-cols-1 gap-4 md:gap-6 ${getColumnClass()}`}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}


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
    <div className="animate-fade-in">
      {(title || subtitle) && (
        <div className="mb-8 text-center md:mb-10">
          {title && (
            <>
              <div className="mx-auto mb-3 w-fit rounded-full bg-brand-blue/10 px-4 py-1 text-sm font-medium text-brand-blue">
                Featured Selection
              </div>
              <h2 className="text-2xl font-bold md:text-3xl">{title}</h2>
            </>
          )}
          {subtitle && <p className="mt-2 mx-auto max-w-2xl text-muted-foreground">{subtitle}</p>}
        </div>
      )}
      
      <div className={`grid grid-cols-1 gap-6 md:gap-6 ${getColumnClass()}`}>
        {products.map((product) => (
          <div key={product.id} className="transform transition-transform duration-300 hover:-translate-y-1">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}

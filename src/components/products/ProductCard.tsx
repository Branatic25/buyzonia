
import { Link } from "react-router-dom";
import { Heart, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Product } from "@/data/products";
import { useCart } from "@/hooks/use-cart";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

interface ProductCardProps {
  product: Product;
  featured?: boolean;
}

export function ProductCard({ product, featured = false }: ProductCardProps) {
  const { addItem } = useCart();
  const [isLoading, setIsLoading] = useState(false);
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsLoading(true);
    
    // Simulate network request
    setTimeout(() => {
      addItem(product, 1);
      setIsLoading(false);
    }, 500);
  };
  
  const discount = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) 
    : 0;

  return (
    <div className={`product-card ${featured ? 'h-full' : ''}`}>
      <Link to={`/product/${product.slug}`} className="relative block overflow-hidden">
        <div className="aspect-square overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name} 
            className="product-image"
          />
        </div>
        
        {product.isNew && (
          <Badge className="badge-new">New</Badge>
        )}

        {discount > 0 && !product.isNew && (
          <Badge className="badge-sale">{discount}% OFF</Badge>
        )}
        
        {product.stock < 5 && product.stock > 0 && (
          <Badge variant="outline" className="absolute left-2 top-2 bg-white/80 text-xs font-medium text-brand-dark">
            Only {product.stock} left
          </Badge>
        )}
        
        {product.stock === 0 && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/40">
            <Badge variant="outline" className="bg-white/90 px-3 py-1.5 text-sm font-bold text-brand-red">
              Out of Stock
            </Badge>
          </div>
        )}
      </Link>
      
      {/* Product Info */}
      <div className="p-4">
        <div className="mb-1">
          <Link to={`/category/${product.categoryId}`} className="text-xs font-medium text-muted-foreground hover:text-brand-blue">
            {product.category}
          </Link>
        </div>
        
        <Link to={`/product/${product.slug}`} className="group">
          <h3 className="mb-1 text-base font-medium line-clamp-2 group-hover:text-brand-blue">
            {product.name}
          </h3>
        </Link>
        
        <div className="mb-2 flex items-center">
          <div className="flex items-center gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg
                key={i}
                className={`h-4 w-4 ${
                  i < Math.floor(product.rating) ? "fill-brand-yellow text-brand-yellow" : "fill-gray-200 text-gray-200"
                }`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            ))}
            <span className="ml-1 text-xs text-muted-foreground">({product.reviewCount})</span>
          </div>
        </div>
        
        <div className="mb-4 flex items-center">
          {product.originalPrice && (
            <span className="price-original">${product.originalPrice.toFixed(2)}</span>
          )}
          <span className="price-current">${product.price.toFixed(2)}</span>
          {discount > 0 && (
            <span className="price-discount">Save {discount}%</span>
          )}
        </div>
        
        <div className="flex gap-2">
          <Button 
            variant="outline" 
            size="icon" 
            className="h-9 w-9 rounded-md flex-shrink-0"
            aria-label="Add to Wishlist"
          >
            <Heart size={18} className="text-muted-foreground" />
          </Button>
          
          <Button 
            className="h-9 w-full rounded-md bg-brand-blue text-white hover:bg-brand-blue/90 flex-1"
            onClick={handleAddToCart}
            disabled={isLoading || product.stock === 0}
          >
            {isLoading ? (
              <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
            ) : (
              <>
                <ShoppingCart size={18} className="mr-1.5" />
                Add to Cart
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}

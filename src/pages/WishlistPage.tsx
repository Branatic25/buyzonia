
import { Link } from "react-router-dom";
import { Heart, Trash2, ShoppingCart } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useCart } from "@/hooks/use-cart";
import { getTrendingProducts } from "@/data/products";

// This is a demo wishlist page using trending products as dummy data
// In a real application, this would use a separate wishlist state/API
const WishlistPage = () => {
  // Using trending products as demo data for the wishlist
  const [wishlistItems, setWishlistItems] = useState(getTrendingProducts().slice(0, 3));
  const { addItem } = useCart();
  
  const removeFromWishlist = (productId: string) => {
    setWishlistItems((prev) => prev.filter((item) => item.id !== productId));
  };
  
  const moveToCart = (productId: string) => {
    const product = wishlistItems.find((item) => item.id === productId);
    if (product) {
      addItem(product, 1);
      removeFromWishlist(productId);
    }
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 py-10">
        <div className="container">
          <h1 className="mb-6 text-3xl font-bold">My Wishlist</h1>
          
          {wishlistItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center rounded-lg border py-16 text-center">
              <Heart size={48} className="mb-4 text-muted-foreground" />
              <h2 className="mb-2 text-xl font-semibold">Your wishlist is empty</h2>
              <p className="mb-6 text-muted-foreground">
                Save items you love to your wishlist and revisit them anytime.
              </p>
              <Button asChild>
                <Link to="/">Start Shopping</Link>
              </Button>
            </div>
          ) : (
            <div className="rounded-lg border bg-card">
              <div className="p-6">
                <div className="mb-4 flex items-center justify-between">
                  <h2 className="text-xl font-semibold">Saved Items ({wishlistItems.length})</h2>
                  <Button variant="ghost" size="sm">
                    Clear All
                  </Button>
                </div>
                
                <div className="space-y-4">
                  {wishlistItems.map((product) => (
                    <div
                      key={product.id}
                      className="grid grid-cols-1 gap-4 rounded-lg border p-4 sm:grid-cols-12"
                    >
                      <div className="sm:col-span-2">
                        <Link to={`/product/${product.slug}`}>
                          <img
                            src={product.image}
                            alt={product.name}
                            className="h-24 w-24 rounded-md object-cover"
                          />
                        </Link>
                      </div>
                      
                      <div className="flex flex-col justify-between sm:col-span-6">
                        <div>
                          <Link
                            to={`/product/${product.slug}`}
                            className="font-medium hover:text-brand-blue"
                          >
                            {product.name}
                          </Link>
                          <p className="mt-1 text-sm text-muted-foreground">
                            {product.brand}
                          </p>
                        </div>
                        
                        <div className="mt-2 flex items-center text-sm">
                          <span
                            className={`rounded-full px-2 py-1 text-xs ${
                              product.stock > 0
                                ? "bg-green-100 text-green-800"
                                : "bg-red-100 text-red-800"
                            }`}
                          >
                            {product.stock > 0 ? "In Stock" : "Out of Stock"}
                          </span>
                        </div>
                      </div>
                      
                      <div className="flex items-center sm:col-span-2">
                        <div className="text-right">
                          <div className="text-lg font-semibold">
                            ${product.price.toFixed(2)}
                          </div>
                          {product.originalPrice && (
                            <div className="text-sm text-muted-foreground line-through">
                              ${product.originalPrice.toFixed(2)}
                            </div>
                          )}
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2 sm:col-span-2">
                        <Button
                          className="flex-1"
                          onClick={() => moveToCart(product.id)}
                          disabled={product.stock === 0}
                        >
                          <ShoppingCart size={16} className="mr-2" />
                          <span className="hidden sm:inline">Move to Cart</span>
                          <span className="sm:hidden">Add</span>
                        </Button>
                        
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => removeFromWishlist(product.id)}
                        >
                          <Trash2 size={16} />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default WishlistPage;

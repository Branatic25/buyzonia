
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Minus, Plus, ShoppingCart, Heart, Share2, ArrowLeft, Star, Check, X, Info, Truck, RotateCcw, Shield } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProductGrid } from "@/components/products/ProductGrid";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/hooks/use-cart";
import { getProductBySlug, getRelatedProducts } from "@/data/products";

const ProductPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = getProductBySlug(slug || "");
  const relatedProducts = product ? getRelatedProducts(product.id).slice(0, 4) : [];
  
  const { addItem } = useCart();
  const [selectedImage, setSelectedImage] = useState(product?.image || "");
  const [quantity, setQuantity] = useState(1);
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  
  if (!product) {
    return (
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="container flex-1 py-16">
          <div className="mx-auto max-w-lg text-center">
            <h1 className="mb-4 text-2xl font-bold">Product Not Found</h1>
            <p className="mb-6 text-muted-foreground">
              Sorry, we couldn't find the product you're looking for.
            </p>
            <Button asChild>
              <Link to="/">Return to Homepage</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  const handleAddToCart = () => {
    setIsAddingToCart(true);
    
    // Simulate network request
    setTimeout(() => {
      addItem(product, quantity);
      setIsAddingToCart(false);
    }, 500);
  };
  
  const increaseQuantity = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };
  
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  
  const discount = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) 
    : 0;

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="container py-8">
          {/* Breadcrumbs */}
          <div className="mb-6 flex items-center text-sm">
            <Link to="/" className="text-muted-foreground hover:text-foreground">
              Home
            </Link>
            <span className="mx-2 text-muted-foreground">/</span>
            <Link to={`/category/${product.categoryId}`} className="text-muted-foreground hover:text-foreground">
              {product.category}
            </Link>
            <span className="mx-2 text-muted-foreground">/</span>
            <span>{product.name}</span>
          </div>
          
          {/* Back Button (Mobile) */}
          <Button
            variant="outline"
            size="sm"
            asChild
            className="mb-4 md:hidden"
          >
            <Link to="/">
              <ArrowLeft size={16} className="mr-2" />
              Back
            </Link>
          </Button>
          
          <div className="grid gap-8 md:grid-cols-2">
            {/* Product Images */}
            <div>
              <div className="mb-4 overflow-hidden rounded-lg border bg-white">
                <img
                  src={selectedImage}
                  alt={product.name}
                  className="h-full w-full object-contain p-4 md:h-[500px]"
                />
              </div>
              
              <div className="grid grid-cols-4 gap-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    className={`overflow-hidden rounded-md border p-1 ${
                      selectedImage === image ? "border-brand-blue" : ""
                    }`}
                    onClick={() => setSelectedImage(image)}
                  >
                    <img
                      src={image}
                      alt={`${product.name} thumbnail ${index + 1}`}
                      className="aspect-square object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
            
            {/* Product Info */}
            <div>
              <div className="mb-2 flex items-center">
                <Link
                  to={`/category/${product.categoryId}`}
                  className="text-sm font-medium text-muted-foreground hover:text-brand-blue"
                >
                  {product.category}
                </Link>
                {product.isNew && (
                  <Badge className="ml-2 bg-brand-blue text-white">New</Badge>
                )}
                {discount > 0 && (
                  <Badge className="ml-2 bg-brand-red text-white">{discount}% OFF</Badge>
                )}
              </div>
              
              <h1 className="mb-2 text-2xl font-bold sm:text-3xl">{product.name}</h1>
              
              <div className="mb-4 flex items-center">
                <div className="flex items-center">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className={`${
                        i < Math.floor(product.rating)
                          ? "fill-brand-yellow text-brand-yellow"
                          : "fill-gray-200 text-gray-200"
                      }`}
                    />
                  ))}
                  <span className="ml-2 text-sm text-muted-foreground">
                    ({product.reviewCount} reviews)
                  </span>
                </div>
              </div>
              
              <div className="mb-6">
                <div className="flex items-center">
                  {product.originalPrice && (
                    <span className="mr-2 text-lg text-muted-foreground line-through">
                      ${product.originalPrice.toFixed(2)}
                    </span>
                  )}
                  <span className="text-2xl font-bold text-brand-blue">
                    ${product.price.toFixed(2)}
                  </span>
                  {discount > 0 && (
                    <Badge variant="outline" className="ml-2 border-brand-green text-brand-green">
                      Save ${(product.originalPrice! - product.price).toFixed(2)}
                    </Badge>
                  )}
                </div>
              </div>
              
              <p className="mb-6 text-muted-foreground">{product.description}</p>
              
              {/* Stock Status */}
              <div className="mb-6 flex items-center">
                {product.stock > 0 ? (
                  <>
                    <Check size={18} className="mr-2 text-brand-green" />
                    <span>
                      {product.stock > 10
                        ? "In Stock"
                        : `Only ${product.stock} left in stock`}
                    </span>
                  </>
                ) : (
                  <>
                    <X size={18} className="mr-2 text-brand-red" />
                    <span className="text-brand-red">Out of Stock</span>
                  </>
                )}
              </div>
              
              {/* Quantity Selector */}
              {product.stock > 0 && (
                <div className="mb-6">
                  <label className="mb-2 block font-medium">Quantity</label>
                  <div className="flex w-32 items-center rounded-md border">
                    <button
                      className="flex h-10 w-10 items-center justify-center rounded-l-md border-r text-muted-foreground hover:bg-muted"
                      onClick={decreaseQuantity}
                      disabled={quantity <= 1}
                    >
                      <Minus size={16} />
                    </button>
                    <input
                      type="number"
                      className="h-10 w-full border-0 text-center focus:outline-none focus:ring-0"
                      value={quantity}
                      onChange={(e) => {
                        const val = parseInt(e.target.value);
                        if (!isNaN(val) && val >= 1 && val <= product.stock) {
                          setQuantity(val);
                        }
                      }}
                      min="1"
                      max={product.stock}
                    />
                    <button
                      className="flex h-10 w-10 items-center justify-center rounded-r-md border-l text-muted-foreground hover:bg-muted"
                      onClick={increaseQuantity}
                      disabled={quantity >= product.stock}
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                </div>
              )}
              
              {/* Action Buttons */}
              <div className="mb-8 flex flex-wrap gap-4">
                <Button
                  className="flex-1 bg-brand-blue text-white hover:bg-brand-blue/90 md:flex-none md:min-w-[180px]"
                  size="lg"
                  onClick={handleAddToCart}
                  disabled={isAddingToCart || product.stock === 0}
                >
                  {isAddingToCart ? (
                    <span className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                  ) : (
                    <>
                      <ShoppingCart size={18} className="mr-2" />
                      Add to Cart
                    </>
                  )}
                </Button>
                
                <Button
                  variant="outline"
                  size="lg"
                  className="flex-1 md:flex-none md:min-w-[180px]"
                >
                  <Heart size={18} className="mr-2" />
                  Add to Wishlist
                </Button>
                
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-12 w-12"
                  aria-label="Share Product"
                >
                  <Share2 size={18} />
                </Button>
              </div>
              
              {/* Features */}
              <div className="mb-6 grid gap-4">
                <div className="flex items-start gap-3">
                  <Truck className="mt-0.5 h-5 w-5 text-brand-blue" />
                  <div>
                    <h4 className="font-medium">Free Shipping</h4>
                    <p className="text-sm text-muted-foreground">
                      Free standard shipping on orders over $35
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <RotateCcw className="mt-0.5 h-5 w-5 text-brand-blue" />
                  <div>
                    <h4 className="font-medium">30-Day Returns</h4>
                    <p className="text-sm text-muted-foreground">
                      Return or exchange within 30 days
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Shield className="mt-0.5 h-5 w-5 text-brand-blue" />
                  <div>
                    <h4 className="font-medium">2-Year Warranty</h4>
                    <p className="text-sm text-muted-foreground">
                      Manufacturer warranty for 2 years
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Product Details Tabs */}
          <div className="mt-12">
            <Tabs defaultValue="description">
              <TabsList className="mb-6 w-full justify-start">
                <TabsTrigger value="description">Description</TabsTrigger>
                <TabsTrigger value="specifications">Specifications</TabsTrigger>
                <TabsTrigger value="reviews">Reviews ({product.reviewCount})</TabsTrigger>
              </TabsList>
              
              <TabsContent value="description" className="rounded-md border p-6">
                <h3 className="mb-4 text-lg font-semibold">Product Description</h3>
                <p className="mb-4">{product.description}</p>
                
                <h4 className="mb-2 font-semibold">Key Features</h4>
                <ul className="list-inside list-disc space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </TabsContent>
              
              <TabsContent value="specifications" className="rounded-md border p-6">
                <h3 className="mb-4 text-lg font-semibold">Technical Specifications</h3>
                <div className="grid gap-2">
                  {Object.entries(product.specifications).map(([key, value], index) => (
                    <div
                      key={index}
                      className={`flex py-2 ${
                        index % 2 === 0 ? "bg-muted/50" : ""
                      }`}
                    >
                      <div className="w-1/3 font-medium">{key}</div>
                      <div className="w-2/3">{value}</div>
                    </div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="reviews" className="rounded-md border p-6">
                <h3 className="mb-4 text-lg font-semibold">Customer Reviews</h3>
                <div className="mb-6 flex items-center gap-4">
                  <div className="text-center">
                    <div className="text-5xl font-bold">{product.rating.toFixed(1)}</div>
                    <div className="mt-1 flex justify-center">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className={`${
                            i < Math.floor(product.rating)
                              ? "fill-brand-yellow text-brand-yellow"
                              : "fill-gray-200 text-gray-200"
                          }`}
                        />
                      ))}
                    </div>
                    <div className="mt-1 text-sm text-muted-foreground">
                      Based on {product.reviewCount} reviews
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    {/* This would normally display actual review distribution */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="text-sm">5 stars</div>
                        <div className="h-2 flex-1 rounded-full bg-muted overflow-hidden">
                          <div className="h-full w-[70%] rounded-full bg-brand-yellow" />
                        </div>
                        <div className="text-sm">70%</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="text-sm">4 stars</div>
                        <div className="h-2 flex-1 rounded-full bg-muted overflow-hidden">
                          <div className="h-full w-[20%] rounded-full bg-brand-yellow" />
                        </div>
                        <div className="text-sm">20%</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="text-sm">3 stars</div>
                        <div className="h-2 flex-1 rounded-full bg-muted overflow-hidden">
                          <div className="h-full w-[5%] rounded-full bg-brand-yellow" />
                        </div>
                        <div className="text-sm">5%</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="text-sm">2 stars</div>
                        <div className="h-2 flex-1 rounded-full bg-muted overflow-hidden">
                          <div className="h-full w-[3%] rounded-full bg-brand-yellow" />
                        </div>
                        <div className="text-sm">3%</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="text-sm">1 star</div>
                        <div className="h-2 flex-1 rounded-full bg-muted overflow-hidden">
                          <div className="h-full w-[2%] rounded-full bg-brand-yellow" />
                        </div>
                        <div className="text-sm">2%</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="rounded-md border p-4 text-center">
                  <Info size={24} className="mx-auto mb-2 text-muted-foreground" />
                  <p className="mb-4 text-muted-foreground">
                    In a real application, this section would display actual customer reviews.
                  </p>
                  <Button>Write a Review</Button>
                </div>
              </TabsContent>
            </Tabs>
          </div>
          
          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="mt-16">
              <ProductGrid
                products={relatedProducts}
                title="You May Also Like"
                subtitle="Products similar to this one"
              />
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductPage;

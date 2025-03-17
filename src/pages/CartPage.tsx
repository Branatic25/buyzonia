
import { useState } from "react";
import { Link } from "react-router-dom";
import { Trash2, Minus, Plus, ShoppingBag, CreditCard } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/use-cart";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";

const CartPage = () => {
  const { items, removeItem, updateQuantity, subtotal, total, discount } = useCart();
  const [couponCode, setCouponCode] = useState("");
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const handleQuantityChange = (productId: string, newQuantity: number) => {
    updateQuantity(productId, newQuantity);
  };

  const handleCheckout = () => {
    setIsCheckingOut(true);
    // Simulate API call delay
    setTimeout(() => {
      setIsCheckingOut(false);
      // In a real app, this would redirect to checkout or payment page
      alert("This would proceed to checkout in a real app!");
    }, 1500);
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 py-10">
        <div className="container">
          <h1 className="mb-6 text-3xl font-bold">Shopping Cart</h1>
          
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center rounded-lg border py-16 text-center">
              <ShoppingBag size={48} className="mb-4 text-muted-foreground" />
              <h2 className="mb-2 text-xl font-semibold">Your cart is empty</h2>
              <p className="mb-6 text-muted-foreground">
                Looks like you haven't added any products to your cart yet.
              </p>
              <Button asChild>
                <Link to="/">Continue Shopping</Link>
              </Button>
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-3">
              {/* Cart Items (Left Side) */}
              <div className="md:col-span-2">
                <div className="rounded-lg border">
                  <div className="p-6">
                    <h2 className="mb-4 text-xl font-semibold">Cart Items ({items.length})</h2>
                    <Separator className="mb-6" />
                    
                    <div className="space-y-6">
                      {items.map((item) => (
                        <div key={item.product.id} className="cart-item">
                          <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border">
                            <img
                              src={item.product.image}
                              alt={item.product.name}
                              className="h-full w-full object-cover"
                            />
                          </div>
                          
                          <div className="flex flex-1 flex-col">
                            <div className="flex justify-between">
                              <div>
                                <h3 className="text-base font-medium">
                                  <Link 
                                    to={`/product/${item.product.slug}`}
                                    className="hover:text-brand-blue"
                                  >
                                    {item.product.name}
                                  </Link>
                                </h3>
                                <p className="mt-1 text-sm text-muted-foreground">
                                  {item.product.brand}
                                </p>
                              </div>
                              <p className="text-base font-semibold">
                                ${(item.product.price * item.quantity).toFixed(2)}
                              </p>
                            </div>
                            
                            <div className="mt-auto flex items-center justify-between">
                              <div className="flex items-center border rounded">
                                <button
                                  className="p-2 text-muted-foreground hover:text-foreground"
                                  onClick={() => handleQuantityChange(item.product.id, item.quantity - 1)}
                                  disabled={item.quantity <= 1}
                                >
                                  <Minus size={16} />
                                </button>
                                <span className="w-10 text-center">{item.quantity}</span>
                                <button
                                  className="p-2 text-muted-foreground hover:text-foreground"
                                  onClick={() => handleQuantityChange(item.product.id, item.quantity + 1)}
                                  disabled={item.quantity >= item.product.stock}
                                >
                                  <Plus size={16} />
                                </button>
                              </div>
                              
                              <button
                                className="flex items-center text-sm text-muted-foreground hover:text-brand-red"
                                onClick={() => removeItem(item.product.id)}
                              >
                                <Trash2 size={16} className="mr-1" />
                                Remove
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Order Summary (Right Side) */}
              <div>
                <div className="rounded-lg border">
                  <div className="p-6">
                    <h2 className="mb-4 text-xl font-semibold">Order Summary</h2>
                    <Separator className="mb-6" />
                    
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Subtotal</span>
                        <span>${subtotal.toFixed(2)}</span>
                      </div>
                      {discount > 0 && (
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Discount</span>
                          <span className="text-brand-green">-${discount.toFixed(2)}</span>
                        </div>
                      )}
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Shipping</span>
                        <span className="text-brand-green">Free</span>
                      </div>
                      
                      <Separator />
                      
                      <div className="flex justify-between text-lg font-semibold">
                        <span>Total</span>
                        <span>${total.toFixed(2)}</span>
                      </div>
                      
                      {/* Coupon Code */}
                      <div className="pt-4">
                        <label className="mb-2 block text-sm font-medium">
                          Discount Code
                        </label>
                        <div className="flex gap-2">
                          <Input
                            type="text"
                            value={couponCode}
                            onChange={(e) => setCouponCode(e.target.value)}
                            placeholder="Enter code"
                            className="flex-1"
                          />
                          <Button variant="outline">Apply</Button>
                        </div>
                      </div>
                      
                      {/* Checkout Button */}
                      <Button 
                        className="mt-6 w-full bg-brand-blue text-white hover:bg-brand-blue/90"
                        onClick={handleCheckout}
                        disabled={isCheckingOut}
                      >
                        {isCheckingOut ? (
                          <>
                            <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></span>
                            Processing...
                          </>
                        ) : (
                          <>
                            <CreditCard size={18} className="mr-2" />
                            Proceed to Checkout
                          </>
                        )}
                      </Button>
                      
                      <p className="mt-4 text-center text-xs text-muted-foreground">
                        By checking out, you agree to our{" "}
                        <Link to="/terms" className="text-brand-blue hover:underline">
                          Terms
                        </Link>{" "}
                        and{" "}
                        <Link to="/privacy" className="text-brand-blue hover:underline">
                          Privacy Policy
                        </Link>
                        .
                      </p>
                    </div>
                  </div>
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

export default CartPage;

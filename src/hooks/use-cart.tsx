
import { Product } from "@/data/products";
import { toast } from '@/components/ui/use-toast';
import { 
  createContext, 
  useContext, 
  useState, 
  useEffect, 
  ReactNode 
} from "react";

export interface CartItem {
  product: Product;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addItem: (product: Product, quantity?: number) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  subtotal: number;
  discount: number;
  total: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  
  // Load cart from localStorage on initial render
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem('cart');
      if (savedCart) {
        setItems(JSON.parse(savedCart));
      }
    } catch (error) {
      console.error('Failed to load cart from localStorage:', error);
    }
  }, []);
  
  // Save cart to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem('cart', JSON.stringify(items));
    } catch (error) {
      console.error('Failed to save cart to localStorage:', error);
    }
  }, [items]);

  const addItem = (product: Product, quantity = 1) => {
    setItems(prevItems => {
      const existingItemIndex = prevItems.findIndex(
        item => item.product.id === product.id
      );
      
      if (existingItemIndex >= 0) {
        // Product already in cart, update quantity
        const updatedItems = [...prevItems];
        const newQuantity = updatedItems[existingItemIndex].quantity + quantity;
        
        if (newQuantity > product.stock) {
          toast({
            title: "Maximum available quantity reached",
            description: `Only ${product.stock} units available.`,
            variant: "destructive",
          });
          updatedItems[existingItemIndex].quantity = product.stock;
        } else {
          updatedItems[existingItemIndex].quantity = newQuantity;
          toast({
            title: "Cart updated",
            description: `Updated ${product.name} quantity to ${newQuantity}.`,
          });
        }
        
        return updatedItems;
      } else {
        // Product not in cart, add it
        toast({
          title: "Item added to cart",
          description: `Added ${product.name} to your cart.`,
        });
        return [...prevItems, { product, quantity }];
      }
    });
  };

  const removeItem = (productId: string) => {
    setItems(prevItems => {
      const itemToRemove = prevItems.find(item => item.product.id === productId);
      if (itemToRemove) {
        toast({
          title: "Item removed",
          description: `Removed ${itemToRemove.product.name} from your cart.`,
        });
      }
      return prevItems.filter(item => item.product.id !== productId);
    });
  };

  const updateQuantity = (productId: string, quantity: number) => {
    setItems(prevItems => {
      return prevItems.map(item => {
        if (item.product.id === productId) {
          // Check if quantity is valid
          if (quantity > item.product.stock) {
            toast({
              title: "Maximum available quantity reached",
              description: `Only ${item.product.stock} units available.`,
              variant: "destructive",
            });
            return { ...item, quantity: item.product.stock };
          }
          
          if (quantity < 1) {
            toast({
              title: "Minimum quantity is 1",
              description: "Set quantity to 1 or remove the item.",
              variant: "destructive",
            });
            return { ...item, quantity: 1 };
          }
          
          return { ...item, quantity };
        }
        return item;
      });
    });
  };

  const clearCart = () => {
    setItems([]);
    toast({
      title: "Cart cleared",
      description: "All items have been removed from your cart.",
    });
  };

  // Calculate totals
  const totalItems = items.reduce((total, item) => total + item.quantity, 0);
  
  const subtotal = items.reduce(
    (total, item) => total + (item.product.price * item.quantity), 
    0
  );
  
  const discount = items.reduce(
    (total, item) => {
      const itemOriginalPrice = item.product.originalPrice || item.product.price;
      const itemDiscount = (itemOriginalPrice - item.product.price) * item.quantity;
      return total + itemDiscount;
    },
    0
  );
  
  const total = subtotal;

  const value = {
    items,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    totalItems,
    subtotal,
    discount,
    total
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

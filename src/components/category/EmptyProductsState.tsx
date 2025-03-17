
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

interface EmptyProductsStateProps {
  onAdjustFilters: () => void;
}

export function EmptyProductsState({ onAdjustFilters }: EmptyProductsStateProps) {
  return (
    <div className="flex flex-col items-center justify-center rounded-lg border bg-card py-16 text-center">
      <div className="mb-4 rounded-full bg-muted p-3">
        <ShoppingCart size={24} className="text-muted-foreground" />
      </div>
      <h3 className="mb-2 text-lg font-semibold">No products found</h3>
      <p className="mb-6 text-muted-foreground">
        Try adjusting your filters or search terms
      </p>
      <Button onClick={onAdjustFilters}>
        Adjust Filters
      </Button>
    </div>
  );
}

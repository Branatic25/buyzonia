
import { X } from "lucide-react";

interface ActiveFiltersProps {
  priceRange: number[];
}

export function ActiveFilters({ priceRange }: ActiveFiltersProps) {
  return (
    <div className="mb-4 md:hidden">
      <div className="rounded-lg border bg-card p-4">
        <h3 className="mb-2 font-semibold">Active Filters</h3>
        <div className="flex flex-wrap gap-2">
          <div className="flex items-center rounded-full bg-muted px-3 py-1 text-xs">
            Price: ${priceRange[0]} - ${priceRange[1]}
            <button className="ml-1">
              <X size={14} />
            </button>
          </div>
          <div className="flex items-center rounded-full bg-muted px-3 py-1 text-xs">
            In Stock
            <button className="ml-1">
              <X size={14} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

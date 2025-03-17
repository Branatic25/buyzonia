
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
  SheetClose,
  SheetTrigger
} from "@/components/ui/sheet";
import { Filter } from "lucide-react";

interface FilterDrawerProps {
  priceRange: number[];
  setPriceRange: (value: number[]) => void;
  brands: string[];
}

export function FilterDrawer({ priceRange, setPriceRange, brands }: FilterDrawerProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className="gap-1">
          <Filter size={16} />
          <span className="hidden sm:inline">Filters</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[400px]">
        <SheetHeader>
          <SheetTitle>Filters</SheetTitle>
        </SheetHeader>
        <div className="py-4">
          <div className="mb-5">
            <h4 className="mb-2 text-sm font-semibold">Price Range</h4>
            <Slider
              defaultValue={[0, 3000]}
              max={3000}
              step={10}
              onValueChange={(value) => setPriceRange(value)}
            />
            <div className="mt-2 flex items-center justify-between text-sm">
              <span>${priceRange[0]}</span>
              <span>${priceRange[1]}</span>
            </div>
          </div>
          
          <Separator className="my-4" />
          
          <div className="mb-5">
            <h4 className="mb-2 text-sm font-semibold">Brands</h4>
            <div className="space-y-2">
              {brands.map((brand) => (
                <div key={brand} className="flex items-center">
                  <Checkbox id={`brand-${brand}`} />
                  <label
                    htmlFor={`brand-${brand}`}
                    className="ml-2 text-sm"
                  >
                    {brand}
                  </label>
                </div>
              ))}
            </div>
          </div>
          
          <Separator className="my-4" />
          
          <div className="mb-5">
            <h4 className="mb-2 text-sm font-semibold">Availability</h4>
            <div className="space-y-2">
              <div className="flex items-center">
                <Checkbox id="in-stock" />
                <label htmlFor="in-stock" className="ml-2 text-sm">
                  In Stock
                </label>
              </div>
              <div className="flex items-center">
                <Checkbox id="on-sale" />
                <label htmlFor="on-sale" className="ml-2 text-sm">
                  On Sale
                </label>
              </div>
            </div>
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button className="w-full">Apply Filters</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

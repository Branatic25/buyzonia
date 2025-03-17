
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Separator } from "@/components/ui/separator";

interface FilterSidebarProps {
  priceRange: number[];
  setPriceRange: (value: number[]) => void;
  brands: string[];
}

export function FilterSidebar({ priceRange, setPriceRange, brands }: FilterSidebarProps) {
  return (
    <div className="hidden md:block">
      <div className="rounded-lg border bg-card p-6">
        <div className="mb-6">
          <div className="mb-2 flex items-center justify-between">
            <h3 className="font-semibold">Filters</h3>
            <Button variant="ghost" size="sm" className="h-8 px-2">
              Reset
            </Button>
          </div>
          <Separator className="my-2" />
        </div>
        
        <div className="space-y-6">
          <div>
            <h4 className="mb-3 text-sm font-semibold">Price Range</h4>
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
          
          <Separator />
          
          <div>
            <h4 className="mb-3 text-sm font-semibold">Brands</h4>
            <div className="space-y-2">
              {brands.map((brand) => (
                <div key={brand} className="flex items-center">
                  <Checkbox id={`brand-${brand}-desktop`} />
                  <label
                    htmlFor={`brand-${brand}-desktop`}
                    className="ml-2 text-sm"
                  >
                    {brand}
                  </label>
                </div>
              ))}
            </div>
          </div>
          
          <Separator />
          
          <div>
            <h4 className="mb-3 text-sm font-semibold">Availability</h4>
            <div className="space-y-2">
              <div className="flex items-center">
                <Checkbox id="in-stock-desktop" />
                <label htmlFor="in-stock-desktop" className="ml-2 text-sm">
                  In Stock
                </label>
              </div>
              <div className="flex items-center">
                <Checkbox id="on-sale-desktop" />
                <label htmlFor="on-sale-desktop" className="ml-2 text-sm">
                  On Sale
                </label>
              </div>
            </div>
          </div>
          
          <Separator />
          
          <Button className="w-full">Apply Filters</Button>
        </div>
      </div>
    </div>
  );
}

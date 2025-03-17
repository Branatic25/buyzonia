
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function PromoBanners() {
  return (
    <div className="py-12 md:py-16">
      <div className="container">
        <div className="grid gap-6 md:grid-cols-2 md:gap-8">
          {/* Banner 1 */}
          <div className="group relative overflow-hidden rounded-lg bg-gradient-to-r from-brand-blue to-blue-700">
            <div className="absolute inset-0 bg-black/20 transition-opacity duration-300 group-hover:bg-black/30" />
            <div className="relative z-10 flex h-full min-h-[300px] flex-col justify-center p-6 text-white md:p-8">
              <h3 className="mb-2 text-2xl font-bold md:text-3xl">
                Summer Sale
              </h3>
              <p className="mb-4 text-white/80">
                Save up to 40% on selected smartphones and accessories
              </p>
              <div className="mt-2">
                <Button
                  size="lg"
                  className="bg-white text-brand-blue hover:bg-white/90"
                  asChild
                >
                  <Link to="/deals">Shop Now</Link>
                </Button>
              </div>
            </div>
            <img
              src="https://images.unsplash.com/photo-1543069190-f687504216a1?q=80&w=1770&auto=format&fit=crop"
              alt="Summer Sale"
              className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          {/* Banner 2 */}
          <div className="group relative overflow-hidden rounded-lg bg-gradient-to-r from-brand-dark to-black">
            <div className="absolute inset-0 bg-black/40 transition-opacity duration-300 group-hover:bg-black/50" />
            <div className="relative z-10 flex h-full min-h-[300px] flex-col justify-center p-6 text-white md:p-8">
              <div className="mb-2 inline-block rounded-full bg-brand-red px-3 py-1 text-sm font-semibold">
                New Arrival
              </div>
              <h3 className="mb-2 text-2xl font-bold md:text-3xl">
                Next-Gen Gaming
              </h3>
              <p className="mb-4 text-white/80">
                Discover the latest gaming consoles and accessories
              </p>
              <div className="mt-2">
                <Button
                  size="lg"
                  className="bg-brand-orange text-white hover:bg-brand-orange/90"
                  asChild
                >
                  <Link to="/category/gaming">Explore Now</Link>
                </Button>
              </div>
            </div>
            <img
              src="https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?q=80&w=1771&auto=format&fit=crop"
              alt="Gaming Gear"
              className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

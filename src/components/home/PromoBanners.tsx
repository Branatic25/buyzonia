
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function PromoBanners() {
  return (
    <div className="py-16 md:py-20">
      <div className="container">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-3 w-fit rounded-full bg-brand-orange/10 px-4 py-1 text-sm font-medium text-brand-orange">
            Limited Time
          </div>
          <h2 className="mb-2 text-2xl font-bold md:text-3xl">Special Offers</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Exclusive deals you won't want to miss
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 md:gap-8">
          {/* Banner 1 */}
          <div className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-brand-blue to-blue-700 shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/10 transition-opacity duration-300 group-hover:opacity-80" />
            <div className="relative z-10 flex h-full min-h-[300px] flex-col justify-center p-6 text-white md:p-8">
              <div className="mb-3 inline-flex rounded-full bg-white/20 px-3 py-1 text-sm font-medium backdrop-blur-sm">
                Summer Sale
              </div>
              <h3 className="mb-2 text-2xl font-bold md:text-3xl group-hover:translate-x-1 transition-transform">
                Summer Sale
              </h3>
              <p className="mb-4 max-w-md text-white/90 group-hover:translate-x-1 transition-transform delay-75">
                Save up to 40% on selected smartphones and accessories. Limited time offer while stocks last.
              </p>
              <div className="mt-2">
                <Button
                  size="lg"
                  className="bg-white text-brand-blue hover:bg-white/90 transition-transform duration-300 group-hover:translate-x-1 group-hover:shadow-lg"
                  asChild
                >
                  <Link to="/deals">Shop Now</Link>
                </Button>
              </div>
            </div>
            <img
              src="https://images.unsplash.com/photo-1543069190-f687504216a1?q=80&w=1770&auto=format&fit=crop"
              alt="Summer Sale"
              className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
            />
          </div>

          {/* Banner 2 */}
          <div className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-brand-dark to-black shadow-xl">
            <div className="absolute inset-0 bg-black/40 transition-opacity duration-300 group-hover:bg-black/50" />
            <div className="relative z-10 flex h-full min-h-[300px] flex-col justify-center p-6 text-white md:p-8">
              <div className="mb-3 inline-flex rounded-full bg-brand-red/90 px-3 py-1 text-sm font-semibold backdrop-blur-sm">
                New Arrival
              </div>
              <h3 className="mb-2 text-2xl font-bold md:text-3xl group-hover:translate-x-1 transition-transform">
                Next-Gen Gaming
              </h3>
              <p className="mb-4 max-w-md text-white/90 group-hover:translate-x-1 transition-transform delay-75">
                Discover the latest gaming consoles and accessories. Level up your gaming experience with cutting-edge technology.
              </p>
              <div className="mt-2">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-brand-orange to-brand-red text-white hover:from-brand-orange/90 hover:to-brand-red/90 transition-transform duration-300 group-hover:translate-x-1 group-hover:shadow-lg"
                  asChild
                >
                  <Link to="/category/gaming">Explore Now</Link>
                </Button>
              </div>
            </div>
            <img
              src="https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?q=80&w=1771&auto=format&fit=crop"
              alt="Gaming Gear"
              className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
            />
          </div>
        </div>
      </div>
    </div>
  );
}


import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function HeroBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-brand-blue to-blue-600 py-16 text-white md:py-20 lg:py-24">
      {/* Decorative elements */}
      <div className="absolute -left-16 -top-16 h-64 w-64 rounded-full bg-white/5"></div>
      <div className="absolute -right-20 top-40 h-72 w-72 rounded-full bg-white/5"></div>
      <div className="absolute bottom-10 left-1/4 h-40 w-40 rounded-full bg-white/5"></div>
      
      <div className="container relative z-10">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center">
            <div className="inline-block rounded-full bg-white/10 px-4 py-1 text-sm font-medium backdrop-blur-sm mb-4">
              Limited Time Offer 🔥
            </div>
            <h1 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl animate-fade-in">
              Next-Gen Tech at <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">Unbeatable Prices</span>
            </h1>
            <p className="mb-6 text-lg text-white/90 md:text-xl">
              Discover the latest electronics with fast shipping, extended warranty, and our price-match guarantee.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild className="bg-brand-orange hover:bg-brand-orange/90 shadow-lg transition-all duration-300 hover:translate-y-[-2px]">
                <Link to="/category/smartphones">Shop Now</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white/20 transition-all duration-300">
                <Link to="/deals">View Deals</Link>
              </Button>
            </div>
            
            {/* Trust Badges */}
            <div className="mt-8 flex flex-wrap gap-6 text-sm font-medium text-white/90">
              <div className="flex items-center gap-2 transition-transform duration-300 hover:translate-y-[-2px]">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>Free Shipping</span>
              </div>
              <div className="flex items-center gap-2 transition-transform duration-300 hover:translate-y-[-2px]">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>30-Day Returns</span>
              </div>
              <div className="flex items-center gap-2 transition-transform duration-300 hover:translate-y-[-2px]">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>Secure Payments</span>
              </div>
              <div className="flex items-center gap-2 transition-transform duration-300 hover:translate-y-[-2px]">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>2-Year Warranty</span>
              </div>
            </div>
          </div>
          
          <div className="hidden lg:flex lg:items-center lg:justify-end">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1616348436168-de43ad0db179?q=80&w=1781&auto=format&fit=crop"
                alt="Latest Electronics"
                className="rounded-xl object-cover shadow-2xl md:h-96 md:w-auto transform transition-transform duration-700 hover:scale-105"
                width={560}
                height={400}
              />
              <div className="absolute -right-5 -top-5 rotate-6 rounded-lg bg-gradient-to-r from-brand-red to-rose-600 px-6 py-2 font-bold text-white shadow-lg">
                Save up to 40%
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

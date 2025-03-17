
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function HeroBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-brand-blue to-blue-700 py-16 text-white md:py-20 lg:py-24">
      <div className="container relative z-10">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center">
            <h1 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
              Next-Gen Tech at Unbeatable Prices
            </h1>
            <p className="mb-6 text-lg text-white/80 md:text-xl">
              Discover the latest electronics with fast shipping, extended warranty, and our price-match guarantee.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild className="bg-brand-orange hover:bg-brand-orange/90">
                <Link to="/category/smartphones">Shop Now</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white/10">
                <Link to="/deals">View Deals</Link>
              </Button>
            </div>
            
            {/* Trust Badges */}
            <div className="mt-8 flex flex-wrap gap-4 text-sm font-medium text-white md:gap-6">
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Free Shipping</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>30-Day Returns</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Secure Payments</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>2-Year Warranty</span>
              </div>
            </div>
          </div>
          
          <div className="hidden lg:flex lg:items-center lg:justify-end">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1616348436168-de43ad0db179?q=80&w=1781&auto=format&fit=crop"
                alt="Latest Electronics"
                className="rounded-lg object-cover shadow-xl md:h-96 md:w-auto"
                width={560}
                height={400}
              />
              <div className="absolute -right-3 -top-3 rounded-full bg-brand-red px-5 py-2 font-bold text-white shadow-lg">
                Save up to 40%
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background Pattern */}
      <svg
        className="absolute -left-24 -top-24 h-64 w-64 text-white/10"
        fill="currentColor"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="50" cy="50" r="50" />
      </svg>
      
      <svg
        className="absolute -bottom-24 -right-24 h-64 w-64 text-white/10"
        fill="currentColor"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="50" cy="50" r="50" />
      </svg>
    </div>
  );
}

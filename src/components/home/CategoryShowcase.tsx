
import { Link } from "react-router-dom";
import { categories } from "@/data/products";

export function CategoryShowcase() {
  // We're only showing 6 categories for the showcase
  const showcaseCategories = categories.slice(0, 6);
  
  // Icons for each category (would normally be images)
  const categoryIcons: Record<string, React.ReactNode> = {
    "smartphones": (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
        <line x1="12" y1="18" x2="12" y2="18" />
      </svg>
    ),
    "laptops": (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="2" y1="20" x2="22" y2="20" />
      </svg>
    ),
    "tablets": (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
        <line x1="12" y1="18" x2="12" y2="18" />
      </svg>
    ),
    "audio": (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
    "tvs": (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="15" rx="2" ry="2" />
        <polyline points="17 2 12 7 7 2" />
      </svg>
    ),
    "cameras": (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
        <circle cx="12" cy="13" r="4" />
      </svg>
    ),
  };

  return (
    <div className="py-16 md:py-20 bg-gradient-to-b from-background to-muted/50">
      <div className="container">
        <div className="mb-10 text-center md:mb-12">
          <div className="mx-auto mb-3 w-fit rounded-full bg-brand-blue/10 px-4 py-1 text-sm font-medium text-brand-blue">
            Explore Categories
          </div>
          <h2 className="mb-2 text-2xl font-bold md:text-3xl">Shop by Category</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Browse our extensive collection of top-quality electronics, carefully curated for tech enthusiasts
          </p>
        </div>
        
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 lg:grid-cols-6">
          {showcaseCategories.map((category) => (
            <Link
              key={category.id}
              to={`/category/${category.slug}`}
              className="group flex flex-col items-center rounded-xl border bg-card p-4 shadow-sm transition-all duration-300 hover:border-brand-blue hover:shadow-md hover:translate-y-[-4px]"
            >
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-brand-blue/10 to-brand-blue/20 text-brand-blue transition-all duration-300 group-hover:bg-brand-blue group-hover:text-white">
                {categoryIcons[category.slug] || (
                  <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                )}
              </div>
              <h3 className="text-center font-medium group-hover:text-brand-blue transition-colors">{category.name}</h3>
              <span className="mt-1 text-xs text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100">Shop now →</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

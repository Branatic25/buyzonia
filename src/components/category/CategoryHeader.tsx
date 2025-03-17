
import { Link } from "react-router-dom";

interface CategoryHeaderProps {
  categoryName: string;
  productCount: number;
}

export function CategoryHeader({ categoryName, productCount }: CategoryHeaderProps) {
  return (
    <div className="bg-muted py-6">
      <div className="container">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold md:text-3xl">{categoryName}</h1>
            <div className="mt-1 flex items-center text-sm text-muted-foreground">
              <Link to="/" className="hover:text-foreground">
                Home
              </Link>
              <span className="mx-2">/</span>
              <span>{categoryName}</span>
            </div>
          </div>
          <div className="mt-4 flex items-center sm:mt-0">
            <span className="mr-2 text-sm text-muted-foreground">
              {productCount} products
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

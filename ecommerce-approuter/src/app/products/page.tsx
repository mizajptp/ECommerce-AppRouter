import React, { Suspense } from "react";
import { ProductsService } from "../services/products-service";
import Link from "next/link";
import ProductCard from "../components/ProductCard/ProductCard";
import { Product } from "../models/product";
import CategoryFilter from "../components/CategoryFilter/CategoryFilter";
import SortFilter from "../components/SortFilter/SortFilter";

export default async function Products(props: any) {

  var products: Product[] = await ProductsService.getProducts();

  const searchTerm = props.searchParams.search?.toLowerCase() || "";
  const categoryFilter = props.searchParams.category || "";
  const sortOrder = props.searchParams.sort || "";

  const categories = Array.from(new Set(products.map(p => p.category)));

  // Filter products by search + category
  let filteredProducts = products.filter((p: any) => {
    const matchesSearch = p.title.toLowerCase().includes(searchTerm);
    const matchesCategory = categoryFilter ? p.category === categoryFilter : true;
    return matchesSearch && matchesCategory;
  });

  // Sort products by price
  if (sortOrder === "asc") {
    filteredProducts = filteredProducts.sort((a: any, b: any) => a.price - b.price);
  } else if (sortOrder === "desc") {
    filteredProducts = filteredProducts.sort((a: any, b: any) => b.price - a.price);
  }


  return (
    <div className="container">
      <div
        id="top"
        className="my-4 d-flex flex-column flex-md-row justify-content-between align-items-center"
      >
        <p className="mb-2 mb-md-0">
          {filteredProducts.length === 0
            ? "No products found."
            : filteredProducts.length === 1
            ? "1 product found"
            : `${filteredProducts.length} products found`}
        </p>
        <div className="d-flex gap-2">
          <Suspense fallback={<div>Loading...</div>}>
          <CategoryFilter categories={categories} selected={categoryFilter} />
          <SortFilter selected={sortOrder} />
          </Suspense>
        </div>
      </div>

      <div className="row g-4 text-center">
        {filteredProducts.map((p) => {
          return (
            <div className="col-6 col-md-4 col-lg-3" key={p.id}>
              <ProductCard product={p} />
            </div>
          );
        })}
      </div>

      {/* Back To Top Link */}
      {filteredProducts.length > 0 && (
        <div className="p-3 text-end">
          <Link className="text-decoration-underline" href="#top">
            <i className="bi bi-arrow-up me-1"></i> Back to Top
          </Link>
        </div>
      )}
    </div>
  );
}

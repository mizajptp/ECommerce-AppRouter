import React from "react";
import { ProductsService } from "../services/products-service";
import Link from "next/link";
import ProductCard from "../components/ProductCard/ProductCard";
import { Product } from "../models/product";

export default async function Products(props: any) {

  var products: Product[] = await ProductsService.getProducts();

  const searchTerm = props.searchParams.search?.toLowerCase() || "";

  const filteredProducts = products.filter((p: any) => {
    return p.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div>
      <div id="top"></div>
      <div className="row m-4 g-4 text-center">
        {filteredProducts.map((p) => {
          return (
            <div className="col-6 col-md-4 col-lg-3" key={p.id}>
              <ProductCard product={p} />
            </div>
          );
        })}
      </div>

      {/* Back To Top Link */}
      <div className="p-3 text-end">
        <Link className="text-decoration-underline" href="#top">
          <i className="bi bi-arrow-up me-1"></i> Back to Top
        </Link>
      </div>
    </div>
  );
}

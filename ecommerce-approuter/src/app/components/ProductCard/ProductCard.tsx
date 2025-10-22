import React from "react";
import Link from "next/link";
import AddToCartButton from "../AddToCartButton/AddToCartButton";

export default function ProductCard(props: any) {
  var prod = props.product;
  return (
    <div className="card h-100">

      {/* Image */}
      <div className="py-3">
        <img src={prod.image} alt={prod.title} className="img-fluid" style={{maxHeight: "240px" ,objectFit:"contain"}}/>
      </div>

      <div className="card-body">

        {/* Title */}
        <div
          className="text-truncate my-2"
          style={{ maxWidth: "100%", display: "block" }}
        >
          <Link
            className="text-decoration-underline"
            href={`/products/${prod.id}`}
          >
            {prod.title}
          </Link>
        </div>

        {/* Rating*/}
        <div className="my-2">
          <span>{prod.rating.rate}</span>
          <span className="text-warning">({prod.rating.count})</span>
        </div>

        {/* Price and Button */}
        <div>
          <p className="fw-bold my-2">${prod.price}</p>
          <AddToCartButton product={prod} moveToCartPage={false}/>
        </div>
      </div>
    </div>
  );
}

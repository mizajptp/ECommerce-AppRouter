// app/products/[productId]/loading.tsx
import React from "react";

export default function Loading() {
  return (
    <div className="container py-5">
      <div className="row gy-4">
        {/* Image Skeleton */}
        <div className="col-12 col-md-6 text-center">
          <div
            className="placeholder-glow d-inline-block"
            style={{ width: "300px", height: "400px" }}
          >
            <div className="placeholder" style={{ width: "100%", height: "100%" }}></div>
          </div>
        </div>

        {/* Details Skeleton */}
        <div className="col-12 col-md-6 d-flex flex-column justify-content-center">
          {/* Title and Rating */}
          <div className="row d-flex py-2 justify-content-between align-items-center">
            <div className="col-9">
              <span className="placeholder col-10 placeholder-lg"></span>
            </div>
            <div className="col-3 text-end">
              <span className="placeholder col-6"></span>
            </div>
          </div>

          {/* Description */}
          <div className="py-2">
            <span className="placeholder col-12"></span>
            <span className="placeholder col-10"></span>
            <span className="placeholder col-8"></span>
          </div>

          {/* Price and Button */}
          <div className="d-flex py-2 justify-content-between align-items-center">
            <span className="placeholder col-3 placeholder-lg"></span>
            <span className="placeholder col-4 placeholder-lg"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

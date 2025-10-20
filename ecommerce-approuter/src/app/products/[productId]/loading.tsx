import React from 'react'

export default function loading() {
  return (
    <div className="container py-5">
  <div className="row">
    {/* Image Skeleton */}
    <div className="col-5">
      <div className="placeholder-glow">
        <div className="placeholder w-100" style={{height: '400px'}}></div>
      </div>
    </div>

    {/* Details Skeleton */}
    <div className="col-7 d-flex flex-column justify-content-center">
      {/* Title and Rating */}
      <div className="d-flex py-2 justify-content-between">
        <div className="placeholder-glow w-75">
          <span className="placeholder col-12"></span>
        </div>
        <div className="placeholder-glow" style={{width: '100px'}}>
          <span className="placeholder col-12"></span>
        </div>
      </div>

      {/* Description */}
      <div className="py-2 placeholder-glow">
        <span className="placeholder col-12"></span>
        <span className="placeholder col-12"></span>
        <span className="placeholder col-12"></span>
      </div>

      {/* Price and Button */}
      <div className="d-flex py-2 justify-content-between">
        <div className="placeholder-glow w-25">
          <span className="placeholder col-12"></span>
        </div>
        <div className="placeholder-glow w-50">
          <span className="placeholder col-12"></span>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

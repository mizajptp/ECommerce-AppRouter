export default function Loading() {
  return (
    <div className="row m-4 g-5 text-center">
      {Array.from({ length: 8 }).map((i,index) => (
        <div className="col-6 col-md-4 col-lg-3" key={index}>
          <div className="card" style={{ height: "400px" }}>
            {/* Image Skeleton */}
            <div
              className="d-flex justify-content-center align-items-center bg-light p-3"
              style={{ height: "300px" }}
            >
              <div className="placeholder w-100 h-100 rounded"></div>
            </div>

            <div className="card-body">
              {/* Product Title */}
              <p className="card-title placeholder-glow mb-2">
                <span className="placeholder col-10"></span>
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

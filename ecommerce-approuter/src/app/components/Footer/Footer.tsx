import React from "react";

export default function Footer() {
  return (
    <div className="bg-dark text-light p-4 mt-auto">
      <div className="container">
        <div className="row mb-4">
          <div className="col-6 col-md-3">
            <h6>SHOP</h6>
            <ul className="list-unstyled medium">
              <li>
                <a href="#">Men</a>
              </li>
              <li>
                <a href="#">Women</a>
              </li>
              <li>
                <a href="#">Kids</a>
              </li>
              <li>
                <a href="#">Sale</a>
              </li>
            </ul>
          </div>

          <div className="col-6 col-md-3 ">
            <h6>CUSTOMER SERVICE</h6>
            <ul className="list-unstyled medium">
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Order Tracking</a>
              </li>
              <li>
                <a href="#">Returns</a>
              </li>
              <li>
                <a href="#">FAQs</a>
              </li>
            </ul>
          </div>

          <div className="col-6 col-md-3 ">
            <h6>ABOUT</h6>
            <ul className="list-unstyled medium">
              <li>
                <a href="#">Our Story</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Gallery</a>
              </li>
            </ul>
          </div>

          <div className="col-6 col-md-3">
            <h6>CONNECT</h6>
            <p className="mt-3 small">Email: enquiries@mcart.com</p>
            <p className="small">Call: +1 (800) 123-4567</p>
          </div>
        </div>
        <hr className="border-secondary"></hr>
        <div className="text-center small">
          <p className="mb-0">
            &copy; 2020-2025 MCart.com. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

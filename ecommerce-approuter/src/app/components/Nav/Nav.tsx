import Link from "next/link";
import React, { Suspense } from "react";
import Image from "next/image";
import SearchBar from "../searchBar/SearchBar";
import CartCount from "../CartCount/CartCount";

export default function Nav() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        {/* Logo */}
        <Link className="navbar-brand" href="/">
          <Image
            src={"/images/Logo01.png"}
            width={75}
            height={50}
            alt="logo"
            priority
          />
        </Link>

        {/* Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto">
            {/* Header Links */}
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" href={"/"}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" href={"/products"}>
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" href={"/aboutus"}>
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                aria-current="page"
                href={"/contactus"}
              >
                Contact Us
              </Link>
            </li>
            <CartCount />
          </ul>

          <Suspense fallback={<div>Loading...</div>}>
            <SearchBar />
          </Suspense>
        </div>
      </div>
    </nav>
  );
}

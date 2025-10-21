"use client";

import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";

export default function SearchBar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchTerm, setSearchTerm] = useState("");

  const onSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams(searchParams.toString());

    if (searchTerm) params.set("search", searchTerm);
    else params.delete("search");

    router.push(`/products?${params.toString()}`);
  };

  return (
    <div>
      <form className="d-flex" role="search" onSubmit={onSearchSubmit}>
        {/* TextBox */}
        <input
          className="form-control me-2"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          type="search"
          placeholder="Search"
        />

        {/* Search Button */}
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}

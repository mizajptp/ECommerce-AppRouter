"use client";

import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

export default function CategoryFilter({
  categories,
  selected,
}: {
  categories: string[];
  selected: string;
}) {

  const router = useRouter();
  const searchParams = useSearchParams();

  const categoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const params = new URLSearchParams(searchParams.toString());
    const value = e.target.value;

    if (value) {
      params.set("category", value);
    } else {
      params.delete("category");
    }

    router.push(`/products?${params.toString()}`);
  };

  return (
    <select className="form-select w-auto" value={selected} onChange={categoryChange}>
      <option value="">All Categories</option>
      {categories.map((cat) => (
        <option key={cat} value={cat}>
          {cat}
        </option>
      ))}
    </select>
  );
}

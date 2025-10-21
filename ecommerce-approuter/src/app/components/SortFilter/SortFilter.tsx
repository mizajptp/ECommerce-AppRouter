"use client";

import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

export default function SortFilter({ selected }: { selected: string }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const onSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    const params = new URLSearchParams(searchParams.toString());

    if (value) params.set("sort", value);
    else params.delete("sort");

    router.push(`/products?${params.toString()}`);
  };

  return (
    <select
      className="form-select w-auto"
      value={selected}
      onChange={onSortChange}
    >
      <option value="">Sort by</option>
      <option value="asc">Price: Low to High</option>
      <option value="desc">Price: High to Low</option>
    </select>
  );
}

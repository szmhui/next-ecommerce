"use client";
import React from "react";
import Image from "next/image";
import { usePathname, useSearchParams } from "next/navigation";

const SearchBar = () => {
  const pathName = usePathname();
  const params = useSearchParams();
  return (
    <div className="flex gap-2 bg-gray-100 items-center justify-between border-2 p-1">
      <input type="text" />
      <span>
        <Image src="/logo.png" alt="Search Icon" width={20} height={20} />
      </span>
    </div>
  );
};

export default SearchBar;

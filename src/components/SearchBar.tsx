"use client";
import React from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Search, SearchIcon } from "lucide-react";
import { Input } from "./ui/input";
import { useDebouncedCallback } from "use-debounce";

// const SearchBar = () => {
//   const pathName = usePathname();
//   const searchParams = useSearchParams();
//   const replacePath = useRouter();
//   const handlerSearch = useDebouncedCallback((searchTerm: string) => {
//     const params = new URLSearchParams(searchParams);
//     if (searchTerm) {
//       params.set("search", searchTerm);
//     } else {
//       params.delete("search");
//     }
//     replacePath.push(`${pathName}?${params.toString()}`);
//   }, 500);

//   return (
//     <div className="flex px-4 gap-1 items-center justify-between">
//       <Input
//         type="text"
//         className="py-1 rounded-md w-full "
//         onChange={(e) => handlerSearch(e.target.value)}
//         defaultValue={searchParams.get("search")?.toString()}
//       />
//       <span>
//         <Search className="text-gray-400" />
//       </span>
//     </div>
//   );
// };

const SearchBar = () => {
  const path = useRouter();
  const handlerSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const formData = new FormData(e.currentTarget);
    const searchTerm = formData.get("name") as string;
    if (searchTerm) {
      path.push(`/list?name=${searchTerm}`);
    }
  };
  return (
    <form
      onSubmit={handlerSubmit}
      className="bg-gray-100 py-2 flex items-center gap-3 rounded-lg px-4"
    >
      <input
        type="text"
        name="searc"
        placeholder="搜索商品"
        className="py-1 px-2 flex-1"
      />
      <button>
        <SearchIcon />
      </button>
    </form>
  );
};

export default SearchBar;

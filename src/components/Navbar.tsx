import Image from "next/image";
import Link from "next/link";
import React from "react";
import Menu from "./Menu";
import SearchBar from "./SearchBar";
import IconBar from "./IconBar";

const Navbar = () => {
  return (
    <div className="h-20 px-4 md:px-8 lg:px-16 xl:px-64 flex items-center relative justify-between gap-8">
      <div className="flex items-center justify-between h-full w-1/6">
        <Link href={"/"} className="flex gap-1 items-center">
          <Image
            src="/logo.png"
            width={64}
            height={64}
            alt="logo"
            className="w-8 h-8 hidden md:block"
          />
          <span className="text-3xl font-extralight">STORE</span>
        </Link>
      </div>
      <div className="hidden md:block w-2/6">
        <div className="flex gap-3">
          <Link href="/">首页</Link>
          <Link href="/">商城</Link>
          <Link href="/">购物</Link>
          <Link href="/">关于</Link>
          <Link href="/">联系</Link>
        </div>
      </div>
      <div className="hidden md:block w-2/6">
        <div className="flex gap-4 items-center justify-between">
          <SearchBar />
          <IconBar />
        </div>
      </div>
      <Menu />
    </div>
  );
};

export default Navbar;

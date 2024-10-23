"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Menu = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div>
      <Image
        alt="menu"
        width={20}
        height={20}
        src={"/menu.png"}
        className="cursor-pointer"
        onClick={() => setIsOpen((prev) => !prev)}
      />
      {isOpen && (
        <div className="flex absolute left-0 flex-col gap-6 items-center justify-center top-[]">
          <Link href="/">首页</Link>
          <Link href="/">商城</Link>
          <Link href="/">购物</Link>
          <Link href="/">联系</Link>
          <Link href="/">关于</Link>
          <Link href="/">购物车(1)</Link>
          <Link href="/">退出登录</Link>
        </div>
      )}
    </div>
  );
};

export default Menu;

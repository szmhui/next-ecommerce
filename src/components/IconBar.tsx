"use client";
import Image from "next/image";
import Link from "next/link";
import { redirect, useRouter } from "next/navigation";
import React, { useState } from "react";
import CardModal from "./CardModal";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const IconBar = () => {
  return (
    <div className="flex gap-6 items-center">
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Image
            src="/profile.png"
            alt="icon"
            width={22}
            height={22}
            className="cursor-pointer"
          />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>
            <Link href={"#"}>我的信息</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href={"#"}>退出登录</Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <Image
        src="/notification.png"
        alt="icon"
        width={22}
        height={22}
        className="cursor-pointer"
      />

      <DropdownMenu>
        <DropdownMenuTrigger>
          <div className="relative cursor-pointer">
            <div className="w-5 h-5 rounded-full bg-rose-600 text-white text-center text-sm absolute -right-3 bottom-3">
              1
            </div>
            <Image src="/cart.png" alt="icon" width={22} height={22} />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <CardModal />
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default IconBar;

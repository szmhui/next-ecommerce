"use client";
import { Minus, Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CardModal = () => {
  return (
    <div className="p-3 flex flex-col gap-3">
      <h3 className="text-lg font-semibold">购物车清单</h3>
      <div className="grid grid-cols-[1fr,3fr] gap-3">
        <div className="p-1 rounded-md shadow-md flex items-center justify-center">
          <Image
            alt=""
            width={72}
            height={96}
            src={"/woman.png"}
            className="object-cover rounded-md"
          />
        </div>
        <div className="text-sm flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <span className="font-semibold">女士发夹</span>
            <span>11.4</span>
          </div>
          <div>Lorem ipsum dolor sit amet.</div>
          <div className="flex justify-between items-center">
            <span className="border rounded-md p-1 flex items-center justify-center gap-2">
              <Minus className="w-4 hover:text-blue-500 cursor-pointer" />
              <span>数量1件</span>
              <Plus className="w-4  hover:text-blue-500 cursor-pointer" />
            </span>
            <span className="border rounded-md p-1 hover:bg-slate-100 cursor-pointer">
              删除
            </span>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <span>总计价格:</span>
        <span>11.4</span>
      </div>
      <div className="flex justify-between items-center">
        <Link href={"#"} className="border p-1 rounded-md hover:bg-slate-100">
          购物车
        </Link>
        <Link
          href={"#"}
          className="border p-1 rounded-md hover:bg-slate-600 bg-gray-900 text-white"
        >
          去结算
        </Link>
      </div>
    </div>
  );
};

export default CardModal;

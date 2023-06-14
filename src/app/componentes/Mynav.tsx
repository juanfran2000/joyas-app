"use client";
import Image from "next/image";
import {
  SearchOutlined,
  HeartOutlined,
  GithubFilled,
  ShoppingOutlined,
} from "@ant-design/icons";
import { useState } from "react";

export default function Nav() {
  const a = "juan";
  let [promo, setPromo] = useState(true);
  return (
    <div className=" fixed z-10 top-0 w-full">
      <div className="bg-zinc-800">
        <div className="container mx-auto h-12 p-3">
          <Image
            src="/top.svg"
            alt="top"
            width={100}
            height={50}
            className="w-44"
          />
        </div>
      </div>
      <nav className="bg-stone-950">
        <div className="container mx-auto px-4 py-3 flex items-center">
          <div className="mr-10">
            <Image
              src="/logo.svg"
              alt="Logo"
              width={100}
              height={50}
              className="w-11/12 h-10"
            />
          </div>
          <ul className="container flex space-x-8">
            <li>
              <a href="/" className="text-white font-bold uppercase">
                Fandoms
              </a>
            </li>
            <li>
              <a href="/pagina-shop" className="text-white font-bold uppercase">
                Category
              </a>
            </li>
            <li>
              <a href="/pagina-info" className="text-white font-bold uppercase">
                Featured
              </a>
            </li>
            <li>
              <a href="/" className="text-white font-bold uppercase">
                Funatics!
              </a>
            </li>
          </ul>
          <ul className="flex space-x-4">
            <li>
              <SearchOutlined className="text-white text-3xl" />
            </li>
            <li>
              <HeartOutlined className="text-white text-3xl" />
            </li>
            <li>
              <GithubFilled className="text-white text-3xl" />
            </li>
            <li>
              <ShoppingOutlined className="text-white text-3xl" />
            </li>
          </ul>
        </div>
        <hr />
        {promo && (
          <div className="relative flex justify-center container mx-auto text-white ">
            <h3 className=" text-center font-bold -2">
              Free Shipping on Orders $50+
            </h3>
            <button
              className="absolute left-2/3"
              onClick={() => {
                setPromo(false);
              }}
            >
              X
            </button>
          </div>
        )}
      </nav>
    </div>
  );
}

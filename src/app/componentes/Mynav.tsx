"use client";
import Image from "next/image";
import {
  SearchOutlined,
  HeartOutlined,
  GithubFilled,
  ShoppingOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import { MenuOutlined } from "@ant-design/icons";

export default function Nav() {
  let [promo, setPromo] = useState(true);
  const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = () => {
    setOpen(!open);
  };
  const toggleDiv = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="fixed text-white font-bold z-10 top-0 w-full">
        {/*Primer div*/}
        <div className="bg-zinc-800 py-2  lg:py-3 ">
          <img src="top.svg" className="w-40 ml-5 lg:ml-20 2xl:ml-5"></img>
        </div>
        {/*Segundo div*/}
        <div className="flex justify-center bg-stone-950 py-3 lg:justify-start 2xl:py-5">
          <img
            src="logo.svg"
            className="w-28 lg:ml-20 w-25 mt-1 2xl:ml-5 2xl:w-36"
          ></img>
          <div>
            {/*menu boton*/}
            <div className="absolute left-8 lg:hidden">
              <button type="button" onClick={handleMenuToggle}>
                <MenuOutlined className="text-3xl" />
              </button>
              {open && (
                <div className="fixed z-10 top-0 left-0 w-full h-full bg-zinc-100 text-white ">
                  <div className="bg-black flex py-3 justify-center">
                    <a className="text-white absolute left-8 " href="/">
                      <CloseOutlined className="text-3xl" />
                    </a>
                    <img className="w-28" src="logo.svg"></img>
                    <ul className="flex text-white absolute right-6 text-3xl space-x-3">
                      <li>
                        <SearchOutlined />
                      </li>
                      <li>
                        <ShoppingOutlined />
                      </li>
                    </ul>
                  </div>
                  <ul className="text-3xl text-black uppercase">
                    <li className="py-6 ml-5 flex">
                      <a href="/">Fandoms</a>
                      <div>
                        <button
                          onClick={toggleDiv}
                          className="text-4xl absolute right-8"
                        >
                          {isOpen ? "-" : "+"}
                        </button>
                        {isOpen && (
                          <div>
                            <br />
                            <h1 className="p-14 ">Hola</h1>
                          </div>
                        )}
                      </div>
                    </li>
                    <hr />
                    <li className="py-6 ml-5">
                      <a href="/pagina-shop">Category</a>
                    </li>
                    <hr />
                    <li className="py-6 ml-5">
                      <a href="/pagina-info">Featured</a>
                    </li>
                    <hr />
                    <li className="py-6 ml-5">
                      <a href="/">Funatics!</a>
                    </li>
                    <hr />
                  </ul>
                </div>
              )}
            </div>
          </div>
          <ul className="hidden lg:flex uppercase space-x-8 ml-10 text-1xl mt-4 2xl:text-lg 2xl:ml-14 2xl:space-x-20 2xl:mt-5">
            <li>
              <a href="/">Fandoms</a>
            </li>
            <li>
              <a href="/pagina-shop">Category</a>
            </li>
            <li>
              <a href="/pagina-info">Featured</a>
            </li>
            <li>
              <a href="/">Funatics!</a>
            </li>
          </ul>
          <ul className="flex absolute right-6 text-3xl space-x-3 lg:space-x-5 lg:absolute lg:right-20 2xl:mt-1 2xl:text-4xl 2xl:right-5 2xl:space-x-16">
            <li className="">
              <SearchOutlined />
            </li>
            <li className="hidden lg:block">
              <HeartOutlined />
            </li>
            <li className="hidden lg:block">
              <GithubFilled />
            </li>
            <li>
              <ShoppingOutlined />
            </li>
          </ul>
        </div>
        <hr className="border border-gray-800" />
        {promo && (
          <div className="bg-stone-950 relative justify-center flex py-1 lg:py-3">
            <h1 className="text-center">Free Shipping on Orders $50+</h1>
            <button
              className="absolute right-8 lg:right-20"
              onClick={() => {
                setPromo(false);
              }}
            >
              X
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

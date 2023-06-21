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

export default function Info() {
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
      {/* Aqui vamos a practicar flexbox 
        -El primer ejercicio consiste en entender que hace container
      
        En este ejemplo, hemos aplicado la clase container al <div> que envuelve nuestro contenido. La clase mx-auto se utiliza para centrar horizontalmente el contenedor,
      
        -Styles Explicados 

        bg-slate-400 => coloca el color de fondo y su dureza
        mx-auto => centra el container 
        p-2 => Controle el relleno en todos los lados de un elemento utilizando las p-{size}utilidades.
        m-2 => Controle el margen en todos los lados de un elemento usando las m-{size}utilidades.
      */}

      <div className="container mx-auto bg-slate-200">
        <div className="bg-blue-500 p-2 m-2 text-center">1</div>
        <div className="bg-red-500 p-2 m-2 text-center">2</div>
        <div className="bg-blue-500 p-2 m-2 text-center">3</div>
      </div>

      {/* flex en Tailwind CSS te permite crear diseños flexibles y controlar la distribución y alineación de los elementos dentro de un contenedor. Puedes utilizar las clases de Tailwind para personalizar la apariencia y el comportamiento de los elementos secundarios en el contenedor flexible, logrando diseños fluidos y adaptables a diferentes pantallas y dispositivos.
      
      - Stylos Explicados

      px-4 => Controle el relleno horizontal de un elemento utilizando las px-{size}utilidades.



      py-4 => Controle el relleno vertical de un elemento utilizando las px-{size}utilidades.


      */}

      <div className="container flex mx-auto bg-slate-200">
        <div className="bg-blue-500 px-4 py-2 m-2 text-center">1</div>
        <div className="bg-red-500 px-4 py-2 m-2 text-center">2</div>
        <div className="bg-blue-500 px-4 py-2 m-2 text-center">3</div>
      </div>

      {/* Ahora pondremos lo mismo pero al reves usando la propiedad flex-row-reverse*/}
      <div className="container flex flex-row-reverse mx-auto bg-slate-200">
        <div className="bg-blue-500 px-4 py-2 m-2 text-center">1</div>
        <div className="bg-red-500 px-4 py-2 m-2 text-center">2</div>
        <div className="bg-blue-500 px-4 py-2 m-2 text-center">3</div>
      </div>

      {/* Ahora pondremos lo mismo pero al en columnas usando la propiedad flex-col-reverse*/}
      <div className="container flex flex-col-reverse mx-auto bg-slate-200">
        <div className="bg-blue-500 px-4 py-2 m-2 text-center">1</div>
        <div className="bg-red-500 px-4 py-2 m-2 text-center">2</div>
        <div className="bg-blue-500 px-4 py-2 m-2 text-center">3</div>
      </div>
      {/* Vamos a cambiarlo de lado sin modificar el orden con justify-end*/}
      <div className="container flex justify-end mx-auto bg-slate-200">
        <div className="bg-blue-500 px-4 py-2 m-2 text-center">1</div>
        <div className="bg-red-500 px-4 py-2 m-2 text-center">2</div>
        <div className="bg-blue-500 px-4 py-2 m-2 text-center">3</div>
      </div>
      {/* Si queremos centrarlo podemos usar justify center*/}
      <div className="container flex justify-center mx-auto bg-slate-200">
        <div className="bg-blue-500 px-4 py-2 m-2 text-center">1</div>
        <div className="bg-red-500 px-4 py-2 m-2 text-center">2</div>
        <div className="bg-blue-500 px-4 py-2 m-2 text-center">3</div>
      </div>
      {/* Podemos poner uno a cada lado usando justify-between*/}
      <div className="container flex justify-between mx-auto bg-slate-200">
        <div className="bg-blue-500 px-4 py-2 m-2 text-center">1</div>
        <div className="bg-red-500 px-4 py-2 m-2 text-center">2</div>
        <div className="bg-blue-500 px-4 py-2 m-2 text-center">3</div>
      </div>
      {/* Cuando tenemos la etiqueta h en este caso h-64 toma un alto y centra segun ese alto
      solo cambiamos el justify-(center-end-top) podemos cambiar tambine el flex por rol o col*/}
      <div className="container flex flex-rol m-0 h-64 justify-center mx-auto bg-slate-200">
        <div className="bg-blue-500 px-4 py-2 m-2 text-center">1</div>
        <div className="bg-red-500 px-4 py-2 m-2 text-center">2</div>
        <div className="bg-blue-500 px-4 py-2 m-2 text-center">3</div>
      </div>
      <br />
      <br />
      <hr />
      <div>
        <h1 className="text-center font-bold">Menu en horizontal</h1>
        <ul className="container mx-auto text-center p-2 m-2">
          <li className="bg-blue-200">
            <a href="/">Inicio</a>
          </li>
          <li className="bg-blue-400">
            <a href="/">Shop</a>
          </li>
          <li className="bg-blue-600">
            <a href="/">Info</a>
          </li>
        </ul>
      </div>
      <br />
      <div>
        <h1 className="text-center font-bold">Menu usando Flex "Rigth"</h1>
        <ul className="container flex mx-auto text-center bg-cyan-100">
          <li className="bg-blue-200 px-4 py-2 m-2">
            <a href="/">Inicio</a>
          </li>
          <li className="bg-blue-400 px-5 py-2 m-2">
            <a href="/">Shop</a>
          </li>
          <li className="bg-blue-600 px-6 py-2 m-2">
            <a href="/">Info</a>
          </li>
        </ul>
        <h1 className="text-center font-bold">Menu usando Flex "Left"</h1>
        <ul className="container flex justify-end mx-auto text-center bg-cyan-100">
          <li className="bg-blue-200 px-4 py-2 m-2">
            <a href="/">Inicio</a>
          </li>
          <li className="bg-blue-400 px-5 py-2 m-2">
            <a href="/">Shop</a>
          </li>
          <li className="bg-blue-600 px-6 py-2 m-2">
            <a href="/">Info</a>
          </li>
        </ul>
      </div>
      <br />
      <br />
      {/*  

        Mejorando mi nav

      */}

      <div className=" text-white font-bold z-10 top-0 w-full">
        <div className="bg-zinc-800 py-3">
          <img src="top.svg" className="w-40 ml-5"></img>
        </div>
        <div className="bg-stone-950 uppercase">
          <ul className="flex justify-around py-5">
            <li>
              <img src="logo.svg" className="w-32"></img>
            </li>
            <li className="text-lg mt-4">Fandoms</li>
            <li className="text-lg mt-4">Category</li>
            <li className="text-lg mt-4">Featured</li>
            <li className="text-lg mt-4">Funatics!</li>

            <li className="text-4xl ml-60">
              <SearchOutlined />
            </li>
            <li className="text-4xl">
              <HeartOutlined />
            </li>
            <li className="text-4xl">
              <GithubFilled />
            </li>
            <li className="text-4xl">
              <ShoppingOutlined />
            </li>
          </ul>
        </div>
        <hr />
        {promo && (
          <div className="relative flex justify-center container mx-auto text-white h-9 m-3 bg-black">
            <h3 className="text-center font-bold -2">
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
      </div>
      <br />
      <br />
      <h1 className="text-center font-bold">Menu Responsivo</h1>
      {/*Principio*/}
      <div className=" text-white font-bold">
        {/*Primer div*/}
        <div className="bg-zinc-800 py-2 lg:bg-blue-200 lg:py-3 2xl:bg-blue-900">
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
          <ul className="hidden lg:flex uppercase space-x-8 ml-10 text-1xl mt-4 2xl:text-lg 2xl:ml-14 2xl:space-x-20">
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
      <br />
    </div>
  );
}

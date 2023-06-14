"use client";
import { useState } from "react";
import { Carousel, Button } from "antd";
import type { SizeType } from "antd/es/config-provider/SizeContext";
import Image from "next/image";

const contentStyle = {
  height: "600px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

export default function Home() {
  const [size, setSize] = useState<SizeType>("large");
  return (
    <div>
      <div className="relative">
        <Carousel autoplay className="mt-0">
          <div className="relative">
            <div className="absolute top-2/4 left-20  flex-row items-center">
              <h3 className="text-1xl font-bold text-white uppercase">
                ACROSS THE SPIDER-VERSE
              </h3>
              <h1 className="text-4xl font-bold text-white uppercase">
                Trust your senses
              </h1>
              <p className=" font-bold text-white ">
                New Dimensions are Weaving Together!{" "}
              </p>
              <p className=" font-bold text-white ">
                Sling Exclusive Spider-Man: Across the Spider-Verse Collectibles
                into Your Set.{" "}
              </p>
              <Button type="primary" shape="round" size={size}>
                Shop Collection
              </Button>
            </div>
            <img src="2.png" className="w-full" style={contentStyle}></img>
          </div>
          <div className="relative">
            <div className="absolute top-2/4 left-20  flex-row items-center">
              <h3 className="text-1xl font-bold text-white uppercase">
                ACROSS THE SPIDER-VERSE
              </h3>
              <h1 className="text-4xl font-bold text-white uppercase">
                Hola imagen 2
              </h1>
              <p className=" font-bold text-white ">
                New Dimensions are Weaving Together!{" "}
              </p>
              <p className=" font-bold text-white ">
                Sling Exclusive Spider-Man: Across the Spider-Verse Collectibles
                into Your Set.{" "}
              </p>
              <Button type="primary" shape="round" size={size}>
                Shop Collection
              </Button>
            </div>
            <img src="3.png" className="w-full" style={contentStyle}></img>
          </div>
        </Carousel>
      </div>
      <div>
        <img src="4.png"></img>
      </div>
    </div>
  );
}

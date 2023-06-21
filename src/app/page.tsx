"use client";
import { Carousel } from "antd";

const contentStyle = {
  height: "725px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const carouselData = [
  {
    title: "THE WITCHER –",
    title2: "EMBRACING DESTINY",
    description1: "NEW EXCLUSIVE!",
    description2:
      "Time to Fortify Your Lineup of the Witcher With These New Funko ",
    description3: "Pop! Collectibles.",
    image:
      "https://funko.com/on/demandware.static/-/Sites-FunkoUS-Library/default/dw1a8cc507/images/funko/page-designer/category/Feature-WitcherGeralt-BG.jpg",
    personaje:
      "https://funko.com/on/demandware.static/-/Sites-FunkoUS-Library/default/dwe6139e7f/images/funko/page-designer/hero/Feature-WitcherGeralt-Product-68645.png",
  },
  {
    title: "INSPIRATION RISING",
    description1: "POPS! WITH PURPOSE",
    description2:
      "Commemorate One of the Greats! Pop! Venus Williams Joins Pops!",
    description3: "With Purpose in Support of Color Compton.",
    image:
      "https://funko.com/on/demandware.static/-/Sites-FunkoUS-Library/default/dwf037f7db/images/funko/page-designer/category/Feature-PWPVenus-BG.jpg",
    personaje:
      "https://funko.com/on/demandware.static/-/Sites-FunkoUS-Library/default/dw3f49ebea/images/funko/page-designer/hero/Feature-PWPVenus-Product-70167.png",
  },
  {
    title: "ONE SHELL OF A",
    title2: "DEBUT",
    description1: "TOTALLY TRANSFORMING",
    description2:
      "Complete Your Bitty Pops! Set to Transform Small Spaces into Mighty",
    description3: "Cool Places.",
    image:
      "https://funko.com/on/demandware.static/-/Sites-FunkoUS-Library/default/dw5edf02f7/images/funko/page-designer/category/Feature-TMNTBitty-Background.jpg",
    personaje:
      "https://funko.com/on/demandware.static/-/Sites-FunkoUS-Library/default/dw5f8d8f9d/images/funko/page-designer/hero/Feature-TMNTBitty-Product-71507.png",
  },
];

export default function Home() {
  return (
    <div>
      <div className="relative">
        <Carousel autoplay className="mt-0">
          {carouselData.map((slide, index) => (
            <div className="relative" key={index}>
              <div className="absolute mt-16 left-10 flex-row items-center 2xl:mt-52 ">
                <h3
                  className={`text-lg uppercase ${
                    index === 0 ? "text-black" : "text-white"
                  }`}
                >
                  {slide.description1}
                </h3>
                <h1
                  className={`text-3xl font-bold uppercase mt-2 2xl:text-6xl 2xl:mt-3 ${
                    index === 0 ? "text-black" : "text-white"
                  }`}
                >
                  {slide.title}
                  <br />
                  {slide.title2}
                </h1>
                <p
                  className={`text-lg mt-2 rounded-full 2xl:text-2xl 2xl:mt-7 ${
                    index === 0 ? "text-black" : "text-white"
                  }`}
                >
                  {slide.description2}
                  <br />
                  {slide.description3}
                </p>
                <button
                  className={`mt-5 rounded-full py-3 px-6 uppercase font-bold text-lg 2xl:mt-10 ${
                    index === 0 ? "bg-black text-white" : "bg-white text-black"
                  }`}
                >
                  Shop Collection
                </button>
              </div>
              <img
                className="absolute mt-96 ml-7 w-11/12 2xl:mt-10 2xl:right-10 2xl:w-6/12"
                src={slide.personaje}
              ></img>
              <img src={slide.image} className="w-full" style={contentStyle} />
            </div>
          ))}
        </Carousel>
      </div>
      <div>
        <img src="4.png" alt="Image 4" />
      </div>
    </div>
  );
}

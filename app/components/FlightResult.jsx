"use client";
import { useState } from "react";
import Image from "next/image";
import SlideLine from "../../public/sideline.png";
import Button from "./Base/Button";
import Emirates from "../../public/emirate.png";
import Qatar from "../../public/qatar.png";
import Luft from "../../public/luft.png";

import RangeSlider from "../components/Base/RangeSlider";
import CustomSelect from "./Base/CustomSelect";
const FlightResult = () => {
  const [active, setActive] = useState(0);

  const flights = [
    {
      id: 1,
      Logo: Emirates,
      airline: "EMIRATES",
      price: "$1,572",
    },
    {
      id: 2,
      Logo: Qatar,
      airline: "QATAR AIRWAYS",
      price: "$2,072",
    },
    {
      id: 3,
      Logo: Luft,
      airline: "LUFTHANSA",
      price: "$1,872",
    },
    {
      id: 4,
      Logo: Emirates,

      airline: "EMIRATES",
      price: "$1,872",
    },
  ];
  const handleChange = (value) => {
    console.log("Selected value:", value);
  };
  const options = [{ value: "first-class", label: "First Class" }];
  return (
    <div>
      <div className="flex items-center justify-between py-8">
        <p className="text-[#5d7371] font-medium">RESULT(25)</p>
        <span className="flex gap-4 ">
          <Button className="bg-white px-4  md:px-8 md:py-2 rounded-full text-[#5d7371] text-[14px]">
            FILTER
          </Button>
          <div className="bg-white px-4 md:px-8 md:py-2 rounded-full">
            <CustomSelect
              options={options}
              defaultValue="first-class"
              onChange={handleChange}
              arrow="true"
              bg="white"
            />
          </div>
        </span>
      </div>
      <section className="flex flex-col xl:flex-row justify-between ">
        <div className="basis-[60%]">
          {flights.map((item) => {
            return (
              <section key={item.id} className="relative ">
                {item.id !== 1 && (
                  <span>
                    <span className="bg-[#e1eceb] absolute -right-4 -top-4 block h-8 w-8 rounded-full"></span>
                    <span className="bg-[#e1eceb] absolute -left-4 -top-4  block h-8 w-8 rounded-full"></span>
                  </span>
                )}
                <div
                  className={`flex justify-between px-8 items-center gap-4 bg-white ${
                    item.id !== 4 && "border-b"
                  }   border-dashed py-10 rounded-b-[16px] rounded-t-[16px] text-[#48615f]`}
                >
                  <span className="hidden md:block">
                    <Image src={item.Logo} alt="logo" width="80" />
                  </span>
                  <span className="flex flex-col">
                    <p className="text-[16px] md:text-[24px] mb-4">JFK</p>
                    <p className="text-[12px]">13:00</p>
                  </span>
                  <span className="flex flex-col">
                    <p className="text-[12px] md:text-[14px]">{item.airline}</p>
                    <p className="text-[#c99c33] text-[14px]">11H 20M</p>
                    <p className="text-[14px] md:text-[18px]">NON-STOP</p>
                  </span>
                  <span className="flex flex-col">
                    <p className="text-[14px] md:text-[24px]">BOM</p>
                    <p className="mt-4 text-[12px]">14:20</p>
                  </span>
                  <span className="flex flex-col">
                    <p className="text-right">{item.price}</p>
                    <Button className="bg-[#c99c33] rounded-full px-2 py-1 md:py-2 md:px-4 text-white text-[10px] md:text-[12px] mt-4">
                      BOOK NOW
                    </Button>
                  </span>
                </div>
              </section>
            );
          })}
        </div>
        <aside className="basis-[35%] rounded-[16px] mt-4 xl:mt-0  overflow-clip  text-white">
          <section className="bg-[#425c5a] p-5">
            <span className="flex justify-between">
              <p>FROM</p>
              <p>TO</p>
            </span>
            <span className="flex justify-between">
              <p>JFK</p>
              <p>NON-STOP</p>
              <p>BOM</p>
            </span>
            <Image src={SlideLine} className="w-full" alt="sidemap" />
          </section>
          <section className="bg-[#3d5654] p-5 rounded-b-[16px]">
            <div className="flex justify-center items-center gap-2 text-[14px]">
              <button
                onClick={() => setActive(0)}
                className={active === 0 ? "stopTab" : "px-2 text-white"}
              >
                ONE WAY
              </button>
              <button
                onClick={() => setActive(1)}
                className={active === 1 ? "stopTab" : "text-white px-2"}
              >
                ROUND TRIP
              </button>
              <button
                onClick={() => setActive(2)}
                className={active === 2 ? "stopTab" : "px-2 text-white"}
              >
                MULTI CITY
              </button>
            </div>
            <p className="mt-8">PRICE</p>
            <section className="pb-16 mt-4">
              <RangeSlider />
            </section>
          </section>
        </aside>
      </section>
    </div>
  );
};

export default FlightResult;

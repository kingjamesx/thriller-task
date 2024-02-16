"use client";
import Button from "./Base/Button";

import { LuCalendarDays } from "react-icons/lu";
import { FaUser } from "react-icons/fa6";
import { MdChair } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import { LiaExchangeAltSolid } from "react-icons/lia";
import { useState } from "react";
import CustomSelect from "../components/Base/CustomSelect";
const Filter = () => {
  const [active, setActive] = useState(0);
  const options = [
    { value: "jfk", label: "NEW YORK (JFK)" },
    { value: "mma", label: "LAGOS (MMA)" },
  ];
  const [selectedValue, setSelectedValue] = useState("jfk");

  const handleChange = (value) => {
    setSelectedValue(value);
  };
  return (
    <section className="relative">
      <div className="bg-white flex-col xl:flex-row flex justify-between  border py-5 px-8 rounded-[16px]">
        <section className="flex flex-col gap-4 ">
          <div className="bg-[#e1eceb] rounded-2xl md:rounded-full py-2 md:px-16 md:py-4 flex flex-col md:flex-row items-center">
            <CustomSelect
              options={options}
              defaultValue={selectedValue}
              icon={FaMapMarkerAlt}
              onChange={handleChange}
            />
            <span className="bg-[#425c5a] rounded-full h-5 w-5 md:w-8 md:h-8 flex items-center justify-center">
              {" "}
              <LiaExchangeAltSolid color="#fff" />{" "}
            </span>
            <CustomSelect
              options={options}
              defaultValue={selectedValue}
              icon={FaMapMarkerAlt}
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center  gap-2 md:gap-8 bg-[#e1eceb]  rounded-full cursor-pointer text-[12px]  ">
            <button
              onClick={() => setActive(0)}
              className={
                active === 0 ? "activeTab" : "px-2 md:px-8 text-[#425c5a]"
              }
            >
              ONE WAY
            </button>
            <button
              onClick={() => setActive(1)}
              className={
                active === 1 ? "activeTab" : "text-[#425c5a] px-2 md:px-8"
              }
            >
              ROUND TRIP
            </button>
            <button
              onClick={() => setActive(2)}
              className={
                active === 2 ? "activeTab" : " px-2 md:px-8 text-[#425c5a]"
              }
            >
              MULTI CITY
            </button>
          </div>
        </section>
        <section className="grid grid-cols-2 gap-4 mt-4 xl:mt-0">
          <Button className="bg-[#e1eceb] text-[#425c5a] text-[12px] rounded-full px-4  md:px-12 md:py-4">
            {" "}
            <span className="flex items-center gap-2">
              <LuCalendarDays />
              29 JULY 2019
            </span>
          </Button>
          <Button className="bg-[#e1eceb] text-[#425c5a] text-[12px] rounded-full px-4 py-2 md:px-12 md:py-4">
            <span className="flex items-center gap-2">
              <FaUser />2 TRAVELLER
            </span>
          </Button>
          <Button className="bg-[#e1eceb]  text-[#425c5a] text-[12px] rounded-full px-4 md:px-12 md:py-4">
            <span className="flex items-center gap-2">
              <MdChair />
              FIRST CLASS
            </span>
          </Button>
          <Button className="bg-[#c99c33] rounded-full px-12 py-2 text-[12px] text-white">
            SEARCH
          </Button>
        </section>
      </div>
    </section>
  );
};

export default Filter;

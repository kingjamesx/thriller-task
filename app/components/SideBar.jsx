"use client";
import Image from "next/image";
import userProfile from "../../public/james.JPG";
import SideBarMap from "../../public/sidebarmap.png";
import Links from "./Links";
import { IoMdClose } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu } from "../../lib/features/counter/counterSlice";
const SideBar = () => {
  const menu = useSelector((state) => state.countReducer.menu);
  const dispatch = useDispatch();
  return (
    <>
      {menu && (
        <span className="bg-black opacity-[0.5] block md:hidden fixed w-full h-full left-0 z-50  "></span>
      )}

      <div
        className={` ${menu ? "block" : "hidden"}
       z-[99] sidebar flex h-full max-w-[250px] w-full fixed flex-col items-center  bg-[#3d5654]  overflow-y-scroll overflow-x-hidden`}
      >
        <button
          className="place-self-end block md:hidden p-4 "
          onClick={() => dispatch(closeMenu())}
        >
          <IoMdClose color="#fff" fontSize="24px" />
        </button>
        <div className="relative flex items-center justify-center">
          <span className="w-20 h-20 -z-10 absolute top-6 -right-2 rounded-full  border-2 border-[#C99C33] bg-[#425C5A] block"></span>
          <Image
            src={userProfile}
            alt="profile-picture"
            className="w-16 h-16 rounded-full mt-8 z-20"
          />
        </div>

        <p className="mt-4 text-white font-bold">ALEX JOHNSON</p>
        <p className="text-white pb-6 text-[14px]">alexjohnson@gmail.com</p>
        <div>
          <Links />
        </div>
        <p className="text-[#C99C33] text-left mr-20 text-[14px] bg-[#425c5a] ">
          ACTIVE USERS
        </p>
        <span className="cursor-pointer">
          <Image src={SideBarMap} alt="map" />
        </span>
      </div>
    </>
  );
};

export default SideBar;

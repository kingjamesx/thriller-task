"use client";
import { IoIosMenu } from "react-icons/io";
// import { useAppSelector } from "../../lib/hook";
import { useDispatch } from "react-redux";
import { openMenu } from "../../lib/features/counter/counterSlice";
const TopSideBar = () => {
  const dispatch = useDispatch();

  return (
    <div className="flex bg-[#425c5a] justify-between text-white p-5 ">
      <p>Thrillers Travels</p>
      <button onClick={() => dispatch(openMenu())} className="px-5">
        <IoIosMenu color="white" fontSize="25px" />
      </button>
    </div>
  );
};

export default TopSideBar;

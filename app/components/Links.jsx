"use client";
import Link from "next/link";
import { IoHomeOutline } from "react-icons/io5";
import { PiAirplaneTilt } from "react-icons/pi";
import { LuWallet } from "react-icons/lu";
import { IoNewspaperOutline } from "react-icons/io5";
import { VscPieChart } from "react-icons/vsc";
import { IoSettingsOutline } from "react-icons/io5";
import { usePathname } from "next/navigation";
const Links = () => {
  const path = usePathname();
  const linkData = [
    {
      id: 1,
      title: "Dashboard",
      path: "/dashboard",
      Icon: <IoHomeOutline color="#C99C33" />,
    },
    {
      id: 2,
      title: "Flights",
      path: "/",
      Icon: <PiAirplaneTilt color="#c99c33" />,
    },
    {
      id: 3,
      title: "Wallet",
      path: "/wallet",
      Icon: <LuWallet color="#c99C33" />,
    },
    {
      id: 4,
      title: "Reports",
      path: "/reports",
      Icon: <IoNewspaperOutline color="#c99c33" />,
    },
    {
      id: 5,
      title: "Statistics",
      path: "/statistics",
      Icon: <VscPieChart color="#c99c33" />,
    },
    {
      id: 6,
      title: "Settings",
      path: "/settings",
      Icon: <IoSettingsOutline color="#c99c33" />,
    },
  ];
  return (
    <div className="  menu bg-[#425c5a]">
      {linkData.map((item) => {
        return (
          <li key={item.title} className={path === item.path ? "active " : " "}>
            <span className="flex items-center gap-3 text-white">
              {item.Icon}
              <Link href={item.path} className="text-[12px] lg:text-base">
                {item.title.toUpperCase()}
              </Link>
            </span>
          </li>
        );
      })}
    </div>
  );
};

export default Links;

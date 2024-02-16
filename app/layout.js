import { Inter } from "next/font/google";
import SideBar from "./components/SideBar";
import TopSideBar from "./components/TopSideBar";
import StoreProvider from "./StoreProvider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#e1eceb]">
        <StoreProvider>
          <div className="flex flex-col md:flex-row relative ">
            <span className=" absolute md:static max-w-[250px] w-full ">
              <SideBar />
            </span>
            <span className="w-full md:hidden">
              <TopSideBar />
            </span>
            <span className="  w-full max-w-[800px] md:max-w-[600px] lg:max-w-[1000px]  xl:max-w-[1000px] mx-auto">
              {children}
            </span>
          </div>
        </StoreProvider>
      </body>
    </html>
  );
}

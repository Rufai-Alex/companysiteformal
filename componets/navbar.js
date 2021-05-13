import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState(false);
  const [navbar, setnavbar] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };
  const changeBg = () => {
    if (window.scrollY >= 100) {
      setnavbar(true);
    } else {
      setnavbar(false);
    }
  };
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", changeBg);
  }

  return (
    <div className="top-0 z-50 w-full ">
      <div>
        <nav className={navbar ? "navbgscroll " : "navbgTransparent"}>
          <Link href="/">
            <div className="flex flex-col">
              <div className="px-8 mr-4 mt-2 cursor-pointer">
                <Image
                  src="/Systems_tech_icon.png"
                  alt="LOGO"
                  width={70}
                  height={40}
                />
              </div>
              <h1 className="uppercase font-extralight  text-xs font-sans">
                systems technologies
              </h1>
            </div>
          </Link>
          <button
            className=" inline-flex p-3  rounded lg:hidden  ml-auto focus:outline-none hover:bg-blue-700 outline-none"
            onClick={handleClick}
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
          <div
            className={`${
              active ? "" : "hidden"
            }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
          >
            <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
              <Link href="/#what">
                <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded font-normal items-center justify-center ">
                  WHAT WE DO
                </a>
              </Link>
              <Link href="/about">
                <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded  font-normal items-center justify-center">
                  ABOUT US
                </a>
              </Link>
              <Link href="/portfolio">
                <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded  font-normal items-center justify-center">
                  PORTFOLIO
                </a>
              </Link>
              <Link href="/contact">
                <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded  font-normal items-center justify-center ">
                  CONTACT US
                </a>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

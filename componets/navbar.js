import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div className="top-0 absolute z-50 w-full ">
      <nav className="flex items-center flex-wrap bg-blue-900 p-2 px-12 bg-opacity-95 ">
        <Link href="/">
          <Image src="/logo.png" alt="LOGO" width={110} height={60} />
        </Link>
        <button
          className=" inline-flex p-3  rounded lg:hidden text-white ml-auto focus:outline-none hover:text-white outline-none"
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
            <Link href="/service.js">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-normal items-center justify-center ">
                WHAT WE DO
              </a>
            </Link>
            <Link href="/about">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-normal items-center justify-center">
                ABOUT US
              </a>
            </Link>
            <Link href="/blog">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-normal items-center justify-center">
                BLOG
              </a>
            </Link>
            <Link href="/contact">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-normal items-center justify-center ">
                Contact us
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

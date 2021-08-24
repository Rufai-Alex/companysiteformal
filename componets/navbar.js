import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
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
  const router = useRouter();
  return (
    <div className="top-0 z-50 w-full ">
      <Head>
        <title>Systems Technologies{router.pathname}</title>
        <link rel="icon" href="/Systems_tech_icon.png" />
        <meta
          name="keywords"
          content="web development, software product design and management, embedded system design "
        />
      </Head>

      <div>
        <nav className={navbar ? "navbgscroll " : "navbgTransparent"}>
          <Link href="/">
            <div className="flex flex-col justify-center">
              <div className=" pl-9 mt-2 cursor-pointer">
                <Image
                  src="/Systems_tech_icon.png"
                  alt="LOGO"
                  width={80}
                  height={50}
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
                <a
                  className={router.pathname == "/#what" ? "navActive" : "nav"}
                >
                  WHAT WE DO
                </a>
              </Link>
              <Link href="/about">
                <a
                  className={router.pathname == "/about" ? "navActive" : "nav"}
                >
                  ABOUT US
                </a>
              </Link>
              <Link href="/portfolio">
                <a
                  className={
                    router.pathname == "/portfolio" ? "navActive" : "nav"
                  }
                >
                  PORTFOLIO
                </a>
              </Link>
              <Link href="/career">
                <a
                  className={router.pathname == "/career" ? "navActive" : "nav"}
                >
                  CAREER
                </a>
              </Link>
              <Link href="/contact">
                <a
                  className={
                    router.pathname == "/contact" ? "navActive" : "nav"
                  }
                >
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

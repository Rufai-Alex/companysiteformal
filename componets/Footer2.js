import Link from "next/link";

function Footer2() {
  return (
    <footer className=" pt-10 sm:mt-10 footerBackground">
      <div className="max-w-6xl m-auto text-black-800 flex flex-wrap justify-left">
        <div className="p-10 w-full sm:w-8/12 md:w-6/12 lg:-mt-8">
          <img
            alt="..."
            className="align-middle border-none max-w-full h-auto rounded-lg"
            src="/footerLogo2.png"
          />
        </div>

        <div className="p-5  w-full md:w-3/12">
          <div className="text-sm uppercase text-center text-gray-600 font-medium mb-6">
            Contact information
          </div>

          <a
            href="#"
            className="  text-gray-500 text-center hover:text-blue-500 text-sm font-medium duration-700 flex w-full "
          >
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 32 32"
              fill="rgb(3 176 241)"
            >
              <title>location</title>
              <path d="M16 0c-5.523 0-10 4.477-10 10 0 10 10 22 10 22s10-12 10-22c0-5.523-4.477-10-10-10zM16 16c-3.314 0-6-2.686-6-6s2.686-6 6-6 6 2.686 6 6-2.686 6-6 6z"></path>
            </svg>
            <address className="capitalize">
              No 20,University permanentsite road Ilorin, Kwara State, Nigeria.
            </address>
          </a>
          <a
            href="#"
            className="my-3 flex text-gray-500 hover:text-blue-500 text-sm font-medium duration-700"
          >
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 32 32"
              fill="rgb(3 176 241)"
            >
              <title>phone</title>
              <path d="M22 20c-2 2-2 4-4 4s-4-2-6-4-4-4-4-6 2-2 4-4-4-8-6-8-6 6-6 6c0 4 4.109 12.109 8 16s12 8 16 8c0 0 6-4 6-6s-6-8-8-6z"></path>
            </svg>
            <span className="ml-4">Call Us Now +2348168670476</span>
          </a>
          <a
            href="#"
            className=" flex text-gray-500 hover:text-blue-500 text-sm font-medium duration-700"
          >
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 32 32"
              fill="rgb(3 176 241)"
            >
              <title>whatsapp1</title>
              <path d="M27.281 4.65c-2.994-3-6.975-4.65-11.219-4.65-8.738 0-15.85 7.112-15.85 15.856 0 2.794 0.731 5.525 2.119 7.925l-2.25 8.219 8.406-2.206c2.319 1.262 4.925 1.931 7.575 1.931h0.006c0 0 0 0 0 0 8.738 0 15.856-7.113 15.856-15.856 0-4.238-1.65-8.219-4.644-11.219zM16.069 29.050v0c-2.369 0-4.688-0.637-6.713-1.837l-0.481-0.288-4.987 1.306 1.331-4.863-0.313-0.5c-1.325-2.094-2.019-4.519-2.019-7.012 0-7.269 5.912-13.181 13.188-13.181 3.519 0 6.831 1.375 9.319 3.862 2.488 2.494 3.856 5.8 3.856 9.325-0.006 7.275-5.919 13.188-13.181 13.188zM23.294 19.175c-0.394-0.2-2.344-1.156-2.706-1.288s-0.625-0.2-0.894 0.2c-0.262 0.394-1.025 1.288-1.256 1.556-0.231 0.262-0.462 0.3-0.856 0.1s-1.675-0.619-3.188-1.969c-1.175-1.050-1.975-2.35-2.206-2.744s-0.025-0.613 0.175-0.806c0.181-0.175 0.394-0.463 0.594-0.694s0.262-0.394 0.394-0.662c0.131-0.262 0.069-0.494-0.031-0.694s-0.894-2.15-1.219-2.944c-0.319-0.775-0.65-0.669-0.894-0.681-0.231-0.012-0.494-0.012-0.756-0.012s-0.694 0.1-1.056 0.494c-0.363 0.394-1.387 1.356-1.387 3.306s1.419 3.831 1.619 4.1c0.2 0.262 2.794 4.269 6.769 5.981 0.944 0.406 1.681 0.65 2.256 0.837 0.95 0.3 1.813 0.256 2.494 0.156 0.762-0.113 2.344-0.956 2.675-1.881s0.331-1.719 0.231-1.881c-0.094-0.175-0.356-0.275-0.756-0.475z"></path>
            </svg>{" "}
            <span className="ml-4"> Send us a message on Whatsapp</span>
          </a>

          <a
            href="#"
            className="my-3 flex items-center text-gray-500 hover:text-blue-500 text-sm font-medium duration-700"
          >
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 32 32"
              fill="rgb(3 176 241)"
            >
              <title>email</title>
              <path d="M28 5h-24c-2.209 0-4 1.792-4 4v13c0 2.209 1.791 4 4 4h24c2.209 0 4-1.791 4-4v-13c0-2.208-1.791-4-4-4zM2 10.25l6.999 5.25-6.999 5.25v-10.5zM30 22c0 1.104-0.898 2-2 2h-24c-1.103 0-2-0.896-2-2l7.832-5.875 4.368 3.277c0.533 0.398 1.166 0.6 1.8 0.6 0.633 0 1.266-0.201 1.799-0.6l4.369-3.277 7.832 5.875zM30 20.75l-7-5.25 7-5.25v10.5zM17.199 18.602c-0.349 0.262-0.763 0.4-1.199 0.4s-0.851-0.139-1.2-0.4l-12.8-9.602c0-1.103 0.897-2 2-2h24c1.102 0 2 0.897 2 2l-12.801 9.602z"></path>
            </svg>
            <span className="ml-4">support@systemstech.com.ng</span>
          </a>
        </div>

        <div className="p-5 w-full sm:w-4/12 md:w-3/12 text-center">
          <div className="text-sm uppercase text-gray-400 font-medium mb-6">
            Quick Links
          </div>

          <Link href="/about">
            <a className="my-3 block text-gray-500 hover:text-gray-100 text-sm font-medium duration-700">
              About Us
            </a>
          </Link>

          <Link href="/portfolio">
            <a className="my-3 block text-gray-500 hover:text-gray-100 text-sm font-medium duration-700">
              Potfoilio
            </a>
          </Link>
          <a
            href="#"
            className="my-3 block text-gray-500 hover:text-gray-100 text-sm font-medium duration-700"
          >
            Twitter
          </a>
          <a
            href="#"
            className="my-3 block text-gray-500 hover:text-gray-100 text-sm font-medium duration-700"
          >
            YouTube
          </a>
        </div>
      </div>

      <div className="pt-2">
        <div
          className="flex pb-5 px-3 m-auto pt-5 
                border-t border-gray-500 text-gray-400 text-sm 
                flex-col md:flex-row max-w-6xl"
        >
          <p>
            Copyrights © {new Date().getFullYear()} All rights reserved by
            <a
              href="/"
              rel="noopener noreferrer"
              class="primaryColorText ml-1"
              target="_blank"
            >
              System Technology
            </a>
          </p>

          <div className="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
            <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start ">
              <a class="primaryColorText hover:text-gray-500">
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-5 h-5 md:w-5 md:h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a class="ml-3 primaryColorText  hover:text-gray-500">
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-5 h-5 md:w-5 md:h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a class="ml-3 primaryColorText  hover:text-gray-500">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-5 h-5 md:w-5 md:h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a class="ml-3 primaryColorText  hover:text-gray-500">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="0"
                  class="w-5 h-5 md:w-5 md:h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  ></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer2;

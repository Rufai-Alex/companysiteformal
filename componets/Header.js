import Navbar from "./navbar";

function Header() {
  return (
    <div classNames="h-auto relative">
      <Navbar />
      <div
        className=" bg-opacity-80  
           w-full h-full bg-center bg-cover flex  items-center flex-col border-transparent  "
        style={{
          background:
            " linear-gradient( #00438bd5, #00438bd5), url(/headerimage4.png)",
          backgroundBlendMode: "multiply",
          backgroundPosition: "top right",
          backgroundRepeat: "no-repeat",
        }}
      >
        <section className="header relative pt-16 items-center flex h-screen max-h-860-px mb-24">
          <div className="container mx-auto items-center flex flex-wrap">
            <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-12">
              <div className="pt-32 sm:pt-0">
                <h2 className="font-semibold font-head text-4xl text-white uppercase">
                  <p className=" mt-4 text-lg leading-relaxed text-blueGray-500">
                    We design and implement cost-effective, intituitive and
                    robust solution for engineering and softwere challange
                  </p>{" "}
                </h2>
                <div className="mt-12">
                  <a
                    href="#"
                    target="_blank"
                    className="get-started text-white font-bold px-8 py-4 rounded 
                    outline-none bg-yellow-600 focus:outline-none mr-1 mb-1 bg-lightBlue-500
                    active:bg-lightBlue-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                  >
                    Contact us
                  </a>
                </div>
                <div className="mt-10">
                  <p>Trusted by compoanies like </p>
                </div>
              </div>
            </div>
          </div>

          {/* <img
            className="absolute top-6 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-860px"
            src="/headerImage3.svg"
            alt="..."
          /> */}
        </section>
        <svg
          className="border-0 border-transparent overflow-hidden"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#fff"
            fill-opacity="1"
            d="M0,64L40,85.3C80,107,160,149,240,149.3C320,149,400,107,480,96C560,85,640,107,720,149.3C800,192,880,256,960,240C1040,224,1120,128,1200,106.7C1280,85,1360,139,1400,165.3L1440,192L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
}

export default Header;
